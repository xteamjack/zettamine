<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)
useHead({ title: is404.value ? 'Page not found — Zettamine' : 'Something went wrong — Zettamine' })
</script>

<template>
  <div class="relative grid min-h-screen place-items-center overflow-hidden px-5 text-center">
    <AuroraBackground intensity="bold" grid />
    <div class="relative max-w-lg">
      <NuxtLink to="/" class="inline-flex"><BrandLogo :size="44" /></NuxtLink>
      <p class="mt-10 font-display text-[6rem] font-bold leading-none text-gradient sm:text-[8rem]">
        {{ error?.statusCode || 500 }}
      </p>
      <h1 class="mt-2 font-display text-2xl font-bold sm:text-3xl">
        {{ is404 ? 'This frontier is uncharted.' : 'Something went off-script.' }}
      </h1>
      <p class="mx-auto mt-3 max-w-sm text-ink-600 dark:text-ink-300">
        {{ is404
          ? "The page you're looking for doesn't exist — but plenty of innovation does."
          : 'An unexpected error occurred. Try again, or head back to safe ground.' }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton to="/" icon="lucide:home" @click="clearError({ redirect: '/' })">Back home</AppButton>
        <AppButton to="/solutions" variant="outline" icon-right="lucide:arrow-right">Explore solutions</AppButton>
      </div>
    </div>
  </div>
</template>
