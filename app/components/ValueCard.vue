<script setup lang="ts">
defineProps<{ icon: string; title: string; body: string }>()
</script>

<template>
  <div class="flex gap-4 rounded-2xl border border-hairline bg-surface/50 p-6 transition-colors hover:border-ember-500/30">
    <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline bg-saffron-500/10 text-ember-600 dark:text-saffron-400">
      <Icon :name="icon" class="h-5 w-5" />
    </span>
    <div>
      <h3 class="font-display text-base font-semibold">{{ title }}</h3>
      <p class="mt-1.5 text-[0.92rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ body }}</p>
    </div>
  </div>
</template>
