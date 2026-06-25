<script setup lang="ts">
defineProps<{ items: { year: string; title: string; body: string }[] }>()
</script>

<template>
  <ol class="relative ml-3 space-y-10 border-l border-hairline pl-8 sm:ml-0">
    <li v-for="(item, i) in items" :key="i" v-reveal="{ delay: i * 70 }" class="relative">
      <span class="absolute -left-[2.55rem] top-0 grid h-7 w-7 place-items-center rounded-full text-white shadow-lg" style="background: linear-gradient(135deg, var(--color-saffron-500), var(--color-ember-600))">
        <span class="h-2 w-2 rounded-full bg-white" />
      </span>
      <span class="font-mono text-sm font-medium text-ember-600 dark:text-saffron-400">{{ item.year }}</span>
      <h3 class="mt-1 font-display text-xl font-semibold">{{ item.title }}</h3>
      <p class="mt-2 max-w-xl leading-relaxed text-ink-600 dark:text-ink-300">{{ item.body }}</p>
    </li>
  </ol>
</template>
