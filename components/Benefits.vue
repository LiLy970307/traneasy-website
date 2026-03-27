<template>
  <section class="bg-slate-50 py-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />{{ $t('benefits.eyebrow') }}<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('benefits.title') }}</h2>
        <p class="text-slate-500 text-lg max-w-2xl mx-auto">{{ $t('benefits.subtitle') }}</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="card in cardKeys" :key="card.title"
          :class="['bg-white rounded-3xl p-6 flex flex-col ring-1 border shadow-sm hover:shadow-md transition-shadow', accentMap[card.accent].ring, accentMap[card.accent].border]">
          <div class="text-4xl mb-4">{{ $t('benefits.' + card.icon) }}</div>
          <div :class="['text-3xl font-black leading-none mb-1', accentMap[card.accent].metric]">{{ $t('benefits.' + card.metric) }}</div>
          <div class="text-slate-400 text-xs mb-4">{{ $t('benefits.' + card.metricLabel) }}</div>
          <h3 class="text-slate-900 font-bold text-base mb-2">{{ $t('benefits.' + card.title) }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{{ $t('benefits.' + card.desc) }}</p>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5 bg-slate-100 text-slate-500">Before</span>
              <span class="text-slate-400 text-xs leading-relaxed">{{ $t('benefits.' + card.before) }}</span>
            </div>
            <div class="flex items-start gap-2">
              <span :class="['text-[10px] font-semibold px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5', accentMap[card.accent].badge]">After</span>
              <span class="text-slate-700 text-xs leading-relaxed font-medium">{{ $t('benefits.' + card.after) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p class="text-white font-bold text-xl mb-1">{{ $t('benefits.ctaTitle') }}</p>
          <p class="text-blue-100 text-sm">{{ $t('benefits.ctaDesc') }}</p>
        </div>
        <NuxtLink :to="localePath('/') + '#download'" class="flex-shrink-0 bg-white hover:bg-blue-50 text-blue-600 font-bold px-8 py-3 rounded-full transition-colors shadow-sm whitespace-nowrap">
          {{ $t('benefits.ctaBtn') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const cardKeys = [
  { icon: 'b1_icon', title: 'b1_title', desc: 'b1_desc', metric: 'b1_metric', metricLabel: 'b1_metric_label', before: 'b1_before', after: 'b1_after', accent: 'emerald' as const },
  { icon: 'b2_icon', title: 'b2_title', desc: 'b2_desc', metric: 'b2_metric', metricLabel: 'b2_metric_label', before: 'b2_before', after: 'b2_after', accent: 'blue' as const },
  { icon: 'b3_icon', title: 'b3_title', desc: 'b3_desc', metric: 'b3_metric', metricLabel: 'b3_metric_label', before: 'b3_before', after: 'b3_after', accent: 'violet' as const },
  { icon: 'b4_icon', title: 'b4_title', desc: 'b4_desc', metric: 'b4_metric', metricLabel: 'b4_metric_label', before: 'b4_before', after: 'b4_after', accent: 'orange' as const },
]

const accentMap = {
  emerald: { badge: 'bg-emerald-100 text-emerald-700', metric: 'text-emerald-600', ring: 'ring-emerald-100', border: 'border-emerald-200' },
  blue: { badge: 'bg-blue-100 text-blue-700', metric: 'text-blue-600', ring: 'ring-blue-100', border: 'border-blue-200' },
  violet: { badge: 'bg-violet-100 text-violet-700', metric: 'text-violet-600', ring: 'ring-violet-100', border: 'border-violet-200' },
  orange: { badge: 'bg-orange-100 text-orange-700', metric: 'text-orange-600', ring: 'ring-orange-100', border: 'border-orange-200' },
}
</script>
