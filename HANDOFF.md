# Nobody Gallery Website Handoff

## Current Goal

Nobody Gallery is a static HTML/CSS/JS website hosted from GitHub and intended for Cloudflare Pages. Decap CMS has been added so daily content edits can happen through `/admin/` instead of editing HTML by hand.

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
```

Important: `/admin/` opens locally, but production saving requires GitHub OAuth/auth to be configured for the Cloudflare Pages domain. Until OAuth is connected, visitors can see the Decap login screen but cannot complete GitHub-backed edits from the deployed site.

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
- About: homepage quote/body, Story, Mission, Artist submissions, section headings, contact button text.
- What's on page intros: Now, Upcoming, Past titles and descriptions.
- Exhibition/programme lists: Now, Upcoming, Past cards, images, labels, descriptions, admissions, buttons and links.
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
git add .
git commit -m "Add Decap CMS editable content structure"
git push
```

After `git push`, Cloudflare Pages should detect the new commit on `main` and redeploy automatically. If Cloudflare does not redeploy, open the Cloudflare Pages project and trigger a retry/deploy from the latest GitHub commit.

If editing through Decap CMS in production, Decap writes commits back to GitHub. Cloudflare Pages then redeploys from those commits.

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
node -e "for (const f of ['content/site.json','content/site.en.json','content/site.de.json']) JSON.parse(require('fs').readFileSync(f,'utf8'))"
ruby -e "require 'yaml'; YAML.load_file('admin/config.yml')"
```

## Next Tasks

- Configure GitHub OAuth/auth for Decap CMS on the Cloudflare Pages production domain.
- Replace placeholder text for upcoming exhibitions, Nobody Editions and some artist bio fields when final copy is ready.
- Add final images through Decap CMS or directly into `assets/`.
- Decide whether artwork prices stay public or switch to inquiry-only text.
