<script setup lang="ts">
import type { Whitepaper } from '~/data/whitepapers'
defineProps<{ paper: Whitepaper }>()
</script>

<template>
  <article class="group flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30 sm:p-7">
    <div class="flex items-center justify-between gap-3">
      <span class="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-saffron-500/10 px-3 py-1 text-xs font-medium text-ember-600 dark:text-saffron-400">
        <Icon name="lucide:file-text" class="h-3.5 w-3.5" /> {{ paper.areaLabel }}
      </span>
      <span
        class="rounded-full px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-wider"
        :class="paper.status === 'available' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-ink-400'"
      >
        {{ paper.status === 'available' ? 'Available' : 'Coming soon' }}
      </span>
    </div>
    <h3 class="mt-4 font-display text-lg font-semibold leading-snug">{{ paper.title }}</h3>
    <p class="mt-2 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ paper.blurb }}</p>
    <p class="mt-4 text-xs text-ink-500 dark:text-ink-400">
      <span class="font-semibold text-ink-700 dark:text-ink-300">For:</span> {{ paper.audience }}
    </p>
    <div class="mt-auto pt-5">
      <a
        v-if="paper.status === 'available' && paper.fileUrl"
        :href="paper.fileUrl"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400"
      >
        Read the paper <Icon name="lucide:arrow-down-to-line" class="h-4 w-4" />
      </a>
      <NuxtLink
        v-else
        to="/contact"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400"
      >
        Notify me when it is out <Icon name="lucide:bell" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </NuxtLink>
    </div>
  </article>
</template>
