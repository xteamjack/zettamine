// Scroll-reveal directive: `v-reveal` / `v-reveal="{ delay: 120 }"`.
// Registered universally so SSR can resolve it (getSSRProps stub avoids the
// `getSSRProps of undefined` crash); all browser work is guarded to the client.
export default defineNuxtPlugin((nuxtApp) => {
  let io: IntersectionObserver | null = null

  const reduce =
    import.meta.client && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  function observer() {
    if (io) return io
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io!.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    return io
  }

  nuxtApp.vueApp.directive('reveal', {
    // present so Vue's SSR directive handling doesn't choke on the server
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding) {
      if (!import.meta.client) return
      if (reduce) {
        el.classList.add('reveal', 'is-visible')
        return
      }
      el.classList.add('reveal')
      const delay = binding.value?.delay
      if (delay) el.style.transitionDelay = `${delay}ms`
      observer().observe(el)
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el)
    },
  })
})
