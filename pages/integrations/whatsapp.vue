<template>
  <IntegrationDetail
    seo-title="WhatsApp 集成 - Traneasy 易翻译"
    seo-description="让 WhatsApp 跨国沟通像微信一样简单，支持消息翻译、群发、标签管理和单人语音设置，帮助企业高效承接海外客户。"
    logo-src="/images/integration/whatsapp/logo.svg"
    title="让 WhatsApp 跨国沟通，像用微信一样简单"
    description="深度集成WhatsApp，实现双向实时自动翻译。无需复制粘贴，无需切换软件，让语言不再是成交的障碍。"
    hero-image-src="/images/integration/whatsapp/top-bg.png"
    hero-image-alt="Traneasy WhatsApp 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="终结低效手工翻译，打造无障碍全球沟通流"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖全球贸易与即时通讯场景，高效转化海外询盘"
    :scene-items="sceneItems"
    setup-title="零门槛配置指南"
    :setup-steps="setupSteps"
    faq-description="解锁 WhatsApp 多账号安全接入，防封又高效！"
    :faqs="faqs"
    :download-anchor="downloadAnchor"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
  {
    title: "毫秒级响应",
    description: "输入即翻，沟通零延迟",
    iconSrc: "/images/integration/whatsapp/feature-1.svg",
  },
  {
    title: "独立环境",
    description: "防关联技术，保障账号安全",
    iconSrc: "/images/integration/whatsapp/feature-2.svg",
  },
  {
    title: "200+语种",
    description: "覆盖全球主流及小语种市场",
    iconSrc: "/images/integration/whatsapp/feature-3.svg",
  },
  {
    title: "AI 智能润色",
    description: "告别生硬机翻，语境更地道",
    iconSrc: "/images/integration/whatsapp/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "聊天消息双向翻译",
    imageSrc: "/images/integration/whatsapp/desc-1.png",
    imageAlt: "WhatsApp 聊天消息双向翻译",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "客户发来西班牙语/阿拉伯语，看不懂还要切翻译软件，回复慢容易丢单。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 自动识别对方语言并实时转译为中文；您输入中文，发送时自动转为对方语言。全程无感，如同母语交流。",
      },
    ],
  },
  {
    title: "跨国营销一键群发",
    imageSrc: "/images/integration/whatsapp/desc-2.png",
    imageAlt: "WhatsApp 跨国营销一键群发",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description: "新品上线或节日促销，手动逐个发送效率太低。",
      },
      {
        title: "解决方案",
        description:
          "支持 WhatsApp 批量消息推送，自动匹配客户语言进行翻译发送。精准触达全球目标用户，大幅提升营销转化率。",
      },
    ],
  },
  {
    title: "客户标签与备注管理",
    imageSrc: "/images/integration/whatsapp/desc-3.png",
    imageAlt: "WhatsApp 客户标签与备注管理",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description: "客户多了记不住需求，容易搞混。",
      },
      {
        title: "解决方案",
        description:
          "在聊天界面直接为客户添加自定义备注和标签（如：意向高、已付款、需跟进）。支持快速检索，清晰梳理客户层级，避免客户流失。",
      },
    ],
  },
  {
    title: "单人语言设置",
    imageSrc: "/images/integration/whatsapp/desc-4.png",
    imageAlt: "WhatsApp 单人语言设置",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "语同一个账户中可能出现来自不同国家的客户，使用语言不一致，来回切换语言，浪费时间，且容易出错。",
      },
      {
        title: "解决方案",
        description:
          "账户内支持全局联系人设置和当前联系人设置两种翻译设置模式，可对每一位客户进行专属语言设置，使用更快捷、方便。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "语言沟通",
    legacy: "复制→翻译→粘贴，效率极低",
    traneasy: "实时互译，流畅对话",
  },
  {
    label: "多账号管理",
    legacy: "多部手机/反复登出",
    traneasy: "一台电脑同时在线",
  },
  {
    label: "客户管理",
    legacy: "信息分散，难以沉淀",
    traneasy: "统一标签，资产归属公司",
  },
  {
    label: "询盘转化",
    legacy: "回复慢，客户流失",
    traneasy: "快速响应，提升转化率",
  },
  {
    label: "渠道追踪",
    legacy: "回复慢，客户流失",
    traneasy: "短链接自动打标",
  },
] as const;

const sceneItems = [
  {
    title: "外贸业务员",
    description: "对接全球采购，快速响应询盘",
    iconSrc: "/images/integration/whatsapp/scene-1.svg",
  },
  {
    title: "跨境电商客服",
    description: "处理售前咨询与售后问题",
    iconSrc: "/images/integration/whatsapp/scene-2.svg",
  },
  {
    title: "B2B 销售",
    description: "维护长期客户关系，提升复购",
    iconSrc: "/images/integration/whatsapp/scene-3.svg",
  },
  {
    title: "海外采购",
    description: "与国外供应商无障碍沟通",
    iconSrc: "/images/integration/whatsapp/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy。",
  },
  {
    title: "第二步",
    description: "扫码登录你的 WhatsApp 账号",
  },
  {
    title: "第三步",
    description: "开启“实时翻译”，选择目标语言",
  },
  {
    title: "第四步",
    description: "使用WhatsApp聊天，翻译自动生效",
  },
] as const;

const faqs = [
  {
    question: "使用 Traneasy 会导致 WhatsApp 封号吗？",
    answer:
      "Traneasy 采用独立指纹环境和正规 API 接口技术，模拟真实用户操作，并支持 IP 隔离，最大程度保障账号安全。同时建议遵守 WhatsApp 官方发送频率规范。",
  },
  {
    question: "支持语音和图片翻译吗？",
    answer:
      "支持。Traneasy 持续开发中，目前已完美支持文本实时互译，语音转文字翻译功能正在逐步适配中。",
  },
  {
    question: "支持 WhatsApp Business 吗？",
    answer:
      "支持。Traneasy 完美兼容 WhatsApp 个人版和 Business 版，功能完全通用。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于账号接入、群发策略、多语言设置或团队协作方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
