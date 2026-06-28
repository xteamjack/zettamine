<script setup lang="ts">
import { values, stats, differentiators, company } from '~/data/site'
import { solutions, allTopicCount } from '~/data/solutions'

useHead({ title: 'About · ZettaMine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      title="An innovation house, not a body shop."
      intro="ZettaMine is an innovation-driven enterprise. We deliver next-generation solutions that drive tangible business value in high-performance sectors. Generic, run-of-the-mill services are not our focus; instead, we specialise in niche, high-value and deeply innovative technology areas."
    >
      <template #actions>
        <AppButton to="/solutions" size="lg" icon-right="lucide:arrow-right">Our solutions</AppButton>
        <AppButton to="/story" variant="outline" size="lg">Read our story</AppButton>
      </template>
    </PageHero>

    <!-- intro split -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div v-reveal>
          <SectionHeading eyebrow="Who we are" title="We pursue the frontier on purpose." />
          <div class="mt-6 space-y-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            <p>
              We are a boutique team of senior engineers, researchers and strategists who would
              rather solve one genuinely hard problem than a hundred ordinary ones. That focus is
              deliberate: the most durable business value lives in the work most firms avoid.
            </p>
            <p>
              From the factory floor to frontier R&amp;D, our six practices share a single DNA.
              Innovation first, outcomes always, and capability that compounds long after we leave.
            </p>
          </div>
        </div>

        <div v-reveal="{ delay: 100 }" class="grid grid-cols-2 gap-3 self-start sm:gap-4">
          <div
            v-for="(s, i) in stats"
            :key="s.label"
            class="rounded-2xl border border-hairline bg-surface/60 p-6"
            :class="i % 2 === 1 ? 'sm:translate-y-5' : ''"
          >
            <p class="font-display text-3xl font-bold text-gradient">
              <StatCounter :value="s.value" :suffix="s.suffix" :plain="s.plain" />
            </p>
            <p class="mt-1 text-sm font-medium">{{ s.label }}</p>
            <p class="mt-0.5 text-xs text-ink-500 dark:text-ink-400">{{ s.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- values -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading center eyebrow="What we believe" title="The principles behind every engagement." />
        <div class="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(v, i) in values" :key="v.title" v-reveal="{ delay: (i % 3) * 70 }">
            <ValueCard v-bind="v" />
          </div>
        </div>
      </div>
    </section>

    <!-- differentiators -->
    <section class="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="The difference" :title="`What ${allTopicCount} capabilities really buy you.`">
        Depth you can't hire off a shelf, applied to problems that actually move the needle.
      </SectionHeading>
      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(d, i) in differentiators"
          :key="d.title"
          v-reveal="{ delay: i * 70 }"
          class="rounded-3xl border border-hairline bg-surface/60 p-6"
        >
          <IconBadge :icon="d.icon" />
          <h3 class="mt-5 font-display text-base font-semibold">{{ d.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{{ d.body }}</p>
        </div>
      </div>

      <!-- practices quick links -->
      <div class="mt-14 flex flex-wrap gap-3">
        <NuxtLink
          v-for="s in solutions"
          :key="s.slug"
          :to="`/solutions/${s.slug}`"
          class="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60 px-4 py-2 text-sm font-medium transition-colors hover:border-ember-500/40 hover:text-ember-600 dark:hover:text-saffron-300"
        >
          <Icon :name="s.icon" class="h-4 w-4 text-ember-500" /> {{ s.menuTitle }}
        </NuxtLink>
      </div>
    </section>

    <CtaBand
      title="Work with a team that builds the future."
      :subtitle="`Reach us directly at ${company.email}, or start a conversation about what you're trying to make real.`"
    />
    <div class="h-20" />
  </div>
</template>
