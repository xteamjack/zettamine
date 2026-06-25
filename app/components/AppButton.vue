<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'outline' | 'ghost' | 'soft'
    size?: 'sm' | 'md' | 'lg'
    icon?: string
    iconRight?: string
    block?: boolean
  }>(),
  { variant: 'primary', size: 'md' },
)

const tag = computed(() => (props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button'))

const sizes: Record<string, string> = {
  sm: 'h-9 px-4 text-sm gap-1.5',
  md: 'h-11 px-5 text-[0.95rem] gap-2',
  lg: 'h-[3.4rem] px-7 text-base gap-2.5',
}

const variants: Record<string, string> = {
  primary:
    'text-white border border-transparent bg-[linear-gradient(110deg,var(--color-saffron-500),var(--color-ember-600))] shadow-[0_10px_30px_-10px_rgba(251,59,34,0.7)] hover:shadow-[0_16px_44px_-12px_rgba(251,59,34,0.85)] hover:-translate-y-0.5',
  outline:
    'border border-ember-500/40 text-ink-900 dark:text-ink-50 hover:border-ember-500 hover:bg-ember-500/5',
  ghost:
    'border border-transparent text-ink-700 dark:text-ink-200 hover:bg-ink-900/5 dark:hover:bg-white/5',
  soft:
    'border border-transparent bg-saffron-500/10 text-ember-700 dark:text-saffron-300 hover:bg-saffron-500/20',
}
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="group/btn inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember-500"
    :class="[sizes[size], variants[variant], block ? 'w-full' : '']"
  >
    <Icon v-if="icon" :name="icon" class="h-[1.05em] w-[1.05em]" />
    <span><slot /></span>
    <Icon
      v-if="iconRight"
      :name="iconRight"
      class="h-[1.05em] w-[1.05em] transition-transform duration-300 group-hover/btn:translate-x-0.5"
    />
  </component>
</template>
