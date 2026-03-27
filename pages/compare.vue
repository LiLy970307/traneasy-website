<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('compare.title') }]" />
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-slate-900 mb-4">{{ $t('compare.title') }}</h1>
          <p class="text-xl text-slate-500">{{ $t('compare.subtitle') }}</p>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-slate-50">
                <th class="text-left px-6 py-4 font-semibold text-slate-700">{{ $t('compare.featureLabel') }}</th>
                <th class="text-center px-4 py-4 font-semibold text-blue-600">TranEasy</th>
                <th class="text-center px-4 py-4 font-semibold text-slate-500">{{ $t('features.googleTranslate') }}</th>
                <th class="text-center px-4 py-4 font-semibold text-slate-500">{{ $t('features.deepL') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="row in compareRows" :key="row.feature">
                <td class="px-6 py-3 text-slate-700">{{ row.feature }}</td>
                <td class="text-center px-4 py-3">{{ row.traneasy }}</td>
                <td class="text-center px-4 py-3">{{ row.google }}</td>
                <td class="text-center px-4 py-3">{{ row.deepl }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <Download />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: () => t('seo.compareTitle'),
  meta: [{ name: 'description', content: () => t('seo.compareDesc') }],
})
const compareRows = computed(() => [
  { feature: t('compare.row1'), traneasy: '✅', google: '❌', deepl: '❌' },
  { feature: t('compare.row2'), traneasy: '✅', google: '✅', deepl: t('compare.partialSupport') },
  { feature: t('compare.row3'), traneasy: '✅', google: '❌', deepl: '❌' },
  { feature: t('compare.row4'), traneasy: '✅', google: t('compare.partialSupport'), deepl: '❌' },
  { feature: t('compare.row5'), traneasy: '✅', google: '❌', deepl: t('compare.partialSupport') },
  { feature: t('compare.row6'), traneasy: '✅', google: '❌', deepl: '❌' },
  { feature: t('compare.row7'), traneasy: '✅', google: '❌', deepl: '✅' },
  { feature: t('compare.row8'), traneasy: '✅', google: '✅', deepl: t('compare.partialSupport') },
])
</script>
