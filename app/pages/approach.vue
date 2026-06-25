<script setup lang="ts">
import { approachSteps, differentiators } from '~/data/site'
useHead({ title: 'Our Approach — Zettamine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Approach"
      title="Innovation, de-risked."
      intro="Frontier technology is only valuable if it ships. Our delivery rhythm turns ambitious ideas into production capability — outcome first, prototype fast, decouple cleanly, enable always."
    >
      <template #actions>
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Start a project</AppButton>
      </template>
    </PageHero>

    <!-- the four steps, detailed -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading center eyebrow="The rhythm" title="Four moves, repeated until it compounds." />
      <div class="mt-14 space-y-5">
        <div
          v-for="(step, i) in approachSteps"
          :key="step.no"
          v-reveal="{ delay: (i % 2) * 60 }"
          class="group grid items-center gap-6 rounded-3xl border border-hairline bg-surface/60 p-6 transition-colors hover:border-ember-500/30 sm:p-8 lg:grid-cols-[auto_1fr_auto]"
        >
          <div class="flex items-center gap-5">
            <span class="font-display text-5xl font-bold text-ink-200/70 dark:text-ink-700">{{ step.no }}</span>
            <IconBadge :icon="step.icon" size="lg" />
          </div>
          <div>
            <h3 class="font-display text-xl font-semibold">{{ step.title }}</h3>
            <p class="mt-2 max-w-2xl leading-relaxed text-ink-600 dark:text-ink-300">{{ step.body }}</p>
          </div>
          <Icon
            v-if="i < approachSteps.length - 1"
            name="lucide:arrow-down"
            class="hidden h-6 w-6 text-ember-500 lg:block"
          />
          <Icon v-else name="lucide:check-circle-2" class="hidden h-6 w-6 text-emerald-500 lg:block" />
        </div>
      </div>
    </section>

    <!-- principles -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="Operating principles" title="What stays true on every engagement." />
        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(d, i) in differentiators"
            :key="d.title"
            v-reveal="{ delay: i * 70 }"
            class="rounded-3xl border border-hairline bg-surface/70 p-6"
          >
            <IconBadge :icon="d.icon" />
            <h3 class="mt-5 font-display text-base font-semibold">{{ d.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{{ d.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Bring us the problem everyone calls impossible."
      subtitle="A focused discovery is the fastest way to find out what's actually achievable — and what it's worth."
    />
    <div class="h-20" />
  </div>
</template>
