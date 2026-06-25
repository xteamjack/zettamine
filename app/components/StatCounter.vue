<script setup lang="ts">
const props = withDefaults(
  defineProps<{ value: number; suffix?: string; plain?: boolean; duration?: number }>(),
  { suffix: '', duration: 1600 },
)

const el = ref<HTMLElement | null>(null)
const display = ref(props.plain ? props.value : 0)
let started = false

const { stop } = useIntersectionObserver(
  el,
  ([entry]) => {
    if (!entry?.isIntersecting || started) return
    started = true
    stop()
    if (props.plain) {
      display.value = props.value
      return
    }
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      display.value = props.value
      return
    }
    const start = performance.now()
    const from = 0
    const tick = (now: number) => {
      const t = Math.min((now - start) / props.duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      display.value = Math.round(from + (props.value - from) * eased)
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  },
  { threshold: 0.4 },
)
</script>

<template>
  <span ref="el" class="tabular-nums">{{ display }}{{ suffix }}</span>
</template>
