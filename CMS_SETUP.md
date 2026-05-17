# Decap CMS and Cloudflare Pages Notes

This site is still a static HTML/CSS/JS project. It does not need npm.

## What Does What

- Cloudflare Pages hosts and publishes the website.
- Decap CMS is the browser-based editing interface for changing content and committing those edits back to GitHub.
- GitHub remains the source of truth.
- Cloudflare Pages Functions provide the Decap CMS GitHub OAuth proxy at `/api/auth` and `/api/callback`.

## Editable Content

The first editable content file is:

```text
content/site.json
```

The live pages read this JSON directly in `script.js`, so edits to this file can update:

- homepage hero text and image
- homepage About text
- About page text
- Now / Upcoming / Past programme cards

## Admin Entry

After deploying, the CMS entry will be:

```text
/admin/
```

The Decap config lives at:

```text
admin/config.yml
```

## Important Setup Detail

The live config uses the Decap GitHub backend plus the Cloudflare Pages OAuth proxy:

```yaml
backend:
  name: github
  repo: fanyi3017-stack/nobody-gallery-website
  branch: main
  base_url: https://nobodygallery.art
  auth_endpoint: api/auth
  site_domain: nobodygallery.art
```

Do not use the default Netlify OAuth endpoint. If `base_url` and `auth_endpoint` are removed, Decap CMS falls back to `https://api.netlify.com/auth`, which does not work for this Cloudflare Pages deployment.

`publish_mode` is intentionally not set. With `branch: main`, saving in Decap CMS commits directly back to the repository's `main` branch, and Cloudflare Pages redeploys after GitHub receives the commit.

## GitHub OAuth App

Create one GitHub OAuth App for the live CMS:

1. Open GitHub account or organization settings.
2. Go to Developer settings -> OAuth Apps -> New OAuth App.
3. Use these values:

```text
Application name: Nobody Gallery Decap CMS
Homepage URL: https://nobodygallery.art/admin/
Authorization callback URL: https://nobodygallery.art/api/callback
```

After creating the app, copy the Client ID and generate a Client Secret.

## Cloudflare Pages Function

The OAuth proxy is committed in:

```text
functions/api/[[path]].js
```

Function invocation is limited to `/api/*` by:

```text
_routes.json
```

It handles:

```text
GET /api/auth?provider=github
GET /api/callback
```

The function redirects the CMS login popup to GitHub, exchanges the returned OAuth code for an access token, and posts that token back to Decap CMS.

## Cloudflare Environment Variables

In the Cloudflare Pages project for `nobodygallery.art`, open Settings -> Environment variables and add these for Production:

```text
GITHUB_OAUTH_CLIENT_ID=<GitHub OAuth App Client ID>
GITHUB_OAUTH_CLIENT_SECRET=<GitHub OAuth App Client Secret>
```

Use Cloudflare's secret/encrypted value type for `GITHUB_OAUTH_CLIENT_SECRET`. The Client ID can be a normal variable.

Optional:

```text
GITHUB_REPO_PRIVATE=1
```

Only set `GITHUB_REPO_PRIVATE=1` if `fanyi3017-stack/nobody-gallery-website` becomes a private repository. For the public repository, omit it or set it to `0`; the proxy will request the smaller `public_repo user` GitHub scope.

After adding or changing variables, redeploy the latest Cloudflare Pages deployment so the Function receives the new values.

## Production Verification

After Cloudflare redeploys:

1. Open `https://nobodygallery.art/admin/`.
2. Click Login with GitHub.
3. The popup should go to GitHub, not `https://api.netlify.com/auth`.
4. After authorizing, edit the Chinese content file entry, which writes to `content/site.json`.
5. Save. Decap CMS should commit the change to `main` in `fanyi3017-stack/nobody-gallery-website`.
6. Cloudflare Pages should detect the GitHub commit and redeploy automatically.
