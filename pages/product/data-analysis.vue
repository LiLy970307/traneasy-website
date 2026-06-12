<template>
  <ProductDetail
    title="数据分析"
    subtitle="用数据复盘业务，用图表驱动决策，告别凭感觉做外贸"
    description="内置强大的数据分析引擎，我们将分散在各个社交软件中的沟通数据、客户行为数据进行清洗和聚合，生成直观的可视化报表，让您的业务状况“一眼看穿”。"
    hero-image-src="/images/product/analyze-top.png"
    hero-image-alt="Traneasy 数据分析总览看板"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 数据分析"
    comparison-description="告别“凭感觉”管理，用数据驱动业绩增长，让团队表现与渠道价值一目了然。"
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
          "团队规模大了，不知道谁在摸鱼，谁是销冠，绩效考核全靠印象分。",
      },
      {
        title: "解决方案",
        description:
          "管理账户可统计查看子账户客户详细信息，以及更改记录，数据量化工作表现，让奖惩有据可依。",
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
          "客户是来自 Facebook 广告、Google 搜索还是 TikTok 视频？搞不清渠道 ROI，广告预算乱花。",
      },
      {
        title: "解决方案",
        description:
          "结合工单系统，精准统计每个客户的 来源渠道，清晰计算获客成本，优化您的投放策略。",
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
        description: "不知道哪句话术能成单，哪句话导致客户流失，经验无法复制。",
      },
      {
        title: "解决方案",
        description:
          "可根据您发送的消息自动生成相关的内容进行回复，方便回复客户",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "绩效评估",
    legacy: "凭印象打分，缺乏量化指标，难以服众",
    traneasy: "实时统计接待量、回复时长、转化率，数据说话",
  },
  {
    label: "渠道归因",
    legacy: "广告渠道效果模糊，预算分配靠猜",
    traneasy: "精准追踪客户来源，清晰计算各渠道ROI",
  },
  {
    label: "话术复盘",
    legacy: "经验无法沉淀，优秀话术难以复制",
    traneasy: "分析高频成交词与流失点，持续优化沟通策略",
  },
  {
    label: "数据整合",
    legacy: "各平台数据孤岛，需手动导出合并",
    traneasy: "跨平台数据自动聚合，生成可视化报表",
  },
  {
    label: "决策效率",
    legacy: "报表制作耗时数天，错过最佳调整期",
    traneasy: "实时数据看板，随时掌握业务动态，快速决策",
  },
] as const;

const sceneItems = [
  {
    title: "销售主管日报",
    description:
      "每天早上查看员工接待报表，针对回复超时的员工进行辅导；查看高意向客户列表，及时介入跟进，防止丢单。",
    iconSrc: "/images/product/scene-1.svg",
  },
  {
    title: "广告投放复盘",
    description:
      "每周对比不同广告组带来的客户数量与最终成交额。砍掉无效渠道，加大高转化渠道的投放力度，让每一分广告费都花在刀刃上。",
    iconSrc: "/images/product/scene-2.svg",
  },
  {
    title: "SOP 话术优化",
    description:
      "分析过去 100 个成交客户的聊天记录，提炼出最有效的开场白和逼单话术，复制给整个团队使用，提升整体转化率。",
    iconSrc: "/images/product/scene-3.svg",
  },
] as const;

const faqs = [
  {
    question: "数据分析会泄露客户隐私吗？",
    answer:
      "不会。Traneasy 严格遵守数据安全规范，所有数据均加密存储。只有拥有管理权限的主账号才能查看报表，且支持设置子账号的数据查看范围。",
  },
  {
    question: "可以导出 Excel 报表吗？",
    answer:
      "可以。支持将任意时间段的沟通记录、客户列表、绩效报表导出为 Excel 或 CSV 格式，方便您进行线下存档或二次分析。",
  },
  {
    question: "数据是实时的吗？",
    answer:
      "是的。消息发送与接收的统计毫秒级同步，您在后台看到的报表是当前最新的实时数据。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于维度配置、报表权限、导出方式和团队协作场景，可以继续联系团队获取更具体的使用方案。",
  },
] as const;

const ctaPoints = [
  "支持全平台数据聚合，告别Excel手动统计的低效",
  "员工绩效实时量化，接待量、回复时长、转化率一目了然",
  "精准追踪客户来源渠道，清晰计算广告投放ROI",
  "高频话术与流失节点分析，持续优化沟通SOP",
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
