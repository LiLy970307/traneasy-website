<template>
  <div ref="wrapRef" class="relative" @mouseenter="enter" @mouseleave="leave">
    <a
      href="#"
      @click.prevent="toggle"
      class="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 cursor-pointer select-none"
    >
      {{ label }}
      <svg :class="['w-3.5 h-3.5 transition-transform duration-200', open ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
      </svg>
    </a>

    <template v-if="open">
      <!-- invisible hover-bridge -->
      <div class="absolute top-full left-1/2 -translate-x-1/2 w-[700px] h-3 z-40" />
      <!-- panel -->
      <div ref="panelRef" class="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-50">
        <slot />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()

const open = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null
const wrapRef = ref<HTMLDivElement>()
const panelRef = ref<HTMLDivElement>()

const toggle = () => {
  open.value = !open.value
}

const enter = () => {
  if (timer) clearTimeout(timer)
  open.value = true
}

const leave = () => {
  timer = setTimeout(() => { open.value = false }, 130)
}

const onDocClick = (e: Event) => {
  if (wrapRef.value && !wrapRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick, true)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocClick, true)
})

watch(open, (val) => {
  if (val) {
    nextTick(() => {
      const panel = panelRef.value
      if (!panel) return
      panel.style.transform = ''
      const rect = panel.getBoundingClientRect()
      const overflow = rect.right - window.innerWidth + 16
      if (overflow > 0) {
        panel.style.transform = `translateX(calc(-50% - ${overflow}px))`
      }
    })
  }
})
</script>
