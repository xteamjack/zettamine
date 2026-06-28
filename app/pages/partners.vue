<script setup lang="ts">
import { partners } from '~/data/partners'
useHead({ title: 'Partners · ZettaMine' })
</script>

<template>
  <div>
    <PageHero
      eyebrow="Partners"
      title="A focused ecosystem, so a smaller client reaches further."
      intro="We work with a focused set of technology and data partners so a smaller client gets the reach of a much larger firm, without the overhead of one."
    >
      <template #actions>
        <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right">Become a partner</AppButton>
      </template>
    </PageHero>

    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="(p, i) in partners" :key="p.slug" v-reveal="{ delay: (i % 3) * 80 }">
          <PartnerCard :partner="p" />
        </div>

        <!-- honest placeholder for partners still to come -->
        <div v-reveal class="flex h-full flex-col items-start rounded-3xl border border-dashed border-hairline bg-surface/40 p-7">
          <span class="grid h-12 w-12 place-items-center rounded-xl bg-saffron-500/10 text-ember-600 dark:text-saffron-400">
            <Icon name="lucide:plus" class="h-6 w-6" />
          </span>
          <h3 class="mt-4 font-display text-lg font-semibold">More to follow</h3>
          <p class="mt-2 text-[0.95rem] leading-relaxed text-ink-600 dark:text-ink-300">
            We are growing our ecosystem carefully. If you build something that complements our work,
            we would like to hear from you.
          </p>
          <NuxtLink to="/contact" class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ember-600 dark:text-saffron-400">
            Talk to us <Icon name="lucide:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaBand
      title="Build with us."
      subtitle="Become a partner and help smaller enterprises reach further than their size suggests."
    />
    <div class="h-20" />
  </div>
</template>
