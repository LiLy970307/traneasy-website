<template>
  <IntegrationDetail
    seo-title="Instagram 集成 - Traneasy 易翻译"
    seo-description="打通 Instagram 私信、评论与品牌互动场景，支持实时翻译、集群运营和粉丝精细化管理，帮助品牌高效承接全球流量。"
    logo-src="/images/integration/instagram/logo.svg"
    title="Instagram 私信与评论互动，跨越语言障碍"
    description="专为 Instagram 设计的 DM 翻译工具。让每一张精美图片都能配上最地道的文案。"
    hero-image-src="/images/integration/instagram/detail-bg.png"
    hero-image-alt="Traneasy Instagram 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs Traneasy 集成"
    comparison-description="突破网红沟通瓶颈，构建精细化运营闭环"
    comparison-product-name="Traneasy 集成"
    :comparison-rows="comparisonRows"
    scene-title="谁最适合使用？"
    scene-description="覆盖网红营销与品牌视觉推广场景，轻松链接全球达人"
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
    title: "DM 私信互译",
    description: "与海外网红/客户聊天，语言零障碍",
    iconSrc: "/images/integration/instagram/feature-1.svg",
  },
  {
    title: "评论互动翻译",
    description: "快速回复粉丝评论，提升账号权重",
    iconSrc: "/images/integration/instagram/feature-2.svg",
  },
  {
    title: "快拍/帖子翻译",
    description: "一键翻译关注的博主动态，捕捉流行趋势",
    iconSrc: "/images/integration/instagram/feature-3.svg",
  },
  {
    title: "网红资源管理",
    description: "标记合作意向，建立网红资源库",
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
        description: "想联系海外网红带货，但 DM 发过去词不达意，显得很业余。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 提供AI 智能润色翻译，让您的建联话术更地道、更礼貌。自动翻译网红回复，实时跟进合作进度。",
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
          "同的话语，需要复制粘贴无数次，当联系人数量和群组数超过一定范围，工作效率大大降低。",
      },
      {
        title: "解决方案",
        description:
          "支持批量发送消息，只需选择群发对象，设置发送消息间隔时间，填写发送内容，点击确定即可统一发送。",
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
        description: "关注了国外大牌或博主，但看不懂他们的文案和快拍内容。",
      },
      {
        title: "解决方案",
        description:
          "可根据各大博主的国籍，设置独立的语言翻译，不用来回切换语种，快捷方便。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "网红沟通",
    legacy: "依赖翻译软件，沟通生硬",
    traneasy: "实时互译，建立信任",
  },
  {
    label: "多账号管理",
    legacy: "多设备切换",
    traneasy: "一个软件搞定",
  },
  {
    label: "私信回复",
    legacy: "手机 App 操作不便",
    traneasy: "电脑大屏高效回复",
  },
  {
    label: "客户管理",
    legacy: "记忆混乱",
    traneasy: "标签化管理",
  },
  {
    label: "营销效果",
    legacy: "难以追踪",
    traneasy: "链接参数精准追踪",
  },
] as const;

const sceneItems = [
  {
    title: "网红营销",
    description: "对接全球网红/KOL",
    iconSrc: "/images/integration/instagram/scene-1.svg",
  },
  {
    title: "品牌出海",
    description: "管理品牌官方账号私信",
    iconSrc: "/images/integration/instagram/scene-2.svg",
  },
  {
    title: "时尚买手",
    description: "与海外买手沟通选品",
    iconSrc: "/images/integration/instagram/scene-3.svg",
  },
  {
    title: "视觉设计师",
    description: "跨国沟通设计需求",
    iconSrc: "/images/integration/instagram/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装 Traneasy",
  },
  {
    title: "第二步",
    description: "登录 Instagram 账号",
  },
  {
    title: "第三步",
    description: "开启“私信翻译”",
  },
  {
    title: "第四步",
    description: "在 Traneasy 内查看和回复所有 DM",
  },
] as const;

const faqs = [
  {
    question: "支持 Instagram Reels 或帖子的评论翻译吗？",
    answer: "目前主要支持私信 (DM) 功能。评论管理功能正在开发中，敬请期待。",
  },
  {
    question: "可以发送图片和短视频吗？",
    answer: " 支持。您可以像在原生 App 一样发送图片、视频和表情。",
  },
  {
    question: "多开账号会被封号吗？",
    answer:
      "Traneasy 采用合规的网络请求方式，只要正常运营，不进行违规刷量，账号安全稳定。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 Instagram DM 接入、评论翻译或多账号运营方式的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
