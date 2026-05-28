<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[720px] bg-[url('/images/product/bg-top.png')] bg-cover bg-center"
      aria-hidden="true"
    />

    <section class="relative px-6 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div class="mx-auto max-w-6xl text-center">
        <h1
          class="text-[40px] font-semibold leading-[1.25] text-[#000213] sm:text-[52px]"
        >
          数据分析
        </h1>
        <p
          class="mx-auto mt-4 max-w-5xl text-[24px] font-semibold leading-[1.5] text-[#000213] sm:text-[36px]"
        >
          用数据复盘业务，用图表驱动决策，告别凭感觉做外贸
        </p>
        <p
          class="mx-auto mt-6 max-w-5xl text-[14px] leading-7 text-[#5F6472] sm:text-[16px]"
        >
          内置强大的数据分析引擎，我们将分散在各个社交软件中的沟通数据、客户行为数据进行清洗和聚合，
          生成直观的可视化报表，让您的业务状态一眼看清楚。
        </p>
      </div>

      <div class="mx-auto mt-14 max-w-6xl">
        <img
          src="/images/product/analyze-top.png"
          alt="Traneasy 数据分析总览看板"
          width="2048"
          height="1074"
          class="h-auto w-full"
        />
      </div>
    </section>

    <section class="relative pb-8 pt-6">
      <MarketingFeatureSplit
        v-for="section in featureSections"
        :key="section.title"
        :title="section.title"
        :points="section.points"
        :image-src="section.imageSrc"
        :image-alt="section.imageAlt"
        :reverse="section.reverse"
        :button-label="section.buttonLabel"
        :button-to="section.buttonTo"
        image-card-class="border-none bg-transparent p-0 shadow-none"
        image-class="rounded-[20px]"
      />
    </section>

    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-6xl">
        <h2
          class="max-w-5xl text-[28px] font-semibold leading-[1.6] text-[#000213] sm:text-[32px]"
        >
          传统方式 vs 数据分析
          <br />
          告别“感觉管理”，用数据驱动业绩增长，让团队表现与渠道价值一目了然。
        </h2>

        <div
          class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div
            class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
          >
            <div>对比维度</div>
            <div>传统方式</div>
            <div>Traneasy 数据分析</div>
          </div>

          <div
            v-for="row in comparisonRows"
            :key="row.label"
            class="grid grid-cols-[1.15fr_1fr_1fr] items-start gap-4 border-t border-[#EEF1F6] px-6 py-5 text-[14px] leading-7 sm:px-8 sm:text-[15px]"
          >
            <div class="font-medium text-[#000213]">{{ row.label }}</div>
            <div class="flex items-start gap-3 text-[#7B8191]">
              <img
                :src="closeIconSrc"
                alt="传统方式"
                class="mt-1 h-4 w-4 flex-shrink-0"
              />
              <span>{{ row.legacy }}</span>
            </div>
            <div class="flex items-start gap-3 text-[#000213]">
              <img
                :src="checkIconSrc"
                alt="Traneasy"
                class="mt-1 h-4 w-4 flex-shrink-0"
              />
              <span>{{ row.traneasy }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProductSceneSection
      eyebrow="应用场景"
      title="数据驱动的精细化运营"
      button-label="立即下载"
      :button-to="downloadLink"
      :items="sceneItems"
    />

    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-5xl">
        <h2
          class="text-[28px] font-semibold leading-[1.5] text-[#000213] sm:text-[32px]"
        >
          常见问题
        </h2>
        <p class="mt-3 text-[18px] leading-8 text-[#3A4050]">
          全维度数据洞察，让每一次业务决策都有据可依！
        </p>

        <div class="mt-10 space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="overflow-hidden rounded-[16px] border border-[#E7EBF2] bg-[#F9FBFE]"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              @click="openFaqIndex = openFaqIndex === index ? null : index"
            >
              <span
                class="text-[16px] font-semibold leading-7 text-[#000213] sm:text-[17px]"
              >
                {{ faq.question }}
              </span>
              <span class="text-[24px] leading-none text-[#7B8191]">
                {{ openFaqIndex === index ? "−" : "+" }}
              </span>
            </button>

            <div
              v-if="openFaqIndex === index"
              class="border-t border-[#E7EBF2] px-6 py-5 text-[15px] leading-8 text-[#5F6472]"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pb-20 pt-4 sm:px-8 lg:px-12">
      <div
        class="mx-auto grid max-w-6xl gap-12 rounded-[32px] bg-white px-8 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-12 lg:py-14"
      >
        <div>
          <h2 class="text-[32px] font-semibold leading-[1.45] text-[#000213]">
            立即开启数据分析
            <br />
            把分散的沟通数据，转化为驱动业绩增长的决策引擎
          </h2>

          <NuxtLink
            :to="downloadLink"
            class="mt-8 inline-flex items-center justify-center rounded-[10px] bg-[#205DFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749cc]"
          >
            软件下载
          </NuxtLink>
        </div>

        <ul class="space-y-5">
          <li
            v-for="item in ctaPoints"
            :key="item"
            class="flex items-start gap-3 text-[15px] leading-7 text-[#3A4050]"
          >
            <img
              :src="checkIconSrc"
              alt="check"
              class="mt-1 h-4 w-4 flex-shrink-0"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "数据分析 - Traneasy 易翻译";
const pageDescription =
  "通过员工绩效看板、客户来源追踪和沟通话术分析，把分散的沟通数据转化为驱动业绩增长的决策依据。";
const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "员工绩效看板",
    imageSrc: "/images/product/analyze-data-1.png",
    imageAlt: "Traneasy 员工绩效看板",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "缺少统一的员工表现数据面板，跟进量、响应时效、转化率往往各自分散统计。",
      },
      {
        title: "解决方案",
        description:
          "把客户新增、跟进情况、转化率等核心指标集中展示，让团队管理和复盘有据可依。",
      },
    ],
  },
  {
    title: "客户来源追踪",
    imageSrc: "/images/product/analyze-data-2.png",
    imageAlt: "Traneasy 客户来源追踪",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户是从 Facebook、TikTok、Google 还是线下渠道来的并不清晰，投放和复盘缺乏依据。",
      },
      {
        title: "解决方案",
        description:
          "通过平台、账号、来源线索字段进行归因追踪，帮助团队快速定位高价值渠道。",
      },
    ],
  },
  {
    title: "沟通话术分析",
    imageSrc: "/images/product/analyze-data-3.png",
    imageAlt: "Traneasy 沟通话术分析",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "优秀话术经常沉没在聊天记录里，复盘时很难统一抽取、整理与二次复用。",
      },
      {
        title: "解决方案",
        description:
          "沉淀高频有效的沟通片段和 AI 生成的应答方案，为后续业务动作提供可复制模板。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "汇总维度",
    legacy: "关键指标分散，难以在不同软件、表格之间统一查看。",
    traneasy: "多维度汇总看板，新增线索、转化率、群组量一屏掌握。",
  },
  {
    label: "渠道分析",
    legacy: "广告平台和来源分散，难以判断哪个渠道有效。",
    traneasy: "支持按平台、来源、渠道标签追踪客户构成。",
  },
  {
    label: "话术沉淀",
    legacy: "优秀沟通记录无法复盘，成功经验难以复制。",
    traneasy: "分析高质量话术与热点问题，沉淀成标准化模板。",
  },
  {
    label: "数据响应",
    legacy: "业务变化滞后，复盘往往发生在问题之后。",
    traneasy: "更快的数据响应与预警，及时对异常做出处理。",
  },
  {
    label: "决策协作",
    legacy: "决策依赖经验判断，团队目标经常难以统一。",
    traneasy: "数据结论明确，跨部门协作和复盘更顺畅。",
  },
] as const;

