<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('blog.title'), href: localePath('/blog') }, { label: route.params.slug as string }]" />
    <article class="py-24">
      <div class="max-w-3xl mx-auto px-6 sm:px-8">
        <NuxtLink :to="localePath('/blog')" class="text-blue-600 text-sm font-semibold mb-6 inline-flex items-center gap-1 hover:underline">
          ← {{ $t('blog.backToBlog') }}
        </NuxtLink>
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{{ route.params.slug }}</h1>
        <div class="text-slate-400 text-sm mb-8">{{ $t('blog.date') }}: 2024-01-15 · 5 {{ $t('blog.readTime') }}</div>
        <div class="prose prose-slate max-w-none">
          <p class="text-slate-600 leading-relaxed">这是博客文章的内容区域。在实际项目中，这里应该从 CMS 或 Markdown 文件加载具体的文章内容。</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
useHead({ title: `${route.params.slug} - TranEasy Blog` })
</script>
