<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('terms.title') }]" />
    <section class="py-24">
      <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 class="text-4xl font-bold text-slate-900 mb-8">{{ $t('terms.title') }}</h1>
        <div class="prose prose-slate max-w-none">
          <p>{{ $t('terms.intro') }}</p>
          <h2>{{ $t('terms.licenseTitle') }}</h2>
          <p>{{ $t('terms.licenseDesc') }}</p>
          <h2>{{ $t('terms.restrictionsTitle') }}</h2>
          <p>{{ $t('terms.restrictionsDesc') }}</p>
          <h2>{{ $t('terms.disclaimerTitle') }}</h2>
          <p>{{ $t('terms.disclaimerDesc') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: `${useI18n().t('terms.title')} - TranEasy` })
</script>
