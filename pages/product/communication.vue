<template>
  <ProductDetail
    title="全渠道沟通"
    subtitle="聚合全球主流社交平台，告别多平台切换的混乱"
    description="将 WhatsApp、Telegram、Line、Facebook、Instagram、TikTok 等全球主流社交平台聚合到一个工作台，管理所有客户对话，跨境沟通效率 300%。"
    :hero-image-src="heroImageSrc"
    hero-image-alt="Traneasy 全渠道沟通工作台"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 全渠道沟通"
    comparison-description="告别多平台切换、翻译繁琐、客户管理割裂的低效模式，效率与体验的全面升级。"
    comparison-product-name="Traneasy 全渠道沟通"
    :comparison-rows="comparisonRows"
    scene-title="打破平台壁垒的沉浸式沟通"
    :scene-items="sceneItems"
    faq-description="全渠道实时翻译，打破国际沟通壁垒！"
    :faqs="faqs"
    cta-title="立即开启全渠道沟通"
    cta-description="把分散在全球各平台的消息，收拢到一个屏幕里。"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
    cta-button-label="下载软件"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const heroImageSrc = "/images/product/app-image.png";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "多平台统一收件箱",
    imageSrc: "/images/product/app-desc-2.png",
    imageAlt: "Traneasy 多平台统一收件箱",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "每天在 6-8 个 APP 之间来回切换，容易漏回客户消息。",
      },
      {
        title: "解决方案",
        description: "所有平台的客户消息集中到一个收件箱，按时间线排列。",
      },
    ],
  },
  {
    title: "跨平台实时翻译",
    imageSrc: "/images/product/app-desc-3.png",
    imageAlt: "Traneasy 跨平台实时翻译",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "日本客户发日语、巴西客户发葡语、中东客户发阿语……看不懂，回复要复制粘贴到翻译软件。",
      },
      {
        title: "系统方案",
        description: "自动双向翻译，你发中文，系统自动转成客户的语言发出。",
      },
    ],
  },
  {
    title: "统一客户标签与备注",
    imageSrc: "/images/product/app-desc-4.png",
    imageAlt: "Traneasy 客户标签与备注",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "客户多了记不住谁是谁，员工离职了客户信息也跟着丢了。",
      },
      {
        title: "系统方案",
        description: "统一的标签和备注系统，跨平台、跨团队成员同步。",
      },
    ],
  },
  {
    title: "多账号聚合管理",
    imageSrc: "/images/product/app-desc-1.png",
    imageAlt: "Traneasy 多账号聚合管理",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "多个账号来回登录登出，验证码收了一遍又一遍，还容易被风控封号。",
      },
      {
        title: "系统方案",
        description: "一台电脑同时登录所有账号，每个账号独立环境防关联。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "平台切换",
    legacy: "在 6-8 个 APP 间来回切换",
    traneasy: "一个界面管理所有平台",
  },
  {
    label: "客户识别",
    legacy: "同一客户在不同平台被当成陌生人",
    traneasy: "自动关联，完整对话历史",
  },
  {
    label: "语言障碍",
    legacy: "需要翻译软件辅助，逐条翻译",
    traneasy: "自动双向翻译，无需手动操作",
  },
  {
    label: "客户管理",
    legacy: "各平台独立，标签不互通",
    traneasy: "统一标签+备注，跨平台同步",
  },
  {
    label: "多账号管理",
    legacy: "多设备/多浏览器，频繁登出登入",
    traneasy: "一台电脑同时多开，独立环境",
  },
] as const;

const sceneItems = [
  {
    title: "跨平台统一营销",
    description:
      "无需在 WhatsApp、Facebook、TikTok 等 6 个聊天窗口间频繁切换。登录 Traneasy 一个后台即可集中处理所有渠道咨询。",
    iconSrc: "/images/product/scene-1.svg",
  },
  {
    title: "全球化无障沟通",
    description:
      "面对小语种询盘，无需复制粘贴。系统内置实时双向自动翻译，客户发外语你见中文，你回中文客户见母语，极大降低沟通门槛。",
    iconSrc: "/images/product/scene-2.svg",
  },
  {
    title: "私域流量集中沉淀",
    description:
      "将分散在各社媒平台的公域流量统一转化为私域好友。通过统一的客户标签体系，记录渠道来源与跟进状态。",
    iconSrc: "/images/product/scene-3.svg",
  },
] as const;

const faqs = [
  {
    question: "Traneasy 目前支持聚合哪些主流的海外社交软件？",
    answer:
      "目前我们深度集成了全球最主流的 6 大通讯与社交平台，包括 WhatsApp、Telegram、Facebook、Instagram、Line 以及 TikTok，全面覆盖欧美、东南亚及日韩等核心跨境市场。",
  },
  {
    question: "使用 Traneasy 进行多账号登录，是否会导致账号被封禁？",
    answer:
      "请放心使用。Traneasy 采用独立的浏览器指纹环境技术和合规的 API 接口接入，为每个登录的账号提供独立的防关联环境，模拟真实用户操作，最大程度保障您的账号安全，防封效果远优于传统多开工具。",
  },
  {
    question: "实时翻译的准确率如何？支持小语种正常沟通吗？",
    answer:
      "我们接入了全球顶尖的 AI 翻译引擎，支持全球 100+ 种语言的实时互译，不仅涵盖英、法、德等主流语种，对泰语、越南语、阿拉伯语等小语种也有极高的翻译准确度，完全满足日常商务沟通需求。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还有部署、团队管理、权限设置或价格相关问题，可以继续查看帮助中心，或联系团队获取更具体的业务方案。",
  },
] as const;

const ctaPoints = [
  "支持全球主流社交平台",
  "自动双向翻译，无需懂外语",
  "统一客户标签，跨平台沉淀客户资产",
  "多账号安全多开，一台电脑管所有",
] as const;

useHead({
  title: () => t("seo.featuresTitle"),
  meta: [{ name: "description", content: () => t("seo.featuresDesc") }],
});
</script>
