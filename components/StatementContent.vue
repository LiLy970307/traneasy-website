<template>
  <article
    :class="[
      'border border-slate-100 bg-white shadow-sm',
      compact ? 'rounded-xl p-5 sm:p-6' : 'rounded-2xl p-8 sm:p-10 lg:p-12',
    ]"
  >
    <div :class="compact ? 'mb-6 text-center' : 'mb-10 text-center'">
      <!-- <div
        :class="[
          'mb-5 inline-flex items-center justify-center rounded-full bg-red-50',
          compact ? 'h-12 w-12' : 'h-16 w-16',
        ]"
      >
        <svg
          :class="compact ? 'h-6 w-6 text-red-500' : 'h-8 w-8 text-red-500'"
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
      </div> -->

      <component
        :is="titleTag"
        :class="[
          'mb-3 font-bold text-slate-900',
          compact ? 'text-2xl' : 'text-3xl sm:text-4xl',
        ]"
      >
        {{ noticeTitle }}
      </component>
      <p v-if="currentNotice?.subTitle" class="mb-2 text-slate-500">
        {{ currentNotice.subTitle }}
      </p>
      <p class="text-sm text-slate-400">
        {{ $t("statementContent.updateDatePrefix") }}{{ formattedUpdateDate }}
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
      {{ $t("statementContent.loadError") }}
    </div>

    <div v-else class="statement-content" v-html="currentNotice.content" />
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    compact?: boolean;
    titleTag?: "h1" | "h2";
  }>(),
  {
    compact: false,
    titleTag: "h1",
  },
);

const { currentNotice, noticeTitle, formattedUpdateDate, pending, error } =
  await useStatementNotice();
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
