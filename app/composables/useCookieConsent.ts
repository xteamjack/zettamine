// Lightweight cookie consent state, shared across the prompt and the footer link.
// Choice persists in localStorage; no analytics load until the user accepts.
export type ConsentChoice = 'accepted' | 'declined' | null

const STORAGE_KEY = 'zm-cookie-consent'

export const useCookieConsent = () => {
  const choice = useState<ConsentChoice>('cookie-consent', () => null)
  const open = useState<boolean>('cookie-consent-open', () => false)

  function init() {
    if (!import.meta.client) return
    const v = localStorage.getItem(STORAGE_KEY)
    choice.value = v === 'accepted' || v === 'declined' ? v : null
    open.value = choice.value === null
  }

  function set(v: 'accepted' | 'declined') {
    choice.value = v
    if (import.meta.client) localStorage.setItem(STORAGE_KEY, v)
    open.value = false
  }

  function reopen() {
    open.value = true
  }

  return { choice, open, init, set, reopen }
}
