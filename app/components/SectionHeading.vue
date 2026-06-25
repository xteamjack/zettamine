<script setup lang="ts">
withDefaults(
  defineProps<{ eyebrow?: string; title?: string; intro?: string; center?: boolean }>(),
  { center: false },
)
</script>

<template>
  <div :class="['max-w-2xl', center ? 'mx-auto text-center' : '']">
    <div v-if="eyebrow" v-reveal class="mb-3 inline-flex items-center gap-2" :class="center ? 'justify-center' : ''">
      <span class="h-px w-7 bg-gradient-to-r from-saffron-500 to-ember-600" />
      <span class="eyebrow text-ember-600 dark:text-saffron-400">{{ eyebrow }}</span>
    </div>
    <h2 v-if="title || $slots.title" v-reveal class="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.7rem]">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p v-if="intro || $slots.default" v-reveal="{ delay: 80 }" class="mt-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
      <slot>{{ intro }}</slot>
    </p>
  </div>
</template>
