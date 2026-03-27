<template>
  <section id="features" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />Feature<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('features.title') }}</h2>
        <p class="text-lg text-slate-500 max-w-2xl mx-auto">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(key, i) in featureKeys" :key="key"
          :class="['group', accentClasses[i].bg, 'hover:bg-slate-900 rounded-3xl p-7 transition-all duration-300 cursor-default flex flex-col']">
          <div :class="['w-12 h-12', accentClasses[i].icon, 'group-hover:bg-white/10 group-hover:text-white rounded-2xl flex items-center justify-center text-2xl mb-5 transition-colors']">
            {{ icons[i] }}
          </div>
          <div :class="['inline-flex items-center gap-1', accentClasses[i].badge, 'group-hover:bg-white/10 group-hover:text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 transition-colors']">
            {{ $t(`features.items.${key}.metric`) }}
          </div>
          <h3 class="text-lg font-bold text-slate-900 group-hover:text-white mb-2 transition-colors">
            {{ $t(`features.items.${key}.title`) }}
          </h3>
          <p class="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
            {{ $t(`features.items.${key}.desc`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featureKeys = ['realtime', 'languages', 'scenarios', 'privacy', 'ui', 'platform']
const icons = ['⚡', '🌍', '🔌', '🔒', '✨', '📡']
const accentClasses = [
  { bg: 'bg-blue-50', icon: 'bg-blue-100 text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  { bg: 'bg-indigo-50', icon: 'bg-indigo-100 text-indigo-600', badge: 'bg-indigo-100 text-indigo-700' },
  { bg: 'bg-cyan-50', icon: 'bg-cyan-100 text-cyan-600', badge: 'bg-cyan-100 text-cyan-700' },
  { bg: 'bg-emerald-50', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  { bg: 'bg-violet-50', icon: 'bg-violet-100 text-violet-600', badge: 'bg-violet-100 text-violet-700' },
  { bg: 'bg-orange-50', icon: 'bg-orange-100 text-orange-600', badge: 'bg-orange-100 text-orange-700' },
]
</script>
