<template>
  <div ref="wrapRef" class="relative">
    <a
      href="#"
      @click.prevent="toggle"
      class="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer select-none"
    >
      <span class="text-base leading-none">{{ current.flag }}</span>
      <span class="hidden sm:inline max-w-[80px] truncate">{{ current.label }}</span>
      <svg :class="['w-3 h-3 flex-shrink-0 transition-transform', open ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </a>

    <div v-if="open" class="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100] py-1">
      <button
        v-for="lang in languages"
        :key="lang.code"
        @click="switchLocale(lang.code)"
        type="button"
        :class="[
          'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer',
          lang.code === locale
            ? 'text-blue-600 font-semibold bg-blue-50'
            : 'text-slate-600 hover:bg-slate-50'
        ]"
      >
        <span class="text-base">{{ lang.flag }}</span>
        <span>{{ lang.label }}</span>
        <svg v-if="lang.code === locale" class="w-3.5 h-3.5 ml-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const languages = [
  { code: 'zh', label: '简体中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', label: 'ภาษาไทย', flag: '🇹🇭' },
]

const open = ref(false)
const wrapRef = ref<HTMLDivElement>()

const current = computed(() => languages.find(l => l.code === locale.value) ?? languages[0])

const toggle = () => {
  open.value = !open.value
}

const switchLocale = (code: string) => {
  open.value = false
  const path = switchLocalePath(code)
  if (path) router.push(path)
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
</script>
