<script setup lang="ts">
const props = withDefaults(
  defineProps<{ icon: string; gradient?: [string, string]; size?: 'sm' | 'md' | 'lg' }>(),
  { size: 'md' },
)
const grad = computed(() => props.gradient ?? (['#f8910a', '#fb3b22'] as [string, string]))
const dims: Record<string, string> = { sm: 'h-10 w-10 rounded-xl', md: 'h-12 w-12 rounded-2xl', lg: 'h-14 w-14 rounded-2xl' }
const icons: Record<string, string> = { sm: 'h-5 w-5', md: 'h-6 w-6', lg: 'h-7 w-7' }
</script>

<template>
  <span
    class="relative grid shrink-0 place-items-center text-white shadow-lg"
    :class="dims[size]"
    :style="{ background: `linear-gradient(140deg, ${grad[0]}, ${grad[1]})`, boxShadow: `0 12px 30px -10px ${grad[1]}99` }"
  >
    <span class="absolute inset-0 rounded-[inherit] opacity-30 mix-blend-overlay bg-dots" />
    <Icon :name="icon" :class="icons[size]" class="relative" />
  </span>
</template>
