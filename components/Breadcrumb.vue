<template>
  <nav aria-label="breadcrumb" class="w-full bg-white border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3">
      <ol class="flex items-center flex-wrap gap-1.5 text-sm">
        <li v-for="(item, i) in allItems" :key="i" class="flex items-center gap-1.5">
          <svg v-if="i > 0" class="w-3.5 h-3.5 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
          <NuxtLink v-if="!isLast(i) && item.href" :to="item.href" class="text-slate-500 hover:text-blue-600 transition-colors truncate max-w-[200px]">{{ item.label }}</NuxtLink>
          <span v-else :class="isLast(i) ? 'font-medium text-slate-800 truncate max-w-[240px]' : 'text-slate-500'" :aria-current="isLast(i) ? 'page' : undefined">{{ item.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const props = defineProps<{
  items: Array<{ label: string; href?: string }>
}>()

const allItems = computed(() => [
  { label: t('nav.home'), href: localePath('/') },
  ...props.items,
])

const isLast = (i: number) => i === allItems.value.length - 1
</script>
