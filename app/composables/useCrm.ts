/**
 * Resolves the URL of the companion CRM app (repo: n_crmLeadRegister, port
 * 3010), which Caddy reverse-proxies SAME-ORIGIN under the `/crm` slug on
 * whichever ZettaMine host is serving this site:
 *   - prod   → https://zettamine.com/crm
 *   - QA/dev → https://zettamine.qa/crm
 *
 * Mirrors the gt `useExternalApp()` pattern: read `useRequestURL().origin` so a
 * single build adapts to whatever host it's served on. `NUXT_PUBLIC_CRM_URL`
 * overrides everything (e.g. localhost dev pointing at a running CRM directly).
 */
import { webServer } from '~/config/webServer'

function siteOrigin(): string {
  try {
    return useRequestURL().origin
  } catch {
    return `${webServer.protocol}://${webServer.prodDomain}`
  }
}

export function useCrm() {
  const cfg = useRuntimeConfig()
  const override = cfg.public.crmUrl

  const base =
    typeof override === 'string' && override.trim()
      ? override.trim().replace(/\/$/, '')
      : `${siteOrigin()}${webServer.crmSlug}`

  return {
    /** CRM base URL, e.g. https://zettamine.com/crm */
    url: base,
    /** Build a deep link into the CRM, e.g. link('/leads') */
    link: (path = '') => `${base}${path.startsWith('/') ? path : `/${path}`}`,
  }
}
