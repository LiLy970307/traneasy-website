<template>
  <section class="bg-gradient-to-b from-slate-50 to-white py-24 px-6 sm:px-8 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />{{ $t('integrations.title') }}<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('integrations.subtitle') }}</h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">{{ $t('integrations.noConfigDesc') }}</p>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        <div v-for="f in featured" :key="f.name" :class="['flex flex-col items-center justify-center p-5 rounded-2xl border-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200', f.color]">
          <div class="text-4xl mb-3">{{ f.icon }}</div>
          <div class="text-sm font-semibold text-slate-800 text-center mb-2">{{ f.name }}</div>
          <span :class="['text-[10px] font-bold px-2 py-0.5 rounded-full', f.badge]">{{ $t('integrations.badgeSupported') }}</span>
        </div>
      </div>
      <div class="bg-white border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm">
        <p class="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">{{ $t('integrations.moreCategories') }}</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="cat in categories" :key="cat.label">
            <p class="text-slate-700 font-semibold text-sm mb-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500" />{{ cat.label }}
            </p>
            <div class="space-y-1.5">
              <div v-for="item in cat.items" :key="item" class="flex items-center gap-2 text-slate-500 text-sm">
                <svg class="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink :to="localePath('/integrations')" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-sm">
          {{ $t('integrations.viewAll') }} →
        </NuxtLink>
        <p class="text-slate-400 text-sm">{{ $t('integrations.platformCount') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const featured = [
  { name: 'Zoom', icon: '📹', color: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  { name: 'Microsoft Teams', icon: '💼', color: 'bg-indigo-50 border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  { name: 'Google Meet', icon: '📅', color: 'bg-teal-50 border-teal-200', badge: 'bg-teal-100 text-teal-700' },
  { name: 'WhatsApp', icon: '💬', color: 'bg-emerald-50 border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  { name: 'WeChat', icon: '🟢', color: 'bg-green-50 border-green-200', badge: 'bg-green-100 text-green-700' },
  { name: 'Telegram', icon: '✈️', color: 'bg-sky-50 border-sky-200', badge: 'bg-sky-100 text-sky-700' },
]
const categories = computed(() => [
  { label: t('integrations.catVideo'), items: ['Zoom', 'Teams', 'Meet', 'Webex', 'Skype'] },
  { label: t('integrations.catChat'), items: ['WhatsApp', 'WeChat', 'Telegram', 'LINE', 'Discord'] },
  { label: t('integrations.catWork'), items: ['Slack', 'Notion', 'Lark', 'DingTalk', 'Feishu'] },
  { label: t('integrations.catEcommerce'), items: ['Shopify', 'Amazon', 'Alibaba', 'Lazada', 'eBay'] },
])
</script>
