<script setup lang="ts">
useHead({ title: 'Life at ZettaMine · ZettaMine' })

// Placeholder stories until real ones arrive from the team.
const stories = [
  {
    quote: 'I joined to work on hard problems with senior people, and that is exactly what I get to do every week.',
    name: 'Engineer',
    role: 'Frontier Tech Labs',
  },
  {
    quote: 'The mentorship is real. My first month here taught me more than my last year anywhere else.',
    name: 'Academy graduate',
    role: 'Now on the delivery team',
  },
  {
    quote: 'We celebrate the wins and learn loudly from the misses. It is a small team that trusts each other.',
    name: 'Designer',
    role: 'Product and brand',
  },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Life at ZettaMine"
      title="Built by people who like hard problems and each other."
      intro="The main thing a boutique sells is its people and its culture. Here is a look at how we work, celebrate and grow together."
    />

    <!-- events gallery -->
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <SectionHeading center eyebrow="Our world" title="Moments from the team.">
        Events, builds, festivals and the small everyday things that make the place ours.
      </SectionHeading>
      <div v-reveal class="mt-12">
        <RotatingGallery />
      </div>
    </section>

    <!-- stories -->
    <section class="relative overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading center eyebrow="In their words" title="Stories from the team." />
        <div
          v-reveal
          class="mx-auto mt-8 max-w-2xl rounded-2xl border border-hairline bg-surface/60 p-5 text-center text-sm text-ink-600 dark:text-ink-300"
        >
          The quotes below are placeholders while we gather real stories and photos from the team.
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <figure
            v-for="(s, i) in stories"
            :key="i"
            v-reveal="{ delay: i * 80 }"
            class="flex h-full flex-col rounded-3xl border border-hairline bg-surface/60 p-7"
          >
            <Icon name="lucide:quote" class="h-7 w-7 text-ember-500" />
            <blockquote class="mt-3 font-display text-lg font-medium leading-snug">{{ s.quote }}</blockquote>
            <figcaption class="mt-auto pt-5 text-sm">
              <span class="font-semibold">{{ s.name }}</span>
              <span class="block text-ink-500 dark:text-ink-400">{{ s.role }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <CtaBand
      title="Like how we work?"
      subtitle="We are always glad to meet curious people. Reach out and tell us what you want to build."
    />
    <div class="h-20" />
  </div>
</template>
