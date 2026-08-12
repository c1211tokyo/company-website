# 1211 Co., Ltd. company website

Static company website for `1211.world`, hosted with GitHub Pages.

## Local preview

Run a static server from the repository root, then open the displayed local URL:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

The site has no build step. Do not open the HTML files directly when testing form, storage, or browser behavior.

## Site structure

- `index.html` — company homepage and contact form
- `about.html` — company profile, business areas, registrations, and history
- `privacy.html` — privacy policy for the website and contact form
- `style.css` — shared presentation and accessibility styles
- `site.js` — shared Japanese, Chinese, and English translations and interactions
- `homepic/` — local optimized images, social QR codes, and masked credentials
- `passport/` — separate existing guest-facing content; outside normal company-site maintenance

## Maintenance rules

- Japanese is the static/default language. The language switch stores `ja`, `zh`, or `en` in `localStorage.siteLanguage`.
- Keep all three translation packs complete when adding or changing text.
- The contact form posts to the existing Formspree endpoint. Never send a production test submission without explicit approval.
- `Book` links to the Hostex-managed `https://book.1211.world/`; its content is outside this repository.
- Confirm company facts, registration dates, membership periods, professional-service wording, and privacy text before publication.
- Strip image metadata and keep homepage and social-sharing images appropriately compressed.
- Update `sitemap.xml` only when the corresponding public page is changed.

## Publication boundary

Local edits and preview do not publish the site. Commit, push, GitHub Pages publication, DNS changes, and third-party account changes require separate explicit approval.
