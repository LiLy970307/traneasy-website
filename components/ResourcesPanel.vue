<template>
  <div class="w-[700px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
    <div class="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
      <p class="text-white font-semibold text-sm tracking-wide uppercase">{{ $t('nav.resources') }}</p>
      <p class="text-blue-100 text-xs mt-0.5">{{ $t('nav.resourcesTagline') }}</p>
    </div>
    <div class="grid grid-cols-2 gap-px bg-slate-100 p-px">
      <NuxtLink v-for="item in resourceItems" :key="item.href" :to="localePath('/' + item.href)"
        class="flex items-start gap-4 p-5 bg-white hover:bg-blue-50 transition-colors group">
        <div class="w-11 h-11 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0 transition-colors">{{ item.icon }}</div>
        <div>
          <div class="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{{ $t('nav.' + item.titleKey) }}</div>
          <div class="text-xs text-slate-500 mt-1 leading-relaxed">{{ $t('nav.' + item.descKey) }}</div>
        </div>
      </NuxtLink>
    </div>
    <div class="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
      <span class="text-xs text-slate-500">{{ $t('nav.viewAllFeatures') }}</span>
      <NuxtLink :to="localePath('/blog')" class="text-xs font-semibold text-blue-600 hover:text-blue-700">{{ $t('nav.exploreAll') }} →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const resourceItems = [
  { icon: '📝', titleKey: 'resBlog', descKey: 'resBlogDesc', href: 'blog' },
  { icon: '❓', titleKey: 'resFaq', descKey: 'resFaqDesc', href: 'faq' },
  { icon: '⚖️', titleKey: 'resCompare', descKey: 'resCompareDesc', href: 'compare' },
  { icon: 'ℹ️', titleKey: 'resAbout', descKey: 'resAboutDesc', href: 'about' },
]
</script>
