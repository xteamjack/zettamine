<script setup lang="ts">
import { solutionBySlug } from '~/data/solutions'

const labs = solutionBySlug('frontier-tech-labs')!
useHead({ title: 'Frontier Tech Labs — ZettaMine' })

const principles = [
  { icon: 'lucide:rocket', title: 'Research to runtime', body: 'We only explore what we can eventually ship. Every experiment is shaped like production.' },
  { icon: 'lucide:shield-check', title: 'De-risk first', body: 'We absorb the uncertainty of the frontier so your enterprise deploys with confidence.' },
  { icon: 'lucide:git-branch', title: 'Compose, don\'t rebuild', body: 'Lab breakthroughs plug into our other practices — agents, twins and data pipelines combine.' },
]
</script>

<template>
  <div>
    <!-- immersive dark hero -->
    <section class="relative overflow-hidden border-b border-hairline bg-[#1c1009] text-white">
      <div class="absolute inset-0 opacity-90" style="background: radial-gradient(80% 100% at 80% 0%, rgba(255,174,38,0.22), transparent 55%), radial-gradient(80% 100% at 0% 100%, rgba(251,59,34,0.28), transparent 55%)" />
      <div class="absolute inset-0 bg-grid opacity-30" />
      <div class="pointer-events-none absolute inset-0 opacity-60">
        <ClientOnly><ParticleField :density="80" /></ClientOnly>
      </div>
      <div class="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8">
        <div class="max-w-3xl">
          <div v-reveal class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
            <Icon name="lucide:flask-conical" class="h-4 w-4 text-saffron-400" />
            <span class="font-medium text-ink-100">Frontier Tech Labs</span>
          </div>
          <h1 v-reveal="{ delay: 60 }" class="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
            The future, today.
          </h1>
          <p v-reveal="{ delay: 120 }" class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200 sm:text-xl">
            Our innovation incubator experiments with frontier technologies to build the foundational
            solutions of tomorrow — turning science fiction into tangible business value.
          </p>
          <div v-reveal="{ delay: 180 }" class="mt-9 flex flex-wrap gap-3">
            <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Co-build with the Labs</AppButton>
            <AppButton to="/solutions" variant="outline" size="lg" class="border-white/25 text-white hover:bg-white/10">
              All solutions
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- what we explore -->
    <section class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="Fields of exploration" title="Where we point our curiosity.">
        Four frontier domains where today's research becomes tomorrow's deployed capability.
      </SectionHeading>
      <div class="mt-12 grid gap-5 lg:grid-cols-2">
        <div v-for="(t, i) in labs.topics" :key="t.slug" v-reveal="{ delay: (i % 2) * 90 }">
          <TopicCard :topic="t" :gradient="labs.gradient" />
        </div>
      </div>
    </section>

    <!-- how the lab works -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading center eyebrow="How the Lab works" title="Experiments engineered to ship." />
        <div class="mt-14 grid gap-5 md:grid-cols-3">
          <div v-for="(p, i) in principles" :key="p.title" v-reveal="{ delay: i * 80 }" class="rounded-3xl border border-hairline bg-surface/70 p-7 text-center">
            <span class="mx-auto grid h-14 w-14 place-items-center rounded-2xl text-white" style="background: linear-gradient(140deg, var(--color-saffron-400), var(--color-ember-600))">
              <Icon :name="p.icon" class="h-7 w-7" />
            </span>
            <h3 class="mt-5 font-display text-lg font-semibold">{{ p.title }}</h3>
            <p class="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ p.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Have a moonshot? Let's prototype it."
      subtitle="The fastest way to find out if a frontier idea is real is to build a production-shaped proof of concept. That's what the Labs do."
    />
    <div class="h-20" />
  </div>
</template>
