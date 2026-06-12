<template>
  <ProductDetail
    title="实时翻译"
    subtitle="让沟通像母语一样自然流畅。"
    description="核心的实时翻译引擎，直接嵌入聊天界面，无需切屏，无需复制粘贴，实现真正的“所见即所得”，让语言不再是阻碍成交的门槛"
    hero-image-src="/images/product/translate-image.png"
    hero-image-alt="Traneasy 实时翻译界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 实时翻译"
    comparison-description="打破语言壁垒，保持对话节奏一致，让每一条消息沟通都像面对面交流一样顺畅。"
    comparison-product-name="Traneasy 实时翻译"
    :comparison-rows="comparisonRows"
    scene-title="让每一次回复都专业满分"
    :scene-items="sceneItems"
    faq-description="毫秒级自动互译，让跨境沟通像母语一样流畅！"
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
        description: "一边查字典一边打字，回复客户慢半拍，客户早就不耐烦跑了。",
      },
      {
        title: "解决方案",
        description:
          "开启后，您输入中文发送，系统自动转为外语；对方发来外语，系统自动转为中文显示。全程无感，如同面对面交流。",
      },
    ],
  },
  {
    title: "ai助理回复",
    imageSrc: "/images/product/translate-desc-2.png",
    imageAlt: "Traneasy ai助理回复",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "普通翻译太生硬，语法错误百出，显得不专业，客户信任度低。",
      },
      {
        title: "解决方案",
        description:
          "可根据对方发送的消息，自动生成相关的内容进行回复，避免交流不在一个频道上。",
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
          "客户发来小语种（如阿拉伯语、泰语），软件翻译不了，只能干瞪眼。",
      },
      {
        title: "解决方案",
        description:
          "支持 100+ 种语言 实时互译。无论是热门英语还是小众语种，系统都能自动识别并精准翻译。",
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
        description: "担心翻译出错，特别是价格、型号等关键信息，不敢直接发。",
      },
      {
        title: "解决方案",
        description:
          "翻译结果旁可显示原文，支持一键切换“仅译文”或“双语对照”模式，方便您核对关键信息。",
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
          "产品型号、品牌名被翻译成乱码，导致客户看不懂具体要买什么。",
      },
      {
        title: "解决方案",
        description:
          "支持上传企业专属 行业术语表。让系统在翻译时强制使用您的指定词汇，确保专业名词不出错。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "发送效率",
    legacy: "复制原文 -> 打开翻译软件 -> 翻译 -> 复制译文 -> 粘贴发送",
    traneasy: "消息自动翻译并直接显示，回复时一键翻译发送",
  },
  {
    label: "封号风险",
    legacy: "来回切换耗时耗力，客户等待时间长",
    traneasy: "零操作延迟，实现即时跨语言对话",
  },
  {
    label: "目标筛选",
    legacy: "通用翻译生硬，容易产生歧义",
    traneasy: "结合跨境电商/社交语境优化，翻译更地道",
  },
  {
    label: "效果追踪",
    legacy: "只能处理单一语种，面对小语种束手无策",
    traneasy: "支持全球主流及小语种互译，业务覆盖无死角",
  },
  {
    label: "发送策略",
    legacy: "聊天记录是外语，回头看需再次翻译",
    traneasy: "自动保存译文，历史聊天记录随时可读",
  },
] as const;

const sceneItems = [
  {
    title: "高意向客户谈判",
    description:
      "面对大客户询盘，使用 AI 润色功能，让您的回复措辞专业、得体，瞬间提升信任感。",
    iconSrc: "/images/product/translate-icon-1.svg",
  },
  {
    title: "多语言社群维护",
    description:
      "在 Telegram 或 WhatsApp 群组中，自动翻译群友的多语言发言，您可以用中文统一回复。",
    iconSrc: "/images/product/translate-icon-2.svg",
  },
  {
    title: "竞品调研",
    description:
      "阅读海外同行的帖子或资讯时，一键汉化页面内容，快速捕捉市场动态。",
    iconSrc: "/images/product/translate-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "翻译准确度能达到多少？",
    answer:
      "基于谷歌神经网络 AI，通用场景准确率高达 95% 以上。配合 AI 润色和术语库，商业沟通场景下几乎与人工翻译无异。",
  },
  {
    question: "翻译会泄露聊天内容吗？",
    answer:
      "我们非常重视隐私。翻译请求经过加密传输，且不存储您的聊天记录原文。",
  },
  {
    question: "支持哪些语言？",
    answer:
      "支持 100+ 种语言实时互译。无论是热门英语还是小众语种，系统都能自动识别并精准翻译。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更多关于翻译延迟、术语库配置、原文对照模式或不同平台适配方式，可以继续联系团队获取更完整的使用方案。",
  },
] as const;

const ctaPoints = [
  "支持全球主流语言自动互译，覆盖95%跨境业务场景",
  "聊天窗口内实时翻译，无需切换翻译软件",
  "专业术语库自定义，精准匹配行业词汇，避免翻译误差",
  "双向自动翻译，接收与回复均无需手动操作",
  "翻译速度快至毫秒级，沟通零延迟，提升客户响应效率",
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
