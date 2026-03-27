<template>
  <div class="w-[700px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
    <div class="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-4">
      <p class="text-white font-semibold text-sm tracking-wide uppercase">{{ $t('nav.solutions') }}</p>
      <p class="text-blue-100 text-xs mt-0.5">{{ $t('nav.solutionsTagline') }}</p>
    </div>
    <div class="grid grid-cols-2 gap-px bg-slate-100 p-px">
      <NuxtLink v-for="item in solutionItems" :key="item.href + item.titleKey" :to="localePath('/' + item.href)"
        class="flex items-start gap-4 p-5 bg-white hover:bg-indigo-50 transition-colors group">
        <div class="w-11 h-11 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">{{ item.icon }}</div>
        <div>
          <div class="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{{ $t('nav.' + item.titleKey) }}</div>
          <div class="text-xs text-slate-500 mt-1 leading-relaxed">{{ $t('nav.' + item.descKey) }}</div>
        </div>
      </NuxtLink>
    </div>
    <div class="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
      <span class="text-xs text-slate-500">{{ $t('nav.viewAllSolutions') }}</span>
      <NuxtLink :to="localePath('/use-cases')" class="text-xs font-semibold text-indigo-600 hover:text-indigo-700">{{ $t('nav.exploreAll') }} →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const solutionItems = [
  { icon: '🛍️', titleKey: 'sol1Title', descKey: 'sol1Desc', href: 'use-cases/ecommerce' },
  { icon: '🎥', titleKey: 'sol2Title', descKey: 'sol2Desc', href: 'use-cases/meetings' },
  { icon: '📚', titleKey: 'sol3Title', descKey: 'sol3Desc', href: 'use-cases/education' },
  { icon: '💬', titleKey: 'sol4Title', descKey: 'sol4Desc', href: 'use-cases/customer-support' },
  { icon: '🌏', titleKey: 'sol5Title', descKey: 'sol5Desc', href: 'use-cases' },
  { icon: '✈️', titleKey: 'sol6Title', descKey: 'sol6Desc', href: 'use-cases' },
]
</script>
