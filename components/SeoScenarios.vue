<template>
  <section class="relative bg-[#0d0f1a] py-20 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">{{ section.title }}</h2>
        <p class="text-slate-400 text-base max-w-2xl mx-auto">{{ section.subtitle }}</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, idx) in items" :key="idx"
          class="group bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all duration-300">
          <div class="text-3xl mb-4">{{ item.icon }}</div>
          <h3 class="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{{ item.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ item.desc }}</p>
          <div class="text-xs text-slate-500 font-medium">{{ item.keywords }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { messages } = useLocaleData()

const section = computed(() => messages.value.seoScenarios || {})

const scenarioKeys = ['business', 'travel', 'meeting', 'education', 'social', 'entertainment']

const items = computed(() => scenarioKeys.map(k => ({
  icon: section.value[k]?.icon || '',
  title: section.value[k]?.title || '',
  desc: section.value[k]?.desc || '',
  keywords: section.value[k]?.keywords || '',
})))
</script>
