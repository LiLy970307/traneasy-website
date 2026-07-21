<template>
  <main class="pt-[68px]">
    <HomeHeroSection />
    <HomeCapabilitySection />

    <MarketingFeatureSplit
      v-for="section in showcaseSections"
      :key="section.title"
      :title="section.title"
      :points="section.points"
      :image-src="section.imageSrc"
      :image-alt="section.imageAlt"
      :reverse="section.reverse"
    />

    <HomeStatsSection />
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();

const showcaseSections = [
  {
    title: t("pages.index.showcase1Title"),
    imageSrc: "/images/index/describle-1.png",
    imageAlt: "Traneasy 多语言会话翻译界面",
    reverse: false,
    points: [
      {
        title: t("pages.index.showcase1Point1Title"),
        description: t("pages.index.showcase1Point1Desc"),
      },
      {
        title: t("pages.index.showcase1Point2Title"),
        description: t("pages.index.showcase1Point2Desc"),
      },
      {
        title: t("pages.index.showcase1Point3Title"),
        description: t("pages.index.showcase1Point3Desc"),
      },
      {
        title: t("pages.index.showcase1Point4Title"),
        description: t("pages.index.showcase1Point4Desc"),
      },
    ],
  },
  {
    title: t("pages.index.showcase2Title"),
    imageSrc: "/images/index/describle-2.png",
    imageAlt: "Traneasy 账号矩阵代理设置界面",
    reverse: true,
    points: [
      {
        title: t("pages.index.showcase2Point1Title"),
        description: t("pages.index.showcase2Point1Desc"),
      },
      {
        title: t("pages.index.showcase2Point2Title"),
        description: t("pages.index.showcase2Point2Desc"),
      },
      {
        title: t("pages.index.showcase2Point3Title"),
        description: t("pages.index.showcase2Point3Desc"),
      },
    ],
  },
  {
    title: t("pages.index.showcase3Title"),
    imageSrc: "/images/index/describle-3.png",
    imageAlt: "Traneasy 客户管理筛选界面",
    reverse: false,
    points: [
      {
        title: t("pages.index.showcase3Point1Title"),
        description: t("pages.index.showcase3Point1Desc"),
      },
      {
        title: t("pages.index.showcase3Point2Title"),
        description: t("pages.index.showcase3Point2Desc"),
      },
      {
        title: t("pages.index.showcase3Point3Title"),
        description: t("pages.index.showcase3Point3Desc"),
      },
      {
        title: t("pages.index.showcase3Point4Title"),
        description: t("pages.index.showcase3Point4Desc"),
      },
    ],
  },
];

useSeoMeta({
  title: () => t("pages.index.seoTitle"),
  description: () => t("pages.index.seoDesc"),
  ogTitle: () => t("pages.index.seoTitle"),
  ogDescription: () => t("pages.index.ogDesc"),
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
        description: t("pages.index.jsonLdDesc"),
      }),
    },
  ],
});
</script>
