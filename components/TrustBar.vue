<template>
  <section class="bg-gradient-to-r from-blue-50 to-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-y border-blue-100">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(stat, idx) in stats" :key="idx" class="flex flex-col items-center">
          <div class="text-4xl mb-2">{{ stat.icon }}</div>
          <div class="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{{ stat.value }}</div>
          <div class="text-sm text-slate-600 text-center">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { value: '100+', label: t('trust.languages'), icon: '🌍' },
  { value: t('trust.usersValue'), label: t('trust.users'), icon: '👥' },
  { value: '99.9%', label: t('trust.uptime'), icon: '✅' },
  { value: '<0.5s', label: t('trust.latency'), icon: '⚡' },
])
</script>
