<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <div class="group relative flex overflow-hidden mask-fade-x">
    <div class="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
      <span
        v-for="(item, i) in items"
        :key="`a-${i}`"
        class="flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-sm font-medium text-ink-600 dark:text-ink-300"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-saffron-400 to-ember-600" />
        {{ item }}
      </span>
    </div>
    <div aria-hidden="true" class="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused]">
      <span
        v-for="(item, i) in items"
        :key="`b-${i}`"
        class="flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface/60 px-5 py-2.5 text-sm font-medium text-ink-600 dark:text-ink-300"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-saffron-400 to-ember-600" />
        {{ item }}
      </span>
    </div>
  </div>
</template>
