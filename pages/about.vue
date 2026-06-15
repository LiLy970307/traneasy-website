<template>
  <main class="pt-[68px]">
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('about.title') }}</h1>
        </div>
        <div class="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">{{ $t('about.missionTitle') }}</h2>
            <p class="text-lg text-slate-600 leading-relaxed">{{ $t('about.mission') }}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-4">{{ $t('about.storyTitle') }}</h2>
            <p class="text-slate-600 leading-relaxed">{{ $t('about.story') }}</p>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ $t('about.valuesTitle') }}</h2>
            <div class="grid sm:grid-cols-3 gap-6">
              <div v-for="i in 3" :key="i" class="bg-blue-50 rounded-2xl p-6">
                <h3 class="font-bold text-slate-900 mb-2">{{ $t(`about.value${i}`) }}</h3>
                <p class="text-slate-500 text-sm">{{ $t(`about.value${i}Desc`) }}</p>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ $t('about.statsTitle') }}</h2>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div v-for="i in 4" :key="i" class="text-center">
                <div class="text-3xl font-black text-blue-600">{{ $t(`about.stat${i}`) }}</div>
                <div class="text-sm text-slate-500">{{ $t(`about.stat${i}Label`) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.aboutTitle'),
  meta: [{ name: 'description', content: () => t('seo.aboutDesc') }],
})
</script>
