<script setup lang="ts">
defineProps<{ eyebrow?: string; title?: string; intro?: string }>()
</script>

<template>
  <section class="relative overflow-hidden border-b border-hairline">
    <AuroraBackground grid />
    <div class="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
      <div class="max-w-3xl">
        <div v-if="eyebrow" v-reveal class="mb-4 inline-flex items-center gap-2">
          <span class="h-px w-7 bg-gradient-to-r from-saffron-500 to-ember-600" />
          <span class="eyebrow text-ember-600 dark:text-saffron-400">{{ eyebrow }}</span>
        </div>
        <h1 v-reveal class="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          <slot name="title">{{ title }}</slot>
        </h1>
        <p v-if="intro || $slots.intro" v-reveal="{ delay: 90 }" class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-300 sm:text-xl">
          <slot name="intro">{{ intro }}</slot>
        </p>
        <div v-if="$slots.actions" v-reveal="{ delay: 160 }" class="mt-9 flex flex-wrap gap-3">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>
