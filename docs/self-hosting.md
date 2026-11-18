---
description: Self-host the open-source resume builder as a static site with Docker, nginx, Netlify, Vercel or GitHub Pages.
---

# Self-hosting

The app is a static site, so anything that can serve files can host it.

## Build

```bash
npm ci
npm run build   # output in dist/
```

!!! note "Base path"
    `vite.config.ts` sets `base: '/novo-style-resume-builder/'` for GitHub Pages. If you host at a domain root, change it to `'/'`, or override it at build time:

    ```bash
    npx vite build --base=/
    ```

## Docker + nginx

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx tsc -b && npx vite build --base=/

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
```

```bash
docker build -t resume-builder .
docker run -p 8080:80 resume-builder
```

## Netlify / Vercel / Cloudflare Pages

- **Build command:** `npx tsc -b && npx vite build --base=/`
- **Output directory:** `dist`

## GitHub Pages (your fork)

The repo ships with `.github/workflows/deploy.yml`, which builds the app and these docs and deploys both. In your fork:

1. Change `base` in `vite.config.ts` and `site_url` in `mkdocs.yml` to your fork's name and URL.
2. **Settings → Pages → Source: GitHub Actions**.
3. Push to `main`.
