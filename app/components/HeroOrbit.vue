<script setup lang="ts">
// Hero visual: a clean glass panel of the actual services, with a footer that
// points at the packaged offerings. On-context and professional, no invented
// product metrics. Cool elevate accent balances the warm per-pillar icons.
import { solutions } from '~/data/solutions'

const offeringCount = solutions.reduce((n, s) => n + s.offerings.length, 0)
</script>

<template>
  <div class="relative mx-auto w-full max-w-[18rem] sm:max-w-[26rem] lg:max-w-[30rem]">
    <!-- ambient glows: cool elevate with a single warm ember accent -->
    <div class="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full bg-elevate-500/20 blur-3xl" />
    <div class="pointer-events-none absolute -bottom-12 -right-10 h-48 w-48 rounded-full bg-ember-500/12 blur-3xl" />

    <div
      class="relative animate-float rounded-[1.6rem] border border-hairline p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-5"
      style="background: color-mix(in srgb, var(--bg-elevated) 93%, transparent)"
    >
      <!-- header -->
      <div class="flex items-center justify-between px-2 pb-3 pt-1">
        <span class="eyebrow text-elevate-600 dark:text-elevate-300">What we do</span>
        <span class="rounded-full border border-hairline px-2.5 py-1 text-[0.7rem] font-medium text-ink-500 dark:text-ink-300">
          6 practices
        </span>
      </div>

      <!-- services -->
      <div class="space-y-0.5">
        <NuxtLink
          v-for="s in solutions"
          :key="s.slug"
          :to="`/solutions/${s.slug}`"
          class="group flex items-center gap-3 rounded-2xl border border-transparent px-2.5 py-2.5 transition-colors hover:border-hairline hover:bg-elevate-500/5"
        >
          <span
            class="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white shadow-sm"
            :style="{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }"
          >
            <Icon :name="s.icon" class="h-[1.05rem] w-[1.05rem]" />
          </span>
          <span class="min-w-0 flex-1">
            <span class="block truncate font-display text-sm font-semibold leading-tight group-hover:text-elevate-600 dark:group-hover:text-elevate-300">
              {{ s.menuTitle }}
            </span>
            <span class="block truncate text-xs text-ink-500 dark:text-ink-400">{{ s.tagline }}</span>
          </span>
          <Icon
            name="lucide:arrow-up-right"
            class="h-4 w-4 shrink-0 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-elevate-500 dark:text-ink-500"
          />
        </NuxtLink>
      </div>

      <!-- offerings footer -->
      <NuxtLink
        to="/solutions"
        class="group mt-2 flex items-center justify-between rounded-2xl border border-hairline bg-elevate-500/5 px-3.5 py-3 transition-colors hover:bg-elevate-500/10"
      >
        <span class="flex items-center gap-2">
          <Icon name="lucide:package" class="h-4 w-4 text-elevate-600 dark:text-elevate-300" />
          <span class="text-sm font-medium">{{ offeringCount }} packaged offerings to start</span>
        </span>
        <Icon name="lucide:arrow-right" class="h-4 w-4 text-elevate-500 transition-transform group-hover:translate-x-0.5" />
      </NuxtLink>
    </div>
  </div>
</template>
