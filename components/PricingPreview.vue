<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4">
          <span class="w-5 h-px bg-blue-600" />{{ $t('pricing_preview.eyebrow') }}<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ $t('pricing_preview.title') }}</h2>
        <p class="text-slate-500 text-lg max-w-xl mx-auto">{{ $t('pricing_preview.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <!-- Free -->
        <div class="bg-white border-2 border-slate-200 rounded-3xl p-8 flex flex-col">
          <div class="mb-6">
            <span class="text-slate-500 text-sm font-semibold uppercase tracking-wide">{{ $t('pricing_preview.free_name') }}</span>
            <div class="flex items-end gap-1 mt-2 mb-1">
              <span class="text-4xl font-black text-slate-900">{{ $t('pricing_preview.free_price') }}</span>
              <span class="text-slate-400 text-sm mb-1.5">{{ $t('pricing_preview.free_period') }}</span>
            </div>
            <p class="text-slate-400 text-sm">{{ $t('pricing_preview.free_desc') }}</p>
          </div>
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="key in freeFeatures" :key="key" class="flex items-center gap-3 text-slate-600 text-sm">
              <svg class="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              {{ $t('pricing_preview.' + key) }}
            </li>
          </ul>
          <NuxtLink :to="localePath('/') + '#download'" class="block text-center border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold py-3 rounded-full transition-colors">
            {{ $t('pricing_preview.free_cta') }}
          </NuxtLink>
        </div>

        <!-- Pro -->
        <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 flex flex-col relative overflow-hidden shadow-xl shadow-blue-200">
          <div class="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">{{ $t('pricing_preview.pro_badge') }}</div>
          <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-white/5 rounded-full" />
          <div class="mb-6">
            <span class="text-blue-200 text-sm font-semibold uppercase tracking-wide">{{ $t('pricing_preview.pro_name') }}</span>
            <div class="flex items-end gap-1 mt-2 mb-1">
              <span class="text-4xl font-black text-white">{{ $t('pricing_preview.pro_price') }}</span>
              <span class="text-blue-200 text-sm mb-1.5">{{ $t('pricing_preview.pro_period') }}</span>
            </div>
            <p class="text-blue-100 text-sm">{{ $t('pricing_preview.pro_desc') }}</p>
          </div>
          <ul class="space-y-3 mb-8 flex-1">
            <li v-for="key in proFeatures" :key="key" class="flex items-center gap-3 text-blue-50 text-sm">
              <svg class="w-4 h-4 text-cyan-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              {{ $t('pricing_preview.' + key) }}
            </li>
          </ul>
          <NuxtLink :to="localePath('/pricing')" class="block text-center bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 rounded-full transition-colors shadow-sm">
            {{ $t('pricing_preview.pro_cta') }}
          </NuxtLink>
        </div>
      </div>

      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
        <NuxtLink :to="localePath('/pricing')" class="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2">{{ $t('pricing_preview.view_all') }}</NuxtLink>
        <span class="hidden sm:block">·</span>
        <span class="flex items-center gap-1.5">
          <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          {{ $t('pricing_preview.guarantee') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const freeFeatures = ['free_f1', 'free_f2', 'free_f3', 'free_f4']
const proFeatures = ['pro_f1', 'pro_f2', 'pro_f3', 'pro_f4', 'pro_f5', 'pro_f6']
</script>
