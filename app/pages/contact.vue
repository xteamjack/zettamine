<script setup lang="ts">
import { company } from '~/data/site'
useHead({ title: 'Contact · ZettaMine' })

const reachItems = [
  { icon: 'lucide:mail', label: 'General', value: company.email, href: `mailto:${company.email}` },
  { icon: 'lucide:briefcase', label: 'Careers', value: company.careers, href: `mailto:${company.careers}` },
  { icon: 'lucide:phone', label: 'Phone', value: company.phone, href: `tel:${company.phone.replace(/[^+\d]/g, '')}` },
]
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Let's talk."
      intro="Tell us what you're trying to make real. Whether it's a moonshot or a margin problem, we'll tell you honestly what's achievable, and what it's worth."
    />

    <section class="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div v-reveal>
          <ContactForm />
        </div>

        <div v-reveal="{ delay: 100 }" class="space-y-5">
          <div class="rounded-3xl border border-hairline bg-surface/60 p-7">
            <h3 class="font-display text-lg font-semibold">Reach us directly</h3>
            <ul class="mt-5 space-y-4">
              <li v-for="r in reachItems" :key="r.label">
                <a :href="r.href" class="group flex items-center gap-4">
                  <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-saffron-500/10 text-ember-600 dark:text-saffron-400">
                    <Icon :name="r.icon" class="h-5 w-5" />
                  </span>
                  <span>
                    <span class="block text-xs uppercase tracking-wider text-ink-400">{{ r.label }}</span>
                    <span class="font-medium group-hover:text-ember-600 dark:group-hover:text-saffron-300">{{ r.value }}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div class="rounded-3xl border border-hairline bg-surface/60 p-7">
            <h3 class="font-display text-lg font-semibold">Where we are</h3>
            <ul class="mt-4 space-y-2.5 text-ink-600 dark:text-ink-300">
              <li v-for="loc in company.locations" :key="loc" class="flex items-center gap-2.5">
                <Icon name="lucide:map-pin" class="h-4 w-4 text-ember-500" /> {{ loc }}
              </li>
            </ul>
            <div class="mt-6 flex gap-2.5">
              <a
                v-for="s in company.social"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener"
                :aria-label="s.label"
                class="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink-500 transition-colors hover:border-ember-500/40 hover:text-ember-500 dark:text-ink-300"
              >
                <Icon :name="s.icon" class="h-[1.1rem] w-[1.1rem]" />
              </a>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-3xl border border-hairline p-7">
            <div class="absolute inset-0 -z-10 opacity-90" style="background: radial-gradient(120% 100% at 100% 0%, rgba(255,174,38,0.16), transparent 55%), radial-gradient(120% 100% at 0% 100%, rgba(251,59,34,0.16), transparent 55%)" />
            <Icon name="lucide:zap" class="h-7 w-7 text-ember-500" />
            <p class="mt-3 font-display text-lg font-semibold leading-snug">Typical first reply: within one business day.</p>
            <p class="mt-2 text-sm text-ink-600 dark:text-ink-300">You'll talk to the people who actually build, not a sales funnel.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="h-16" />
  </div>
</template>
