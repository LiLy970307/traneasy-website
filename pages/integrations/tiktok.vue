<template>
  <IntegrationDetail
    seo-title="TikTok 集成 - Traneasy 易翻译"
    seo-description="支持 TikTok 私信、评论与跨境电商沟通场景，提供实时翻译、专属话术和风控设置，帮助品牌把流量更快转成销量。"
    logo-src="/images/integration/tiktok/logo.svg"
    title="TikTok翻译助手，让流量变销量，沟通无国界"
    description="实时翻译评论与私信，快速响应全球买家需求。无论是达人建联还是直播带货，都能轻松驾驭。"
    hero-image-src="/images/integration/tiktok/detail.bg.png"
    hero-image-alt="Traneasy TikTok 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="打通流量变现“最后一公里”，拒绝高流量低转化"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖短视频引流与兴趣电商场景，快速转化全球流量"
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
    description: "秒回全球买家咨询，承接泼天流量",
    iconSrc: "/images/integration/tiktok/feature-1.svg",
  },
  {
    title: "直播实时辅助",
    description: "直播中实时翻译观众提问，互动更从容",
    iconSrc: "/images/integration/tiktok/feature-2.svg",
  },
  {
    title: "达人建联管理",
    description: "高效沟通带货合作，建立达人库",
    iconSrc: "/images/integration/tiktok/feature-3.svg",
  },
  {
    title: "热点捕捉",
    description: "翻译热门视频文案，快速跟进流量热点",
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
        description: "视频爆了，评论区全是外语求购，回复不及时流量就跑了。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 自动翻译视频评论和私信，您用中文回复，系统自动转为英语/西班牙语等发送。快速引导客户下单，将流量转化为销量。",
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
          "直播间海外用户私信语言种类繁多，回复消息时需来回复制粘贴对方的话语以及回复的话语，工作效率低。",
      },
      {
        title: "解决方案",
        description:
          "软件内置自动接受/发送消息翻译器，不需要来回复制粘贴，且对于不同国家的联系人有专属独立语言设置，支持单人语言设置。",
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
        description: "同一台设备上运行多个账户容易被官方检测，或引起账户冲突。",
      },
      {
        title: "解决方案",
        description:
          "软件内置指纹浏览器，隔离账户+隐私保护，通过修改设备参数（如ip,系统，UA等），让每个环境像独立设备，避免关联与追踪，降低封号风险。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "评论互动",
    legacy: "看不懂小语种评论，无法回复",
    traneasy: "实时翻译，精准互动",
  },
  {
    label: "私信转化",
    legacy: "语言不通，高流量低转化",
    traneasy: "自动翻译，高效转化订单",
  },
  {
    label: "多账号管理",
    legacy: "多设备切换，操作繁琐",
    traneasy: "一个软件管理所有矩阵号",
  },
  {
    label: "网红对接",
    legacy: "沟通效率低，合作难推进",
    traneasy: "实时互译，快速达成合作",
  },
  {
    label: "客户管理",
    legacy: "粉丝信息零散，难以沉淀",
    traneasy: "标签化管理，精准营销",
  },
] as const;

const sceneItems = [
  {
    title: "TikTok 运营",
    description: "管理矩阵号私信",
    iconSrc: "/images/integration/tiktok/scene-1.svg",
  },
  {
    title: "网红营销",
    description: "对接海外达人/MCN",
    iconSrc: "/images/integration/tiktok/scene-2.svg",
  },
  {
    title: "跨境电商",
    description: "短视频引流转化",
    iconSrc: "/images/integration/tiktok/scene-3.svg",
  },
  {
    title: "品牌出海",
    description: "建立海外品牌声量",
    iconSrc: "/images/integration/tiktok/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy（PC 版）",
  },
  {
    title: "第二步",
    description: "登录 TikTok 账号。",
  },
  {
    title: "第三步",
    description: "开启“实时翻译”",
  },
  {
    title: "第四步",
    description: "在 Traneasy 内回复评论与私信",
  },
] as const;

const faqs = [
  {
    question: "支持 TikTok 的评论翻译吗？",
    answer: "支持。Traneasy 可以实时抓取并翻译视频下的评论，方便您进行互动。",
  },
  {
    question: "可以用来发布视频吗？",
    answer:
      "目前主要专注于消息管理与翻译。视频发布建议在原生 App 或 Creator Marketplace 操作。",
  },
  {
    question: "多开账号会影响视频推荐吗？",
    answer: "不影响。Traneasy 仅用于消息管理，不会干扰 TikTok 的视频推荐算法。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 TikTok 私信接入、评论翻译或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
