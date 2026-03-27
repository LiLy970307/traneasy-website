<template>
  <span ref="el">{{ val }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{ target: number; suffix?: string }>()

const el = ref<HTMLSpanElement>()
const val = ref(0)
let started = false

onMounted(() => {
  if (!el.value) return
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !started) {
      started = true
      const duration = 1400
      const steps = 60
      let step = 0
      const timer = setInterval(() => {
        step++
        val.value = Math.round((props.target * step) / steps)
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
    }
  }, { threshold: 0.3 })
  obs.observe(el.value)
  onUnmounted(() => obs.disconnect())
})
</script>
