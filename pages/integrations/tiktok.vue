<template>
  <IntegrationDetail
    seo-title="TikTok 集成 - Traneasy 易翻译"
    seo-description="支持 TikTok 私信、评论与跨境电商沟通场景，提供实时翻译、专属话术和风控设置，帮助品牌把流量更快转成销量。"
    logo-src="/images/integration/tiktok/logo.svg"
    title="TikTok 翻译助手，让流量变销量，沟通无国界"
    description="实时翻译评论与私信，快速响应全球买家消息。无论是达人建联还是直播带货，客服都轻松驾驭。"
    hero-image-src="/images/integration/tiktok/detail.bg.png"
    hero-image-alt="Traneasy TikTok 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="打造流量变现“最后一公里”，拒绝高流量低转化"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="适配短视频引流与兴趣电商场景，快速转化全球流量"
    :scene-items="sceneItems"
    setup-title="零门槛配置指南"
    :setup-steps="setupSteps"
    faq-description="全维度数据洞察，让每一次业务决策都有据可依！"
    :faqs="faqs"
    :download-anchor="downloadAnchor"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
  {
    title: "评论/私信互译",
    description: "快速承接全球留言与咨询，回复更及时",
    iconSrc: "/images/integration/tiktok/feature-1.svg",
  },
  {
    title: "直播实时辅助",
    description: "直播中的买家问题也能高效处理",
    iconSrc: "/images/integration/tiktok/feature-2.svg",
  },
  {
    title: "买家分层管理",
    description: "沉淀高意向客户线索，促进二次成交",
    iconSrc: "/images/integration/tiktok/feature-3.svg",
  },
  {
    title: "风控防封设置",
    description: "翻译与回复更稳妥，降低运营风险",
    iconSrc: "/images/integration/tiktok/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "评论与私信实时回复",
    imageSrc: "/images/integration/tiktok/desc-1.png",
    imageAlt: "TikTok 评论与私信实时回复",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "评论区和私信里的海外买家咨询增长很快，人工切换翻译和后台回复工具，常常错过最佳跟进时机。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 自动识别评论和私信内容并完成翻译，让客服能在同一界面快速理解并回复，提升询单转化。",
      },
    ],
  },
  {
    title: "专属独立语言配置",
    imageSrc: "/images/integration/tiktok/desc-2.png",
    imageAlt: "TikTok 专属独立语言配置",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "海外短视频内容面向多语市场投放时，很难兼顾不同买家的表达习惯和私信场景的回复偏好。",
      },
      {
        title: "解决方案",
        description:
          "按不同国家和账号配置发送语言、下单提醒与翻译偏好，让客服话术更贴近目标用户，也更利于转化。",
      },
    ],
  },
  {
    title: "反指纹/防关联设置",
    imageSrc: "/images/integration/tiktok/desc-3.png",
    imageAlt: "TikTok 反指纹防关联设置",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "多账号运营和跨团队协作时，账号环境混用、行为过于集中，都可能带来平台风控压力。",
      },
      {
        title: "解决方案",
        description:
          "配合独立环境配置、消息节奏控制和分角色操作流程，帮助团队更稳健地开展 TikTok 业务。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "评论互动",
    legacy: "手工逐句翻译，无法跟进。",
    traneasy: "实时翻译、精准回复。",
  },
  {
    label: "私信转化",
    legacy: "语言不通，流量变现慢。",
    traneasy: "自动翻译，商机响应更快。",
  },
  {
    label: "账号环境",
    legacy: "多个账号切换，操作复杂。",
    traneasy: "一站式管理并带风控辅助。",
  },
  {
    label: "买家跟进",
    legacy: "无法分层，复购率低。",
    traneasy: "标签管理，快速定位客户。",
  },
  {
    label: "运营效率",
    legacy: "客服和运营割裂，协同低。",
    traneasy: "群控式处理，提高效率。",
  },
] as const;

const sceneItems = [
  {
    title: "TikTok 运营",
    description: "管理视频评论和私信线索，提升爆款内容后的咨询承接效率。",
    iconSrc: "/images/integration/tiktok/scene-1.svg",
  },
  {
    title: "网红营销",
    description: "对接海外达人与 KOL 私信沟通，用更顺畅的多语言能力推进合作。",
    iconSrc: "/images/integration/tiktok/scene-2.svg",
  },
  {
    title: "跨境电商",
    description: "承接短视频和直播引流来的买家咨询，缩短沟通到成交的链路。",
    iconSrc: "/images/integration/tiktok/scene-3.svg",
  },
  {
    title: "品牌活动",
    description: "围绕活动评论区和私信入口统一互动，放大全球品牌曝光效果。",
    iconSrc: "/images/integration/tiktok/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy 客户端。",
  },
  {
    title: "第二步",
    description: "登录 TikTok 账号。",
  },
  {
    title: "第三步",
    description: "开启评论翻译。",
  },
  {
    title: "第四步",
    description: "在 Traneasy 内开启买家私信回复。",
  },
] as const;

const faqs = [
  {
    question: "支持 TikTok 的评论翻译吗？",
    answer: "支持。Traneasy 可以对评论和私信进行实时翻译，方便您进行互动。",
  },
  {
    question: "可以用来发带货视频吗？",
    answer:
      "目前主要专注于消息管理与翻译、投放后评论区互动处理及 App 和跨境 Marketplace 配合场景。",
  },
  {
    question: "多开账号会影响视频推荐吗？",
    answer:
      "不直接。Traneasy 仅作为消息处理侧工具，不会干预 TikTok 的推荐算法逻辑。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 TikTok 私信接入、评论翻译或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
