<script setup lang="ts">
import { solutions } from '~/data/solutions'
import { primaryNav, company } from '~/data/site'

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 24)

// Companion CRM — same-origin /crm on zettamine.qa (dev) / zettamine.com (prod).
const crm = useCrm()

const megaOpen = ref(false)
const mobileOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

function openMega() {
  if (closeTimer) clearTimeout(closeTimer)
  megaOpen.value = true
}
function scheduleClose() {
  if (closeTimer) clearTimeout(closeTimer)
  closeTimer = setTimeout(() => (megaOpen.value = false), 140)
}

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    megaOpen.value = false
    mobileOpen.value = false
  },
)

// lock body scroll while the mobile drawer is open
watch(mobileOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled || megaOpen ? 'glass border-b border-hairline' : 'border-b border-transparent'"
  >
    <div class="mx-auto flex h-[4.6rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
      <NuxtLink to="/" class="-m-2 rounded-xl p-2" aria-label="Zettamine home">
        <BrandLogo />
      </NuxtLink>

      <!-- desktop nav -->
      <nav class="hidden items-center gap-1 lg:flex">
        <template v-for="item in primaryNav" :key="item.to">
          <div
            v-if="item.mega"
            class="relative"
            @mouseenter="openMega"
            @mouseleave="scheduleClose"
          >
            <button
              type="button"
              class="flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink-700 transition-colors hover:text-ember-600 dark:text-ink-200 dark:hover:text-saffron-300"
              :class="megaOpen ? 'text-ember-600 dark:text-saffron-300' : ''"
              @click="megaOpen = !megaOpen"
            >
              {{ item.label }}
              <Icon name="lucide:chevron-down" class="h-4 w-4 transition-transform" :class="megaOpen ? 'rotate-180' : ''" />
            </button>
          </div>
          <NuxtLink
            v-else
            :to="item.to"
            class="rounded-full px-4 py-2 text-[0.95rem] font-medium text-ink-700 transition-colors hover:text-ember-600 dark:text-ink-200 dark:hover:text-saffron-300"
            active-class="text-ember-600 dark:text-saffron-300"
          >
            {{ item.label }}
          </NuxtLink>
        </template>
      </nav>

      <div class="flex items-center gap-2.5">
        <a
          :href="crm.url"
          class="hidden items-center gap-1.5 rounded-full px-3 py-2 text-[0.95rem] font-medium text-ink-700 transition-colors hover:text-ember-600 dark:text-ink-200 dark:hover:text-saffron-300 lg:inline-flex"
        >
          <Icon name="lucide:log-in" class="h-4 w-4" /> Client Login
        </a>
        <ThemeToggle />
        <AppButton to="/contact" size="sm" class="hidden sm:inline-flex" icon-right="lucide:arrow-up-right">
          Start a project
        </AppButton>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface/60 lg:hidden"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :name="mobileOpen ? 'lucide:x' : 'lucide:menu'" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- mega menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="megaOpen"
        class="absolute inset-x-0 top-full hidden lg:block"
        @mouseenter="openMega"
        @mouseleave="scheduleClose"
      >
        <div class="mx-auto max-w-7xl px-5 sm:px-8 pb-6">
          <div class="glass overflow-hidden rounded-3xl border border-hairline shadow-2xl shadow-black/20">
            <div class="grid grid-cols-12">
              <div class="col-span-8 grid grid-cols-2 gap-1.5 p-4">
                <NuxtLink
                  v-for="s in solutions"
                  :key="s.slug"
                  :to="`/solutions/${s.slug}`"
                  class="group flex items-start gap-3.5 rounded-2xl p-3.5 transition-colors hover:bg-ink-900/5 dark:hover:bg-white/5"
                >
                  <span
                    class="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-105"
                    :style="{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }"
                  >
                    <Icon :name="s.icon" class="h-5 w-5" />
                  </span>
                  <span class="min-w-0">
                    <span class="block font-display text-[0.97rem] font-semibold leading-tight group-hover:text-ember-600 dark:group-hover:text-saffron-300">
                      {{ s.menuTitle }}
                    </span>
                    <span class="mt-0.5 block text-sm text-ink-500 dark:text-ink-300">{{ s.tagline }}</span>
                  </span>
                </NuxtLink>
              </div>
              <div class="col-span-4 relative overflow-hidden border-l border-hairline p-6">
                <div class="absolute inset-0 opacity-90" style="background: radial-gradient(120% 80% at 100% 0%, rgba(248,145,10,0.18), transparent 60%), radial-gradient(120% 90% at 0% 100%, rgba(251,59,34,0.16), transparent 55%)" />
                <div class="relative flex h-full flex-col">
                  <span class="eyebrow text-ember-600 dark:text-saffron-400">Six pillars · one philosophy</span>
                  <p class="mt-3 font-display text-lg font-semibold leading-snug">
                    Niche, high-value, deeply innovative technology — never run-of-the-mill.
                  </p>
                  <p class="mt-2 text-sm text-ink-500 dark:text-ink-300">
                    Explore how our practices compound into outcomes for high-performance sectors.
                  </p>
                  <AppButton to="/solutions" variant="soft" size="sm" class="mt-auto self-start" icon-right="lucide:arrow-right">
                    All solutions
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- mobile drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="fixed inset-0 top-[4.6rem] z-40 lg:hidden">
        <div class="glass h-full overflow-y-auto border-t border-hairline px-5 pb-10 pt-2">
          <div class="space-y-1 py-3">
            <p class="eyebrow px-3 pb-2 pt-3 text-ember-600 dark:text-saffron-400">Solutions</p>
            <NuxtLink
              v-for="s in solutions"
              :key="s.slug"
              :to="`/solutions/${s.slug}`"
              class="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-ink-900/5 dark:hover:bg-white/5"
            >
              <span class="grid h-9 w-9 place-items-center rounded-lg text-white" :style="{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }">
                <Icon :name="s.icon" class="h-[1.1rem] w-[1.1rem]" />
              </span>
              <span class="font-medium">{{ s.menuTitle }}</span>
            </NuxtLink>
          </div>
          <div class="space-y-1 border-t border-hairline py-3">
            <NuxtLink
              v-for="item in primaryNav.filter((n) => !n.mega)"
              :key="item.to"
              :to="item.to"
              class="block rounded-xl px-3 py-3 font-medium hover:bg-ink-900/5 dark:hover:bg-white/5"
            >
              {{ item.label }}
            </NuxtLink>
            <NuxtLink to="/contact" class="block rounded-xl px-3 py-3 font-medium hover:bg-ink-900/5 dark:hover:bg-white/5">
              Contact
            </NuxtLink>
            <a :href="crm.url" class="flex items-center gap-2 rounded-xl px-3 py-3 font-medium hover:bg-ink-900/5 dark:hover:bg-white/5">
              <Icon name="lucide:log-in" class="h-4 w-4 text-ember-500" /> Client Login
            </a>
          </div>
          <AppButton to="/contact" block size="lg" class="mt-4" icon-right="lucide:arrow-up-right">
            Start a project
          </AppButton>
          <p class="mt-6 text-center text-sm text-ink-500 dark:text-ink-400">{{ company.email }}</p>
        </div>
      </div>
    </Transition>
  </header>
</template>
