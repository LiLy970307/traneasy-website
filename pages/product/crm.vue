<template>
  <ProductDetail
    title="客户关系管理"
    subtitle="用精细化的CRM系统挖掘客户的终身价值"
    description="深度融合了CRM客户关系管理理念，我们将客户从“初次接触到复购”的全过程数字化，帮助您构建高价值的私域流量池。"
    hero-image-src="/images/product/customer-image.png"
    hero-image-alt="Traneasy 客户关系管理界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 客户关系管理"
    comparison-description="告别 Excel 表格和低效备注，构建 360 度客户画像，让每一次跟进都精准到位。"
    comparison-product-name="Traneasy 客户关系管理"
    :comparison-rows="comparisonRows"
    scene-title="私域流量的精细化耕作"
    :scene-items="sceneItems"
    faq-description="360°客户画像沉淀，让每一个客户都成为可复购的资产！"
    :faqs="faqs"
    cta-title="立即开启客户关系管理"
    cta-description="把分散的客户信息，收拢成可沉淀的资产"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "客户关系管理 - Traneasy 易翻译";
const pageDescription =
  "通过智能标签系统、跟进计划提醒与客户资产沉淀能力，帮助企业建立 360 度客户画像，持续提升复购与运营效率。";
const downloadLink = `${localePath("/download")}`;
const featureSections = [
  {
    title: "智能标签系统",
    imageSrc: "/images/product/customer-desc-1.png",
    imageAlt: "Traneasy 智能标签系统",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户太多了，记不住谁是大客户，谁是只问不买的，跟进没有重点。",
      },
      {
        title: "解决方案",
        description:
          "支持手动和自动打标。例如：高意向、已下单、巴西客户。配合颜色分类，客户价值一目了然。",
      },
    ],
  },
  {
    title: "跟进客户计划与提醒",
    imageSrc: "/images/product/customer-desc-2.png",
    imageAlt: "Traneasy 跟进客户计划与提醒",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户说“明天再联系”，结果第二天忙忘了，客户被竞争对手抢走了。",
      },
      {
        title: "解决方案",
        description:
          "为每个客户设定 下次跟进时间。系统会在指定时间弹窗提醒您，防止因为太忙而把大客户晾在一边。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "信息管理",
    legacy: "客户信息散落在各处，查找困难",
    traneasy: "统一聚合客户基础信息、沟通记录、订单历史",
  },
  {
    label: "客户跟进",
    legacy: "全靠脑子记或手写笔记，容易遗漏重要客户",
    traneasy: "自定义标签体系与备注，客户分层管理清晰",
  },
  {
    label: "生命周期",
    legacy: "难以区分新客户与老客户，营销一刀切",
    traneasy: "清晰展示客户全生命周期轨迹，针对性营销",
  },
  {
    label: "流失预警",
    legacy: "客户静默流失而不自知",
    traneasy: "监控客户活跃度，长期未回自动提醒跟进",
  },
  {
    label: "资产安全",
    legacy: "客户在手机里，离职即带走",
    traneasy: "客户资产归属企业账号，员工仅拥有使用权",
  },
] as const;

const sceneItems = [
  {
    title: "大客户专属维护",
    description:
      "将 TOP 10% 的大客户放入“VIP 池”，设置最高优先级。每次他们发消息，系统都置顶提醒，确保提供尊贵的 1 对 1 服务。",
    iconSrc: "/images/product/customer-icon-1.svg",
  },
  {
    title: "节日营销与复购",
    description:
      "利用 CRM 筛选出“购买过但半年没来的客户”，通过群发功能送上节日祝福或专属折扣，唤醒沉睡客户。",
    iconSrc: "/images/product/customer-icon-2.svg",
  },
  {
    title: "销售漏斗分析",
    description:
      "通过查看 CRM 中的客户分布，您能清晰看到有多少人在“询盘”，多少人在“比价”，多少人“已成交”。根据",
    iconSrc: "/images/product/customer-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "客户信息会丢失吗？",
    answer: "所有客户数据云端存储，不会因为换设备或员工离职丢失。",
  },
  {
    question: "标签数量有限制吗？",
    answer: "无限制，你可以根据业务需要自由创建任意数量的标签。",
  },
  {
    question: "客户数据能导出吗？",
    answer: "支持导出为Excel，方便做线下分析或备份。",
  },
  {
    question: "CRM 数据可以和外部系统对接吗？",
    answer:
      "支持。Traneasy 提供标准的数据接口（API）和 Excel 导入导出功能，方便您将数据同步到您现有的 ERP 或其他业务系统中。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解标签策略、客户分层方法、导出能力或 CRM 与现有业务系统的衔接方式，可以继续联系团队获取更完整方案。",
  },
] as const;

const ctaPoints = [
  "支持跨平台客户信息聚合，告别多APP切换查看",
  "统一客户标签与备注，精准记录客户需求与偏好",
  "客户生命周期全流程管理，从线索到成交无缝衔接",
  "客户流失预警，及时跟进潜在流失客户",
  "客户数据可视化分析，精准定位高价值客户群体",
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
