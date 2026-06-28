<script setup lang="ts">
import type { TeamMember } from '~/data/team'

const props = defineProps<{ member: TeamMember }>()
const base = useRuntimeConfig().app.baseURL
const photoSrc = computed(() =>
  props.member.photo ? `${base}team/${props.member.photo}`.replace(/([^:]\/)\/+/g, '$1') : '',
)
const initials = computed(() =>
  props.member.name
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)
</script>

<template>
  <article class="flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-6 sm:p-7">
    <div class="flex items-center gap-4">
      <img v-if="photoSrc" :src="photoSrc" :alt="member.name" loading="lazy" class="h-16 w-16 rounded-2xl object-cover" />
      <span v-else class="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron-500 to-ember-600 font-display text-lg font-bold text-white">
        {{ initials }}
      </span>
      <div class="min-w-0">
        <h3 class="font-display text-base font-semibold leading-tight">{{ member.name }}</h3>
        <p class="mt-0.5 text-sm text-ember-600 dark:text-saffron-400">{{ member.role }}</p>
      </div>
    </div>
    <p class="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{{ member.bio }}</p>
    <div v-if="member.socials?.length" class="mt-auto flex gap-2 pt-4">
      <a
        v-for="s in member.socials"
        :key="s.label"
        :href="s.href"
        target="_blank"
        rel="noopener"
        :aria-label="s.label"
        class="grid h-9 w-9 place-items-center rounded-full border border-hairline text-ink-500 transition-colors hover:border-ember-500/40 hover:text-ember-500 dark:text-ink-300"
      >
        <Icon :name="s.icon" class="h-4 w-4" />
      </a>
    </div>
  </article>
</template>
