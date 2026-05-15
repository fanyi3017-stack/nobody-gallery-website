# Nobody Gallery Website Prototype

Local preview:

```bash
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173
```

## Asset Slots

The current build intentionally keeps artwork and exhibition media blank. Replace these blocks when final images are ready:

- `assets/logo.png`: current site logo used in the navigation and hero
- `.hero-media` in `index.html`: homepage hero image
- `.exhibition-media` in `index.html`: current exhibition image
- `.artist-media` in `index.html`: artist/project thumbnails

Suggested replacement pattern:

```html
<div class="media-slot hero-media">
  <img src="./assets/hero.jpg" alt="Exhibition installation view" />
</div>
```

Then add this CSS:

```css
.media-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Languages

All Chinese, English, and German interface copy lives in `script.js`. Edit the `copy.zh`, `copy.en`, and `copy.de` objects to update wording.

## Page Structure

- `index.html`: homepage
- `whats-on/index.html`: what's on index
- `exhibitions/sun-guangyi-game.html`: current exhibition detail
- `exhibitions/upcoming.html`: upcoming exhibition placeholder
- `projects/nobody-editions.html`: project placeholder
- `archive/index.html`: archive index
- `archive/one-thousand-two-nights.html`: archive exhibition detail
- `artists/index.html`: artists A-Z
- `artists/sun-guangyi.html`: artist profile and works list
