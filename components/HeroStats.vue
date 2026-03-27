<template>
  <section class="relative bg-white py-16 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60" />
    <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
        <div v-for="(stat, idx) in stats" :key="idx"
          class="group flex flex-col items-center text-center px-4 py-6 rounded-2xl transition-all duration-300 hover:bg-blue-50/60 hover:shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-2xl mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110"
            :class="stat.bgClass">
            {{ stat.icon }}
          </div>
          <div class="text-2xl sm:text-3xl font-black text-slate-900 leading-none mb-1.5 tracking-tight">
            {{ stat.value }}
          </div>
          <div class="text-sm text-slate-500 font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  {
    value: '200+',
    label: t('heroStats.partners'),
    icon: '🏢',
    bgClass: 'from-blue-100 to-blue-50',
  },
  {
    value: t('heroStats.usersValue'),
    label: t('heroStats.users'),
    icon: '👥',
    bgClass: 'from-emerald-100 to-emerald-50',
  },
  {
    value: '180+',
    label: t('heroStats.industries'),
    icon: '📊',
    bgClass: 'from-violet-100 to-violet-50',
  },
  {
    value: '7×24',
    label: t('heroStats.support'),
    icon: '🛡️',
    bgClass: 'from-orange-100 to-orange-50',
  },
  {
    value: '99.9%',
    label: t('heroStats.accuracy'),
    icon: '🎯',
    bgClass: 'from-rose-100 to-rose-50',
  },
])
</script>
