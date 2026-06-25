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
      class="shrink-0 drop-shadow-[0_6px_16px_rgba(251,59,34,0.30)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient :id="`zg-${size}`" x1="8" y1="6" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC555" />
          <stop offset="0.5" stop-color="#FB3B22" />
          <stop offset="1" stop-color="#C0140A" />
        </linearGradient>
        <clipPath :id="`zc-${size}`">
          <rect x="3" y="3" width="58" height="58" rx="19" />
        </clipPath>
      </defs>

      <!-- gem tile + cut facets (warm gradient, no black background) -->
      <g :clip-path="`url(#zc-${size})`">
        <rect x="3" y="3" width="58" height="58" :fill="`url(#zg-${size})`" />
        <!-- top-left light facet (gem shine) -->
        <path d="M3 40 L40 3 L60 3 L3 60 Z" fill="#ffffff" opacity="0.16" />
        <!-- bottom-right deepen facet (deep ember, not black) -->
        <path d="M64 26 L26 64 L64 64 Z" fill="#7A0E06" opacity="0.32" />
      </g>

      <!-- Z mark + spark, white so it reads on the warm gem -->
      <path d="M20 20 H44 L26 41 H44" stroke="#ffffff" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="44" cy="44.5" r="3.1" fill="#ffffff" />
    </svg>

    <span
      v-if="word"
      class="font-display text-[1.35rem] font-bold tracking-tight leading-none text-ink-900 dark:text-ink-50"
    >
      Zetta<span class="text-gradient">Mine</span>
    </span>
  </span>
</template>
