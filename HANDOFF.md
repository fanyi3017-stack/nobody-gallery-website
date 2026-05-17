# Nobody Gallery Website Handoff

## Current Goal

Nobody Gallery is a static HTML/CSS/JS website hosted from GitHub and intended for Cloudflare Pages. Decap CMS has been added so daily content edits can happen through `/admin/` instead of editing HTML by hand. Decap CMS GitHub OAuth is handled by a Cloudflare Pages Function in `functions/api/[[path]].js`.

The site still has no npm build step. Keep Cloudflare Pages configured as a static site:

- Build command: empty
- Output directory: `/` or project root
- Production branch: `main`

## Local Preview

Run from the repository root:

```bash
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

Admin entry:

```text
http://localhost:4173/admin/
```

## Decap CMS Entry

The CMS entry is:

```text
/admin/
```

Files:

- `admin/index.html`: loads Decap CMS from the CDN.
- `admin/config.yml`: Decap CMS schema and GitHub backend config.

Current backend config:

```yaml
backend:
  name: github
  repo: fanyi3017-stack/nobody-gallery-website
  branch: main
  base_url: https://nobodygallery.art
  auth_endpoint: api/auth
  site_domain: nobodygallery.art
```

Important: keep `base_url` and `auth_endpoint` in place. Without them, Decap CMS falls back to the default Netlify OAuth URL, `https://api.netlify.com/auth`, which returns Not Found for this Cloudflare Pages site.

`publish_mode` is intentionally not configured. With `branch: main`, CMS saves commit directly to `main` so Cloudflare Pages can redeploy from the GitHub update.

## GitHub OAuth App For Production CMS

Create a GitHub OAuth App from GitHub settings:

```text
Settings -> Developer settings -> OAuth Apps -> New OAuth App
```

Use these exact production URLs:

```text
Application name: Nobody Gallery Decap CMS
Homepage URL: https://nobodygallery.art/admin/
Authorization callback URL: https://nobodygallery.art/api/callback
```

After creating the OAuth App, generate a Client Secret and keep the Client ID and Client Secret ready for Cloudflare.

## Cloudflare Pages OAuth Proxy

The OAuth proxy is a Cloudflare Pages Function:

```text
functions/api/[[path]].js
```

Function invocation is limited to `/api/*` by:

```text
_routes.json
```

It exposes:

```text
GET https://nobodygallery.art/api/auth?provider=github
GET https://nobodygallery.art/api/callback
```

`/api/auth` redirects the Decap login popup to GitHub. `/api/callback` exchanges the GitHub code for an access token and returns it to Decap CMS through the popup message flow.

Set these Cloudflare Pages Production environment variables:

```text
GITHUB_OAUTH_CLIENT_ID=<GitHub OAuth App Client ID>
GITHUB_OAUTH_CLIENT_SECRET=<GitHub OAuth App Client Secret>
```

Store `GITHUB_OAUTH_CLIENT_SECRET` as a secret/encrypted value. The Client ID can be a normal variable.

Optional:

```text
GITHUB_REPO_PRIVATE=1
```

Only set `GITHUB_REPO_PRIVATE=1` if the repository is private. For the current public repository, omit it or set it to `0`; the proxy requests `public_repo user`.

After adding or changing Cloudflare variables, redeploy the latest Pages deployment so the Function sees the values.

## Editable Content Files

The frontend reads JSON content from:

- `content/site.json`: Chinese source content
- `content/site.en.json`: English content
- `content/site.de.json`: German content

`script.js` fetches these files at runtime. Chinese uses `content/site.json`; English and German merge in their language-specific JSON. The language choice is stored in `localStorage`, so once a visitor chooses English or German, the site keeps that language across page loads.

## Editable Scope In Decap CMS

The Decap schema currently exposes:

