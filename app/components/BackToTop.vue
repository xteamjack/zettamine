<script setup lang="ts">
const { y } = useWindowScroll()
const show = computed(() => y.value > 720)
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0 translate-y-3"
    leave-active-class="transition duration-200"
    leave-to-class="opacity-0 translate-y-3"
  >
    <button
      v-if="show"
      type="button"
      class="glow-ring fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-white"
      style="background: linear-gradient(135deg, var(--color-saffron-500), var(--color-ember-600))"
      aria-label="Back to top"
      @click="toTop"
    >
      <Icon name="lucide:arrow-up" class="h-5 w-5" />
    </button>
  </Transition>
</template>
