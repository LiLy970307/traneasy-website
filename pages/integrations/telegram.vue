<template>
  <IntegrationDetail
    seo-title="Telegram 集成 - Traneasy 易翻译"
    seo-description="让 Telegram 群组、频道与私聊沟通跨越语言障碍，支持实时翻译、私域管理与批量触达，帮助企业更高效服务全球用户。"
    logo-src="/images/integration/telegram/logo.svg"
    title="让Telegram打破加密通讯的语言壁垒"
    description="支持群组消息实时翻译与频道内容一键汉化，无论是做私域流量还是社群营销，沟通从未如此顺畅。"
    hero-image-src="/images/integration/telegram/detail-bg.png"
    hero-image-alt="Traneasy Telegram 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="告别低效手动翻译，重塑社群运营新标准"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖加密通讯与社群运营场景，精准触达高净值用户"
    :scene-items="sceneItems"
    setup-title="零门槛配置指南"
    :setup-steps="setupSteps"
    faq-description="解锁 Telegram 多账号安全接入，防封又高效！"
    :faqs="faqs"
    :download-anchor="downloadAnchor"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
  {
    title: "群组消息翻译",
    description: "多人群聊自动识别",
    iconSrc: "/images/integration/telegram/feature-1.svg",
  },
  {
    title: "频道内容汉化",
    description: "一键翻译关注的频道动态",
    iconSrc: "/images/integration/telegram/feature-2.svg",
  },
  {
    title: "机器人无障碍",
    description: "与各类 Bot 交互无语言障碍",
    iconSrc: "/images/integration/telegram/feature-3.svg",
  },
  {
    title: "隐私安全",
    description: "本地环境隔离，保障账号隐私",
    iconSrc: "/images/integration/telegram/feature-4.svg",
  },
] as const;

const featureSections = [
  {
    title: "群组/频道实时翻译",
    imageSrc: "/images/integration/telegram/desc-1.png",
    imageAlt: "Telegram 群组频道实时翻译",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description:
          "加入海外项目群组或关注资讯频道，满屏外语看不懂，只能干瞪眼。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 自动识别群组内不同成员的语言，实时显示中文译文。支持一键翻译频道历史消息，让您轻松掌握全球一手资讯。",
      },
    ],
  },
  {
    title: "高效私域客户管理",
    imageSrc: "/images/integration/telegram/desc-2.png",
    imageAlt: "Telegram 私域客户管理",
    reverse: true,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description: "TG 客户流动性大，难以分类管理，容易失联。",
      },
      {
        title: "解决方案",
        description:
          "内置 CRM 系统，支持对客户进行自定义备注和标签分类（如：币圈、Web3、潜在代理）。支持关键词快速检索，高效维护私域流量。",
      },
    ],
  },
  {
    title: "批量触达与营销",
    imageSrc: "/images/integration/telegram/desc-3.png",
    imageAlt: "Telegram 批量触达与营销",
    reverse: false,
    buttonLabel: "极简安装流程",
    buttonTo: "#setup-guide",
    buttonVariant: "text",
    points: [
      {
        title: "常见问题",
        description: "手动向数百个联系人发送项目介绍，效率极低且容易被限制。",
      },
      {
        title: "解决方案",
        description:
          "支持多账号批量发送营销信息，自动翻译适配不同国家语言。结合短链接分流系统，精准追踪每个渠道的引流效果。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "群组消息",
    legacy: "复制→翻译→回看，跟不上节奏",
    traneasy: "聊天窗直接显示中文",
  },
  {
    label: "多账号管理",
    legacy: "多部手机/反复登出",
    traneasy: "一台电脑同时在线",
  },
  {
    label: "文件沟通",
    legacy: "无法理解外文文件",
    traneasy: "文件内容实时翻译",
  },
  {
    label: "社群运营",
    legacy: "只能看热闹，无法参与",
    traneasy: "深度参与讨论，引导话题",
  },
  {
    label: "渠道追踪",
    legacy: "不知客户从哪来",
    traneasy: "短链接自动打标",
  },
] as const;

const sceneItems = [
  {
    title: "社群运营",
    description: "管理多语言 Telegram 群组",
    iconSrc: "/images/integration/telegram/scene-1.svg",
  },
  {
    title: "加密社区项目方",
    description: "与全球投资者无障碍沟通",
    iconSrc: "/images/integration/telegram/scene-2.svg",
  },
  {
    title: "海外推广",
    description: "多频道内容一键分发",
    iconSrc: "/images/integration/telegram/scene-3.svg",
  },
  {
    title: "开源项目维护者",
    description: "与全球开发者协作",
    iconSrc: "/images/integration/telegram/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy（PC 版）",
  },
  {
    title: "第二步",
    description: "扫码登录你的 Telegram 账号",
  },
  {
    title: "第三步",
    description: "开启“群组翻译”，选择目标语言",
  },
  {
    title: "第四步",
    description: "使用 Telegram 聊天，翻译自动生效",
  },
] as const;

const faqs = [
  {
    question: "Telegram 群组人数多，翻译会卡顿吗？",
    answer:
      "Traneasy 采用高性能服务器架构，即使万人社群也能毫秒级响应，消息流处理流畅不卡顿。",
  },
  {
    question: "支持 Telegram 的文件翻译吗？",
    answer:
      "支持。无论是 PDF 说明书还是 Word 报价单，Traneasy 均能自动识别并提供翻译预览。",
  },
  {
    question: "多开账号会拖慢 Telegram 吗？",
    answer:
      "Traneasy 采用独立指纹环境和正规 API 接口技术，模拟真实用户操作，并支持 IP 隔离，最大程度保障账号安全。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于账号接入、群发策略、群组翻译或私域运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
