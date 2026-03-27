<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('faq.title') }]" />
    <FAQAccordion :show-all="true" />
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.faqTitle'),
  meta: [{ name: 'description', content: () => t('seo.faqDesc') }],
})
</script>
