<template>
  <header class="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-sm font-inter">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="flex items-center justify-between h-[68px]">

        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2 flex-shrink-0">
          <img :src="'/images/traneasy logo.svg'" alt="TranEasy" class="h-12 w-auto" />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-2 flex-nowrap">
          <NuxtLink :to="localePath('/')" class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0">
            {{ $t('nav.home') }}
          </NuxtLink>

          <!-- Products dropdown — pure CSS hover -->
          <div class="nav-dropdown relative flex-shrink-0">
            <button type="button" class="nav-dropdown-trigger nav-item flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap">
              {{ $t('nav.products') }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200 nav-dropdown-arrow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Hover-safe wrapper: starts at button bottom, contains gap + panel -->
            <div class="nav-dropdown-area">
              <div class="nav-dropdown-panel">
                <ProductsPanel />
              </div>
            </div>
          </div>

          <!-- Solutions dropdown — pure CSS hover -->
          <div class="nav-dropdown relative flex-shrink-0">
            <button type="button" class="nav-dropdown-trigger nav-item flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap">
              {{ $t('nav.solutions') }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200 nav-dropdown-arrow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="nav-dropdown-area">
              <div class="nav-dropdown-panel">
                <SolutionsPanel />
              </div>
            </div>
          </div>

          <NuxtLink :to="localePath('/integrations')" class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0">
            {{ $t('nav.integrations') }}
          </NuxtLink>

          <NuxtLink :to="localePath('/pricing')" class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0">
            {{ $t('nav.pricing') }}
          </NuxtLink>

          <!-- Resources dropdown — pure CSS hover -->
          <div class="nav-dropdown relative flex-shrink-0">
            <button type="button" class="nav-dropdown-trigger nav-item flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap">
              {{ $t('nav.resources') }}
              <svg class="w-3.5 h-3.5 transition-transform duration-200 nav-dropdown-arrow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="nav-dropdown-area">
              <div class="nav-dropdown-panel">
                <ResourcesPanel />
              </div>
            </div>
          </div>

          <div class="w-px h-5 bg-slate-200 mx-2 flex-shrink-0" />

          <!-- Language switcher — pure CSS hover -->
          <div class="lang-dropdown relative flex-shrink-0">
            <button type="button" class="lang-dropdown-trigger flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap">
              <span class="text-base leading-none">{{ currentLang.flag }}</span>
              <svg class="w-3 h-3 flex-shrink-0 transition-transform lang-dropdown-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Hover-safe area for language dropdown -->
            <div class="lang-dropdown-area">
              <div class="lang-dropdown-panel">
                <NuxtLink
                  v-for="lang in languages"
                  :key="lang.code"
                  :to="switchLocalePath(lang.code)"
                  :class="[
                    'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer no-underline',
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
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink :to="localePath('/login')" class="ml-1 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 text-sm font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0">
            {{ $t('nav.login') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/') + '#download'" class="ml-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap flex-shrink-0 max-w-[180px] truncate text-center">
            {{ $t('nav.downloadBtn') }}
          </NuxtLink>
        </nav>

        <!-- Mobile toggle -->
        <div class="flex lg:hidden items-center gap-2">
          <!-- Mobile language — native <details> for touch devices -->
          <details class="mobile-lang-details relative">
            <summary class="flex items-center gap-1.5 text-slate-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
              <span class="text-base leading-none">{{ currentLang.flag }}</span>
              <svg class="w-3 h-3 flex-shrink-0 transition-transform mobile-lang-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <!-- Backdrop: tap outside closes language panel -->
            <div class="fixed inset-0 z-[99]" onclick="this.closest('details').open=false" />
            <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100] py-1">
              <NuxtLink
                v-for="lang in languages"
                :key="'m-' + lang.code"
                :to="switchLocalePath(lang.code)"
                :class="[
                  'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer no-underline',
                  lang.code === locale
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50'
                ]"
              >
                <span class="text-base">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </NuxtLink>
            </div>
          </details>

          <!-- Mobile menu — all content inside <details> so it works without JS -->
          <details class="mobile-menu-details">
            <summary class="p-2 rounded-full text-slate-500 hover:bg-blue-50 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>

            <!-- Backdrop: covers entire screen behind menu, closes menu on tap -->
            <div class="fixed inset-0 top-[68px] z-[98]" onclick="this.closest('details').open=false" />
            <!-- Menu panel positioned below the full header bar -->
            <div class="fixed left-0 right-0 top-[68px] bg-white border-b border-slate-200 shadow-lg z-[99] px-6 pb-4 flex flex-col gap-1 pt-3">
              <NuxtLink :to="localePath('/')" class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium block">
                {{ $t('nav.home') }}
              </NuxtLink>

              <!-- Mobile Products -->
              <details class="mobile-accordion">
                <summary class="flex items-center justify-between px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {{ $t('nav.products') }}
                  <svg class="w-4 h-4 transition-transform accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div class="ml-3 flex flex-col gap-1 pb-1">
                  <NuxtLink v-for="item in productItems" :key="item.href" :to="localePath('/' + item.href)"
                    class="flex items-center gap-2 px-3 py-2 rounded-full text-slate-600 hover:bg-blue-50 text-sm">
                    <span>{{ item.icon }}</span><span>{{ $t('nav.' + item.titleKey) }}</span>
                  </NuxtLink>
                </div>
              </details>

              <!-- Mobile Solutions -->
              <details class="mobile-accordion">
                <summary class="flex items-center justify-between px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {{ $t('nav.solutions') }}
                  <svg class="w-4 h-4 transition-transform accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div class="ml-3 flex flex-col gap-1 pb-1">
                  <NuxtLink v-for="item in solutionItems" :key="item.href + item.titleKey" :to="localePath('/' + item.href)"
                    class="flex items-center gap-2 px-3 py-2 rounded-full text-slate-600 hover:bg-blue-50 text-sm">
                    <span>{{ item.icon }}</span><span>{{ $t('nav.' + item.titleKey) }}</span>
                  </NuxtLink>
                </div>
              </details>

              <NuxtLink :to="localePath('/integrations')" class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm block">
                {{ $t('nav.integrations') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/pricing')" class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm block">
                {{ $t('nav.pricing') }}
              </NuxtLink>

              <!-- Mobile Resources -->
              <details class="mobile-accordion">
                <summary class="flex items-center justify-between px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {{ $t('nav.resources') }}
                  <svg class="w-4 h-4 transition-transform accordion-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div class="ml-3 flex flex-col gap-1 pb-1">
                  <NuxtLink v-for="item in resourceItems" :key="item.href" :to="localePath('/' + item.href)"
                    class="flex items-center gap-2 px-3 py-2 rounded-full text-slate-600 hover:bg-blue-50 text-sm">
                    <span>{{ item.icon }}</span><span>{{ $t('nav.' + item.titleKey) }}</span>
                  </NuxtLink>
                </div>
              </details>

              <NuxtLink :to="localePath('/login')"
                class="mt-2 border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-full text-center block">
                {{ $t('nav.login') }}
              </NuxtLink>
              <NuxtLink :to="localePath('/') + '#download'"
                class="mt-1 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center block">
                {{ $t('nav.downloadBtn') }}
              </NuxtLink>
            </div>
          </details>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

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

const currentLang = computed(() => languages.find(l => l.code === locale.value) ?? languages[0])

const productItems = [
  { icon: '🎙️', titleKey: 'prod1Title', href: 'features#realtime' },
  { icon: '🖥️', titleKey: 'prod2Title', href: 'features#screen' },
  { icon: '🎥', titleKey: 'prod3Title', href: 'features#meeting' },
  { icon: '🤖', titleKey: 'prod4Title', href: 'features#ai' },
  { icon: '📡', titleKey: 'prod5Title', href: 'features#offline' },
  { icon: '💬', titleKey: 'prod6Title', href: 'features#subtitle' },
]

const solutionItems = [
  { icon: '🛍️', titleKey: 'sol1Title', href: 'use-cases/ecommerce' },
  { icon: '🎥', titleKey: 'sol2Title', href: 'use-cases/meetings' },
  { icon: '📚', titleKey: 'sol3Title', href: 'use-cases/education' },
  { icon: '💬', titleKey: 'sol4Title', href: 'use-cases/customer-support' },
  { icon: '🌏', titleKey: 'sol5Title', href: 'use-cases' },
  { icon: '✈️', titleKey: 'sol6Title', href: 'use-cases' },
]

const resourceItems = [
  { icon: '📝', titleKey: 'resBlog', href: 'blog' },
  { icon: '❓', titleKey: 'resFaq', href: 'faq' },
  { icon: '⚖️', titleKey: 'resCompare', href: 'compare' },
  { icon: 'ℹ️', titleKey: 'resAbout', href: 'about' },
]

onMounted(() => {
  // ═══ Fix: macOS Safari/Chrome don't focus <button> on click ═══
  // This makes :focus-within CSS work when user clicks dropdown buttons
  const allTriggers = document.querySelectorAll(
    '.nav-dropdown-trigger, .lang-dropdown-trigger'
  )
  allTriggers.forEach(btn => {
    // On mousedown, force focus so :focus-within activates
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault() // prevent default to control focus manually
      const el = btn as HTMLElement
      // If already focused (dropdown is open), blur to close it
      if (document.activeElement === el) {
        el.blur()
      } else {
        el.focus()
      }
    })
  })

  // Mouse leaves dropdown area → blur button so panel hides
  document.querySelectorAll('.nav-dropdown, .lang-dropdown').forEach(wrapper => {
    wrapper.addEventListener('mouseleave', () => {
      const focused = wrapper.querySelector(':focus') as HTMLElement | null
      if (focused) focused.blur()
    })
  })

  // Click outside any dropdown → blur active trigger to close
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.nav-dropdown') && !target.closest('.lang-dropdown')) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    }
  })


})
</script>

