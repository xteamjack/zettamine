<script setup lang="ts">
// Lightweight constellation / neural-network canvas. Client-only.
const props = withDefaults(defineProps<{ density?: number }>(), { density: 64 })

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let ro: ResizeObserver | null = null

interface P { x: number; y: number; vx: number; vy: number; r: number }

onMounted(() => {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let w = 0
  let h = 0
  let points: P[] = []
  const mouse = { x: -999, y: -999 }

  function seed() {
    const count = Math.max(24, Math.round((w * h) / 26000) + props.density / 2)
    points = Array.from({ length: Math.min(count, 110) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 0.6,
    }))
  }

  function resize() {
    const rect = el!.getBoundingClientRect()
    w = rect.width
    h = rect.height
    el!.width = w * dpr
    el!.height = h * dpr
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    seed()
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h)
    for (const p of points) {
      if (!reduce) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      // link nearby points
      for (const q of points) {
        const dx = p.x - q.x
        const dy = p.y - q.y
        const d2 = dx * dx + dy * dy
        if (d2 < 132 * 132) {
          const a = (1 - Math.sqrt(d2) / 132) * 0.5
          ctx!.strokeStyle = `rgba(248,145,10,${a * 0.5})`
          ctx!.lineWidth = 1
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(q.x, q.y)
          ctx!.stroke()
        }
      }
      // mouse glow link
      const mdx = p.x - mouse.x
      const mdy = p.y - mouse.y
      if (mdx * mdx + mdy * mdy < 150 * 150) {
        ctx!.strokeStyle = 'rgba(251,59,34,0.35)'
        ctx!.beginPath()
        ctx!.moveTo(p.x, p.y)
        ctx!.lineTo(mouse.x, mouse.y)
        ctx!.stroke()
      }
    }
    for (const p of points) {
      ctx!.fillStyle = 'rgba(255,174,38,0.9)'
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx!.fill()
    }
    raf = requestAnimationFrame(draw)
  }

  function onMove(e: PointerEvent) {
    const rect = el!.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }
  function onLeave() {
    mouse.x = -999
    mouse.y = -999
  }

  resize()
  draw()
  ro = new ResizeObserver(resize)
  ro.observe(el)
  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)

  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    ro?.disconnect()
    el.removeEventListener('pointermove', onMove)
    el.removeEventListener('pointerleave', onLeave)
  })
})
</script>

<template>
  <canvas ref="canvas" class="h-full w-full" />
</template>
