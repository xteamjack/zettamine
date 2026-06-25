<script setup lang="ts">
withDefaults(
  defineProps<{ grid?: boolean; dots?: boolean; intensity?: 'soft' | 'bold' }>(),
  { intensity: 'soft' },
)
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <!-- drifting saffron / ember light fields -->
    <div
      class="absolute -left-[12%] -top-[18%] h-[42rem] w-[42rem] rounded-full blur-[120px] animate-aurora"
      :style="{ background: 'radial-gradient(circle, rgba(255,174,38,0.55), transparent 62%)', opacity: intensity === 'bold' ? 0.7 : 0.42 }"
    />
    <div
      class="absolute -right-[14%] top-[6%] h-[40rem] w-[40rem] rounded-full blur-[130px] animate-aurora [animation-delay:-7s]"
      :style="{ background: 'radial-gradient(circle, rgba(251,59,34,0.5), transparent 60%)', opacity: intensity === 'bold' ? 0.66 : 0.4 }"
    />
    <div
      class="absolute bottom-[-22%] left-[28%] h-[38rem] w-[38rem] rounded-full blur-[140px] animate-aurora [animation-delay:-13s]"
      :style="{ background: 'radial-gradient(circle, rgba(192,20,10,0.42), transparent 62%)', opacity: intensity === 'bold' ? 0.6 : 0.34 }"
    />
    <div v-if="grid" class="absolute inset-0 bg-grid" />
    <div v-if="dots" class="absolute inset-0 bg-dots opacity-60" />
  </div>
</template>
