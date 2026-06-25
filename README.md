# Zettamine — Corporate Website

The standalone marketing site for **zettamine.com** — an innovation-driven boutique
technology & SaaS company (Industrial AI, cognitive ERP decoupling, frontier-tech R&D,
high-fidelity data services, enterprise upskilling and strategic advisory).

> **Standalone by design.** This app intentionally does **not** depend on any of the
> sans-way Nuxt libraries used elsewhere in the monorepo. It is a self-contained Nuxt 4
> project so it can be deployed and evolved independently.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | **Nuxt 4** (Vue 3.5, Nitro) |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` (no v3 module) |
| Theme | Saffron → ember (red) palette, **light/dark** via `@nuxtjs/color-mode` |
| Icons | `@nuxt/icon` + bundled `@iconify-json/lucide` (offline, no runtime API) |
| Utilities | `@vueuse/nuxt` |
| Fonts | Space Grotesk (display), Inter (body), JetBrains Mono (labels) |

## Develop

```bash
npm install        # first time only
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # SSR build + prerenders every route (static-ready in .output/public)
npm run preview    # serve the built output
npm run generate   # explicit static generation
```

`nuxt build` produces an SSR node server in `.output/`. Start it in production with
`npm start` (binds `127.0.0.1:5003`). Use `npm run generate` if a fully static export is
ever required.

## Domains & deployment

Tagged the same way as the sibling sites (`gt` → guildtrek). Single source of truth:
[`app/config/webServer.ts`](app/config/webServer.ts).

| Tier | Site host | CRM host |
| --- | --- | --- |
| **Prod** | `zettamine.com` (`www.` too) | `crm.zettamine.com` |
| **QA / dev** | `zettamine.qa` (`www.` too) | `crm.zettamine.qa` |

- Runs as an **SSR node server on port 5003** (`npm start`), reverse-proxied for both
  domains — siblings use 5001 (digihire) and 5002 (guildtrek).
- The companion **CRM** (repo `n_crmLeadRegister`) lives on the `crm.` subdomain of whichever
  tier is serving the site. `useCrm()` ([app/composables/useCrm.ts](app/composables/useCrm.ts))
  resolves `crm.zettamine.qa` vs `crm.zettamine.com` from the live request host — the header
  and footer **"Client Login"** links use it. This intentionally **replaces the digihire
  `talented.qa` cross-link**, which is not a Zettamine host.
- `NUXT_PUBLIC_CRM_URL` overrides the CRM base URL for localhost dev or unusual deployments.
- Dev/Vite `allowedHosts` and the prod port all read from `webServer.ts`.

> `npm start` uses `cross-env` (added to devDependencies) for cross-platform env vars — run
> `npm install` once to pick it up. `dev`, `build` and `preview` work without it.

## GitHub Pages (static marketing site)

The marketing site can also be published as a **static** site on GitHub Pages. Pages can't run
a Node server, so this hosts ONLY the public site — the CRM/auth/SSR infra stays on the
Caddy/node box; "Client Login" links out to the CRM's real host.

- Workflow: [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)
  builds the site and deploys `.output/public`. One-time: repo → **Settings → Pages →
  Source = GitHub Actions**.
- The Pages build is env-gated in `nuxt.config.ts` (`NUXT_GITHUB_PAGES=true`) so the local
  SSR flow is untouched. It prerenders every route (enumerated from `app/data/solutions.ts`),
  ships `public/.nojekyll` (so `_nuxt/` assets survive Jekyll) and a `404.html` SPA fallback.
- **Project page subpath:** served at `https://<owner>.github.io/<repo>/` (here:
  `https://xteamjack.github.io/zettamine/`), so the workflow sets `NUXT_APP_BASE_URL=/<repo>/`
  (derived from the repo name). Head-link hrefs (favicon) are baseURL-aware. For a **custom
  domain** later: set `NUXT_APP_BASE_URL=/` and add `public/CNAME`.
- **CRM link:** the workflow sets `NUXT_PUBLIC_CRM_URL` (default `https://crm.zettamine.com`) —
  point it at wherever the CRM actually runs.

Local static preview (serves at `/`, no subpath):

```bash
npm run generate:pages          # cross-env NUXT_GITHUB_PAGES=true nuxt generate
npx serve .output/public        # open http://localhost:3000
```

> Windows/Git-Bash note: testing the subpath locally needs `MSYS_NO_PATHCONV=1` before
> `NUXT_APP_BASE_URL=/repo/…`, otherwise Git Bash rewrites the leading-slash value into a
> Windows path. CI (Ubuntu) is unaffected, and `generate:pages` (baseURL `/`) avoids it entirely.

## Structure

```
app/
├── assets/css/main.css      # Tailwind v4 theme: saffron/ember tokens, dark variant, animations
├── components/              # BrandLogo, AppHeader (mega-menu), AppFooter, ThemeToggle,
│                            # AuroraBackground, ParticleField, HeroOrbit, SolutionCard,
│                            # TopicCard, ContactForm, LegalDoc, … (auto-imported)
├── data/
│   ├── solutions.ts         # the 6 pillars + their capabilities (source: n_dh_docs/zetta/website/main.md)
│   ├── site.ts              # nav, stats, values, story, approach, footer
│   └── legal.ts             # privacy / terms / cookies / responsible-ai content
├── layouts/default.vue      # header + footer + scroll progress + back-to-top
├── pages/
│   ├── index.vue            # home
│   ├── solutions/index.vue  # all practices
│   ├── solutions/[slug].vue # per-practice detail (industrial-ai, cognitive-erp-decoupling, …)
│   ├── about.vue  story.vue  approach.vue  labs.vue  contact.vue
│   └── privacy.vue terms.vue cookies.vue responsible-ai.vue
├── plugins/reveal.ts        # `v-reveal` scroll-in directive (SSR-safe)
└── error.vue                # branded 404 / error page
```

## Content

All solution content is derived from `n_dh_docs/zetta/website/main.md`. To add or edit a
practice or capability, update `app/data/solutions.ts` — the nav mega-menu, home grid,
solutions index, detail pages and footer all read from it.

## Theming

The palette lives in `app/assets/css/main.css` under `@theme` (`--color-saffron-*`,
`--color-ember-*`). Dark mode is class-based (`.dark` on `<html>`) and toggled via the
header control; the brand defaults to dark for maximum impact.
