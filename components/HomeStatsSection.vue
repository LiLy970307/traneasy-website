<template>
  <section class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <div
        class="flex flex-col gap-6 border-b border-slate-200 pb-10 lg:flex-row lg:items-end lg:justify-between align-center lg:align-end"
      >
        <div class="max-w-3xl">
          <h2
            class="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
          >
            外贸沟通与管理，用 Traneasy 就够了
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            AI 实时翻译 + 多账号智能管理 效率与业绩双增长的出海必备工具
          </p>
        </div>

        <NuxtLink
          :to="localePath('/login')"
          class="inline-flex items-center justify-center rounded bg-[#084AFF] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#084AFF]/90"
        >
          免费试用
        </NuxtLink>
      </div>

      <dl class="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border-l border-slate-200 pl-6 pt-6 xl:first:border-l-0"
        >
          <dt class="text-sm font-semibold text-brand-600">
            {{ stat.label }}
          </dt>
          <dd
            class="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            {{ stat.value }}
          </dd>
          <p class="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {{ stat.description }}
          </p>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface StatItem {
  label: string;
  value: string;
  description: string;
}

const stats: readonly StatItem[] = [
  {
    label: "团队人效提升",
    value: "+ 70%",
    description:
      "单人高效管理20+账号，AI自动翻译替代手动操作，大幅降低人力成本。",
  },
  {
    label: "客户转化率",
    value: "+ 45%",
    description:
      "精准识别来源并自动打标，秒级响应销售线索，显著提升成交机会。",
  },
  {
    label: "管理成本",
    value: "- 55%",
    description:
      "一键群发触达全球200+语种市场，精准定位高意向客户，告别无效投放。",
  },
  {
    label: "沟通响应时长",
    value: "- 90%",
    description:
      "毫秒级实时互译，告别复制粘贴，极速回复防止客户流失。",
  },
];
</script>
