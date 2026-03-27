<template>
  <section id="download" class="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="flex items-center gap-3 mb-6">
            <div class="flex -space-x-2">
              <div v-for="(a, i) in ['👨🏻','👩🏼','👨🏽','👩🏾','👨🏿']" :key="i" class="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-sm">{{ a }}</div>
            </div>
            <span class="text-blue-100 text-sm"><span class="text-white font-bold">500,000+</span> {{ t('download.usersUsing') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">{{ $t('download.title') }}</h2>
          <p class="text-blue-100 text-lg mb-8 leading-relaxed">{{ $t('download.subtitle') }}</p>
          <a href="#" class="inline-flex items-center gap-3 bg-white hover:bg-blue-50 active:scale-95 text-blue-700 font-bold px-8 py-4 rounded-full shadow-xl transition-all text-lg mb-6 w-full sm:w-auto justify-center sm:justify-start">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>
            {{ $t('download.btn') }}
          </a>
          <div class="flex flex-wrap gap-4 text-blue-200 text-sm">
            <span v-for="badge in trustBadges" :key="badge.text" class="flex items-center gap-1.5"><span>{{ badge.icon }}</span>{{ badge.text }}</span>
          </div>
        </div>

        <div class="flex flex-col gap-5">
          <div class="grid grid-cols-3 gap-4">
            <div v-for="s in dlStats" :key="s.label" class="bg-white/10 border border-white/20 rounded-2xl p-4 text-center">
              <div class="text-white font-black text-xl leading-none mb-1">{{ s.value }}</div>
              <div class="text-blue-200 text-xs">{{ s.label }}</div>
            </div>
          </div>
          <div class="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-sm">
            <div class="flex items-center gap-1.5 mb-4">
              <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div class="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span class="ml-2 text-white/50 text-xs">TranEasy v2.4.1</span>
            </div>
            <div class="space-y-3">
              <div v-for="(msg, i) in previewMsgs" :key="i" class="bg-white/10 rounded-xl px-4 py-3">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-white/60 text-[11px]">{{ msg.from }}</span>
                  <span class="text-emerald-400 text-[11px]">⚡ {{ msg.delay }}</span>
                </div>
                <p class="text-white/80 text-xs mb-1">{{ msg.text }}</p>
                <p class="text-blue-200 text-xs font-medium">→ {{ msg.translated }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const trustBadges = computed(() => [
  { icon: '✓', text: t('download.freeNote') },
  { icon: '✓', text: t('download.version') },
  { icon: '🛡️', text: t('download.trustNote') },
])

const dlStats = computed(() => [
  { value: t('download.stat1'), label: t('download.stat1Label') },
  { value: t('download.stat2'), label: t('download.stat2Label') },
  { value: t('download.stat3'), label: t('download.stat3Label') },
])

const previewMsgs = computed(() => [
  { from: '🇺🇸 EN', text: 'The deal is confirmed for next Monday.', translated: t('download.previewTranslated'), delay: '0.28s' },
  { from: '🇯🇵 JA', text: '来週月曜日に取引が確定しました。', translated: t('download.previewTranslated'), delay: '0.31s' },
])
</script>
