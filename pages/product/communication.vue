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
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "聚合收件箱",
        description:
          "将 WhatsApp、Telegram、Facebook、Line 等消息统一归集到同一个会话视图，避免重复切换客户端。",
      },
      {
        title: "系统分类",
        description:
          "按平台、未读、特别关注和群组等维度自动分类，重要消息更容易被及时处理。",
      },
    ],
  },
  {
    title: "跨平台实时翻译",
    imageSrc: "/images/product/app-desc-3.png",
    imageAlt: "Traneasy 跨平台实时翻译",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "双向翻译",
        description:
          "输入母语即可自动翻译为对方语言发送，接收外语消息后也会同步展示原文与译文。",
      },
      {
        title: "系统方案",
        description:
          "适配客服、销售、跟单等高频场景，不切换窗口也能完成跨语言沟通闭环。",
      },
    ],
  },
  {
    title: "统一客户标签与备注",
    imageSrc: "/images/product/app-desc-4.png",
    imageAlt: "Traneasy 客户标签与备注",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "客户沉淀",
        description:
          "为每位客户统一设置备注、电话、标签、待办事项和更新时间，关系资产集中管理。",
      },
      {
        title: "系统方案",
        description:
          "在一个界面完成信息录入、标签关联和后续跟进，方便团队共享和持续运营。",
      },
    ],
  },
  {
    title: "多账号聚合管理",
    imageSrc: "/images/product/app-desc-1.png",
    imageAlt: "Traneasy 多账号聚合管理",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "批量登陆",
        description:
          "同平台账号可批量接入、统一管理，支持分组展示和置顶，提高团队协同效率。",
      },
      {
        title: "系统方案",
        description:
          "一个操作后台即可查看多个账号状态、消息和资料，降低账号矩阵运营成本。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "沟通入口",
    legacy: "每个平台单独打开客户端，消息分散难汇总。",
    traneasy: "一个收件箱整合所有平台消息，统一查看与回复。",
  },
  {
    label: "平台切换",
    legacy: "来回切换窗口中断节奏，容易遗漏重点客户。",
    traneasy: "消息、翻译、备注都在同一工作台完成。",
  },
  {
    label: "翻译体验",
    legacy: "复制消息到翻译软件，操作繁琐且时效性差。",
    traneasy: "会话内实时翻译，发送和接收双向联动。",
  },
  {
    label: "客户管理",
    legacy: "客户信息分散，缺少标签和备注沉淀。",
    traneasy: "统一标签、备注、待办与联系信息。",
  },
  {
    label: "多账号管理",
    legacy: "多个账号切换频繁，团队协作成本高。",
    traneasy: "一个后台同时管理多个账号，队伍协作更顺畅。",
  },
] as const;

const sceneItems = [
  {
    title: "跨平台统一营销",
    description:
      "在 WhatsApp、Facebook、TikTok 等多个渠道统一承接线索，把客户咨询沉淀到同一套会话体系中。",
    iconSrc: "/images/product/scene-1.svg",
  },
  {
    title: "全球化无障沟通",
    description:
      "面对多语种客户、海外经销商、品牌代理和本地团队时，保持消息同步与即时翻译，沟通不再断层。",
    iconSrc: "/images/product/scene-2.svg",
  },
  {
    title: "私域运营效率升级",
    description:
      "标签、备注、分组和快捷动作全部沉淀在平台里，让客户运营从零散响应升级为流程化管理。",
    iconSrc: "/images/product/scene-3.svg",
  },
] as const;

const faqs = [
  {
    question: "Traneasy 目前支持聚合哪些主流的海外社交软件？",
    answer:
      "目前可统一接入 WhatsApp、Telegram、Facebook、Instagram、Line、TikTok 等主流社交平台。后续还会持续扩展更多渠道，方便企业在一个工作台内完成全球沟通。",
  },
  {
    question: "使用 Traneasy 进行多账号登录，是否会导致账号被封禁？",
    answer:
      "系统支持账号聚合管理与环境隔离配置，能够降低多账号运营中的风险。实际效果也与账号使用习惯、平台风控策略和网络环境有关，建议结合规范运营共同使用。",
  },
  {
    question: "实时翻译的准确率如何？支持小语种正常沟通吗？",
    answer:
      "Traneasy 的翻译能力适合外贸沟通、客户服务和营销回复等主流场景，支持多语言双向互译。对于小语种和专业术语，也可以通过上下文辅助和人工校正提升最终沟通质量。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还有部署、团队管理、权限设置或价格相关问题，可以继续查看帮助中心，或联系团队获取更具体的业务方案。",
  },
] as const;

const ctaPoints = [
  "支持全球主流社交平台接入",
  "统一消息视图，天然适合团队协作",
  "翻译+客户管理+矩阵账号三位一体",
  "多账号聚合分析，一台电脑管理多个窗口",
] as const;

useHead({
  title: () => t("seo.featuresTitle"),
  meta: [{ name: "description", content: () => t("seo.featuresDesc") }],
});
</script>
