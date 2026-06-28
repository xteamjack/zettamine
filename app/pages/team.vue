<script setup lang="ts">
import { team, teamByGroup, teamGroups } from '~/data/team'
useHead({ title: 'Team · ZettaMine' })

const anyPlaceholder = team.some((m) => m.placeholder)

const groupTitle: Record<string, string> = {
  Leadership: 'The people steering ZettaMine',
  Advisors: 'Guiding our direction',
  Mentors: 'Coaching our teams and cohorts',
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Team"
      title="You work with the people who actually build."
      intro="When you work with us you work with senior people directly, not a layer between you and the work. Here are the people you will meet."
    />

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div
        v-if="anyPlaceholder"
        v-reveal
        class="mb-12 flex items-start gap-3 rounded-2xl border border-hairline bg-surface/60 p-5 text-sm text-ink-600 dark:text-ink-300"
      >
        <Icon name="lucide:info" class="mt-0.5 h-5 w-5 shrink-0 text-ember-500" />
        <p>
          We are finalising our public team profiles. The roles below show how we are organised, and
          names, photos and full bios will follow shortly.
        </p>
      </div>

      <div v-for="group in teamGroups" :key="group" class="mb-16 last:mb-0">
        <SectionHeading :eyebrow="group" :title="groupTitle[group]" />
        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="(m, i) in teamByGroup(group)" :key="m.name" v-reveal="{ delay: (i % 3) * 70 }">
            <TeamCard :member="m" />
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Want to join us?"
      subtitle="We hire senior, curious people who would rather solve one genuinely hard problem than a hundred ordinary ones."
    />
    <div class="h-20" />
  </div>
</template>
