<template>
  <IntegrationDetail
    seo-title="Facebook 集成 - Traneasy 易翻译"
    seo-description="一键翻译 Facebook 帖子互动、私信与粉丝页消息，帮助企业高效管理海外社媒私域与广告线索。"
    logo-src="/images/integration/facebook/logo.svg"
    title="一键翻译Facebook，粉丝互动与广告转化的利器"
    description="自动翻译私信与评论，实时抓取广告线索，打通 Facebook 主页、Messenger 与广告评论区。"
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
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
  {
    title: "私信/评论互译",
    description: "自动翻译帖子评论和私信，互动更及时",
    iconSrc: "/images/integration/facebook/feature-1.svg",
  },
  {
    title: "广告线索抓取",
    description: "自动识别广告咨询，防止商机遗漏",
    iconSrc: "/images/integration/facebook/feature-2.svg",
  },
  {
    title: "粉丝画像管理",
    description: "记录粉丝地区与兴趣，精准营销",
    iconSrc: "/images/integration/facebook/feature-3.svg",
  },
  {
    title: "多主页切换",
    description: "统一管理多个公共主页，效率翻倍",
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
          "发了一条爆款贴，几千条评论全是外语，回复不过来，热度白白流失。",
      },
      {
        title: "解决方案",
        description:
          "Traneasy 自动翻译帖子下的所有评论和私信。您可以用中文回复，系统自动转为对应语言发送，快速响应粉丝，维持贴文热度。",
      },
    ],
  },
  {
    title: "个人专属语种定制",
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
          "在与五湖四海的用户聊天时，使用不同的语言交流，来回复制粘贴，切换语种，搞得头晕目眩。",
      },
      {
        title: "解决方案",
        description:
          "软件内配置但账户多人员语言差异化设置，支持为不同的联系人分别定制专属语种。",
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
          "随着客户量的增加，很难一一对应客户来自哪里，工作性质，是不是潜在客户。",
      },
      {
        title: "解决方案",
        description:
          "内置精细化客户分成备注系统，可一一对应每个客户，点击粉丝备注即可查看客户信息。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "多语言评论",
    legacy: "无法理解，无法回复",
    traneasy: "实时翻译，流畅互动",
  },
  {
    label: "多账号管理",
    legacy: "多浏览器切换，繁琐",
    traneasy: "一个软件管理所有",
  },
  {
    label: "私信回复",
    legacy: "需登录网页版，语言切换麻烦",
    traneasy: "聚合收件箱，自动翻译",
  },
  {
    label: "客户管理",
    legacy: "分散在不同 Page",
    traneasy: "统一 CRM 管理",
  },
  {
    label: "渠道追踪",
    legacy: "手动记录",
    traneasy: "自动识别广告来源",
  },
] as const;

const sceneItems = [
  {
    title: "Facebook 投手",
    description: "管理广告询盘，提升转化",
    iconSrc: "/images/integration/facebook/scene-1.svg",
  },
  {
    title: "社群管理员",
    description: "高效回复帖子下的多语言评论",
    iconSrc: "/images/integration/facebook/scene-2.svg",
  },
  {
    title: "外贸客服",
    description: "统一处理所有 Page 的私信",
    iconSrc: "/images/integration/facebook/scene-3.svg",
  },
  {
    title: "团队管理者",
    description: "分配任务，统计员工绩效",
    iconSrc: "/images/integration/facebook/scene-4.svg",
  },
] as const;

const setupSteps = [
  {
    title: "第一步",
    description: "下载并安装Traneasy（PC 版）",
  },
  {
    title: "第二步",
    description: "授权登录Facebook账号",
  },
  {
    title: "第三步",
    description: "开启“实时翻译”",
  },
  {
    title: "第四步",
    description: "在Traneasy内回复所有私信与评论",
  },
] as const;

const faqs = [
  {
    question: "需要申请什么权限？",
    answer:
      "需要 Page Manager 或 Messenger 管理员权限，以确保能读取和发送消息。",
  },
  {
    question: "翻译会影响回复速度吗？",
    answer: "不会。翻译在毫秒级完成，回复速度与原生 Facebook 后台一致。",
  },
  {
    question: "支持回复图片和表情吗？",
    answer: "支持。您可以发送图片、表情包、链接，系统仅翻译文本部分。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于 Facebook 粉丝页接入、广告消息管理或多语言运营策略的问题，可以继续联系团队获取更完整的实施方案。",
  },
] as const;
</script>
