<script setup lang="ts">
import type { Offering } from '~/data/solutions'

const props = defineProps<{ offering: Offering }>()

const typeIcon = computed(
  () =>
    ({
      Assessment: 'lucide:clipboard-check',
      Accelerator: 'lucide:rocket',
      'Managed Service': 'lucide:settings-2',
      'SaaS Product': 'lucide:box',
      Workshop: 'lucide:presentation',
    })[props.offering.type] || 'lucide:sparkles',
)
</script>

<template>
  <article class="group relative flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30 sm:p-7">
    <div class="flex items-center justify-between gap-3">
      <span class="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-saffron-500/10 px-3 py-1 text-xs font-medium text-ember-600 dark:text-saffron-400">
        <Icon :name="typeIcon" class="h-3.5 w-3.5" /> {{ offering.type }}
      </span>
      <span v-if="offering.timeframe" class="inline-flex items-center gap-1 text-xs font-medium text-ink-500 dark:text-ink-400">
        <Icon name="lucide:clock" class="h-3.5 w-3.5" /> {{ offering.timeframe }}
      </span>
    </div>

    <h3 class="mt-4 font-display text-lg font-semibold leading-snug">{{ offering.name }}</h3>
    <p class="mt-2 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ offering.summary }}</p>

    <ul class="mt-4 space-y-2 border-t border-hairline pt-4">
      <li v-for="d in offering.deliverables" :key="d" class="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-300">
        <Icon name="lucide:check" class="mt-0.5 h-4 w-4 shrink-0 text-ember-500" />
        <span>{{ d }}</span>
      </li>
    </ul>

    <p class="mt-5 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
      <span class="font-semibold text-ink-700 dark:text-ink-300">Ideal for:</span> {{ offering.idealFor }}
    </p>

    <NuxtLink to="/contact" class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400">
      Discuss this offering
      <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </NuxtLink>
  </article>
</template>
