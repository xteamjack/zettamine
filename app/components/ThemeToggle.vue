<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="group relative grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface/60 transition-colors hover:border-ember-500/40 hover:bg-surface"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <span class="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-100" style="background: radial-gradient(circle, rgba(251,59,34,0.18), transparent 70%)" />
    <ClientOnly>
      <Icon
        :name="isDark ? 'lucide:sun' : 'lucide:moon'"
        class="relative h-[1.15rem] w-[1.15rem] text-saffron-500 transition-transform duration-500 group-hover:rotate-45"
      />
      <template #fallback>
        <span class="h-[1.15rem] w-[1.15rem]" />
      </template>
    </ClientOnly>
  </button>
</template>
