<script setup lang="ts">
import { galleryImages } from '~/data/gallery'

const props = withDefaults(defineProps<{ interval?: number }>(), { interval: 5000 })

// baseURL-aware path so images resolve under a GitHub Pages '/<repo>/' subpath.
const base = useRuntimeConfig().app.baseURL
const src = (file: string) => `${base}gallery/${file}`.replace(/([^:]\/)\/+/g, '$1')

const images = galleryImages
const index = ref(0)
const paused = ref(false)
const prefersReduced = ref(false)
let timer: ReturnType<typeof setInterval> | null = null

function go(i: number) {
  if (!images.length) return
  index.value = (i + images.length) % images.length
}
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

function start() {
  stop()
  if (prefersReduced.value || images.length < 2) return
  timer = setInterval(() => {
    if (!paused.value) next()
  }, props.interval)
}
function stop() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (import.meta.client) {
    prefersReduced.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  start()
})
onBeforeUnmount(stop)

// touch swipe
const startX = ref(0)
const onTouchStart = (e: TouchEvent) => (startX.value = e.changedTouches[0]?.clientX ?? 0)
function onTouchEnd(e: TouchEvent) {
  const dx = (e.changedTouches[0]?.clientX ?? 0) - startX.value
  if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
}
</script>

<template>
  <div
    v-if="images.length"
    role="group"
    aria-roledescription="carousel"
    aria-label="ZettaMine photo gallery"
    class="relative overflow-hidden rounded-3xl border border-hairline bg-surface/40"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
    @touchstart.passive="onTouchStart"
    @touchend.passive="onTouchEnd"
  >
    <div class="relative aspect-[16/10] w-full sm:aspect-[16/9]">
      <img
        v-for="(img, i) in images"
        :key="img.file"
        :src="src(img.file)"
        :alt="img.alt"
        :loading="i === 0 ? 'eager' : 'lazy'"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none"
        :class="i === index ? 'opacity-100' : 'opacity-0'"
        :aria-hidden="i === index ? 'false' : 'true'"
      />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </div>

    <template v-if="images.length > 1">
      <button
        type="button"
        aria-label="Previous photo"
        class="glass absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-hairline text-ink-700 transition-transform hover:scale-105 dark:text-ink-100"
        @click="prev"
      >
        <Icon name="lucide:chevron-left" class="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        class="glass absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-hairline text-ink-700 transition-transform hover:scale-105 dark:text-ink-100"
        @click="next"
      >
        <Icon name="lucide:chevron-right" class="h-5 w-5" />
      </button>

      <div class="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        <button
          v-for="(img, i) in images"
          :key="`dot-${img.file}`"
          type="button"
          :aria-label="`Go to photo ${i + 1}`"
          :aria-current="i === index ? 'true' : 'false'"
          class="h-2 rounded-full bg-white transition-all"
          :class="i === index ? 'w-6 opacity-100' : 'w-2 opacity-50 hover:opacity-80'"
          @click="go(i)"
        />
      </div>
    </template>
  </div>
</template>
