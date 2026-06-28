<script setup lang="ts">
import { academyStreams, institutions } from '~/data/academy'
useHead({ title: 'Academy · ZettaMine' })

const curriculum = [
  { level: 'Refresher foundations', body: 'A rapid bootcamp that brings everyone up to speed on the core, from problem solving and programming to systems, databases and design thinking.' },
  { level: 'Specialised tracks', body: 'Hands-on tracks in Python and automation, AI and machine learning, data engineering and modern web, each with weekly assignments, labs and a capstone.' },
  { level: 'Market-ready pathway', body: 'Interview preparation, real implementation and portfolio projects, so a learner finishes genuinely employable rather than merely certified.' },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Academy"
      title="Grow the people you cannot simply hire."
      intro="Skilled people are the scarce resource for every smaller firm, and the gap widens as the technology moves. The Academy is where you grow your own talent, keep leaders relevant, and hire with confidence."
    >
      <template #actions>
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Talk to the Academy</AppButton>
        <AppButton to="/solutions/enterprise-upskilling" variant="outline" size="lg">The upskilling pillar</AppButton>
      </template>
    </PageHero>

    <!-- opening narrative -->
    <section class="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <div v-reveal class="space-y-4 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
        <p>
          A smaller firm cannot win a salary war with big tech, so it has to do something smarter.
          It grows its own people, borrows skill through partnerships, and keeps learning as a habit
          rather than an event.
        </p>
        <p>
          The Academy connects four things that usually sit apart, campus talent, executive learning,
          continuous professional upskilling, and hiring, into one pipeline a smaller firm can
          actually use.
        </p>
      </div>
    </section>

    <!-- four streams -->
    <section class="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      <SectionHeading center eyebrow="Four streams" title="Campus to career, and everyone in between." />
      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <div v-for="(s, i) in academyStreams" :key="s.slug" v-reveal="{ delay: (i % 2) * 90 }">
          <AcademyStreamCard :stream="s" :index="i" />
        </div>
      </div>
    </section>

    <!-- institutional tie-ups -->
    <section class="relative mt-16 overflow-hidden border-y border-hairline bg-surface/30">
      <AuroraBackground dots />
      <div class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading center eyebrow="Tie-ups" title="Built with universities and institutes.">
          We co-design with partner campuses so the syllabus matches what industry actually needs.
        </SectionHeading>
        <div class="mt-12 flex flex-wrap justify-center gap-3">
          <span
            v-for="inst in institutions"
            :key="inst.name"
            class="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-5 py-2.5 text-sm font-medium"
          >
            <Icon name="lucide:building-2" class="h-4 w-4 text-ember-500" /> {{ inst.name }}
          </span>
          <span class="inline-flex items-center gap-2 rounded-full border border-dashed border-hairline px-5 py-2.5 text-sm text-ink-500 dark:text-ink-400">
            NIT and IIIT campuses, as partnerships are signed
          </span>
        </div>
      </div>
    </section>

    <!-- curriculum overview -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading eyebrow="Curriculum" title="From foundations to market ready.">
        Our programme draws on the ZettaSkills curriculum, structured so a learner moves from the
        basics to genuinely employable.
      </SectionHeading>
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <div
          v-for="(c, i) in curriculum"
          :key="c.level"
          v-reveal="{ delay: i * 80 }"
          class="rounded-3xl border border-hairline bg-surface/60 p-7"
        >
          <span class="font-mono text-sm text-ink-400">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="mt-3 font-display text-lg font-semibold">{{ c.level }}</h3>
          <p class="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">{{ c.body }}</p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Build your team’s next decade of skill."
      subtitle="Whether you want interns, an executive programme, continuous upskilling or hire-ready talent, the Academy is the place to start."
    />
    <div class="h-20" />
  </div>
</template>
