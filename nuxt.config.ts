import tailwindcss from '@tailwindcss/vite'
import { webServer } from './app/config/webServer'
import { solutions } from './app/data/solutions'

// GitHub Pages (static) build is OPT-IN via env so the local SSR/Caddy flow is
// untouched. The deploy-pages workflow sets these; locally they're unset →
// SSR, baseURL '/'. Project Pages are served under /<repo>/, so NUXT_APP_BASE_URL
// is set to that subpath in CI.
const isPagesBuild = process.env.NUXT_GITHUB_PAGES === 'true'
const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

// Every route prerendered explicitly (the prerender crawler can't follow
// baseURL-prefixed in-page links). Given without the baseURL — Nitro prepends
// it from app.baseURL.
const pagesRoutes = [
  '/',
  '/solutions',
  '/about',
  '/story',
  '/approach',
  '/labs',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/responsible-ai',
  ...solutions.map((s) => `/solutions/${s.slug}`),
]

// Standalone corporate site — intentionally NOT wired to any sans-way nuxt libs.
export default defineNuxtConfig({
  compatibilityDate: '2025-06-01',
  devtools: { enabled: false },

  // Tagged to zettamine.qa (QA/dev) + zettamine.com (prod); the CRM lives on
  // crm.zettamine.{qa,com}. Single source of truth: app/config/webServer.ts.
  devServer: {
    host: webServer.host,
    port: webServer.port,
  },

  modules: ['@nuxtjs/color-mode', '@vueuse/nuxt', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  // @nuxtjs/color-mode emits `.dark` / `.light` on <html> (classSuffix: '').
  // The brand looks most striking in dark, so that's the default; the toggle persists choice.
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  // Tailwind v4 via the official Vite plugin (no @nuxtjs/tailwindcss v3 module).
  vite: {
    plugins: [tailwindcss()],
    server: {
      // let the dev server be reached on the tagged hosts (zettamine.qa,
      // zettamine.com, crm.zettamine.*) behind the reverse proxy.
      allowedHosts: [...webServer.allowedHosts],
    },
  },

  runtimeConfig: {
    public: {
      // Override the CRM base URL for unusual deployments / localhost dev.
      // Leave unset in normal deployments — useCrm() resolves crm.zettamine.qa
      // or crm.zettamine.com from the request host automatically.
      crmUrl: process.env.NUXT_PUBLIC_CRM_URL || '',
    },
  },

  icon: {
    mode: 'svg',
    class: 'inline-block',
  },

  app: {
    // '/' locally / on a custom domain; '/<repo>/' for a GitHub project page.
    baseURL: appBaseURL,
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'ZettaMine — Next-Generation Boutique Technology & SaaS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ZettaMine is an innovation-driven boutique technology and SaaS company specialising in Industrial AI, cognitive ERP decoupling, frontier-tech R&D, high-fidelity data services, enterprise upskilling and strategic advisory.',
        },
        { name: 'theme-color', content: '#FB3B22' },
        { property: 'og:title', content: 'ZettaMine — The Innovation-Driven Enterprise' },
        {
          property: 'og:description',
          content:
            'Next-generation solutions that drive tangible business value in high-performance sectors. Niche, high-value, deeply innovative.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        // baseURL-aware: head link hrefs are NOT auto-prefixed by Nuxt, so a
        // bare '/favicon.svg' would 404 under a /<repo>/ project-page subpath.
        { rel: 'icon', type: 'image/svg+xml', href: `${appBaseURL}favicon.svg` },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
  },

  // Local/Caddy: SSR node server (npm start → 127.0.0.1:5003), reverse-proxied
  // for zettamine.qa / zettamine.com — matching the gt/digihire siblings; SSR
  // lets useCrm() resolve the CRM host from the live request.
  //
  // When NUXT_GITHUB_PAGES=true (the deploy-pages workflow) it instead does a
  // fully STATIC build for GitHub Pages — every route in `pagesRoutes` is
  // prerendered. `public/.nojekyll` keeps the `_nuxt/` assets, and the workflow
  // copies index.html → 404.html for SPA deep-link fallback. The CRM cannot
  // live on Pages (no backend), so useCrm() reads absolute NUXT_PUBLIC_CRM_URL.
  nitro: isPagesBuild
    ? { prerender: { crawlLinks: false, routes: pagesRoutes, failOnError: false } }
    : {},
})
