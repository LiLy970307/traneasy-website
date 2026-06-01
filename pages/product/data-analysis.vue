<template>
  <ProductDetail
    title="数据分析"
    subtitle="用数据复盘业务，用图表驱动决策，告别凭感觉做外贸"
    description="内置强大的数据分析引擎，我们将分散在各个社交软件中的沟通数据、客户行为数据进行清洗和聚合， 生成直观的可视化报表，让您的业务状态一眼看清楚。"
    hero-image-src="/images/product/analyze-top.png"
    hero-image-alt="Traneasy 数据分析总览看板"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 数据分析"
    comparison-description="告别“感觉管理”，用数据驱动业绩增长，让团队表现与渠道价值一目了然。"
    comparison-product-name="Traneasy 数据分析"
    :comparison-rows="comparisonRows"
    scene-title="数据驱动的精细化运营"
    :scene-items="sceneItems"
    faq-description="全维度数据洞察，让每一次业务决策都有据可依！"
    :faqs="faqs"
    cta-title="立即开启数据分析"
    cta-description="把分散的沟通数据，转化为驱动业绩增长的决策引擎"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "数据分析 - Traneasy 易翻译";
const pageDescription =
  "通过员工绩效看板、客户来源追踪和沟通话术分析，把分散的沟通数据转化为驱动业绩增长的决策依据。";
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