- Global site settings: open status, navigation labels, footer line, email, Instagram, Xiaohongshu, address, newsletter text, homepage button labels and links.
- Homepage: hero title, dates, summary, hero image, image alt text.
- About: homepage quote/body, Story, Mission, Artist submissions, section headings, contact button text and contact button link.
- What's on page intros: Now, Upcoming, Past titles and descriptions. Line breaks in intro text are preserved on the frontend.
- Exhibition/programme lists: Now, Upcoming, Past cards, images, labels, descriptions, admissions, buttons and links. Programme descriptions and admission notes are multiline text fields; Decap line breaks are preserved on the frontend.
- Visit page: hero text, side navigation, opening hours, spaces, booking copy and email button.
- Ticket info page: hero text, side navigation, exhibition/free-entry cards, screenings and events copy.
- Shop page: hero, cooperating artists, artist cards, works, prices, image paths and button links.
- Artists index: A-Z intro and editable artist entry cards.
- Artist detail: Sun Guangyi profile, metadata, body text, links and works.
- Archive index: archive intro and archive cards.
- Archive/detail pages: current exhibition detail, past exhibition detail pages, upcoming placeholder and Nobody Editions placeholder.
- Works lists: artwork names, sizes/materials, prices/inquiry text, image paths and alt text.

Layout, spacing, typography and CSS are still edited in code. Decap is for content, links, images and lists, not for redesigning the page structure.

## Image Uploads

CMS uploads are configured here:

```yaml
media_folder: "assets/uploads"
public_folder: "/assets/uploads"
```

The repository contains `assets/uploads/.gitkeep` so the folder exists before the first CMS upload.

Existing static images remain in:

- `assets/exhibitions/`
- `assets/works/`
- `assets/artist-avatars/`
- `assets/artists/`

## Image Replacement Guide

Use these target sizes when replacing CMS images:

- Logo wordmark, `assets/logo.png`: keep the transparent wide PNG format, ideally `2600x528` or the same `4.9:1` ratio.
- Homepage hero, `home.hero.image`: landscape `16:9`, ideally `2400x1350` or at least `2000x1125`.
- Exhibition detail hero, `details.sunGuangyiGame.image` and `details.oneThousandTwoNights.image`: landscape `16:9`, ideally `2400x1350` or at least `2000x1125`.
- Poster detail hero, `details.landscapeAfterProcessing.image`: portrait `4:5`, ideally `1600x2000` or at least `1200x1500`.
- What’s On programme cards, `programmes.*[].image`: card crop is `4:3`, ideally `1600x1200`. Keep key text/artwork near the center because portrait posters will be cropped.
- Archive cards, `archiveIndex.items[].image`: portrait `4:5`, ideally `1600x2000`.
- Artist profile/detail image, `details.sunGuangyiArtist.image`, plus artist avatar fields: square `1:1`, ideally `1600x1600`.
- Shop artist main image, `shop.artists[].image`: square `1:1`, ideally `1600x1600`.
- Shop hero, `shop.hero.image`: shown contained, not cropped; square `1600x1600` works best for current artwork assets.
- Work cards, `details.*.works[].image` and `shop.works[].image`: square canvas `1:1`, ideally `1600x1600`, with artwork centered and enough white margin.

Current uploaded source sizes are: exhibition hero images around `2200x1256`, poster images around `1080x1526` to `1080x1744`, artist avatar around `1011x1015`, and work images around `1080x824` or `1080x1080`.

## Current Pages

- `index.html`: homepage hero, current exhibitions, About excerpt.
- `whats-on/index.html`: redirects to `whats-on/now/`.
- `whats-on/now/index.html`: current programmes from JSON.
- `whats-on/upcoming/index.html`: upcoming programmes from JSON.
- `whats-on/past/index.html`: past programmes from JSON.
- `about/index.html`: About sections from JSON.
- `visit/index.html`: visit info from JSON.
- `ticket-info/index.html`: ticket info from JSON.
- `shop/index.html`: shop artists and works from JSON.
- `artists/index.html`: artist index from JSON.
- `artists/sun-guangyi.html`: artist detail and works from JSON.
- `exhibitions/sun-guangyi-game.html`: current exhibition detail from JSON.
- `exhibitions/upcoming.html`: upcoming detail placeholder from JSON.
- `archive/index.html`: archive cards from JSON.
- `archive/one-thousand-two-nights.html`: archive detail from JSON.
- `archive/landscape-after-processing.html`: archive detail from JSON.
- `projects/nobody-editions.html`: project placeholder from JSON.

## GitHub And Cloudflare Sync

Normal update flow:

```bash
git status -sb
git add admin/config.yml 'functions/api/[[path]].js' _routes.json CMS_SETUP.md HANDOFF.md
git commit -m "Configure Decap CMS GitHub OAuth"
git push
```

