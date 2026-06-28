<script setup lang="ts">
import type { AcademyStream } from '~/data/academy'
defineProps<{ stream: AcademyStream; index: number }>()
</script>

<template>
  <article class="group relative flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30">
    <div class="flex items-center justify-between">
      <span class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-ember-600 text-white">
        <Icon :name="stream.icon" class="h-6 w-6" />
      </span>
      <span class="font-mono text-sm text-ink-400">{{ String(index + 1).padStart(2, '0') }}</span>
    </div>
    <h3 class="mt-5 font-display text-xl font-semibold leading-snug">{{ stream.name }}</h3>
    <p class="mt-1 text-sm font-medium text-ember-600 dark:text-saffron-400">{{ stream.audience }}</p>
    <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ stream.promise }}</p>
    <ul class="mt-4 space-y-2 border-t border-hairline pt-4">
      <li v-for="h in stream.highlights" :key="h" class="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300">
        <Icon name="lucide:check-circle-2" class="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-ember-500" />
        <span>{{ h }}</span>
      </li>
    </ul>
    <div class="mt-auto pt-5">
      <a
        v-if="stream.cta.external"
        :href="stream.cta.to"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400"
      >
        {{ stream.cta.label }} <Icon name="lucide:arrow-up-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </a>
      <NuxtLink
        v-else
        :to="stream.cta.to"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400"
      >
        {{ stream.cta.label }} <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </NuxtLink>
    </div>
  </article>
</template>
