<script setup lang="ts">
const progress = ref(0)
function onScroll() {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? (doc.scrollTop / max) * 100 : 0
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-[60] h-0.5">
    <div
      class="h-full origin-left bg-[linear-gradient(90deg,var(--color-saffron-400),var(--color-ember-500),var(--color-ember-700))] transition-[width] duration-75"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
