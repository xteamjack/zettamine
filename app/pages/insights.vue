<script setup lang="ts">
import { whitepapers } from '~/data/whitepapers'
useHead({ title: 'Insights · ZettaMine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Insights"
      title="Practical research, written for smaller enterprises."
      intro="Our whitepapers take a frontier topic and answer the question that matters to a smaller firm: why does a lean team on a tight budget care, and where does it start without betting the business."
    >
      <template #actions>
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Suggest a topic</AppButton>
      </template>
    </PageHero>

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div
        v-reveal
        class="mb-10 flex items-start gap-3 rounded-2xl border border-hairline bg-surface/60 p-5 text-sm text-ink-600 dark:text-ink-300"
      >
        <Icon name="lucide:info" class="mt-0.5 h-5 w-5 shrink-0 text-ember-500" />
        <p>
          Our first papers are being written. Tell us which would help you most and we will send it
          to you first.
        </p>
      </div>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in whitepapers" :key="p.title" v-reveal="{ delay: (i % 3) * 60 }">
          <WhitepaperCard :paper="p" />
        </div>
      </div>
    </section>

    <CtaBand
      title="Want a paper on your problem?"
      subtitle="Tell us the question you are wrestling with and we will point you to the research, or write it."
    />
    <div class="h-20" />
  </div>
</template>
