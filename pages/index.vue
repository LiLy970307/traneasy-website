<template>
  <main class="pt-[68px]">
    <HomeHeroSection />

    <MarketingFeatureSplit
      v-for="section in showcaseSections"
      :key="section.title"
      :title="section.title"
      :points="section.points"
      :image-src="section.imageSrc"
      :image-alt="section.imageAlt"
      :reverse="section.reverse"
    />

    <HomeCapabilitySection />

    <HomeStatsSection />
  </main>
</template>

<script setup lang="ts">
const showcaseSections = [
  {
    title: "让对话像母语般顺畅交流 效率翻倍",
    imageSrc: "/images/index/describle-1.png",
    imageAlt: "Traneasy 多语言会话翻译界面",
    reverse: false,
    points: [
      {
        title: "AI 双向自动翻译 告别复制粘贴",
        description: "输入中文自动转译外文发送，接收外文自动转译中文。",
      },
      {
        title: "一键群发触达 批量获客神器",
        description: "支持多平台批量发送营销信息，获客效率提升 10 倍。",
      },
      {
        title: "智能快捷回复 话术库赋能",
        description: "常用话术一键调用，让重复回复变成一次点击。",
      },
      {
        title: "多模态互译 覆盖全场景",
        description: "支持文本、语音转文字、图片等多种形式的即时翻译。",
      },
    ],
  },
  {
    title: "账号矩阵管理 独立环境 安全防封",
    imageSrc: "/images/index/describle-2.png",
    imageAlt: "Traneasy 账号矩阵代理设置界面",
    reverse: true,
    points: [
      {
        title: "独立指纹环境 防风控关联黑科技",
        description: "每个账号有独立的浏览器环境，平台无法识别为同一人。",
      },
      {
        title: "全球代理支持 IP 随心切换",
        description: "支持 HTTP/HTTPS/SOCKS4/SOCKS5 全协议，连接全球 IP。",
      },
      {
        title: "无限多开 降本增效",
        description:
          "一台电脑同时登录数十个账号，无需多台手机，轻松应对多平台矩阵运营。",
      },
    ],
  },
  {
    title: "智能客户库 让每一次沟通都有据可查",
    imageSrc: "/images/index/describle-3.png",
    imageAlt: "Traneasy 客户管理筛选界面",
    reverse: false,
    points: [
      {
        title: "粉丝精准备注 自定义标签",
        description: "支持按地区、意向等级、产品兴趣自由分组。",
      },
      {
        title: "秒速检索定位 管理海量粉丝",
        description: "输入备注名或标签，瞬间找到目标客户，告别大海捞针。",
      },
      {
        title: "短链分流系统 来源精准追踪",
        description: "为不同渠道生成专属短链接，客户点击即自动打标。",
      },
      {
        title: "实时数据看板 业绩一目了然",
        description: "实时监控数据，助您精准优化投放策略。",
      },
    ],
  },
] as const;

useSeoMeta({
  title: "Traneasy 易翻译 - 跨越语言鸿沟，链接全球商机",
  description:
    "Traneasy 是面向出海企业的 AI 实时翻译与客户管理平台，支持多平台沟通、矩阵运营、客户沉淀与跨语言协作。",
  ogTitle: "Traneasy 易翻译 - 跨越语言鸿沟，链接全球商机",
  ogDescription: "集实时翻译、客户管理、矩阵运营于一体的一站式出海增长工作台。",
  twitterCard: "summary_large_image",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Traneasy 易翻译",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, macOS",
        description:
          "面向出海企业的 AI 实时翻译与客户管理平台，支持多平台沟通、矩阵运营、客户沉淀与跨语言协作。",
      }),
    },
  ],
});
</script>
