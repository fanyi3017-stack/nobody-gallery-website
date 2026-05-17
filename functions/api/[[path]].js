const STATE_COOKIE = "decap_oauth_state";
const DEFAULT_SCOPE = "public_repo user";
const PRIVATE_REPO_SCOPE = "repo user";

const getEnvValue = (env, keys) => {
  for (const key of keys) {
    const value = env[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return "";
};

const getGitHubCredentials = (env) => ({
  clientId: getEnvValue(env, ["GITHUB_OAUTH_CLIENT_ID", "GITHUB_OAUTH_ID"]),
  clientSecret: getEnvValue(env, ["GITHUB_OAUTH_CLIENT_SECRET", "GITHUB_OAUTH_SECRET"]),
});

const isPrivateRepo = (env) => {
  const value = getEnvValue(env, ["GITHUB_REPO_PRIVATE"]).toLowerCase();
  return ["1", "true", "yes"].includes(value);
};

const randomHex = (length = 16) => {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

const getCookie = (request, name) => {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
};

const stateCookie = (state) =>
  `${STATE_COOKIE}=${encodeURIComponent(state)}; Path=/api; Max-Age=600; HttpOnly; Secure; SameSite=Lax`;

const clearStateCookie = () =>
  `${STATE_COOKIE}=; Path=/api; Max-Age=0; HttpOnly; Secure; SameSite=Lax`;

const textResponse = (message, status = 400) =>
  new Response(message, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const callbackPage = (status, payload, httpStatus = 200) => {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;

  return new Response(
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Authorizing Decap CMS</title>
  </head>
  <body>
    <p>Authorizing Decap CMS...</p>
    <script>
      (() => {
        const message = ${JSON.stringify(message)};
        const opener = window.opener;

        if (!opener) {
          document.body.textContent = "Authorization window was opened without a CMS parent window.";
          return;
        }

        let sent = false;
        const sendAuthorization = () => {
          if (sent) return;
          sent = true;
          opener.postMessage(message, "*");
          window.setTimeout(() => window.close(), 250);
        };

        window.addEventListener("message", sendAuthorization, false);
        opener.postMessage("authorizing:github", "*");
        window.setTimeout(sendAuthorization, 2000);
      })();
    </script>
  </body>
</html>
`,
    {
      status: httpStatus,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Set-Cookie": clearStateCookie(),
      },
    },
  );
};

const buildRedirectUri = (url) => `${url.origin}/api/callback`;

const handleAuth = (request, env) => {
  const url = new URL(request.url);
  const provider = url.searchParams.get("provider");

  if (provider !== "github") {
    return textResponse("Invalid provider. This OAuth proxy only supports provider=github.");
  }

  const { clientId, clientSecret } = getGitHubCredentials(env);
  if (!clientId || !clientSecret) {
    return textResponse(
      "GitHub OAuth is not configured. Set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Cloudflare Pages.",
      500
    );
  }

  const state = randomHex();
  const githubUrl = new URL("https://github.com/login/oauth/authorize");
  githubUrl.searchParams.set("client_id", clientId);
  githubUrl.searchParams.set("redirect_uri", buildRedirectUri(url));
  githubUrl.searchParams.set("scope", isPrivateRepo(env) ? PRIVATE_REPO_SCOPE : DEFAULT_SCOPE);
  githubUrl.searchParams.set("state", state);
  githubUrl.searchParams.set("allow_signup", "true");

  return new Response(null, {
    status: 302,
    headers: {
      Location: githubUrl.toString(),
      "Cache-Control": "no-store",
      "Set-Cookie": stateCookie(state),
    },
  });
};

const handleCallback = async (request, env) => {
  const url = new URL(request.url);
  const expectedState = getCookie(request, STATE_COOKIE);
  const receivedState = url.searchParams.get("state") || "";

  if (!expectedState || receivedState !== expectedState) {
    return callbackPage("error", { error: "Invalid OAuth state. Please retry GitHub login." }, 400);
  }

  const error = url.searchParams.get("error");
  if (error) {
    return callbackPage("error", {
      error,
      error_description: url.searchParams.get("error_description") || "GitHub authorization failed.",
    });
  }

  const code = url.searchParams.get("code");
  if (!code) {
    return callbackPage("error", { error: "Missing GitHub authorization code." }, 400);
  }

  const { clientId, clientSecret } = getGitHubCredentials(env);
  if (!clientId || !clientSecret) {
    return callbackPage("error", { error: "GitHub OAuth environment variables are missing." }, 500);
  }

  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "nobody-gallery-decap-cms",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: buildRedirectUri(url),
    }),
  });

  const tokenPayload = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok || tokenPayload.error || !tokenPayload.access_token) {
    return callbackPage(
      "error",
      {
        error: tokenPayload.error || "token_exchange_failed",
        error_description:
          tokenPayload.error_description || "GitHub did not return an OAuth access token.",
      },
      502
    );
  }

  return callbackPage("success", { token: tokenPayload.access_token });
};

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method !== "GET") {
    return textResponse("Method not allowed.", 405);
  }

  if (url.pathname === "/api/auth") {
    return handleAuth(request, env);
  }

  if (url.pathname === "/api/callback") {
    return handleCallback(request, env);
  }

  return textResponse("Not found.", 404);
}
