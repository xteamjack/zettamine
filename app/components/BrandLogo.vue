<script setup lang="ts">
withDefaults(
  defineProps<{ size?: number; word?: boolean }>(),
  { size: 36, word: true },
)
</script>

<template>
  <span class="inline-flex items-center gap-2.5 select-none">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 64 64"
      fill="none"
      class="shrink-0 drop-shadow-[0_4px_14px_rgba(251,59,34,0.35)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient :id="`zlg-${size}`" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC555" />
          <stop offset="0.55" stop-color="#FB3B22" />
          <stop offset="1" stop-color="#9E150E" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="15" class="fill-ink-950 dark:fill-ink-900" />
      <rect x="2" y="2" width="60" height="60" rx="15" :stroke="`url(#zlg-${size})`" stroke-width="2.5" stroke-opacity="0.55" />
      <path d="M20 19 H44 L26 41 H44" :stroke="`url(#zlg-${size})`" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="44" cy="45" r="3.2" fill="#FFC555" />
    </svg>
    <span v-if="word" class="font-display text-[1.35rem] font-bold tracking-tight leading-none">
      Zetta<span class="text-gradient">mine</span>
    </span>
  </span>
</template>
