<script setup lang="ts">
import { company, footerNav } from '~/data/site'
const year = 2026
const crm = useCrm()
const { reopen } = useCookieConsent()
</script>

<template>
  <footer class="relative mt-24 overflow-hidden border-t border-hairline">
    <div class="pointer-events-none absolute inset-0 opacity-70" style="background: radial-gradient(80% 120% at 50% 120%, rgba(251,59,34,0.14), transparent 60%)" />
    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <!-- CTA strip -->
      <div class="grid gap-8 py-14 md:grid-cols-2 md:items-end">
        <div>
          <BrandLogo :size="40" />
          <p class="mt-5 max-w-md text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {{ company.promise }}
          </p>
        </div>
        <div class="md:justify-self-end">
          <div class="flex flex-wrap items-center gap-3 md:justify-end">
            <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Start a project</AppButton>
            <AppButton to="/solutions" variant="outline" size="lg">Explore solutions</AppButton>
          </div>
          <div class="mt-5 flex gap-2.5 md:justify-end">
            <a
              v-for="s in company.social"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-500 transition-colors hover:border-ember-500/40 hover:text-ember-500 dark:text-ink-300"
            >
              <Icon :name="s.icon" class="h-[1.1rem] w-[1.1rem]" />
            </a>
          </div>
        </div>
      </div>

      <!-- link columns -->
      <div class="grid gap-10 border-t border-hairline py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div class="space-y-3">
          <p class="eyebrow text-ember-600 dark:text-saffron-400">{{ company.domain }}</p>
          <p class="text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Boutique, innovation-first engineering for Industrial AI, cognitive ERP, frontier R&D,
            data services, upskilling and advisory.
          </p>
          <ul class="space-y-1.5 pt-1 text-sm text-ink-500 dark:text-ink-400">
            <li v-for="loc in company.locations" :key="loc" class="flex items-center gap-2">
              <Icon name="lucide:map-pin" class="h-4 w-4 text-ember-500" /> {{ loc }}
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:mail" class="h-4 w-4 text-ember-500" />
              <a :href="`mailto:${company.email}`" class="hover:text-ember-600 dark:hover:text-saffron-300">{{ company.email }}</a>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:log-in" class="h-4 w-4 text-ember-500" />
              <a :href="crm.url" class="hover:text-ember-600 dark:hover:text-saffron-300">Client Login (CRM)</a>
            </li>
          </ul>
        </div>

        <div v-for="col in footerNav" :key="col.title">
          <p class="font-display text-sm font-semibold uppercase tracking-wider text-ink-700 dark:text-ink-200">{{ col.title }}</p>
          <ul class="mt-4 space-y-2.5">
            <li v-for="link in col.links" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-ink-500 transition-colors hover:text-ember-600 dark:text-ink-400 dark:hover:text-saffron-300"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- bottom bar -->
      <div class="flex flex-col gap-3 border-t border-hairline py-7 text-sm text-ink-500 dark:text-ink-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ company.name }}. Crafted for the innovation-driven enterprise.</p>
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            class="transition-colors hover:text-ember-600 dark:hover:text-saffron-300"
            @click="reopen"
          >
            Cookie settings
          </button>
          <p class="flex items-center gap-1.5">
            <span class="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Frontier Tech Labs · always experimenting
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
