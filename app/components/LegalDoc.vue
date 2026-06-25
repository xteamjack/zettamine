<script setup lang="ts">
import type { LegalDoc } from '~/data/legal'
defineProps<{ doc: LegalDoc }>()
</script>

<template>
  <div>
    <PageHero :eyebrow="doc.eyebrow" :title="doc.title" :intro="doc.intro" />
    <article class="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p class="font-mono text-sm text-ink-400">{{ doc.updated }}</p>
      <div class="mt-10 space-y-12">
        <section v-for="(sec, i) in doc.sections" :key="i" v-reveal>
          <h2 class="flex items-center gap-3 font-display text-xl font-semibold">
            <span class="font-mono text-sm text-ember-500">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ sec.heading }}
          </h2>
          <div class="mt-3 space-y-3 border-l-2 border-saffron-500/30 pl-5">
            <p v-for="(p, j) in sec.body" :key="`p${j}`" class="leading-relaxed text-ink-600 dark:text-ink-300">{{ p }}</p>
            <ul v-if="sec.list" class="space-y-2.5">
              <li v-for="(li, k) in sec.list" :key="`l${k}`" class="flex items-start gap-2.5 leading-relaxed text-ink-600 dark:text-ink-300">
                <Icon name="lucide:check" class="mt-1 h-4 w-4 shrink-0 text-ember-500" />
                <span>{{ li }}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div class="mt-16 rounded-2xl border border-hairline bg-surface/60 p-6 text-center">
        <p class="text-ink-600 dark:text-ink-300">Need something clarified?</p>
        <AppButton to="/contact" class="mt-4" icon-right="lucide:arrow-up-right">Contact us</AppButton>
      </div>
    </article>
    <div class="h-12" />
  </div>
</template>
