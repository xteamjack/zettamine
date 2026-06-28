<script setup lang="ts">
import { company } from '~/data/site'
withDefaults(
  defineProps<{ title?: string; subtitle?: string }>(),
  {
    title: "Let's build what doesn't exist yet.",
    subtitle:
      'Bring us the problem everyone else calls impossible. We turn frontier technology into measurable business value.',
  },
)
</script>

<template>
  <section class="relative mx-auto max-w-7xl px-5 sm:px-8">
    <div v-reveal class="relative overflow-hidden rounded-[2rem] border border-hairline px-6 py-16 text-center sm:px-12 sm:py-20">
      <AuroraBackground intensity="bold" />
      <div class="absolute inset-0 -z-10 bg-surface/40" />
      <span class="eyebrow text-ember-600 dark:text-saffron-400">Start a project</span>
      <h2 class="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        <slot name="title">{{ title }}</slot>
      </h2>
      <p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-700 dark:text-ink-200">
        {{ subtitle }}
      </p>
      <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Talk to us</AppButton>
        <AppButton :href="`mailto:${company.email}`" variant="outline" size="lg" icon="lucide:mail">
          {{ company.email }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
