<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('useCases.title') }]" />
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('useCases.title') }}</h1>
          <p class="text-xl text-slate-500">{{ $t('useCases.subtitle') }}</p>
        </div>
        <UseCasePreview />
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-slate-900 text-center mb-8">{{ $t('useCases.whyTitle') }}</h2>
          <div class="grid sm:grid-cols-3 gap-6">
            <div v-for="i in 3" :key="i" class="bg-blue-50 rounded-2xl p-6 text-center">
              <h3 class="font-bold text-slate-900 mb-2">{{ $t(`useCases.feature${i}Title`) }}</h3>
              <p class="text-slate-500 text-sm">{{ $t(`useCases.feature${i}Desc`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">{{ $t('useCases.ctaTitle') }}</h2>
      <p class="text-blue-100 mb-8">{{ $t('useCases.ctaSubtitle') }}</p>
      <NuxtLink :to="localePath('/') + '#download'" class="bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">{{ $t('useCases.ctaBtn') }}</NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
useHead({
  title: () => t('seo.useCasesTitle'),
  meta: [{ name: 'description', content: () => t('seo.useCasesDesc') }],
})
</script>
