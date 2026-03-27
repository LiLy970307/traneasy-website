<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('privacy.title') }]" />
    <section class="py-24">
      <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 class="text-4xl font-bold text-slate-900 mb-8">{{ $t('privacy.title') }}</h1>
        <div class="prose prose-slate max-w-none">
          <p>{{ $t('privacy.intro') }}</p>
          <h2>{{ $t('privacy.collectTitle') }}</h2>
          <p>{{ $t('privacy.collectDesc') }}</p>
          <h2>{{ $t('privacy.securityTitle') }}</h2>
          <p>{{ $t('privacy.securityDesc') }}</p>
          <h2>{{ $t('privacy.contactTitle') }}</h2>
          <p>{{ $t('privacy.contactDesc') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({ title: `${useI18n().t('privacy.title')} - TranEasy` })
</script>
