<template>
  <IntegrationDetail
    seo-title="Facebook 集成 - Traneasy 易翻译"
    seo-description="一键翻译 Facebook 帖子互动、私信与粉丝页消息，帮助企业高效管理海外社媒私域与广告线索。"
    logo-src="/images/integration/facebook/logo.svg"
    title="一键翻译 Facebook，粉丝互动与广告转化的利器"
    description="自动翻译私信与评论，实时抓取广告线索，打通 Facebook 主页、Messenger 与广告消息沉淀。"
    hero-image-src="/images/integration/facebook/detail-bg.png"
    hero-image-alt="Traneasy Facebook 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="打破多页面切换壁垒，实现一站式高效客服"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖广告投放与客服售后场景，高效承接全球询盘"
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
const closeIconSrc = "/images/product/close-icon.svg";
const checkIconSrc = "/images/product/check-icon.svg";
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
  {
    title: "帖子评论互动",
    description: "统一翻译评论与私信，互动更顺畅",
    iconSrc: "/images/integration/facebook/feature-1.svg",
  },
  {
    title: "广告线索对话",
    description: "快速承接广告咨询，线索跟进更及时",
    iconSrc: "/images/integration/facebook/feature-2.svg",
  },
  {
    title: "粉丝页运营管理",
    description: "主页、Messenger 与评论统一管理",
    iconSrc: "/images/integration/facebook/feature-3.svg",
  },
  {
    title: "多主页协同",
    description: "一套工作台管理多个页面与账号",
    iconSrc: "/images/integration/facebook/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "帖子与私信互动翻译",
    imageSrc: "/images/integration/facebook/desc-1.png",
    imageAlt: "Facebook 帖子与私信互动翻译",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "客户来自不同国家，帖子评论和私信语种混杂，运营团队需要频繁切换翻译工具，回复效率和体验都被拉低。",
        iconSrc: closeIconSrc,
      },
      {
        title: "解决方案",
        description:
          "评论、帖子互动和 Messenger 私信都能在原会话中实时翻译，减少跳转，让海外粉丝互动更顺畅。",
        iconSrc: checkIconSrc,
      },
    ],
  },
  {
    title: "个人专属话术定制",
    imageSrc: "/images/integration/facebook/desc-2.png",
    imageAlt: "Facebook 个人专属话术定制",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "多人协作回复 Facebook 咨询时，常因话术不统一、回复风格不稳定而影响品牌形象和转化效率。",
        iconSrc: closeIconSrc,
      },
      {
        title: "解决方案",
        description:
          "按账号或成员配置专属翻译与回复偏好，保持对外沟通口径一致，让客服协作更可控。",
        iconSrc: checkIconSrc,
      },
    ],
  },
  {
    title: "精细化客户分层",
    imageSrc: "/images/integration/facebook/desc-3.png",
    imageAlt: "Facebook 精细化客户分层",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "粉丝页留言、广告咨询和私信入口分散，客户来源与阶段难归档，后续跟进缺乏统一视图。",
        iconSrc: closeIconSrc,
      },
      {
        title: "解决方案",
        description:
          "结合标签、备注与线索管理能力，对客户进行分层和沉淀，让投放、客服与销售都能基于同一数据协作。",
        iconSrc: checkIconSrc,
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "多账号处理",
    legacy: "主页、私信、主页评论来回切换。",
    traneasy: "页面消息、评论与私信统一沟通。",
  },
  {
    label: "多语管理",
    legacy: "外部翻译配合回复，跟进滞后。",
    traneasy: "一键翻译并回复，效率更高。",
  },
  {
    label: "互动承接",
    legacy: "流量来源零散，线索识别困难。",
    traneasy: "整合评论、帖文与私信咨询。",
  },
  {
    label: "客户管理",
    legacy: "依赖主页后台 Page 管理。",
    traneasy: "统一 CRM 管理。",
  },
  {
    label: "沟通品质",
    legacy: "多平台记录割裂。",
    traneasy: "自动沉淀广告数据。",
  },
] as const;

const sceneItems = [
  {
    title: "Facebook 投手",
    description: "管理广告消息、粉丝评论与私信，提升线索承接速度和转化效率。",
    iconSrc: "/images/integration/facebook/scene-1.svg",
  },
  {
    title: "社群管理",
    description: "高效回复粉丝留言与咨询，把互动沉淀为可持续运营资产。",
    iconSrc: "/images/integration/facebook/scene-2.svg",
  },
  {
    title: "外贸客服",
    description: "进一步承接 Page 邮件及私聊，用更短响应时间服务海外客户。",
    iconSrc: "/images/integration/facebook/scene-3.svg",
  },
  {
    title: "团队管理者",
    description: "分派对话、追踪员工互动数据，让跨团队协作更清晰。",
    iconSrc: "/images/integration/facebook/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy 客户端。",
  },
  {
    title: "第二步",
    description: "按照引导绑定 Facebook 账号。",
  },
  {
    title: "第三步",
    description: "开启广告和评论接入权限。",
  },
  {
    title: "第四步",
    description: "在 Traneasy 内开启翻译与协作功能。",
  },
] as const;

const faqs = [
  {
    question: "需要申请什么权限？",
    answer:
      "使用 Page Manager 或 Messenger 管理权限即可。以实际业务场景和页面设置为准。",
  },
  {
    question: "群消息能即时回复速度吗？",
    answer:
      "支持。结合消息聚合与翻译能力，回复速度与体验都会比手工切换 Facebook 后台更一致。",
  },
  {
    question: "支持回复帖子和广告吗？",
    answer: "支持。帖子互动、评论回复、私聊、广告线索消息都支持统一处理。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 Facebook 粉丝页接入、广告消息管理或多语言运营策略的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
