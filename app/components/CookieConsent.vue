<script setup lang="ts">
// A small, calm consent prompt anchored to the bottom-left corner. It never
// blocks the page, remembers the choice, and can be reopened from the footer.
const { open, init, set } = useCookieConsent()
onMounted(init)
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-3"
  >
    <div
      v-if="open"
      role="region"
      aria-label="Cookie consent"
      class="fixed inset-x-4 bottom-4 z-[60] sm:inset-x-auto sm:left-5 sm:bottom-5 sm:max-w-sm"
    >
      <div class="glass-strong rounded-2xl border border-hairline p-5 shadow-2xl shadow-black/20">
        <div class="flex items-start gap-3">
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-saffron-500/10 text-ember-600 dark:text-saffron-400">
            <Icon name="lucide:cookie" class="h-5 w-5" />
          </span>
          <div class="min-w-0">
            <p class="font-display text-sm font-semibold">A note on cookies</p>
            <p class="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              We use a few cookies to keep the site working and, only if you agree, to understand
              which content is useful. You are in control.
            </p>
          </div>
        </div>

        <div class="mt-4 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
            @click="set('accepted')"
          >
            Accept
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-hairline px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-ember-500/40 hover:text-ember-600 dark:text-ink-200 dark:hover:text-saffron-300"
            @click="set('declined')"
          >
            Decline
          </button>
          <NuxtLink
            to="/cookies"
            class="ml-auto text-sm font-medium text-ink-500 underline-offset-4 transition-colors hover:text-ember-600 hover:underline dark:text-ink-400 dark:hover:text-saffron-300"
          >
            Cookie Policy
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>
