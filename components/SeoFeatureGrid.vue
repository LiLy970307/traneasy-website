<template>
  <section class="relative bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
    <div class="absolute inset-0 opacity-30" :style="{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)', backgroundSize: '32px 32px' }" />
    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ section.title }}</h2>
        <p class="text-slate-500 text-base max-w-2xl mx-auto">{{ section.subtitle }}</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <div v-for="(item, idx) in items" :key="idx"
          class="group bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 hover:-translate-y-1">
          <div class="text-3xl mb-4">{{ item.icon }}</div>
          <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{{ item.title }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { messages } = useLocaleData()

const section = computed(() => messages.value.seoFeatures || {})

const featureKeys = ['voice', 'meeting', 'chat', 'text', 'image', 'doc', 'ai', 'offline', 'multilang', 'entertainment']

const items = computed(() => featureKeys.map(k => ({
  icon: section.value[k]?.icon || '',
  title: section.value[k]?.title || '',
  desc: section.value[k]?.desc || '',
})))
</script>
