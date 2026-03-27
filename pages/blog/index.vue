<template>
  <main class="pt-[68px]">
    <Breadcrumb :items="[{ label: $t('blog.title') }]" />
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-16">
          <h1 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{{ $t('blog.title') }}</h1>
          <p class="text-xl text-slate-500">{{ $t('blog.subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink v-for="post in blogPosts" :key="post.slug" :to="localePath('/blog/' + post.slug)"
            class="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div :class="['h-48 flex items-center justify-center text-6xl', post.bg]">{{ post.icon }}</div>
            <div class="p-6">
              <span :class="['text-xs font-semibold px-2 py-1 rounded-full', post.badge]">{{ post.category }}</span>
              <h3 class="text-lg font-bold text-slate-900 mt-3 mb-2 group-hover:text-blue-600 transition-colors">{{ post.title }}</h3>
              <p class="text-slate-500 text-sm mb-4">{{ post.excerpt }}</p>
              <span class="text-blue-600 text-sm font-semibold">{{ $t('blog.readMore') }} →</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
useHead({ title: `${useI18n().t('blog.title')} - TranEasy` })

const blogPosts = [
  { slug: 'how-ai-translation-improves-work-efficiency', title: 'AI翻译如何提升工作效率', excerpt: '探索AI实时翻译技术如何帮助企业团队提升跨语言沟通效率...', icon: '🤖', bg: 'bg-blue-50', category: '行业资讯', badge: 'bg-blue-100 text-blue-700' },
  { slug: 'top-5-scenarios-for-realtime-translation', title: '实时翻译的5大应用场景', excerpt: '从视频会议到客户服务，了解实时翻译的最佳使用场景...', icon: '🎯', bg: 'bg-emerald-50', category: '使用技巧', badge: 'bg-emerald-100 text-emerald-700' },
  { slug: 'traneasy-vs-traditional-translation-tools', title: 'TranEasy vs 传统翻译工具', excerpt: '对比分析TranEasy与其他翻译工具的优劣势...', icon: '⚖️', bg: 'bg-orange-50', category: '产品对比', badge: 'bg-orange-100 text-orange-700' },
  { slug: 'multilingual-meetings-best-practices', title: '多语言会议最佳实践', excerpt: '如何高效组织和参与多语言国际会议...', icon: '🌍', bg: 'bg-purple-50', category: '使用技巧', badge: 'bg-purple-100 text-purple-700' },
  { slug: 'getting-started-with-traneasy', title: 'TranEasy 快速上手指南', excerpt: '从下载到使用，5分钟掌握TranEasy全部功能...', icon: '🚀', bg: 'bg-cyan-50', category: '产品更新', badge: 'bg-cyan-100 text-cyan-700' },
  { slug: 'windows-real-time-translation-guide', title: 'Windows实时翻译完全指南', excerpt: '在Windows上使用实时翻译的详细指南和技巧...', icon: '🪟', bg: 'bg-slate-50', category: '使用技巧', badge: 'bg-slate-200 text-slate-700' },
]
</script>
