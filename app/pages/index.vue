<script setup lang="ts">
import { solutions } from '~/data/solutions'
import { stats, differentiators, approachSteps, industries, company } from '~/data/site'

const marqueeItems = solutions.flatMap((s) => s.topics.map((t) => t.title))

useHead({
  title: 'ZettaMine · Niche, High-Value, Deeply Innovative Technology',
})
</script>

<template>
  <div>
    <!-- ============================ HERO ============================ -->
    <section class="relative overflow-hidden">
      <AuroraBackground intensity="bold" grid />
      <div class="pointer-events-none absolute inset-0 -z-[5] opacity-70">
        <ClientOnly><ParticleField /></ClientOnly>
      </div>

      <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28 lg:pt-24">
        <div class="relative">
          <div v-reveal class="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-1.5 text-sm backdrop-blur">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-ember-500" />
            </span>
            <span class="font-medium text-ink-600 dark:text-ink-200">The innovation-driven enterprise</span>
          </div>

          <h1 v-reveal="{ delay: 60 }" class="mt-6 font-display text-[2.2rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.2rem]">
            We build what's<br />
            <span class="text-gradient">next</span>, not normal.
          </h1>

          <p v-reveal="{ delay: 130 }" class="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-ink-200 sm:text-xl">
            ZettaMine is a boutique technology &amp; SaaS company engineering niche, high-value
            solutions across Industrial AI, cognitive ERP, frontier R&amp;D, data
            services and beyond, for high-performance sectors where generic services fall short.
          </p>

          <div v-reveal="{ delay: 200 }" class="mt-9 flex flex-wrap items-center gap-3">
            <AppButton to="/solutions" size="lg" icon-right="lucide:arrow-right">Explore solutions</AppButton>
            <AppButton to="/approach" variant="outline" size="lg" icon="lucide:compass">How we work</AppButton>
          </div>

          <dl v-reveal="{ delay: 260 }" class="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-7">
            <div v-for="s in stats.slice(0, 3)" :key="s.label">
              <dt class="font-display text-2xl font-bold text-gradient sm:text-3xl">
                <StatCounter :value="s.value" :suffix="s.suffix" :plain="s.plain" />
              </dt>
              <dd class="mt-1 text-xs leading-snug text-ink-500 dark:text-ink-400">{{ s.label }}</dd>
            </div>
          </dl>
        </div>

        <div v-reveal="{ delay: 120 }" class="relative">
          <HeroOrbit />
        </div>
      </div>

      <!-- capability marquee -->
      <div class="relative border-y border-hairline bg-surface/30 py-5 backdrop-blur-sm">
        <p class="mb-3 px-5 text-center text-xs uppercase tracking-[0.2em] text-ink-400 sm:px-8">
          Specialised capabilities across the frontier
        </p>
        <MarqueeRow :items="marqueeItems" />
      </div>
    </section>

    <!-- ====================== SOLUTIONS GRID ====================== -->
    <section class="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="What we do" title="Six pillars. One philosophy.">
          We deliberately specialise in niche, high-value technology areas. Each is a deep practice,
          and all share a single innovation-first DNA.
        </SectionHeading>
        <AppButton to="/solutions" variant="ghost" icon-right="lucide:arrow-right" class="shrink-0 self-start md:self-end">
          All solutions
        </AppButton>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(s, i) in solutions" :key="s.slug" v-reveal="{ delay: (i % 3) * 80 }">
          <SolutionCard :solution="s" :index="i" />
        </div>
      </div>
    </section>

    <!-- ====================== DIFFERENTIATORS ====================== -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow="Why ZettaMine" title="A boutique built for the hard problems.">
          Most firms chase volume. We chase the frontier, the niche, defensible work where deep
          expertise compounds into outcomes others can't reach.
        </SectionHeading>

        <div class="grid gap-5 sm:grid-cols-2">
          <div
            v-for="(d, i) in differentiators"
            :key="d.title"
            v-reveal="{ delay: (i % 2) * 90 }"
            class="group rounded-3xl border border-hairline bg-surface/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-ember-500/5"
          >
            <IconBadge :icon="d.icon" size="lg" />
            <h3 class="mt-5 font-display text-lg font-semibold">{{ d.title }}</h3>
            <p class="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ d.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= APPROACH ========================= -->
    <section class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading center eyebrow="How we work" title="A low-risk path from idea to impact.">
        A repeatable delivery rhythm that de-risks innovation. Outcome first, prototype fast,
        build cleanly alongside your core, then enable your teams to carry it forward.
      </SectionHeading>
      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(step, i) in approachSteps" :key="step.no" v-reveal="{ delay: i * 80 }">
          <StepCard v-bind="step" />
        </div>
      </div>
    </section>

    <!-- ====================== LABS SPOTLIGHT ====================== -->
    <section class="mx-auto max-w-7xl px-5 sm:px-8">
      <div v-reveal class="relative overflow-hidden rounded-[2rem] border border-hairline">
        <div class="absolute inset-0 -z-10 bg-[#1c1009]" />
        <div class="absolute inset-0 -z-10 opacity-80" style="background: radial-gradient(90% 120% at 85% 10%, rgba(255,174,38,0.22), transparent 55%), radial-gradient(80% 120% at 10% 90%, rgba(251,59,34,0.25), transparent 55%)" />
        <div class="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div class="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div class="text-white">
            <span class="eyebrow text-saffron-400">Frontier Tech Labs</span>
            <h2 class="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Our innovation incubator turns science fiction into shipping software.
            </h2>
            <p class="mt-5 max-w-lg text-lg leading-relaxed text-ink-200">
              Autonomous agents, cognitive digital twins, BCI and quantum-inspired optimisation. We
              experiment at the edge so your enterprise can deploy with confidence.
            </p>
            <AppButton to="/labs" variant="primary" size="lg" class="mt-8" icon-right="lucide:arrow-up-right">
              Step inside the Labs
            </AppButton>
          </div>
          <div class="relative">
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(s, i) in solutions.slice(2, 4)"
                :key="s.slug"
                class="glass rounded-2xl border border-white/10 p-5"
                :class="i === 1 ? 'translate-y-6' : ''"
              >
                <IconBadge :icon="s.icon" :gradient="s.gradient" />
                <p class="mt-4 font-display font-semibold text-white">{{ s.menuTitle }}</p>
                <p class="mt-1 text-sm text-ink-300">{{ s.tagline }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================== INDUSTRIES ====================== -->
    <section class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading center eyebrow="Where we work" title="Built for high-performance sectors." />
      <div class="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        <div
          v-for="(ind, i) in industries"
          :key="ind.label"
          v-reveal="{ delay: (i % 6) * 60 }"
          class="flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface/50 px-4 py-7 text-center transition-colors hover:border-ember-500/30"
        >
          <span class="grid h-12 w-12 place-items-center rounded-xl bg-saffron-500/10 text-ember-600 dark:text-saffron-400">
            <Icon :name="ind.icon" class="h-6 w-6" />
          </span>
          <span class="text-sm font-medium leading-snug text-ink-700 dark:text-ink-200">{{ ind.label }}</span>
        </div>
      </div>
    </section>

    <!-- ====================== CLIENTELE ====================== -->
    <section class="mx-auto max-w-7xl px-5 pb-4 sm:px-8">
      <SectionHeading center eyebrow="Clientele" title="Trusted by teams that build at scale." />
      <div v-reveal class="mt-12">
        <ClienteleWall />
      </div>
    </section>

    <div class="h-20" />
    <CtaBand />
    <div class="h-20" />
  </div>
</template>