const sceneItems = [
  {
    title: "销售业绩日报",
    description:
      "将新增客户、跟进次数、转化率等关键指标整理成日报，帮助团队及时发现增长机会。",
    iconSrc: "/images/product/scene-1.svg",
  },
  {
    title: "广告投放复盘",
    description:
      "跟踪不同平台广告来源和客户转化情况，定位高价值渠道，让每一笔广告预算都花在刀刃上。",
    iconSrc: "/images/product/scene-2.svg",
  },
  {
    title: "SOP 话术优化",
    description:
      "分析高频问答和优质沟通案例，沉淀出可复制的话术模板，提升团队整体成交效率。",
    iconSrc: "/images/product/scene-3.svg",
  },
] as const;

const faqs = [
  {
    question: "数据分析会泄露客户隐私吗？",
    answer:
      "不会。Traneasy 严格遵循数据安全规范，所有数据处理均围绕业务分析与统计聚合展开，原始内容会遵守平台和企业的权限管理范围。",
  },
  {
    question: "可以导出 Excel 报表吗？",
    answer:
      "可以。支持将筛选后的统计结果导出为表格，便于团队复盘、汇报或进行二次分析。",
  },
  {
    question: "数据是实时的吗？",
    answer:
      "是的，关键业务指标会结合会话和客户管理数据进行持续更新，便于你看到当前阶段最新的业务变化。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于维度配置、报表权限、导出方式和团队协作场景，可以继续联系团队获取更具体的使用方案。",
  },
] as const;

const ctaPoints = [
  "支持全平台数据聚合，告别无效手动统计的低效",
  "员工绩效实时对照，新增量、回复率、转化率一目了然",
  "精准追踪客户来源渠道，清晰识别高质量投放效果",
  "沉淀话术与业务复盘动作，持续优化沟通 SOP",
  "可视化数据看板，随时掌握业务动态，快速调整策略",
] as const;

const openFaqIndex = ref<number | null>(0);

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
  ],
});
</script>
