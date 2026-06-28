<script setup lang="ts">
import { clientele } from '~/data/clientele'

// baseURL-aware path: public assets are NOT auto-prefixed, so a bare
// '/clientele/x.svg' would 404 under a GitHub Pages '/<repo>/' subpath.
const base = useRuntimeConfig().app.baseURL
const src = (logo: string) => `${base}clientele/${logo}`.replace(/([^:]\/)\/+/g, '$1')
</script>

<template>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
    <!-- White chips keep colour logos legible in both light and dark themes;
         calm and desaturated by default, full colour on hover or focus. -->
    <div
      v-for="c in clientele"
      :key="c.logo"
      class="group flex items-center justify-center rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md sm:p-6"
    >
      <img
        :src="src(c.logo)"
        :alt="c.name"
        loading="lazy"
        class="max-h-8 w-auto max-w-full object-contain opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none sm:max-h-9"
      />
    </div>
  </div>
</template>