After `git push`, Cloudflare Pages should detect the new commit on `main` and redeploy automatically. If Cloudflare does not redeploy, open the Cloudflare Pages project and trigger a retry/deploy from the latest GitHub commit.

If editing through Decap CMS in production, Decap writes commits back to GitHub `main`. Cloudflare Pages then redeploys from those commits.

## Verification From This Handoff

Local checks completed on port `4173`:

- `/` returned 200 and rendered the homepage.
- `/archive/` returned 200 and rendered 3 archive cards.
- `/artists/` returned 200.
- `/artists/sun-guangyi.html` returned 200 and rendered artist works.
- `/admin/` returned 200 and showed the Decap CMS GitHub login screen.
- `content/site.json`, `content/site.en.json`, `content/site.de.json` returned 200 and parsed successfully.
- Main exhibition and work images returned 200 and browser image checks reported no broken images.
- Browser language test passed: English and German content switched correctly, and German remained active after reload.

Syntax checks passed:

```bash
node --check script.js
node --check 'functions/api/[[path]].js'
node -e "for (const f of ['content/site.json','content/site.en.json','content/site.de.json']) JSON.parse(require('fs').readFileSync(f,'utf8'))"
ruby -e "require 'yaml'; YAML.load_file('admin/config.yml')"
```

Latest content/link updates:

- The About page contact button now reads `about.contactButtonUrl` from all three content files and points to `https://linktr.ee/nobodygallery`.
- Decap CMS now exposes `about.contactButtonUrl` next to the contact button label.
- What’s On programme descriptions, admission notes and page intros preserve manual line breaks from CMS text fields.
- HTML asset query strings were bumped to `v=20260517c` after editing `styles.css` and `script.js`.

Production OAuth smoke test after the Cloudflare redeploy:

- `https://nobodygallery.art/api/auth?provider=github` should redirect to GitHub OAuth, not Netlify.
- `https://nobodygallery.art/admin/` -> Login with GitHub should complete the popup flow.
- Editing the Chinese content entry should save to `content/site.json`.
- Saving should create a GitHub commit on `main`.
- Cloudflare Pages should redeploy from that GitHub commit.

## Responsive Checks

Portrait responsive checks were run locally against all current public pages plus `/admin/`:

- `/`
- `/whats-on/now/`
- `/whats-on/upcoming/`
- `/whats-on/past/`
- `/about/`
- `/visit/`
- `/ticket-info/`
- `/shop/`
- `/artists/`
- `/artists/sun-guangyi.html`
- `/exhibitions/sun-guangyi-game.html`
- `/exhibitions/upcoming.html`
- `/archive/`
- `/archive/one-thousand-two-nights.html`
- `/archive/landscape-after-processing.html`
- `/projects/nobody-editions.html`
- `/admin/`

Checks covered:

- horizontal overflow
- logo visibility
- image loading and image overflow
- poster/card width
- work grid columns
- mobile menu opening
- touch target size for primary buttons and menu button
- Decap CMS admin entry loading

## Mobile Portrait Fixes

The mobile-only CSS fixes are in `styles.css`:

- Increased `.nav-toggle` to a 44px tall touch target.
- Forced `.shop-artist-grid` to one column under `760px` so cooperating artist cards do not become narrow or distorted on phones.
- Reduced mobile page/detail heading scale and added `overflow-wrap: anywhere` for long German titles such as `Ausstellungsarchiv`.
- Bumped HTML asset query strings; the latest cache key is `v=20260517c` so mobile browsers fetch the latest CSS and JS.

These changes are inside the existing responsive media query and do not change the confirmed desktop layout.

## Tested Viewport Widths

Phone portrait:

- `375px`
- `390px`
- `414px`
- `430px`

Tablet portrait:

- `768px`
- `820px`
- `834px`

Final responsive audit result: all tested widths returned 0 layout problems across the checked pages, including `/admin/`.

## Next Tasks

- Add the GitHub OAuth App credentials to Cloudflare Pages Production environment variables and redeploy.
- Run a live CMS login/save smoke test after the Cloudflare redeploy.
- Replace placeholder text for upcoming exhibitions, Nobody Editions and some artist bio fields when final copy is ready.
- Add final images through Decap CMS or directly into `assets/`.
- Decide whether artwork prices stay public or switch to inquiry-only text.
