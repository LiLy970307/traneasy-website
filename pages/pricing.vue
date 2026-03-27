<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('nav.pricing') }]" />
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('pricing.title') }}</h1>
          <p class="text-xl text-slate-500 max-w-2xl mx-auto">{{ $t('pricing.subtitle') }}</p>
        </div>
        <PricingPreview />
      </div>
    </section>
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.pricingTitle'),
  meta: [{ name: 'description', content: () => t('seo.pricingDesc') }],
})
</script>
