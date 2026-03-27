<template>
  <footer class="bg-slate-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink :to="localePath('/')" class="flex items-center gap-2 mb-4">
            <img :src="'/images/traneasy logo1.svg'" alt="TranEasy" class="h-10 w-auto" />
          </NuxtLink>
          <p class="text-slate-400 text-sm leading-relaxed mb-5">{{ $t('footer.description') }}</p>
          <a href="https://www.traneasy.com.cn" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">www.traneasy.com.cn</a>
        </div>

        <!-- Products -->
        <div>
          <h4 class="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wide">{{ $t('nav.products') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="{ key, href } in productLinks" :key="key">
              <NuxtLink :to="localePath('/' + href)" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.' + key) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Solutions -->
        <div>
          <h4 class="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wide">{{ $t('nav.solutions') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="{ key, href } in solutionLinks" :key="key">
              <NuxtLink :to="localePath('/' + href)" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.' + key) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wide">{{ $t('nav.resources') }}</h4>
          <ul class="space-y-2.5">
            <li v-for="{ key, href } in resourceLinks" :key="key">
              <NuxtLink :to="localePath('/' + href)" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.' + key) }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wide">{{ $t('footer.links') }}</h4>
          <ul class="space-y-2.5">
            <li><NuxtLink :to="localePath('/')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.home') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/integrations')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.integrations') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/pricing')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.pricing') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/login')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('nav.login') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/privacy')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('footer.privacy') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/terms')" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">{{ $t('footer.terms') }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-800 pt-6 pb-4">
        <p class="text-slate-600 text-xs leading-relaxed text-center mb-4">{{ seoText }}</p>
      </div>
      <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-slate-500 text-sm">{{ $t('footer.copyright') }}</p>
        <NuxtLink :to="localePath('/') + '#download'" class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors shadow-sm whitespace-nowrap">
          {{ $t('nav.downloadBtn') }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { messages } = useLocaleData()
const seoText = computed(() => messages.value.footer?.seoText || '')

const productLinks = [
  { key: 'prod1Title', href: 'features#realtime' },
  { key: 'prod2Title', href: 'features#screen' },
  { key: 'prod3Title', href: 'features#meeting' },
  { key: 'prod4Title', href: 'features#ai' },
  { key: 'prod5Title', href: 'features#offline' },
  { key: 'prod6Title', href: 'features#subtitle' },
]

const solutionLinks = [
  { key: 'sol1Title', href: 'use-cases/ecommerce' },
  { key: 'sol2Title', href: 'use-cases/meetings' },
  { key: 'sol3Title', href: 'use-cases/education' },
  { key: 'sol4Title', href: 'use-cases/customer-support' },
  { key: 'sol5Title', href: 'use-cases' },
  { key: 'sol6Title', href: 'use-cases' },
]

const resourceLinks = [
  { key: 'resBlog', href: 'blog' },
  { key: 'resFaq', href: 'faq' },
  { key: 'resCompare', href: 'compare' },
  { key: 'resAbout', href: 'about' },
]
</script>
