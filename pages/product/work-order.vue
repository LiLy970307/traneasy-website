<template>
  <ProductDetail
    title="工单系统/分流链接"
    subtitle="自动化线索管理，让每个商机都有迹可循"
    description="提供智能工单与分流链接解决方案，通过生成带参数的专属链接，自动识别客户来源，并生成工单进行分配，实现线索管理的自动化。"
    hero-image-src="/images/product/order-image.png"
    hero-image-alt="Traneasy 工单系统与分流链接界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 工单系统/分流链接"
    comparison-description="告别客户询问“该找谁”的混乱，实现流量的自动化分类与分配，让专业服务从第一秒开始。"
    comparison-product-name="Traneasy 工单系统/分流链接"
    :comparison-rows="comparisonRows"
    scene-title="广告投放的闭环管理"
    :scene-items="sceneItems"
    faq-description="智能分流精准分配，让每一个客户咨询都高效响应！"
    :faqs="faqs"
    cta-title="立即开启工单系统/分流链接"
    cta-description="告别客户分配混乱，实现高效协同服务"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "工单系统/分流链接 - Traneasy 易翻译";
const pageDescription =
  "通过分流链接追踪、自动打标分组、智能接待分配、客户工单生成和业绩归属管理，让线索流转更清晰、更高效。";
const downloadLink = `${localePath("/download")}`;
const featureSections = [
  {
    title: "短链接智能追踪",
    imageSrc: "/images/product/order-desc-1.png",
    imageAlt: "Traneasy 短链接智能追踪",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户来源五花八门，不知道哪个广告带来了客户，无法计算投产比。",
      },
      {
        title: "解决方案",
        description:
          "为不同的广告组、视频生成专属的 Traneasy 短链接。客户点击时，系统自动记录来源信息。",
      },
    ],
  },
  {
    title: "自动打标与分组",
    imageSrc: "/images/product/order-desc-2.png",
    imageAlt: "Traneasy 自动打标与分组",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户进来了，还要人工问“您是从哪里看到的？”，浪费时间且客户反感。",
      },
      {
        title: "解决方案",
        description:
          "客户发起咨询的瞬间，系统根据链接参数自动为其 打上标签（如：Facebook-广告组A），无需人工干预。",
      },
    ],
  },
  {
    title: "区域ip进入管控",
    imageSrc: "/images/product/order-desc-3.png",
    imageAlt: "Traneasy 智能分配接待",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "账户联系人来自不同国家，需要将同一个国家的联系人归档到同一个账户里。",
      },
      {
        title: "解决方案",
        description:
          "短链接可设置拦截策略，拦截不同地区的客户，将不同地区的联系人进行筛选，符合区域的联系人才能进入相应的账户。",
      },
    ],
  },
  {
    title: "工单状态管理",
    imageSrc: "/images/product/order-desc-4.png",
    imageAlt: "Traneasy 客户工单生成",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "以往问题处理无记录、无节点、无反馈，用户无法知晓处理进度，管理人员难以掌握任务推进情况，信息严重不对称。",
      },
      {
        title: "解决方案",
        description:
          "支持工单自主立项提交，实时展示工单全维度状态，同步更新处置流程进度，实现全链路可视化管控。",
      },
    ],
  },
  {
    title: "会话数据监测",
    imageSrc: "/images/product/order-desc-5.png",
    imageAlt: "Traneasy 业绩归属清晰",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "考勤员工，没有实质性的参考数据依据，员工不能得到透明/公平公正的奖惩。",
      },
      {
        title: "解决方案",
        description:
          "软件后台可查看90天内通过链接/平台/工单的新增人数、新增会话数量以及转化率，方便考核员工。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "流量分配",
    legacy: "客户随机咨询，由于分配不均导致忙闲不均",
    traneasy: "链接预设规则，自动将客户分配给指定客服或部门",
  },
  {
    label: "客户引导",
    legacy: "客户需反复描述问题，体验差",
    traneasy: "链接自带参数，自动识别客户来源与需求意图",
  },
  {
    label: "问题分类",
    legacy: "咨询、售后、投诉混在一起，管理混乱",
    traneasy: "自动打标签分类（如：售前咨询、售后投诉），便于统计",
  },
  {
    label: "响应速度",
    legacy: "需要人工询问“请问您遇到什么问题？”",
    traneasy: "系统自动识别，客服直接针对性回复，缩短响应时间",
  },
  {
    label: "数据闭环",
    legacy: "无法追踪哪个广告带来了咨询",
    traneasy: "链接参数回传，精准追踪广告转化效果",
  },
] as const;

const sceneItems = [
  {
    title: "Facebook/Google 投放",
    description:
      "投放广告时使用 Traneasy 分流链接。后台直接查看哪个广告组带来了多少有效询盘，精准计算 ROI。",
    iconSrc: "/images/product/order-icon-1.svg",
  },
  {
    title: "TikTok/Instagram 引流",
    description:
      "在视频简介置顶分流链接。客户点击后自动跳转 WhatsApp 并打标，您能立刻知道他是看了哪个视频来的。",
    iconSrc: "/images/product/order-icon-2.svg",
  },
  {
    title: "防止撞单内耗",
    description:
      "团队多人协作时，工单系统确保一个客户只由一个销售跟进，避免两个销售同时去撩同一个客户导致客户反感。",
    iconSrc: "/images/product/order-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "分流链接怎么生成？",
    answer:
      "在 Traneasy 后台的“工单管理”中，选择目标账号，输入原始链接，设置参数和标签，一键即可生成专属短链接。",
  },
  {
    question: "客户来源信息会显示给客户看吗？",
    answer:
      "不会。所有参数都在后台运行，客户看到的只是一个普通的咨询链接，体验丝滑无痕。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解分配规则、工单字段配置、渠道识别方式或不同投放平台的接入方法，可以继续联系团队获取更完整的实施方案。",
  },
] as const;

const ctaPoints = [
  "渠道专属分流短链接生成，自动追踪每一条客户来源",
  "支持按渠道、业务类型、团队角色配置接待分配规则",
  "客户进入后自动建单，来源、状态与负责人统一沉淀",
  "多渠道投放和多人协作场景下，线索流转依旧清晰可控",
  "来源与跟进链路完整留痕，便于复盘投放效果和业绩归属",
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
