<template>
  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-slate-900 mb-4">{{ $t('faq.title') }}</h2>
        <p class="text-lg text-slate-600">{{ $t('faq.subtitle') }}</p>
      </div>
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.id" class="rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-300">
          <button @click="openId = openId === faq.id ? null : faq.id"
            class="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-blue-50 transition-colors">
            <span class="text-lg font-semibold text-slate-900 text-left">{{ faq.question }}</span>
            <svg :class="['w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ml-4', openId === faq.id ? 'rotate-180' : '']"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <div v-if="openId === faq.id" class="px-6 py-4 bg-gradient-to-br from-blue-50 to-slate-50 border-t border-slate-200">
            <p class="text-slate-700 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-10">
        <NuxtLink :to="localePath('/faq')">
          <button class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors inline-block">
            {{ $t('faq.viewAll') }} →
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const openId = ref<number | null>(0)

const { t } = useI18n()
const props = defineProps<{ showAll?: boolean }>()
const faqKeys = props.showAll
  ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  : [1, 2, 3, 4, 5]
const faqs = computed(() => faqKeys.map((n, idx) => ({
  id: idx,
  question: t(`faq.q${n}`),
  answer: t(`faq.a${n}`),
})))
</script>
