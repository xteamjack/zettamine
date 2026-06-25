<script setup lang="ts">
import { solutions, solutionBySlug } from '~/data/solutions'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const solution = computed(() => solutionBySlug(slug.value))

if (!solution.value) {
  throw createError({ statusCode: 404, statusMessage: 'Solution not found', fatal: true })
}

const others = computed(() => solutions.filter((s) => s.slug !== slug.value))

useHead(() => ({
  title: `${solution.value?.menuTitle} — ZettaMine`,
  meta: [{ name: 'description', content: solution.value?.pitch }],
}))
</script>

<template>
  <div v-if="solution">
    <!-- hero -->
    <section class="relative overflow-hidden border-b border-hairline">
      <AuroraBackground grid intensity="bold" />
      <div class="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
        <NuxtLink to="/solutions" class="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-ember-600 dark:text-ink-400 dark:hover:text-saffron-300">
          <Icon name="lucide:arrow-left" class="h-4 w-4" /> All solutions
        </NuxtLink>
        <div class="mt-6 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3">
              <IconBadge :icon="solution.icon" :gradient="solution.gradient" size="lg" />
              <span class="rounded-full border border-hairline bg-surface/60 px-3 py-1 text-sm font-medium text-ember-600 dark:text-saffron-400">
                {{ solution.menuTitle }}
              </span>
            </div>
            <h1 v-reveal class="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
              {{ solution.heading }}
            </h1>
            <p v-reveal="{ delay: 80 }" class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-200">
              {{ solution.pitch }}
            </p>
          </div>
          <AppButton to="/contact" size="lg" icon-right="lucide:arrow-up-right" class="shrink-0">
            Discuss your case
          </AppButton>
        </div>
      </div>
    </section>

    <!-- outcomes -->
    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div class="grid gap-4 sm:grid-cols-3">
        <div
          v-for="(o, i) in solution.outcomes"
          :key="o"
          v-reveal="{ delay: i * 80 }"
          class="relative overflow-hidden rounded-2xl border border-hairline bg-surface/60 p-6"
        >
          <div class="absolute right-4 top-4 font-display text-3xl font-bold text-ink-200/70 dark:text-ink-700">0{{ i + 1 }}</div>
          <Icon name="lucide:target" class="h-6 w-6 text-ember-500" />
          <p class="mt-4 font-medium leading-snug text-ink-800 dark:text-ink-100">{{ o }}</p>
        </div>
      </div>
    </section>

    <!-- capabilities -->
    <section class="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      <SectionHeading eyebrow="Capabilities" :title="`Inside ${solution.menuTitle}`">
        Each capability is a focused, production-grade practice — deployed standalone or composed
        into an end-to-end solution.
      </SectionHeading>
      <div class="mt-12 grid gap-5 lg:grid-cols-2">
        <div v-for="(t, i) in solution.topics" :id="t.slug" :key="t.slug" v-reveal="{ delay: (i % 2) * 90 }" class="scroll-mt-28">
          <TopicCard :topic="t" :gradient="solution.gradient" />
        </div>
      </div>
    </section>

    <!-- other practices -->
    <section class="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="flex items-end justify-between gap-4">
        <h2 class="font-display text-2xl font-bold sm:text-3xl">Explore other practices</h2>
        <AppButton to="/solutions" variant="ghost" icon-right="lucide:arrow-right" class="shrink-0">All six</AppButton>
      </div>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <NuxtLink
          v-for="o in others"
          :key="o.slug"
          :to="`/solutions/${o.slug}`"
          class="group flex flex-col gap-3 rounded-2xl border border-hairline bg-surface/60 p-5 transition-all hover:-translate-y-1 hover:border-ember-500/30"
        >
          <IconBadge :icon="o.icon" :gradient="o.gradient" size="sm" />
          <span class="font-display text-sm font-semibold leading-snug group-hover:text-ember-600 dark:group-hover:text-saffron-300">{{ o.menuTitle }}</span>
        </NuxtLink>
      </div>
    </section>

    <CtaBand :subtitle="`Have a ${solution.menuTitle.toLowerCase()} challenge? Let's pressure-test it together.`" />
    <div class="h-20" />
  </div>
</template>
