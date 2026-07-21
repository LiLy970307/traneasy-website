<template>
  <main class="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">
    <div
      class="absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(180deg,rgba(153,28,28,0.14)_0%,rgba(153,28,28,0)_100%)]"
      aria-hidden="true"
    />
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
      <StatementContent />
    </div>
  </main>
</template>

<script setup lang="ts">
const { noticeTitle } = await useStatementNotice();
const { t } = useI18n();

useSeoMeta({
  title: () => `${noticeTitle.value} - Traneasy 易翻译`,
  description: () => t("pages.statement.seoDesc"),
});
</script>
