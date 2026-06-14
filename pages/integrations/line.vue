<template>
  <IntegrationDetail
    seo-title="LINE 集成 - Traneasy 易翻译"
    seo-description="支持 LINE 私聊、群聊与官方账号客服场景，提供实时翻译、多账号管理与日韩市场精细化沟通能力。"
    logo-src="/images/integration/line/logo.svg"
    title="LINE翻译插件，深耕日韩泰市场的必备工具"
    description="支持官方账号与个人号双向翻译。自动识别日语、泰语等复杂语种，让您的服务像本地商家一样亲切。"
    hero-image-src="/images/integration/line/detail-bg.png"
    hero-image-alt="Traneasy LINE 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="跨越语言与设备鸿沟，深耕东亚高粘性市场"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖东亚与东南亚区域市场，深耕高粘性私域流量"
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
    title: "精准日韩泰互译",
    description: "针对 LINE 主流市场优化翻译引擎",
    iconSrc: "/images/integration/line/feature-1.svg",
  },
  {
    title: "官方账号管理",
    description: "统一回复官方账号私信，提升服务评分",
    iconSrc: "/images/integration/line/feature-2.svg",
  },
  {
    title: "优惠券/消息推送",
    description: "批量发送本地化营销内容",
    iconSrc: "/images/integration/line/feature-3.svg",
  },
  {
    title: "客户分层管理",
    description: "按地区/购买力标记客户",
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
          "日语敬语、泰语特殊字符多，普通翻译软件翻出来很生硬，客户体验差。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 针对 LINE 主流市场（日本、泰国、中国台湾）优化了翻译模型，自动识别语境，让回复更符合当地礼仪习惯。",
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
        description: "LINE 官方账号咨询量大，人工客服不懂外语，招聘成本高。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 实现双向实时翻译，国内客服即可轻松接待海外客户。支持快捷回复话术，统一服务标准，大幅提升响应速度。",
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
        description: "账户太多，登陆后容易混淆，分不清楚账户类型，工作性质。",
      },
      {
        title: "解决方案",
        description:
          "多个账户统一管理，只需点击需要的账户，即可切换，账户可以备注名称，方便快速识别和区分账户性质。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "语言沟通",
    legacy: "依赖截图翻译，效率极低",
    traneasy: "实时互译，流畅对话",
  },
  {
    label: "多账号管理",
    legacy: "电脑端同时登录",
    traneasy: "统一接管对话。",
  },
  {
    label: "商务礼仪",
    legacy: "AI 润色，符合当地习惯",
    traneasy: "AI 助手、标签与备注管理。",
  },
  {
    label: "客户管理",
    legacy: "档案化管理",
    traneasy: "标签管理。",
  },
  {
    label: "市场拓展",
    legacy: "难以进入封闭生态",
    traneasy: "轻松对接日台泰市场",
  },
] as const;

const sceneItems = [
  {
    title: "日本市场",
    description: "对翻译准确度和礼仪要求高",
    iconSrc: "/images/integration/line/scene-1.svg",
  },
  {
    title: "中国台湾市场",
    description: "繁体中文实时互译",
    iconSrc: "/images/integration/line/scene-2.svg",
  },
  {
    title: "泰国市场",
    description: "小语种泰语翻译",
    iconSrc: "/images/integration/line/scene-3.svg",
  },
  {
    title: "跨境电商",
    description: "深耕高净值人群",
    iconSrc: "/images/integration/line/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy（PC 版）",
  },
  {
    title: "第二步",
    description: "扫码或账号密码登录 Line",
  },
  {
    title: "第三步",
    description: "开启“繁体/日语翻译”",
  },
  {
    title: "第四步",
    description: "正常使用 Line 聊天",
  },
] as const;

const faqs = [
  {
    question: "支持 Line 的已读功能吗？",
    answer: "支持。Traneasy 完美保留 Line 的已读回执功能，方便您判断客户状态。",
  },
  {
    question: "翻译的日语够礼貌吗？",
    answer:
      "我们的引擎针对日语商务场景进行了专门优化，支持敬语翻译，避免因语言粗鲁冒犯客户。",
  },
  {
    question: "支持 Line Pay 吗？",
    answer:
      "Traneasy 专注于沟通翻译功能，支付功能建议在原生 App 上操作以确保资金安全。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 LINE 官方号接入、日韩市场翻译策略或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
