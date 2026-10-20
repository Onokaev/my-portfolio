# Evans Onoka Aboge — Portfolio

A responsive, accessible personal portfolio for Evans Onoka Aboge, Senior Software Engineer focused on AI infrastructure, distributed systems, and developer platforms.

## Run locally

The site has no build step or runtime dependencies.

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000` in a browser.

## Project structure

- `index.html` — semantic content, metadata, and structured data
- `styles.css` — responsive layout, visual system, and reduced-motion support
- `script.js` — accessible mobile navigation and progressive reveal behavior
- `favicon.svg` and `social-card.svg` — lightweight brand assets
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Accessibility

The site includes semantic landmarks, a skip link, visible keyboard focus, an accessible mobile menu, escape-key handling, responsive typography, sufficient color contrast, and a reduced-motion experience. Core content remains available if JavaScript is disabled.

## Deployment

Pushes to `main` deploy automatically through GitHub Actions to GitHub Pages.

## Privacy

Only public professional information is included. Private resume source files, phone numbers, local environment files, and generated artifacts are excluded.
