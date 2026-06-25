<script setup lang="ts">
import { solutions, allTopicCount } from '~/data/solutions'

useHead({ title: 'Solutions — Zettamine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Solutions"
      title="Six deep practices for the digital frontier."
      :intro="`From the factory floor to frontier R&D — ${allTopicCount} specialised capabilities across six pillars, each engineered for high-value, defensible outcomes.`"
    >
      <template #actions>
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Start a project</AppButton>
        <AppButton to="/approach" variant="outline" size="lg">See our approach</AppButton>
      </template>
    </PageHero>

    <!-- alternating feature blocks -->
    <div class="mx-auto max-w-7xl space-y-24 px-5 py-24 sm:px-8">
      <section
        v-for="(s, i) in solutions"
        :id="s.slug"
        :key="s.slug"
        class="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        <div v-reveal :class="i % 2 === 1 ? 'lg:order-2' : ''">
          <div class="flex items-center gap-3">
            <IconBadge :icon="s.icon" :gradient="s.gradient" size="lg" />
            <span class="font-mono text-sm text-ink-400">{{ String(i + 1).padStart(2, '0') }} / 06</span>
          </div>
          <h2 class="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">{{ s.heading }}</h2>
          <p class="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">{{ s.pitch }}</p>
          <ul class="mt-6 space-y-2.5">
            <li v-for="o in s.outcomes" :key="o" class="flex items-start gap-2.5">
              <Icon name="lucide:zap" class="mt-0.5 h-[1.1rem] w-[1.1rem] shrink-0 text-ember-500" />
              <span class="text-[0.95rem] text-ink-700 dark:text-ink-200">{{ o }}</span>
            </li>
          </ul>
          <AppButton :to="`/solutions/${s.slug}`" class="mt-8" icon-right="lucide:arrow-right">
            Explore {{ s.menuTitle }}
          </AppButton>
        </div>

        <div v-reveal="{ delay: 100 }" :class="i % 2 === 1 ? 'lg:order-1' : ''">
          <div class="relative overflow-hidden rounded-3xl border border-hairline p-6 sm:p-8">
            <div class="absolute inset-0 -z-10 opacity-90" :style="{ background: `radial-gradient(120% 100% at 0% 0%, ${s.gradient[0]}1f, transparent 55%), radial-gradient(120% 100% at 100% 100%, ${s.gradient[1]}1f, transparent 55%)` }" />
            <div class="absolute inset-0 -z-10 bg-dots opacity-50" />
            <p class="eyebrow text-ember-600 dark:text-saffron-400">{{ s.topics.length }} capabilities</p>
            <div class="mt-4 grid gap-3">
              <NuxtLink
                v-for="t in s.topics"
                :key="t.slug"
                :to="`/solutions/${s.slug}#${t.slug}`"
                class="group flex items-center gap-3.5 rounded-2xl border border-hairline bg-surface/70 p-4 transition-colors hover:border-ember-500/30"
              >
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" :style="{ background: `linear-gradient(135deg, ${s.gradient[0]}, ${s.gradient[1]})` }">
                  <Icon :name="t.icon" class="h-5 w-5" />
                </span>
                <span class="font-medium leading-snug group-hover:text-ember-600 dark:group-hover:text-saffron-300">{{ t.title }}</span>
                <Icon name="lucide:arrow-up-right" class="ml-auto h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-ember-500" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>

    <CtaBand />
    <div class="h-20" />
  </div>
</template>
