<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('nav.integrations') }]" />
    <IntegrationPreview />
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.integrationsTitle'),
  meta: [{ name: 'description', content: () => t('seo.integrationsDesc') }],
})
</script>
