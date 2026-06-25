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
    <div class="absolute inset-[30%] rounded-full ring-conic opacity-25 blur-2xl animate-spin-slow" />

    <!-- ============ faceted gem core (replaces the old beveled "Z") ============ -->
    <div class="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2">
      <!-- soft ember glow -->
      <div
        class="absolute inset-0 rounded-full blur-2xl animate-pulse-glow"
        style="background: radial-gradient(circle, rgba(251,59,34,0.5), transparent 70%)"
      />
      <!-- slow conic shimmer behind the stone -->
      <div class="absolute inset-[-16%] rounded-full ring-conic opacity-25 blur-2xl animate-spin-slow [animation-duration:34s]" />

      <!-- the cut gem -->
      <svg
        viewBox="0 0 100 100"
        class="relative h-full w-full animate-float drop-shadow-[0_12px_34px_rgba(251,59,34,0.45)]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gemTable" x1="50" y1="26" x2="50" y2="74" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFD27A" />
            <stop offset="0.5" stop-color="#FB6A1E" />
            <stop offset="1" stop-color="#E81E0B" />
          </linearGradient>
        </defs>

        <!-- crown facets (lit from top-left → brighter there, deeper bottom-right) -->
        <polygon points="35,12 65,12 60,28 40,28" fill="#FFB838" />
        <polygon points="65,12 88,35 72,40 60,28" fill="#FB6A1E" />
        <polygon points="88,35 88,65 72,60 72,40" fill="#FB3B22" />
        <polygon points="88,65 65,88 60,72 72,60" fill="#C0140A" />
        <polygon points="65,88 35,88 40,72 60,72" fill="#9E150E" />
        <polygon points="35,88 12,65 28,60 40,72" fill="#E85416" />
        <polygon points="12,65 12,35 28,40 28,60" fill="#FF9E2C" />
        <polygon points="12,35 35,12 40,28 28,40" fill="#FFD27A" />

        <!-- table -->
        <polygon points="40,28 60,28 72,40 72,60 60,72 40,72 28,60 28,40" fill="url(#gemTable)" />
        <!-- lit table facet (top-left) -->
        <polygon points="40,28 50,50 28,40" fill="#ffffff" opacity="0.14" />

        <!-- brilliant-cut star lines from table vertices to centre -->
        <g stroke="#ffffff" stroke-opacity="0.16" stroke-width="0.8">
          <line x1="40" y1="28" x2="50" y2="50" />
          <line x1="60" y1="28" x2="50" y2="50" />
          <line x1="72" y1="40" x2="50" y2="50" />
          <line x1="72" y1="60" x2="50" y2="50" />
          <line x1="60" y1="72" x2="50" y2="50" />
          <line x1="40" y1="72" x2="50" y2="50" />
          <line x1="28" y1="60" x2="50" y2="50" />
          <line x1="28" y1="40" x2="50" y2="50" />
        </g>

        <!-- girdle + table edges -->
        <polygon points="35,12 65,12 88,35 88,65 65,88 35,88 12,65 12,35" fill="none" stroke="#ffffff" stroke-opacity="0.22" stroke-width="1" />
        <polygon points="40,28 60,28 72,40 72,60 60,72 40,72 28,60 28,40" fill="none" stroke="#ffffff" stroke-opacity="0.30" stroke-width="1" />

        <!-- glint -->
        <path d="M42 31 L43.3 35 L47 36 L43.3 37 L42 41 L40.7 37 L37 36 L40.7 35 Z" fill="#ffffff" class="animate-pulse-glow" />
      </svg>
    </div>

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
