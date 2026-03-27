<template>
  <main>
    <Hero />
    <ScrollReveal><TrustBar /></ScrollReveal>
    <PlatformUnify />
    <ScrollReveal><Features /></ScrollReveal>
    <ScrollReveal><Advantages /></ScrollReveal>
    <ScrollReveal><HowItWorks /></ScrollReveal>
    <ScrollReveal><Benefits /></ScrollReveal>
    <ScrollReveal><Testimonials /></ScrollReveal>
    <ScrollReveal><Partners /></ScrollReveal>
    <ScrollReveal><UseCasePreview /></ScrollReveal>
    <ScrollReveal><IntegrationPreview /></ScrollReveal>
    <ScrollReveal><PricingPreview /></ScrollReveal>
    <ScrollReveal><SeoFeatureGrid /></ScrollReveal>
    <SeoScenarios />
    <ScrollReveal><FAQAccordion /></ScrollReveal>
    <ScrollReveal><Download /></ScrollReveal>
  </main>
</template>

<script setup lang="ts">
const { messages } = useLocaleData()

const seo = computed(() => messages.value.seo || {})

useHead({
  title: () => seo.value.homeTitle || 'TranEasy - AI Real-time Translation',
  meta: [
    { name: 'description', content: () => seo.value.homeDesc || '' },
    { name: 'keywords', content: '实时翻译软件,实时翻译app,AI实时翻译,语音翻译软件,同声传译软件,自动翻译软件,多语言翻译器,实时翻译工具,翻译神器,免费实时翻译,TranEasy' },
  ],
})
</script>
