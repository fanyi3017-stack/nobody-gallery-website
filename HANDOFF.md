# Nobody Gallery Website Handoff

## Project Goal

Build a multilingual Nobody Gallery website prototype with a Saatchi Gallery-like editorial/gallery structure: restrained layout, strong exhibition hierarchy, clear navigation, and room to grow into a real gallery website.

The site should support Chinese, English, and German UI switching, and should include:

- Homepage
- What's on index
- Current exhibition detail
- Upcoming exhibition placeholder
- Project placeholder
- Archive index and archive exhibition detail
- Artists A-Z index
- Artist profile/detail page with bio and works table
- Visit/contact information with both gallery locations

## Current Status

The project is a static HTML/CSS/JS site. It does not require GitHub, a build system, npm, or deployment tooling to run locally.

Local preview is available with:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

The site currently includes 9 HTML pages:

- `index.html`
- `whats-on/index.html`
- `exhibitions/sun-guangyi-game.html`
- `exhibitions/upcoming.html`
- `projects/nobody-editions.html`
- `archive/index.html`
- `archive/one-thousand-two-nights.html`
- `artists/index.html`
- `artists/sun-guangyi.html`

## Changed Files

Core files:

- `index.html`: homepage, navigation, current exhibition feature, artist teasers, visit/contact info
- `styles.css`: global layout, responsive styles, page/detail/index/table styles
- `script.js`: Chinese/English/German UI dictionary and language switching
- `README.md`: project usage and page map

New handoff files:

- `HANDOFF.md`: this handoff summary
- `BACKUP_NOTES.md`: extra source/context notes

Content pages:

- `whats-on/index.html`: what's on index with links into current, upcoming, project, archive
- `exhibitions/sun-guangyi-game.html`: current exhibition detail for `心手相印的游戏`
- `exhibitions/upcoming.html`: placeholder detail page for future upcoming exhibition
- `projects/nobody-editions.html`: placeholder project detail page
- `archive/index.html`: archive index
- `archive/one-thousand-two-nights.html`: archive detail for `第一千零二夜`
- `artists/index.html`: Artists A-Z index
- `artists/sun-guangyi.html`: artist profile template for Guangyi Sun with works and prices

Assets:

- `assets/logo.png`: optimized Nobody Gallery logo used on site
- `assets/exhibitions/sun-guangyi-game.jpg`: optimized exhibition image for `心手相印的游戏`
- `assets/exhibitions/one-thousand-two-nights.jpg`: optimized exhibition image for `第一千零二夜`
- `assets/artists/sun-guangyi.jpg`: current placeholder/artist image for Guangyi Sun

## Current Content

Current exhibition:

- Title: `心手相印的游戏`
- English working title: `The Game of Heart and Hand`
- Artist: `孙广义 / Guangyi Sun`
- Duration: `2026.05.23 - 2026.07.08`
- Opening: `2026.05.23 16:00`
- Curator: `范懿 / Yi Fan`
- WeChat article link: `https://mp.weixin.qq.com/s/8H-DtUTQD0za3LijRqoHHw`

Archive example:

- Title: `第一千零二夜`
- English working title: `One Thousand and Two Nights`
- Artist: `周韫仪 / Zhou Yunyi`
- Duration: `2026.03.29 - 2026.05.18`
- Opening: `2026.03.29 16:00`
- Curator: `范懿 / Yi Fan`
- WeChat article link: `https://mp.weixin.qq.com/s/9GtFsjLOdmfY6gNeBL69bg`

Visit/contact:

- Hours: Tue-Sun, `10:00-19:00`; Monday closed
- Xuhui space: `上海市徐汇区宜山路660号12幢3楼302室`
- Jinshan space: `上海市金山区亭卫公路8255号`
- Email: `nobodygallery@163.com`

## Verification Already Done

Static checks:

```bash
node --check script.js
```

Local link/image path check was run across all 9 HTML files.

HTTP checks returned `200` for:

- `/`
- `/whats-on/`
- `/exhibitions/sun-guangyi-game.html`
- `/exhibitions/upcoming.html`
- `/projects/nobody-editions.html`
- `/archive/`
- `/archive/one-thousand-two-nights.html`
- `/artists/`
- `/artists/sun-guangyi.html`

Safari visual spot-check:

- Homepage loads
- Hero logo above `nobody is somebody` has been removed
- `what's on` appears above hero title
- Current exhibition image appears
- Sun Guangyi exhibition detail page loads and shows metadata, poster image, text, and works table

## Unfinished Tasks

- Replace placeholder copy with final gallery-approved exhibition text.
- Add finalized English and German translations for detail pages. Current language switch only updates shared UI/navigation/contact copy.
- Add real artist bios, CVs, portraits, and statements.
- Add real artwork images for each artwork in the Sun Guangyi list.
- Confirm all Sun Guangyi artwork names, dimensions, prices, and availability before publishing.
- Decide whether prices should be public or hidden behind inquiry.
- Expand Upcoming, Project, Archive, and Artists pages with real entries.
- Add form handling for newsletter/contact submission; current form only resets locally.
- Add SEO metadata and social sharing images.
- Add deployment target when ready.

## Setup Commands

From the project root:

```bash
cd /Users/amarisxue/Documents/Codex/2026-05-12/files-mentioned-by-the-user-wechatimg30
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

No install step is required.

## Next Steps

1. Review the homepage and the Sun Guangyi exhibition page visually.
2. Decide whether the homepage hero should use a full exhibition poster crop or a more editorial installation/teaser image.
3. Provide finalized bios for Guangyi Sun and future artists.
4. Provide final exhibition texts for current, upcoming, project, and archive pages.
5. Provide artwork images and confirm which works/prices should be public.
6. When ready, choose deployment path: static host, existing website builder, or GitHub/Vercel later.

## Files To Bring Into The Next Conversation

Upload or download the entire project folder:

```text
/Users/amarisxue/Documents/Codex/2026-05-12/files-mentioned-by-the-user-wechatimg30
```

If uploading individual files instead of the full folder, include every file listed below:

```text
HANDOFF.md
BACKUP_NOTES.md
README.md
index.html
styles.css
script.js
whats-on/index.html
exhibitions/sun-guangyi-game.html
exhibitions/upcoming.html
projects/nobody-editions.html
archive/index.html
archive/one-thousand-two-nights.html
artists/index.html
artists/sun-guangyi.html
assets/logo.png
assets/exhibitions/sun-guangyi-game.jpg
assets/exhibitions/one-thousand-two-nights.jpg
assets/artists/sun-guangyi.jpg
```
