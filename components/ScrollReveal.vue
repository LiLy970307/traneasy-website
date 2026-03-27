<template>
  <div
    ref="el"
    :class="className"
    :style="{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(48px)',
      transition: animated ? `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms` : 'none',
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  className?: string
  delay?: number
}>(), {
  className: '',
  delay: 0,
})

const el = ref<HTMLDivElement>()
const visible = ref(true)
const animated = ref(false)

onMounted(() => {
  if (!el.value) return

  const rect = el.value.getBoundingClientRect()

  if (rect.top > window.innerHeight) {
    animated.value = true
    visible.value = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          observer.unobserve(el.value!)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el.value)
    onUnmounted(() => observer.disconnect())
  }
})
</script>
