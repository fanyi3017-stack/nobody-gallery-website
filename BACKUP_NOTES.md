# Backup Notes

## Important Context

This is a static website prototype for Nobody Gallery. It is intentionally not tied to GitHub or any deployment platform yet.

The design direction is restrained, gallery/editorial, with large whitespace, clear exhibition hierarchy, and room for real images and copy to be added later.

## Original Source Materials Referenced

These were used as source/reference materials during the build, but the optimized website does not require the original files to run:

```text
/Users/amarisxue/Downloads/logo.png
/Users/amarisxue/Downloads/1065.JPG
/Users/amarisxue/Desktop/展览/2026:4/物料/横版.png
/Users/amarisxue/Desktop/展览/2026:4/物料/一千零二夜.pdf
/Users/amarisxue/Desktop/展览/2026:5/孙广义合作协议（徐汇）(3).docx
```

Optimized versions now live inside the project:

```text
assets/logo.png
assets/exhibitions/sun-guangyi-game.jpg
assets/exhibitions/one-thousand-two-nights.jpg
assets/artists/sun-guangyi.jpg
```

## WeChat Links

Two WeChat article links were provided:

```text
https://mp.weixin.qq.com/s/8H-DtUTQD0za3LijRqoHHw
https://mp.weixin.qq.com/s/9GtFsjLOdmfY6gNeBL69bg
```

Direct scraping from the command line hit WeChat environment verification. The site therefore keeps these as external article links, while local page text is based on provided materials and visible exhibition poster information.

## Sensitive/Internal Material Note

The Sun Guangyi `.docx` agreement contains internal contract terms. Only public-facing exhibition and artwork-list information was used:

- exhibition dates
- exhibition venue
- work titles
- dimensions
- prices

Do not publish internal agreement details such as legal clauses, split terms, phone numbers, account fields, signatures, or contractual penalties.

## Known Design/Content Placeholders

- `exhibitions/upcoming.html` is a placeholder detail page.
- `projects/nobody-editions.html` is a placeholder project page.
- `artists/index.html` contains A-Z placeholder slots.
- `artists/sun-guangyi.html` has a placeholder bio.
- Detail pages are not fully translated into English/German yet.
- The language switch currently updates common UI text from `script.js`; page-specific body text remains mostly static Chinese/English mixed copy.

## Suggested Future Data Shape

If this grows beyond a prototype, move repeated content into structured data, for example:

- exhibitions: title, artist, dates, opening, curator, venue, poster, description, works, links
- artists: name, alphabet key, bio, portrait, exhibitions, works
- works: title, year, medium, size, price, availability, image

Then generate pages from that data or migrate to a lightweight static site framework.

