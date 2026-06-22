<template>
  <main class="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
      <StatementContent />
    </div>
  </main>
</template>

<script setup lang="ts">
const { noticeTitle } = await useStatementNotice();

useSeoMeta({
  title: () => `${noticeTitle.value} - Traneasy 易翻译`,
  description: "易翻译官方声明与安全公告，请认准 Traneasy 易翻译唯一官方网站。",
});
</script>
