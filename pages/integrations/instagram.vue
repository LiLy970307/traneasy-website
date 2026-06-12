<template>
  <IntegrationDetail
    seo-title="Instagram 集成 - Traneasy 易翻译"
    seo-description="打通 Instagram 私信、评论与品牌互动场景，支持实时翻译、集群运营和粉丝精细化管理，帮助品牌高效承接全球流量。"
    logo-src="/images/integration/instagram/logo.svg"
    title="Instagram 私信与评论互动，跨越语言障碍"
    description="专为 Instagram 设计的 DM 翻译工具，让每一条私信与帖子评论都能无缝触达全球受众。"
    hero-image-src="/images/integration/instagram/detail-bg.png"
    hero-image-alt="Traneasy Instagram 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="突破网红沟通瓶颈，构建精细化运营闭环"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖网红营销与品牌视觉推广场景，轻松触达全球达人"
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
    title: "DM 私信互动",
    description: "多国买家私信实时互译，回复更精准",
    iconSrc: "/images/integration/instagram/feature-1.svg",
  },
  {
    title: "评论区翻译",
    description: "帖文评论即时处理，粉丝沟通不断线",
    iconSrc: "/images/integration/instagram/feature-2.svg",
  },
  {
    title: "信息集群下发",
    description: "一键群发消息给潜客，触达更方便",
    iconSrc: "/images/integration/instagram/feature-3.svg",
  },
  {
    title: "粉丝资产管理",
    description: "标签与备注协同，沉淀高价值粉丝",
    iconSrc: "/images/integration/instagram/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "DM 私信与评论翻译",
    imageSrc: "/images/integration/instagram/desc-1.png",
    imageAlt: "Instagram DM 私信与评论翻译",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "海外私信和帖子评论语种复杂，品牌客服要在 DM、评论区和翻译工具之间来回切换，回复容易延迟。",
      },
      {
        title: "解决方案",
        description:
          "私信与评论内容可在原界面中实时翻译，品牌方能更快理解用户意图，保持沟通节奏和品牌一致性。",
      },
    ],
  },
  {
    title: "集群讯息下发",
    imageSrc: "/images/integration/instagram/desc-2.png",
    imageAlt: "Instagram 集群讯息下发",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "营销活动、售后通知和新品触达常常需要大量 DM 沟通，人工逐条发送效率低，且难以兼顾不同国家用户。",
      },
      {
        title: "解决方案",
        description:
          "通过消息下发与多语言内容管理能力，快速触达目标粉丝群体，让活动推进和销售转化更高效。",
      },
    ],
  },
  {
    title: "独立语言个性化管理",
    imageSrc: "/images/integration/instagram/desc-3.png",
    imageAlt: "Instagram 独立语言个性化管理",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "不同市场用户偏好差异大，但统一话术很难同时照顾语气、场景与品牌风格，容易影响互动效果。",
      },
      {
        title: "解决方案",
        description:
          "可按账号、成员或语种设置独立偏好，让多语言回复更加贴近品牌调性，也便于团队分工协作。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "聊天承接",
    legacy: "回复速度慢，沟通割裂。",
    traneasy: "实时转译，消息更畅通。",
  },
  {
    label: "多账号管理",
    legacy: "多后台切换。",
    traneasy: "一个控制面板。",
  },
  {
    label: "品牌联系",
    legacy: "手动人肉维护广告干预。",
    traneasy: "一体化品牌联络链路。",
  },
  {
    label: "客户管理",
    legacy: "记录松散。",
    traneasy: "标签管理。",
  },
  {
    label: "营销反馈",
    legacy: "难以跟踪。",
    traneasy: "数据洞察更全面。",
  },
] as const;

const sceneItems = [
  {
    title: "网红营销",
    description:
      "为海外达人和品牌方建立更顺滑的多语言 DM 沟通链路，提升合作效率。",
    iconSrc: "/images/integration/instagram/scene-1.svg",
  },
  {
    title: "品牌出海",
    description:
      "围绕品牌账号的私信与评论场景统一管理咨询与互动，沉淀全球粉丝资产。",
    iconSrc: "/images/integration/instagram/scene-2.svg",
  },
  {
    title: "时尚买手",
    description: "专为海外买手沟通场景设计，让跨语种询单与跟进更高效。",
    iconSrc: "/images/integration/instagram/scene-3.svg",
  },
  {
    title: "视觉设计师",
    description: "用更高效的互动管理方式承接作品咨询、合作邀约与粉丝反馈。",
    iconSrc: "/images/integration/instagram/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy。",
  },
  {
    title: "第二步",
    description: "绑定 Instagram 账号。",
  },
  {
    title: "第三步",
    description: "开启私信翻译权限。",
  },
  {
    title: "第四步",
    description: "在 Traneasy 内直接回复评论和 DM。",
  },
] as const;

const faqs = [
  {
    question: "支持 Instagram Reels 或帖子评论翻译吗？",
    answer:
      "支持主页互动私信、DM 功能、评论等覆盖在正常可访问的场景内，包括翻译。",
  },
  {
    question: "可以发送图片和短视频吗？",
    answer: "支持。您可以在消息入口统一开展图片、短视频和素材发送。",
  },
  {
    question: "多开账号会被封号吗？",
    answer:
      "Traneasy 采用合规的接入方式，风控还与运营、行为打点和活跃度、账号安全设置相关。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 Instagram DM 接入、评论翻译或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
