<script setup lang="ts">
import type { Solution } from '~/data/solutions'
defineProps<{ solution: Solution; index: number }>()
</script>

<template>
  <NuxtLink
    :to="`/solutions/${solution.slug}`"
    class="group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/70 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-ember-500/10 sm:p-7"
  >
    <!-- hover gradient wash -->
    <div
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      :style="{ background: `radial-gradient(120% 80% at 100% 0%, ${solution.gradient[0]}22, transparent 55%)` }"
    />
    <!-- top edge accent -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      :style="{ background: `linear-gradient(90deg, transparent, ${solution.gradient[0]}, ${solution.gradient[1]}, transparent)` }"
    />

    <div class="relative flex items-center justify-between">
      <IconBadge :icon="solution.icon" :gradient="solution.gradient" size="lg" />
      <span class="font-mono text-sm text-ink-300 dark:text-ink-500">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>

    <h3 class="relative mt-5 font-display text-xl font-semibold leading-tight">{{ solution.menuTitle }}</h3>
    <p class="relative mt-1 text-sm font-medium text-ember-600 dark:text-saffron-400">{{ solution.tagline }}</p>
    <p class="relative mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">
      {{ solution.pitch }}
    </p>

    <div class="relative mt-auto flex items-center justify-between pt-6">
      <span class="text-sm text-ink-500 dark:text-ink-400">{{ solution.topics.length }} capabilities</span>
      <span class="inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400">
        Explore
        <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </NuxtLink>
</template>
