<script setup lang="ts">
import { story } from '~/data/site'
useHead({ title: 'Our Story — Zettamine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Our story"
      title="Born from a contrarian bet."
      intro="That the most valuable technology work is the work most firms avoid — niche, frontier and deeply innovative. Here is how that conviction became Zettamine."
    />

    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div v-reveal class="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow="The thesis" title="Depth beats breadth." />
          <div class="mt-6 space-y-4 leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              The industry rewards scale. We chose the opposite: a small, senior team going deep
              where the problems are genuinely hard and the value is genuinely defensible.
            </p>
            <p>
              Every milestone below pushed that thesis further — from opening our Frontier Tech Labs
              to formalising a radical alternative to forced ERP migration.
            </p>
          </div>
          <div class="mt-8 rounded-2xl border border-hairline bg-surface/60 p-6">
            <Icon name="lucide:quote" class="h-7 w-7 text-ember-500" />
            <p class="mt-3 font-display text-lg font-medium leading-snug">
              "If it already exists off the shelf, it isn't our problem to solve."
            </p>
            <p class="mt-3 text-sm text-ink-500 dark:text-ink-400">— The Zettamine operating principle</p>
          </div>
        </div>

        <div v-reveal="{ delay: 80 }">
          <StoryTimeline :items="story" />
        </div>
      </div>
    </section>

    <!-- where we're headed -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots intensity="bold" />
      <div class="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <span class="eyebrow text-ember-600 dark:text-saffron-400">Where we're headed</span>
        <h2 v-reveal class="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
          The next decade of enterprise technology will be built at the edges. We intend to build it there.
        </h2>
        <p v-reveal="{ delay: 80 }" class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-300">
          Autonomous systems, cognitive interfaces, decoupled architectures and ground-truth data —
          the foundations of tomorrow, shipped today.
        </p>
        <AppButton to="/labs" size="lg" class="mt-9" icon-right="lucide:arrow-up-right">Explore Frontier Tech Labs</AppButton>
      </div>
    </section>

    <CtaBand />
    <div class="h-20" />
  </div>
</template>
