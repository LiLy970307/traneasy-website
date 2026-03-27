<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />{{ $t('advantages.eyebrow') }}<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('advantages.title') }}</h2>
        <p class="text-slate-500 text-lg max-w-2xl mx-auto">{{ $t('advantages.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Speed Card -->
        <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d0f1a] to-[#0f2040] p-8 flex flex-col">
          <div class="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div class="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-6">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            {{ $t('advantages.speed_tag') }}
          </div>
          <div class="mb-4">
            <div class="text-6xl font-black text-white leading-none mb-1">0.3<span class="text-3xl text-blue-400 ml-1">s</span></div>
            <div class="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-3">{{ $t('advantages.speed_title') }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{{ $t('advantages.speed_desc') }}</p>
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div v-for="s in speedStats" :key="s.stat" class="bg-white/5 border border-white/10 rounded-2xl px-3 py-3 text-center">
              <div class="text-white font-bold text-lg leading-none mb-1">{{ $t('advantages.' + s.stat) }}</div>
              <div class="text-slate-500 text-[11px]">{{ $t('advantages.' + s.label) }}</div>
            </div>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-slate-400 text-xs">{{ $t('advantages.speed_highlight') }}</span>
              <span class="text-blue-400 text-xs font-semibold">0.3s ⚡</span>
            </div>
            <div class="space-y-2">
              <div v-for="bar in speedBars" :key="bar.label" class="flex items-center gap-3">
                <span class="text-slate-400 text-[11px] w-24 flex-shrink-0">{{ bar.label }}</span>
                <div class="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div :class="['h-full bg-gradient-to-r rounded-full', bar.color]" :style="{ width: bar.pct + '%' }" />
                </div>
                <span class="text-slate-500 text-[11px] w-8 text-right">{{ bar.time }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Accuracy Card -->
        <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 p-8 flex flex-col">
          <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-200/60 rounded-full blur-3xl pointer-events-none" />
          <div class="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full w-fit mb-6">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {{ $t('advantages.accuracy_tag') }}
          </div>
          <div class="mb-4">
            <div class="text-6xl font-black text-slate-900 leading-none mb-1"><CounterAnim :target="98" suffix=".7%" /></div>
            <div class="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 mb-3">{{ $t('advantages.accuracy_title') }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{{ $t('advantages.accuracy_desc') }}</p>
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div v-for="s in accuracyStats" :key="s.stat" class="bg-white border border-slate-200 rounded-2xl px-3 py-3 text-center shadow-sm">
              <div class="text-slate-900 font-bold text-lg leading-none mb-1">{{ $t('advantages.' + s.stat) }}</div>
              <div class="text-slate-400 text-[11px]">{{ $t('advantages.' + s.label) }}</div>
            </div>
          </div>
          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div class="text-slate-400 text-xs mb-3">{{ $t('advantages.accuracy_highlight') }}</div>
            <div class="space-y-3">
              <div class="flex items-start gap-2">
                <span class="text-[10px] font-semibold text-slate-400 bg-slate-100 rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">{{ $t('advantages.originalLabel') }}</span>
                <span class="text-slate-600 text-sm">The quarterly earnings exceeded market expectations significantly.</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-[10px] font-semibold text-orange-500 bg-orange-50 rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">{{ $t('advantages.normalLabel') }}</span>
                <span class="text-slate-400 text-sm line-through decoration-red-300">{{ $t('advantages.normalTranslation') }}</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-[10px] font-semibold text-blue-600 bg-blue-50 rounded px-1.5 py-0.5 flex-shrink-0 mt-0.5">TranEasy</span>
                <span class="text-slate-800 text-sm font-medium">{{ $t('advantages.traneasyTranslation') }}<span class="ml-1 text-green-500 text-xs">{{ $t('advantages.traneasyNative') }}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink :to="localePath('/') + '#download'" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-blue-200">
          {{ $t('advantages.cta') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const speedStats = [
  { stat: 'speed_stat1', label: 'speed_stat1_label' },
  { stat: 'speed_stat2', label: 'speed_stat2_label' },
  { stat: 'speed_stat3', label: 'speed_stat3_label' },
]
const accuracyStats = [
  { stat: 'accuracy_stat1', label: 'accuracy_stat1_label' },
  { stat: 'accuracy_stat2', label: 'accuracy_stat2_label' },
  { stat: 'accuracy_stat3', label: 'accuracy_stat3_label' },
]
const speedBars = [
  { label: 'TranEasy', pct: 12, color: 'from-blue-500 to-cyan-400', time: '0.3s' },
  { label: 'Competitor A', pct: 55, color: 'from-slate-600 to-slate-500', time: '1.4s' },
  { label: 'Competitor B', pct: 78, color: 'from-slate-700 to-slate-600', time: '2.0s' },
]
</script>
