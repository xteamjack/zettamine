export const webServer = {
  protocol: 'https',
  // Working / QA domain (local-dev + zetta QA tier). Prod is the .com.
  domain: 'zettamine.qa',
  prodDomain: 'zettamine.com',
  host: '127.0.0.1',
  port: 5003,
  url: 'http://127.0.0.1:5003',

  // Companion CRM app (repo n_crmLeadRegister, app key apps.crm, port 3010) is
  // reverse-proxied SAME-ORIGIN under the `/crm` slug on whichever host serves
  // this site — Caddy routes `/crm*` → 127.0.0.1:3010 (exactly as it already
  // does for talented.qa/crm and digihire.ai/crm). So:
  //   zettamine.qa/crm   (local-dev + QA)
  //   zettamine.com/crm  (prod)
  // This intentionally REPLACES the digihire `talented.qa` cross-link — that
  // host belongs to the digihire/guildtrek B2B side, not to Zettamine.
  crmSlug: '/crm',

  allowedHosts: [
    'zettamine.qa',
    'www.zettamine.qa',
    'zettamine.com',
    'www.zettamine.com',
    'localhost',
  ],
} as const
