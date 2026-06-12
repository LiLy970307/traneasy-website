<template>
  <IntegrationDetail
    seo-title="LINE 集成 - Traneasy 易翻译"
    seo-description="支持 LINE 私聊、群聊与官方账号客服场景，提供实时翻译、多账号管理与日韩市场精细化沟通能力。"
    logo-src="/images/integration/line/logo.svg"
    title="LINE 翻译插件，深耕日韩市场的必备工具"
    description="支持官方账号与个人号双向翻译、自动识别日语、韩语等东亚语种，让您的服务像本地商家一样有礼。"
    hero-image-src="/images/integration/line/detail-bg.png"
    hero-image-alt="Traneasy LINE 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="跨越语言与设备沟通，深耕东亚品格性市场"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖东亚与东南亚区域市场，深耕高黏性私域流量"
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
    title: "精准语种互译",
    description: "针对日语、韩语与中文场景优化翻译体验",
    iconSrc: "/images/integration/line/feature-1.svg",
  },
  {
    title: "官方账号管理",
    description: "统一承接官方账号私聊、群发与客户维护",
    iconSrc: "/images/integration/line/feature-2.svg",
  },
  {
    title: "优质客户沉淀",
    description: "标签备注配合筛选，提升复购与转化效率",
    iconSrc: "/images/integration/line/feature-3.svg",
  },
  {
    title: "多号协同管理",
    description: "多账号统一工作台，客服协作更稳定",
    iconSrc: "/images/integration/line/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "精准语种互译",
    imageSrc: "/images/integration/line/desc-1.png",
    imageAlt: "LINE 精准语种互译",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "面对日语、韩语等东亚市场用户时，客服往往需要反复切换翻译工具，沟通礼貌表达和语气也难把握。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 针对 LINE 常见语种场景做了优化，消息在原会话中即可互译，让客服响应更自然、表达更贴近本地习惯。",
      },
    ],
  },
  {
    title: "官方账号高效客服",
    imageSrc: "/images/integration/line/desc-2.png",
    imageAlt: "LINE 官方账号高效客服",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "LINE 官方号消息量大时，人工切换后台、查看粉丝状态、回复与记录都容易遗漏，客服效率受限。",
      },
      {
        title: "解决方案",
        description:
          "统一承接官方号对话与客户状态管理，在同一工作台完成翻译、回复和备注，让服务流程更连贯。",
      },
    ],
  },
  {
    title: "多账户一站统一管理",
    imageSrc: "/images/integration/line/desc-3.png",
    imageAlt: "LINE 多账户一站统一管理",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "企业在日本、韩国与东南亚市场通常需要维护多个 LINE 账号，工作流分散，客服协作和数据沉淀成本都很高。",
      },
      {
        title: "解决方案",
        description:
          "多账号统一收发、标签筛选和会话管理，让团队在同一后台高效协作，更适合持续经营区域市场。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "语言支持",
    legacy: "依赖机器翻译插件，语感生硬。",
    traneasy: "语境翻译、表达自然。",
  },
  {
    label: "多号切换",
    legacy: "多个客户端来回切。",
    traneasy: "统一接管对话。",
  },
  {
    label: "官方客服",
    legacy: "消息回复慢且丢失。",
    traneasy: "AI 助手、标签与备注管理。",
  },
  {
    label: "客户管理",
    legacy: "凭印象。",
    traneasy: "标签管理。",
  },
  {
    label: "市场沉淀",
    legacy: "人员切换后沟通断点。",
    traneasy: "地区用户画像更清晰。",
  },
] as const;

const sceneItems = [
  {
    title: "日本市场",
    description: "跨境卖家和本地化团队以更礼貌自然的表达服务日本买家。",
    iconSrc: "/images/integration/line/scene-1.svg",
  },
  {
    title: "中国台湾市场",
    description: "面向中文与日语双语客户群体，提升全文案互动效率。",
    iconSrc: "/images/integration/line/scene-2.svg",
  },
  {
    title: "泰国市场",
    description: "以多账号群控能力承接本地咨询和活动消息下发。",
    iconSrc: "/images/integration/line/scene-3.svg",
  },
  {
    title: "跨境电商",
    description: "支持官方号与个人号共用，服务营销与售后并行开展。",
    iconSrc: "/images/integration/line/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy 客户端。",
  },
  {
    title: "第二步",
    description: "扫码或授权绑定你的 LINE 账号。",
  },
  {
    title: "第三步",
    description: "开启官方号消息同步与翻译能力。",
  },
  {
    title: "第四步",
    description: "立即开始用 LINE 回复海外客户。",
  },
] as const;

const faqs = [
  {
    question: "支持 Line 的已读功能吗？",
    answer: "支持。Traneasy 可保留 LINE 的已读反馈能力，方便客服判断客户状态。",
  },
  {
    question: "翻译的日语够礼貌吗？",
    answer:
      "我们针对日语社交和客服场景做了优化，支持基础敬语表达。您的具体用语效果也取决于原文上下文。",
  },
  {
    question: "支持 Line Pay 吗？",
    answer:
      "Traneasy 专注于沟通翻译与管理流程，支付链接或收款流程需结合 Line App 上游能力或业务安全方案。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 LINE 官方号接入、日韩市场翻译策略或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