<style scoped>
/* ═══════════════════════════════════════════════════
   NAV DROPDOWN — Pure CSS, hover-safe with no gap
   The trick: .nav-dropdown-area is an invisible box
   that starts at the button bottom and CONTAINS the
   visible panel. Mouse never leaves the hover zone.
   ═══════════════════════════════════════════════════ */

/* Invisible hover bridge + container */
.nav-dropdown .nav-dropdown-area {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding-top: 10px;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

/* The actual visible panel */
.nav-dropdown .nav-dropdown-panel {
  min-width: 700px;
}

/* Show on hover or focus-within */
.nav-dropdown:hover .nav-dropdown-area,
.nav-dropdown:focus-within .nav-dropdown-area {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

/* Rotate arrow */
.nav-dropdown:hover .nav-dropdown-arrow,
.nav-dropdown:focus-within .nav-dropdown-arrow {
  transform: rotate(180deg);
}

/* ═══════════════════════════════════════════════════
   LANGUAGE DROPDOWN — same hover-safe pattern
   ═══════════════════════════════════════════════════ */
.lang-dropdown .lang-dropdown-area {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding-top: 8px;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.lang-dropdown .lang-dropdown-panel {
  width: 12rem;                 /* w-48 */
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  border: 1px solid #f1f5f9;
  overflow: hidden;
  padding: 4px 0;
}

.lang-dropdown:hover .lang-dropdown-area,
.lang-dropdown:focus-within .lang-dropdown-area {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.lang-dropdown:hover .lang-dropdown-arrow,
.lang-dropdown:focus-within .lang-dropdown-arrow {
  transform: rotate(180deg);
}

/* ═══════════════════════════════════════════════════
   MOBILE ACCORDION
   ═══════════════════════════════════════════════════ */
.mobile-accordion[open] .accordion-arrow {
  transform: rotate(180deg);
}

.mobile-lang-details[open] .mobile-lang-arrow {
  transform: rotate(180deg);
}
</style>
