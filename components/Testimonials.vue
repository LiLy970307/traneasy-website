<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />Evidence<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('testimonials.title') }}</h2>
        <p class="text-lg text-slate-500">{{ $t('testimonials.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(key, idx) in userKeys" :key="key"
          :class="['bg-white rounded-3xl p-8 flex flex-col ring-1 shadow-sm hover:shadow-lg transition-shadow', accentColors[idx].ring]">
          <div v-if="$t(`testimonials.items.${key}.metric`)"
            :class="['inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border w-fit mb-6', accentColors[idx].metric]">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            {{ $t(`testimonials.items.${key}.metric`) }}
          </div>
          <div class="flex gap-0.5 mb-4">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-slate-600 text-sm leading-relaxed flex-1 mb-6">&ldquo;{{ $t(`testimonials.items.${key}.content`) }}&rdquo;</p>
          <div class="flex items-center gap-3 pt-5 border-t border-slate-100">
            <div :class="['w-11 h-11 bg-gradient-to-br rounded-full flex items-center justify-center flex-shrink-0 shadow-sm', avatarColors[idx]]">
              <span class="text-white font-bold text-sm">{{ $t(`testimonials.items.${key}.name`).charAt(0) }}</span>
            </div>
            <div>
              <p class="text-slate-900 font-semibold text-sm">{{ $t(`testimonials.items.${key}.name`) }}</p>
              <p class="text-slate-500 text-xs">{{ $t(`testimonials.items.${key}.role`) }}</p>
              <p class="text-slate-400 text-xs">{{ $t(`testimonials.items.${key}.company`) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-slate-50 rounded-3xl px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div v-for="s in aggregateStats" :key="s.label" class="text-center">
          <div class="text-2xl mb-1">{{ s.icon }}</div>
          <div class="text-2xl font-black text-slate-900 leading-none mb-1">{{ s.value }}</div>
          <div class="text-slate-500 text-xs">{{ s.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const userKeys = ['user1', 'user2', 'user3']
const avatarColors = ['from-blue-500 to-indigo-500', 'from-emerald-500 to-teal-500', 'from-orange-500 to-amber-500']
const accentColors = [
  { ring: 'ring-blue-100', metric: 'bg-blue-50 text-blue-700 border-blue-200' },
  { ring: 'ring-emerald-100', metric: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { ring: 'ring-orange-100', metric: 'bg-orange-50 text-orange-700 border-orange-200' },
]
const { t } = useI18n()
const aggregateStats = computed(() => [
  { value: '500,000+', label: t('testimonials.statUsers'), icon: '👥' },
  { value: '4.9 ★', label: t('testimonials.statRating'), icon: '⭐' },
  { value: '98%', label: t('testimonials.statRenewal'), icon: '🔄' },
  { value: '3 min', label: t('testimonials.statOnboard'), icon: '🚀' },
])
</script>
