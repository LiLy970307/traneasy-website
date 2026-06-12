<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('useCases.title'), href: localePath('/use-cases') }, { label: $t('useCases.meetings') }]" />
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div class="text-6xl mb-6">🎥</div>
        <h1 class="text-4xl font-bold text-slate-900 mb-4">{{ $t('useCases.meetings') }}</h1>
        <p class="text-xl text-slate-500 mb-8">{{ $t('useCases.meetingsDesc') }}</p>
        <div class="bg-blue-50 rounded-2xl p-6 inline-flex items-center gap-2 text-blue-700 font-bold mb-12">{{ $t('useCases.meetingsStat') }}</div>
        <div class="prose prose-slate max-w-none text-left">
          <p class="text-slate-600 leading-relaxed">{{ $t('useCases.meetingsBody') }}</p>
        </div>
      </div>
    </section>
    <Download />
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
