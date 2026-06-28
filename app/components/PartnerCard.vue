<script setup lang="ts">
import type { Partner } from '~/data/partners'

const props = defineProps<{ partner: Partner }>()
const base = useRuntimeConfig().app.baseURL
const logoSrc = computed(() =>
  props.partner.logo ? `${base}partners/${props.partner.logo}`.replace(/([^:]\/)\/+/g, '$1') : '',
)
const initials = computed(() =>
  props.partner.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)
</script>

<template>
  <component
    :is="partner.url ? 'a' : 'div'"
    :href="partner.url || undefined"
    :target="partner.url ? '_blank' : undefined"
    :rel="partner.url ? 'noopener' : undefined"
    class="group flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30"
  >
    <div class="flex items-center gap-4">
      <span v-if="logoSrc" class="grid h-12 w-12 place-items-center rounded-xl bg-white p-1.5 ring-1 ring-black/5">
        <img :src="logoSrc" :alt="partner.name" class="max-h-8 max-w-full object-contain" />
      </span>
      <span v-else class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-ember-600 font-display text-sm font-bold text-white">
        {{ initials }}
      </span>
      <div class="min-w-0">
        <h3 class="font-display text-lg font-semibold leading-tight">{{ partner.name }}</h3>
        <span class="text-xs font-medium uppercase tracking-wider text-ember-600 dark:text-saffron-400">{{ partner.category }} partner</span>
      </div>
    </div>
    <p class="mt-4 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ partner.blurb }}</p>
    <span v-if="partner.url" class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400">
      Visit site <Icon name="lucide:arrow-up-right" class="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </span>
  </component>
</template>
