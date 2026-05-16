# Decap CMS and Cloudflare Pages Notes

This site is still a static HTML/CSS/JS project. It does not need npm.

## What Does What

- Cloudflare Pages hosts and publishes the website.
- Decap CMS is the browser-based editing interface for changing content and committing those edits back to GitHub.
- GitHub remains the source of truth.

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

The config currently uses the Decap GitHub backend:

```yaml
backend:
  name: github
  repo: fanyi3017-stack/nobody-gallery-website
  branch: main
```

For production editing on Cloudflare Pages, you will still need a GitHub OAuth flow for Decap CMS. The site files are ready, but the auth side must be configured when the live domain is known.
