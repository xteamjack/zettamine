<script setup lang="ts">
import type { Topic } from '~/data/solutions'
defineProps<{ topic: Topic; gradient: [string, string] }>()
</script>

<template>
  <article class="group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-surface/60 p-7 transition-all duration-500 hover:border-transparent hover:shadow-xl hover:shadow-black/5">
    <div
      class="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
      :style="{ background: `radial-gradient(circle, ${gradient[0]}, transparent 65%)` }"
    />
    <div class="relative flex items-center gap-4">
      <IconBadge :icon="topic.icon" :gradient="gradient" />
      <h3 class="font-display text-lg font-semibold leading-snug">{{ topic.title }}</h3>
    </div>
    <p class="relative mt-4 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ topic.pitch }}</p>
    <ul class="relative mt-5 space-y-2.5 border-t border-hairline pt-5">
      <li v-for="h in topic.highlights" :key="h" class="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300">
        <Icon name="lucide:check-circle-2" class="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-ember-500" />
        <span>{{ h }}</span>
      </li>
    </ul>
  </article>
</template>
