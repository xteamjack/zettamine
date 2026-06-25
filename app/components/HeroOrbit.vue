<script setup lang="ts">
import { solutions } from '~/data/solutions'

// place the six pillars evenly on the outer orbit
const nodes = solutions.map((s, i) => {
  const angle = (i / solutions.length) * Math.PI * 2 - Math.PI / 2
  return {
    icon: s.icon,
    title: s.menuTitle,
    slug: s.slug,
    gradient: s.gradient,
    x: 50 + Math.cos(angle) * 42,
    y: 50 + Math.sin(angle) * 42,
    delay: i * 0.5,
  }
})
</script>

<template>
  <div class="relative mx-auto aspect-square w-full max-w-[34rem]">
    <!-- rotating rings -->
    <div class="absolute inset-[6%] rounded-full border border-dashed border-saffron-500/25 animate-spin-slow" />
    <div class="absolute inset-[20%] rounded-full border border-ember-500/20 [animation-direction:reverse] animate-spin-slow" />
    <div class="absolute inset-[34%] rounded-full border border-dashed border-saffron-400/20 animate-spin-slow [animation-duration:40s]" />

    <!-- glowing conic halo -->
    <div class="absolute inset-[30%] rounded-full ring-conic opacity-30 blur-2xl animate-spin-slow" />

    <!-- core -->
    <div class="absolute left-1/2 top-1/2 grid h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] text-white shadow-[0_0_60px_-6px_rgba(251,59,34,0.7)]" style="background: linear-gradient(150deg, #FFC555, #FB3B22 55%, #9E150E)">
      <div class="absolute inset-0 rounded-[28%] opacity-40 mix-blend-overlay bg-dots" />
      <span class="relative font-display text-3xl font-bold sm:text-4xl">Z</span>
    </div>
    <div class="absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] ring-conic opacity-60 blur-xl animate-pulse-glow" />

    <!-- orbiting pillar chips -->
    <NuxtLink
      v-for="n in nodes"
      :key="n.slug"
      :to="`/solutions/${n.slug}`"
      class="group absolute z-10 -translate-x-1/2 -translate-y-1/2 animate-float"
      :style="{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${n.delay}s` }"
    >
      <span class="glass flex items-center gap-2 rounded-full border border-hairline px-3 py-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <span class="grid h-7 w-7 place-items-center rounded-full text-white" :style="{ background: `linear-gradient(135deg, ${n.gradient[0]}, ${n.gradient[1]})` }">
          <Icon :name="n.icon" class="h-4 w-4" />
        </span>
        <span class="hidden pr-1 text-xs font-semibold sm:inline">{{ n.title }}</span>
      </span>
    </NuxtLink>
  </div>
</template>
