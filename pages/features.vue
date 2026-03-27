<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('nav.features') }]" />
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('features.pageTitle') }}</h1>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto">{{ $t('features.pageSubtitle') }}</p>
        </div>
        <Features />
      </div>
    </section>
    <SeoFeatureGrid />
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.featuresTitle'),
  meta: [{ name: 'description', content: () => t('seo.featuresDesc') }],
})
</script>
