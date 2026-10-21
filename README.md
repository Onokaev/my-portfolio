# Evans Onoka Aboge — Portfolio

A responsive, accessible portfolio and public résumé for Evans Onoka Aboge, a Senior Software Engineer focused on AI infrastructure, distributed systems, and developer platforms.

**Live site:** [onokaev.github.io/my-portfolio](https://onokaev.github.io/my-portfolio/)

## Pages

- [`index.html`](https://onokaev.github.io/my-portfolio/) — a concise portfolio narrative covering engineering practice, selected work, and delivery approach
- [`resume.html`](https://onokaev.github.io/my-portfolio/resume.html) — the complete public résumé with sanitized contact details and verified evidence links

## Run locally

The site has no build step or runtime dependencies.

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000/` for the portfolio and `http://127.0.0.1:8000/resume.html` for the résumé.

## Project structure

- `index.html` — portfolio narrative, metadata, and structured data
- `resume.html` — complete public résumé with reciprocal portfolio navigation
- `styles.css` — responsive layout, visual system, and reduced-motion support
- `script.js` — accessible mobile navigation and progressive reveal behavior
- `favicon.svg` and `social-card.svg` — lightweight brand assets
- `sitemap.xml` and `robots.txt` — public page discovery
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Accessibility

The site includes semantic landmarks, a skip link, visible keyboard focus, an accessible mobile menu, escape-key handling, responsive typography, sufficient color contrast, and a reduced-motion experience. Core content remains available if JavaScript is disabled.

## Deployment

Pushes to `main` deploy automatically through GitHub Actions to GitHub Pages.

## Privacy

Only public professional information is included. Private resume source files, phone numbers, local environment files, and generated artifacts are excluded.
