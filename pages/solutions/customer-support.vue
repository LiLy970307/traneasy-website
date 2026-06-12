<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('useCases.title'), href: localePath('/use-cases') }, { label: $t('useCases.customerSupport') }]" />
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div class="text-6xl mb-6">💬</div>
        <h1 class="text-4xl font-bold text-slate-900 mb-4">{{ $t('useCases.customerSupport') }}</h1>
        <p class="text-xl text-slate-500 mb-8">{{ $t('useCases.customerSupportDesc') }}</p>
        <div class="bg-emerald-50 rounded-2xl p-6 inline-flex items-center gap-2 text-emerald-700 font-bold mb-12">{{ $t('useCases.customerSupportStat') }}</div>
        <div class="prose prose-slate max-w-none text-left">
          <p class="text-slate-600 leading-relaxed">{{ $t('useCases.customerSupportBody') }}</p>
        </div>
      </div>
    </section>
    <Download />
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
