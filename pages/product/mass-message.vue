<template>
  <ProductDetail
    title="精准消息群发"
    subtitle="用自动化工具实现千人千面的批量触达"
    description="为您提供企业级的精准消息群发 解决方案。支持图文、视频、链接等多种格式，结合自动翻译功能，您可以轻松向成千上万个海外客户发送个性化的营销信息。"
    hero-image-src="/images/product/message-image.png"
    hero-image-alt="Traneasy 精准消息群发"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 精准消息群发"
    comparison-description="告别低效手动群发与高风险操作，用自动化触达让每一条营销信息都更快、更准、更自然。"
    comparison-product-name="Traneasy 精准消息群发"
    :comparison-rows="comparisonRows"
    scene-title="低成本获取高流量"
    :scene-items="sceneItems"
    faq-description="高效触达全球客户，让每一条营销信息都精准落地！"
    :faqs="faqs"
    cta-title="立即开启精准消息群发"
    cta-description="让每一条营销信息，都精准触达目标客户"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "精准消息群发 - Traneasy 易翻译";
const pageDescription =
  "通过自动化批量发送、智能随机防封、灵活对象筛选和变量插入能力，让企业实现更稳定、更精准的消息群发。";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "极速批量发送",
    imageSrc: "/images/product/message-desc-1.png",
    imageAlt: "Traneasy 极速批量发送",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "手动发送速度慢，一天只能发几百条，人力成本高。",
      },
      {
        title: "解决方案",
        description:
          "支持一次性导入 数千个联系人，一键发送。无需人工手动点击，释放双手，大幅提升营销效率。",
      },
    ],
  },
  {
    title: "智能随机防封",
    imageSrc: "/images/product/message-desc-2.png",
    imageAlt: "Traneasy 智能随机防封",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "群发频率太高容易被平台检测，导致账号被封，得不偿失。",
      },
      {
        title: "解决方案",
        description:
          "设定群发间隔时间段，会根据设定的时间段内随机间隔时间发送，模仿手动发送消息，时间间隔不一致发送。",
      },
    ],
  },
  {
    title: "多模式选择群发对象",
    imageSrc: "/images/product/message-desc-3.png",
    imageAlt: "Traneasy 多模式选择群发对象",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "统群发对象筛选方式单一，手动录入低效且易出错，难以精准定位目标群体，导致消息触达混乱、转化率低，无法满足高效、精准的营销需求。",
      },
      {
        title: "解决方案",
        description:
          "支持手动选项已有联系人，通过电话号码、EXCEL表格导入，只发送联系人、只发送群组、私发群组里的联系人等多种模式群发，快速方便",
      },
    ],
  },
  {
    title: "个性化变量插入",
    imageSrc: "/images/product/message-desc-4.png",
    imageAlt: "Traneasy 个性化变量插入",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "群发消息太生硬，一看就是广告，客户反感。",
      },
      {
        title: "解决方案",
        description:
          "支持在文案中插入变量（如 {{客户名}}）。群发时自动替换为实际信息，让广告看起来像是一对一的专属问候。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "发送效率",
    legacy: "手动复制粘贴，一天只能发几十条",
    traneasy: "批量自动化发送，单日触达成千上万客户",
  },
  {
    label: "封号风险",
    legacy: "内容单一重复，极易被平台判定为垃圾信息",
    traneasy: "智能变量插入（姓名/产品），模拟人工发送，安全防封",
  },
  {
    label: "目标筛选",
    legacy: "只能全员群发，骚扰老客户，转化率低",
    traneasy: "支持按标签、地区、行为精准筛选受众，有的放矢",
  },
  {
    label: "效果追踪",
    legacy: "发完即止，不知道谁看了、谁回了",
    traneasy: "实时监控送达率、阅读率与回复率，效果数据化",
  },
  {
    label: "发送策略",
    legacy: "瞬间并发，行为异常",
    traneasy: "随机延时发送，模拟真实用户操作习惯",
  },
] as const;

const sceneItems = [
  {
    title: "新品/促销轰炸",
    description:
      "上新了爆款产品或有黑五/圣诞节大促？通过群发功能，几分钟内将优惠信息推送给所有存量客户，瞬间引爆流量。",
    iconSrc: "/images/product/message-icon-1.svg",
  },
  {
    title: "沉默客户唤醒",
    description:
      "将长期未下单的老客户筛选出来，群发专属优惠券或问候语，低成本激活沉睡资源，唤醒二次购买欲望。",
    iconSrc: "/images/product/message-icon-2.svg",
  },
  {
    title: "多语言市场拓展",
    description:
      "准备开发巴西或中东市场？无需招聘小语种员工，直接用中文撰写文案，系统自动翻译群发，零门槛开拓新市场。",
    iconSrc: "/images/product/message-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "群发会被封号吗？",
    answer:
      "Traneasy 采用了模拟人工操作和独立指纹环境技术，极大降低了封号风险。但为了绝对安全，建议遵守平台规则，控制每日发送总量，并使用随机间隔功能。",
  },
  {
    question: "支持发送图片和视频吗？",
    answer:
      "支持。您可以群发纯文本、带链接的图文消息、本地图片以及视频文件，满足多样化的营销展示需求。",
  },
  {
    question: "可以定时发送吗？",
    answer:
      " 可以。支持设置定时群发任务，您可以提前编辑好文案，设定在客户当地上午 9 点或下午 3 点（黄金阅读时间）自动发送。",
  },
  {
    question: "其他问题",
    answer:
      "如果您还想了解更细的发送策略、变量配置、对象筛选规则或多账号协作方式，可以继续联系团队获取更完整的落地方案。",
  },
] as const;

const ctaPoints = [
  "支持WhatsApp、Facebook、Line等主流平台批量发送",
  "智能变量插入（姓名/产品），模拟人工发送，安全防封号",
  "按标签、地区、行为精准筛选受众，告别盲目群发",
  "实时监控送达率、阅读率与回复率，效果数据可追踪",
  "随机延时发送，完美模拟真实用户操作习惯",
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
