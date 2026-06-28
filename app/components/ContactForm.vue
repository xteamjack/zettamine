<script setup lang="ts">
import { solutions } from '~/data/solutions'
import { company } from '~/data/site'

const form = reactive({ name: '', email: '', company: '', interest: '', message: '' })
const submitted = ref(false)
const errors = reactive<Record<string, string>>({})

const inputClass =
  'w-full rounded-xl border border-hairline bg-surface/70 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:italic placeholder:text-ink-400/70 focus:border-ember-500/60 focus:ring-2 focus:ring-ember-500/20'

function validate() {
  errors.name = form.name.trim() ? '' : 'Please tell us your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'A valid email helps us reply.'
  errors.message = form.message.trim().length > 4 ? '' : 'A line or two about your goal, please.'
  return !errors.name && !errors.email && !errors.message
}

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Project enquiry${form.interest ? `: ${form.interest}` : ''}`)
  const body = encodeURIComponent(
    `Name: ${form.name}\nCompany: ${form.company}\nArea of interest: ${form.interest}\n\n${form.message}`,
  )
  return `mailto:${company.email}?subject=${subject}&body=${body}`
})

function onSubmit() {
  if (!validate()) return
  submitted.value = true
}
</script>

<template>
  <div class="relative overflow-hidden rounded-3xl border border-hairline bg-surface/60 p-6 sm:p-8">
    <Transition
      enter-active-class="transition duration-500"
      enter-from-class="opacity-0 scale-95"
      mode="out-in"
    >
      <!-- success state -->
      <div v-if="submitted" key="done" class="py-10 text-center">
        <span class="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-white" style="background: linear-gradient(140deg, var(--color-saffron-400), var(--color-ember-600))">
          <Icon name="lucide:check" class="h-8 w-8" />
        </span>
        <h3 class="mt-6 font-display text-2xl font-semibold">Thanks, {{ form.name.split(' ')[0] || 'there' }}.</h3>
        <p class="mx-auto mt-2 max-w-sm text-ink-600 dark:text-ink-300">
          Your message is ready to send. We typically reply within one business day.
        </p>
        <div class="mt-7 flex flex-wrap justify-center gap-3">
          <AppButton :href="mailtoHref" icon="lucide:send">Send via email</AppButton>
          <AppButton variant="outline" icon="lucide:rotate-ccw" @click="submitted = false">Edit message</AppButton>
        </div>
      </div>

      <!-- form -->
      <form v-else key="form" class="space-y-5" novalidate @submit.prevent="onSubmit">
        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium">Name</span>
            <input v-model="form.name" :class="inputClass" type="text" placeholder="Your name" />
            <span v-if="errors.name" class="mt-1 block text-xs text-ember-600">{{ errors.name }}</span>
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium">Work email</span>
            <input v-model="form.email" :class="inputClass" type="email" placeholder="you@company.com" />
            <span v-if="errors.email" class="mt-1 block text-xs text-ember-600">{{ errors.email }}</span>
          </label>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium">Company <span class="text-ink-400">(optional)</span></span>
            <input v-model="form.company" :class="inputClass" type="text" placeholder="Company name" />
          </label>
          <label class="block">
            <span class="mb-1.5 block text-sm font-medium">Area of interest</span>
            <select v-model="form.interest" :class="inputClass">
              <option value="">Select a practice…</option>
              <option v-for="s in solutions" :key="s.slug" :value="s.menuTitle">{{ s.menuTitle }}</option>
              <option value="Something else">Something else</option>
            </select>
          </label>
        </div>

        <label class="block">
          <span class="mb-1.5 block text-sm font-medium">What are you trying to make real?</span>
          <textarea v-model="form.message" :class="inputClass" rows="4" placeholder="A line or two about your goal, context or constraints…" />
          <span v-if="errors.message" class="mt-1 block text-xs text-ember-600">{{ errors.message }}</span>
        </label>

        <div class="flex flex-wrap items-center gap-4 pt-1">
          <AppButton size="lg" icon-right="lucide:arrow-up-right">Send message</AppButton>
          <p class="text-sm text-ink-500 dark:text-ink-400">No spam. No sales sequence. A real reply.</p>
        </div>
      </form>
    </Transition>
  </div>
</template>
