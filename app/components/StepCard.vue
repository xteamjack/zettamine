<script setup lang="ts">
defineProps<{ no: string; icon: string; title: string; body: string }>()
</script>

<template>
  <div class="group relative flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-7 transition-colors hover:border-ember-500/30">
    <div class="flex items-center justify-between">
      <IconBadge :icon="icon" />
      <span class="font-display text-4xl font-bold text-ink-200/70 transition-colors group-hover:text-saffron-500/40 dark:text-ink-700">{{ no }}</span>
    </div>
    <h3 class="mt-5 font-display text-lg font-semibold">{{ title }}</h3>
    <p class="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ body }}</p>
  </div>
</template>
