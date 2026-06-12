<template>
  <main class="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">
    <div class="mx-auto max-w-7xl px-4 py-20 sm:px-8 lg:px-12">
      <article
        class="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10 lg:p-12"
      >
        <div class="mb-10 text-center">
          <div
            class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50"
          >
            <svg
              class="h-8 w-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 class="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {{ noticeTitle }}
          </h1>
          <p v-if="currentNotice?.subTitle" class="mb-2 text-slate-500">
            {{ currentNotice.subTitle }}
          </p>
          <p class="text-sm text-slate-400">
            更新日期：{{ formattedUpdateDate }}
          </p>
        </div>

        <div v-if="pending" class="space-y-4">
          <div class="h-5 w-2/3 animate-pulse rounded bg-slate-100" />
          <div class="h-5 w-full animate-pulse rounded bg-slate-100" />
          <div class="h-5 w-5/6 animate-pulse rounded bg-slate-100" />
          <div class="h-32 w-full animate-pulse rounded-xl bg-slate-100" />
        </div>

        <div
          v-else-if="error || !currentNotice"
          class="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-800"
        >
          声明内容暂时加载失败，请稍后重试。
        </div>

        <div v-else class="statement-content" v-html="currentNotice.content" />
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
interface NoticeItem {
  id: number;
  name: string;
  title: string;
  subTitle: string;
  content: string;
  enabled: number;
  deleted: number;
  createDateTime: string;
  updateDateTime: string;
}

interface NoticeResponse {
  success: boolean;
  code: number;
  msg: string;
  data: NoticeItem[];
}

const config = useRuntimeConfig();
const NOTICE_API = `${config.public.clientUserApiBase}/notice/list`;

const { data, pending, error } = await useFetch<NoticeResponse>(NOTICE_API, {
  key: "statement-notice-list",
});

const currentNotice = computed(() => {
  return (data.value?.data ?? []).find(
    (item) => item.enabled === 1 && item.deleted === 0,
  );
});

const noticeTitle = computed(() => {
  return currentNotice.value?.title || "易翻译官方严正声明";
});

const formattedUpdateDate = computed(() => {
  const dateText =
    currentNotice.value?.updateDateTime || currentNotice.value?.createDateTime;

  if (!dateText) {
    return "—";
  }

  const [date = ""] = dateText.split(" ");
  const [year, month, day] = date.split("-");

  if (!year || !month || !day) {
    return dateText;
  }

  return `${year} 年 ${Number(month)} 月 ${Number(day)} 日`;
});

useSeoMeta({
  title: () => `${noticeTitle.value} - Traneasy 易翻译`,
  description: "易翻译官方声明与安全公告，请认准 Traneasy 易翻译唯一官方网站。",
});
</script>

<style scoped>
.statement-content {
  color: #475569;
  font-size: 16px;
  line-height: 1.9;
}

.statement-content :deep(h3) {
  margin: 1.5rem 0 0.75rem;
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
}

.statement-content :deep(h3:first-child) {
  margin-top: 0;
}

.statement-content :deep(h4) {
  margin: 1rem 0 0.5rem;
  color: #334155;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.9;
}

.statement-content :deep(p) {
  margin: 0.75rem 0;
}

.statement-content :deep(a) {
  word-break: break-all;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.statement-content :deep(strong) {
  font-weight: 700;
}
</style>
