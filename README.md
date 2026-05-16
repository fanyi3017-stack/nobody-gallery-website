# Nobody Gallery Website Prototype

Static HTML/CSS/JS prototype for the Nobody Gallery website. No npm install step is required.

Local preview:

```bash
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Current Structure

- `index.html`: homepage with current exhibition hero, sticky current exhibitions section, and macaron-green About section
- `whats-on/index.html`: lightweight redirect to `whats-on/now/`
- `whats-on/now/index.html`: current exhibitions
- `whats-on/upcoming/index.html`: upcoming exhibitions and events
- `whats-on/past/index.html`: past exhibitions
- `about/index.html`: gallery story, philosophy, and artist call
- `visit/index.html`: opening times, addresses, and booking information
- `ticket-info/index.html`: ticket layer for future screenings, talks, events, and paid programmes
- `shop/index.html`: artist/shop layer with featured artists and available works
- `exhibitions/sun-guangyi-game.html`: current exhibition detail
- `exhibitions/upcoming.html`: upcoming exhibition placeholder
- `projects/nobody-editions.html`: project placeholder
- `archive/index.html`: exhibition archive index
- `archive/one-thousand-two-nights.html`: archive exhibition detail
- `archive/landscape-after-processing.html`: archive/project exhibition detail
- `artists/index.html`: legacy Artists A-Z index
- `artists/sun-guangyi.html`: artist profile and works list

## Editable Content

The first CMS-ready content file is:

```text
content/site.json
```

The browser reads this file directly through `script.js`, so edits can update homepage copy, About copy, and programme cards without a build step.

## Decap CMS

Admin entry:

```text
/admin/
```

CMS config:

```text
admin/config.yml
```

Decap CMS is the future browser-based editing interface. Cloudflare Pages is the hosting/publishing layer. See `CMS_SETUP.md` for setup notes.

## Current Content

- Current exhibition: `心手相印的游戏`
- Artist: `孙广义 / Guangyi Sun`
- Curator: `范懿 / Yi Fan`
- Dates: `2026.05.23 - 2026.07.08`
- Contact email: `nobodygallery@163.com`

## Deployment Direction

This repository is ready to be connected to Cloudflare Pages as a static site. For live Decap CMS editing, configure GitHub OAuth/auth for the deployed `/admin/` route once the production domain is known.
