<template>
  <section id="how-it-works" class="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />Quick Start<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('howItWorks.title') }}</h2>
        <p class="text-lg text-slate-500 max-w-xl mx-auto">{{ $t('howItWorks.subtitle') }}</p>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute top-[52px] left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-cyan-200 z-0" />
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div v-for="(key, i) in stepKeys" :key="key" class="relative flex flex-col items-center text-center z-10">
            <div :class="['w-8 h-8 text-white text-sm font-black rounded-full flex items-center justify-center shadow mb-3', stepAccents[i].num]">{{ i + 1 }}</div>
            <div :class="['w-20 h-20 ring-2 rounded-3xl flex items-center justify-center text-4xl shadow-sm mb-6', stepAccents[i].icon, stepAccents[i].ring]">{{ stepIcons[i] }}</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">{{ $t(`howItWorks.steps.${key}.title`) }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-4 max-w-xs">{{ $t(`howItWorks.steps.${key}.desc`) }}</p>
            <div :class="['inline-flex items-center gap-1.5 ring-1 text-slate-600 text-xs font-medium px-3 py-1.5 rounded-full', stepAccents[i].icon, stepAccents[i].ring]">
              <svg class="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              {{ $t(`howItWorks.steps.${key}.detail`) }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 bg-white rounded-3xl border border-blue-100 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p class="text-slate-900 font-bold text-sm">{{ $t('howItWorks.configTime') }}</p>
            <p class="text-slate-400 text-xs">{{ $t('howItWorks.configDesc') }}</p>
          </div>
        </div>
        <div class="flex items-center gap-6 text-sm text-slate-500">
          <span v-for="key in ['reqWin', 'reqSize', 'reqClean']" :key="key" class="hidden sm:block">{{ $t('howItWorks.' + key) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stepKeys = ['install', 'select', 'translate']
const stepIcons = ['⬇️', '🔌', '⚡']
const stepAccents = [
  { ring: 'ring-blue-100', icon: 'bg-blue-50', num: 'bg-blue-600' },
  { ring: 'ring-indigo-100', icon: 'bg-indigo-50', num: 'bg-indigo-600' },
  { ring: 'ring-cyan-100', icon: 'bg-cyan-50', num: 'bg-cyan-600' },
]
</script>
