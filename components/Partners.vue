<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <p class="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">{{ $t('partners.eyebrow') }}</p>
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('partners.title') }}</h2>
        <p class="text-lg text-slate-500 max-w-xl mx-auto">{{ $t('partners.subtitle') }}</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
        <div v-for="p in partners" :key="p.name" :class="[p.bg, 'rounded-2xl flex flex-col items-center justify-center gap-2 py-6 px-3 hover:scale-105 transition-transform duration-200 cursor-default']">
          <span class="text-3xl">{{ p.logo }}</span>
          <span :class="['text-xs font-semibold text-center', p.text]">{{ p.name }}</span>
        </div>
      </div>
      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
        <div v-for="s in stats" :key="s.labelKey" class="flex flex-col items-center justify-center py-8 px-4 gap-1">
          <span class="text-3xl sm:text-4xl font-bold text-blue-600">{{ s.value }}</span>
          <span class="text-sm text-slate-500 text-center">{{ $t('partners.' + s.labelKey) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const partners = [
  { name: 'Zoom', logo: '🎥', bg: 'bg-blue-50', text: 'text-blue-700' },
  { name: 'Microsoft Teams', logo: '👥', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  { name: 'Google Meet', logo: '📹', bg: 'bg-green-50', text: 'text-green-700' },
  { name: 'Amazon', logo: '📦', bg: 'bg-orange-50', text: 'text-orange-700' },
  { name: 'Shopify', logo: '🏪', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  { name: 'Slack', logo: '💬', bg: 'bg-purple-50', text: 'text-purple-700' },
  { name: 'Notion', logo: '📝', bg: 'bg-slate-100', text: 'text-slate-700' },
  { name: 'Alibaba', logo: '🎁', bg: 'bg-yellow-50', text: 'text-yellow-700' },
  { name: 'Windows 10/11', logo: '🪟', bg: 'bg-sky-50', text: 'text-sky-700' },
  { name: 'Chrome', logo: '🌐', bg: 'bg-red-50', text: 'text-red-700' },
]
const stats = [
  { value: '500,000+', labelKey: 'stat1' },
  { value: '100+', labelKey: 'stat2' },
  { value: '50+', labelKey: 'stat3' },
  { value: '4.9★', labelKey: 'stat4' },
]
</script>
