# Mopane Asset Management Website

Premium static rebuild for Mopane Asset Management, designed for cPanel hosting.

## Current Build

- Astro static site
- TypeScript interaction module in `src/scripts/experience.ts`
- Brand-led CSS in `src/styles/global.css`
- Componentized homepage/menu prototype in `src/components`
- cPanel-compatible `contact.php`
- Official Mopane logo assets in `public/assets/brand`

## Deployment

Build the static site:

```sh
export PATH="/Volumes/MAC 3/codex-tools/node-current/bin:$PATH"
npm run build
```

Upload the contents of `dist/` to `public_html`.

If using the PHP contact endpoint, also upload:

- `contact.php`

The contact form currently sends to `info@mopane-nam.com`. Update `$to` in `contact.php` if the client wants a different recipient.

## GitHub Staging

This repo includes a GitHub Pages staging workflow at `.github/workflows/staging-pages.yml`.

The workflow deploys only when the `staging` branch is pushed. It builds with a GitHub Pages base path so the staging URL can live safely at:

```txt
https://<github-user>.github.io/<repo-name>/
```

Recommended staging repo name:

```txt
mopane-nam-staging
```

After GitHub authentication is available on this machine:

```sh
/opt/homebrew/bin/gh auth login
/opt/homebrew/bin/gh repo create mopane-nam-staging --private --source=. --remote=staging-origin --push
git push staging-origin staging
```

In the new GitHub repository, set Pages to GitHub Actions if GitHub does not enable it automatically after the first workflow run.

## Local Development

Node/package tooling is installed on `MAC 3`:

```sh
export PATH="/Volumes/MAC 3/codex-tools/node-current/bin:$PATH"
node -v
npm -v
pnpm -v
yarn -v
tsc -v
```

Current verified versions:

- Node `v26.3.0`
- npm `11.16.0`
- pnpm `11.5.2`
- Yarn `1.22.22`
- TypeScript `6.0.3`

Run the Astro dev server:

```sh
export PATH="/Volumes/MAC 3/codex-tools/node-current/bin:$PATH"
npm run dev
```

Open:

```txt
http://127.0.0.1:4173/
```

## Project Structure

- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/data/site.ts`
- `src/components/Header.astro`
- `src/components/MenuOverlay.astro`
- `src/components/HeroStage.astro`
- `src/components/CursorRing.astro`
- `src/scripts/experience.ts`
- `src/styles/global.css`

The homepage/menu prototype is intentionally isolated as the quality gate before expanding full secondary pages.
