<template>
  <ProductDetail
    title="实时翻译"
    subtitle="让沟通像母语一样自然流畅。"
    description="核心的实时翻译引擎，直接嵌入聊天页面，无需切换、无需复制粘贴。实现真正的所见即所得， 让语言不再是阻碍成交与协作的门槛。"
    hero-image-src="/images/product/translate-image.png"
    hero-image-alt="Traneasy 实时翻译界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 实时翻译"
    comparison-description="打破语言壁垒，保持对话节奏一致，让每一条消息沟通都像面对面交流一样顺畅。"
    comparison-product-name="Traneasy 实时翻译"
    :comparison-rows="comparisonRows"
    scene-title="让每一次回复都专业且省力"
    :scene-items="sceneItems"
    faq-description="毫秒级自动互译，让跨语沟通像母语一样流畅。"
    :faqs="faqs"
    cta-title="立即开启实时翻译"
    cta-description="打破语言壁垒，像母语一样流畅沟通"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "实时翻译 - Traneasy 易翻译";
const pageDescription =
  "通过双向自动互译、自动理由回复、多语种覆盖、原文对照和专业术语库能力，让跨语言聊天更自然、更高效。";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "双向自动互译",
    imageSrc: "/images/product/translate-desc-1.png",
    imageAlt: "Traneasy 双向自动互译",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "手动复制、粘贴、切换翻译工具，容易中断对话节奏，跨语种沟通效率始终提不上来。",
      },
      {
        title: "解决方案",
        description:
          "消息收发两端自动识别语言并即时翻译，在原聊天窗口内完成沟通，让交流更自然连贯。",
      },
    ],
  },
  {
    title: "自动理由回复",
    imageSrc: "/images/product/translate-desc-2.png",
    imageAlt: "Traneasy 自动理由回复",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "面对复杂外语消息时，常常不知道如何快速组织专业回复，导致响应慢、表达也不够稳。",
      },
      {
        title: "解决方案",
        description:
          "结合上下文自动生成可直接发送的译文和回复建议，帮助业务人员更快给出准确反馈。",
      },
    ],
  },
  {
    title: "多语种全覆盖",
    imageSrc: "/images/product/translate-desc-3.png",
    imageAlt: "Traneasy 多语种全覆盖",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户来源国家越来越多，使用单一翻译工具很难同时兼顾多语言市场的响应质量。",
      },
      {
        title: "解决方案",
        description:
          "支持多语种实时识别与翻译，覆盖主流跨境业务沟通场景，让一个团队也能服务全球客户。",
      },
    ],
  },
  {
    title: "原文对照模式",
    imageSrc: "/images/product/translate-desc-4.png",
    imageAlt: "Traneasy 原文对照模式",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "只看译文容易丢失语气和上下文，出现误判时也很难快速回查原始表达。",
      },
      {
        title: "解决方案",
        description:
          "原文与译文同步展示，便于核对上下文细节，在提升效率的同时兼顾沟通准确度。",
      },
    ],
  },
  {
    title: "专业术语库",
    imageSrc: "/images/product/translate-desc-5.png",
    imageAlt: "Traneasy 专业术语库",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "行业术语、产品参数、品牌名称容易被翻译偏差，影响专业度，也增加后续解释成本。",
      },
      {
        title: "解决方案",
        description:
          "可沉淀企业专属术语库，让高频业务词汇在不同会话中保持统一表达，提升专业一致性。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "响应速度",
    legacy: "复制到第三方翻译工具后再回复，沟通链路长，客户等待时间久。",
    traneasy: "消息窗口内实时翻译和回复，显著缩短跨语言沟通时间。",
  },
  {
    label: "表达准确性",
    legacy: "上下文容易丢失，行业术语常被误译，沟通细节难以把控。",
    traneasy: "结合上下文和术语库处理译文，表达更贴近业务语境。",
  },
  {
    label: "语言覆盖",
    legacy: "多语言切换繁琐，不同市场沟通质量参差不齐。",
    traneasy: "支持多语种覆盖，让同一团队更轻松服务全球客户。",
  },
  {
    label: "对照校验",
    legacy: "翻译后难以回查原文，出现歧义时排错效率低。",
    traneasy: "支持原文和译文对照查看，方便快速确认关键细节。",
  },
  {
    label: "业务沉淀",
    legacy: "优秀表达无法复用，不同成员回复风格和专业术语不统一。",
    traneasy: "沉淀专业术语和回复习惯，持续提高团队整体沟通质量。",
  },
] as const;

const sceneItems = [
  {
    title: "客户报价与跟单",
    description:
      "在报价、交期确认和售后沟通中实时翻译来往消息，减少误解并缩短跨语言成交周期。",
    iconSrc: "/images/product/translate-icon-1.svg",
  },
  {
    title: "多语言社媒接待",
    description:
      "面对来自 WhatsApp、Facebook、Instagram 等渠道的不同语言客户，也能稳定高效地即时回复。",
    iconSrc: "/images/product/translate-icon-2.svg",
  },
  {
    title: "跨品牌团队协作",
    description:
      "将原文、译文和专业术语统一到同一套工作流里，帮助团队在全球市场中保持一致表达。",
    iconSrc: "/images/product/translate-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "翻译准确度能达到多少？",
    answer:
      "基于成熟的翻译引擎，并结合上下文和术语规则进行优化，在常见跨境业务场景下可以满足高频沟通需求。对于关键表达，还可以通过原文对照进一步确认。",
  },
  {
    question: "机器会泄露聊天内容吗？",
    answer:
      "系统围绕翻译和业务沟通效率设计，遵循企业数据使用规范，不会将聊天内容用于无关用途。实际权限与数据范围仍以企业配置和平台规则为准。",
  },
  {
    question: "支持哪些语言？",
    answer:
      "支持主流国际市场常用语种，并可覆盖多数跨境客户沟通场景。对于多区域业务团队，也可以根据实际需求配置高频使用语言。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于翻译延迟、术语库配置、原文对照模式或不同平台适配方式，可以继续联系团队获取更完整的使用方案。",
  },
] as const;

const ctaPoints = [
  "核心消息窗口内即时翻译，无需频繁切换工具和页面",
  "支持双向自动互译，收发消息都能保持自然对话节奏",
  "支持原文与译文同步对照，降低跨语言沟通误判风险",
  "术语库与回复建议协同工作，提升专业表达的一致性",
  "覆盖多语种客户沟通场景，让团队跨市场拓展更高效",
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
