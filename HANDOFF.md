# Nobody Gallery Website Handoff

## Project Goal

Build a static Nobody Gallery website prototype with a Saatchi Gallery-inspired hierarchy: current exhibition first, clear programme layers, About, Visit, Ticket Info, Shop, Archive, and artist detail pages.

The project remains plain HTML/CSS/JS and is suitable for Cloudflare Pages hosting plus Decap CMS content editing.

## Local Preview

```bash
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Latest Structural Direction

The homepage now keeps only:

- current exhibition hero
- sticky current exhibitions section
- macaron-green About section

Shop and Visit previews were removed from the homepage because those now live in their own top-level pages.

## Current Navigation

- 当前展览
- 关于
- 参观计划
- 票务信息
- 商店

`Now / Upcoming / Past` are no longer sections on one page. They are independent pages:

- `/whats-on/now/`
- `/whats-on/upcoming/`
- `/whats-on/past/`

## Current Pages

- `index.html`: current exhibition hero, current exhibitions, About
- `whats-on/index.html`: redirect to `whats-on/now/`
- `whats-on/now/index.html`: current exhibitions
- `whats-on/upcoming/index.html`: upcoming exhibitions and events
- `whats-on/past/index.html`: past exhibitions
- `about/index.html`: gallery story, philosophy, artist call
- `visit/index.html`: opening times, spaces, booking info
- `ticket-info/index.html`: ticket layer for future screenings, talks, events
- `shop/index.html`: featured artists and available works
- `exhibitions/sun-guangyi-game.html`: current exhibition detail
- `artists/sun-guangyi.html`: artist profile and works list
- archive/project placeholder pages are retained

## CMS-Ready Files

- `admin/index.html`: Decap CMS entry
- `admin/config.yml`: Decap CMS config
- `content/site.json`: editable content source consumed by `script.js`
- `assets/uploads/.gitkeep`: upload folder placeholder
- `CMS_SETUP.md`: notes for Cloudflare Pages and Decap CMS setup

Decap CMS is the editing interface. Cloudflare Pages is the static hosting and publishing platform.

## Current Content

Current exhibition:

- Title: `心手相印的游戏`
- English working title: `The Game of Heart and Hand`
- Artist: `孙广义 / Guangyi Sun`
- Duration: `2026.05.23 - 2026.07.08`
- Opening: `2026.05.23 16:00`
- Curator: `范懿 / Yi Fan`
- WeChat article link: `https://mp.weixin.qq.com/s/8H-DtUTQD0za3LijRqoHHw`

About:

- Added Walter Benjamin / “nobody is somebody” text in Chinese
- Added artist recruitment / open call language

Visit/contact:

- Hours: Tuesday - Sunday, `10:00-19:00`; Monday closed
- Xuhui space: `上海市徐汇区宜山路660号12幢3楼302室`
- Jinshan space: `上海市金山区亭卫公路8255号`
- Email: `nobodygallery@163.com`
- Instagram link currently points to `https://www.instagram.com/nobodygallery/` and should be replaced if the final handle differs.

## Verification

Run after changes:

```bash
node --check script.js
node -e "JSON.parse(require('fs').readFileSync('content/site.json','utf8')); console.log('JSON OK')"
```

Also run local HTTP/link checks and browser visual checks before deploy.

## Unfinished Tasks

- Confirm final Instagram URL.
- Configure Decap CMS GitHub OAuth/auth for the Cloudflare Pages domain.
- Add final images and texts for Upcoming, Ticket Info, Shop, and all artist shop entries.
- Decide whether prices remain public or become inquiry-only.
- Deploy via Cloudflare Pages when ready.
