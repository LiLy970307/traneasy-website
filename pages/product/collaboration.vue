<template>
  <ProductDetail
    :title="$t('pages.products.collaboration.title')"
    :subtitle="$t('pages.products.collaboration.subtitle')"
    :description="$t('pages.products.collaboration.desc')"
    hero-image-src="/images/product/collaboration/home-bg.png"
    hero-image-alt="Traneasy 跨境团队协作管理界面"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.products.collaboration.comparisonTitle')"
    :comparison-description="$t('pages.products.collaboration.comparisonDesc')"
    :comparison-product-name="
      $t('pages.products.collaboration.comparisonProductName')
    "
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.products.collaboration.sceneTitle')"
    :scene-items="sceneItems"
    :faq-description="$t('pages.products.collaboration.faqDesc')"
    :faqs="faqs"
    :cta-title="$t('pages.products.collaboration.ctaTitle')"
    :cta-description="$t('pages.products.collaboration.ctaDesc')"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const p = "pages.products.collaboration";
const downloadLink = `${localePath("/download")}`;

const featureSections = computed(() => [
  {
    title: t(p + ".feat1Title"),
    imageSrc: "/images/product/collaboration/desc-1.png",
    imageAlt: "Traneasy 主子账号体系",
    reverse: false,
    buttonLabel: t(p + ".btnDownload"),
    buttonTo: downloadLink,
    points: [
      {
        title: t(p + ".feat1Point1Title"),
        description: t(p + ".feat1Point1Desc"),
      },
      {
        title: t(p + ".feat1Point2Title"),
        description: t(p + ".feat1Point2Desc"),
      },
    ],
  },
  {
    title: t(p + ".feat2Title"),
    imageSrc: "/images/product/collaboration/desc-2.png",
    imageAlt: "Traneasy 主账户管理子账户权限",
    reverse: true,
    buttonLabel: t(p + ".btnDownload"),
    buttonTo: downloadLink,
    points: [
      {
        title: t(p + ".feat2Point1Title"),
        description: t(p + ".feat2Point1Desc"),
      },
      {
        title: t(p + ".feat2Point2Title"),
        description: t(p + ".feat2Point2Desc"),
      },
    ],
  },
  {
    title: t(p + ".feat3Title"),
    imageSrc: "/images/product/collaboration/desc-3.png",
    imageAlt: "Traneasy 共享快捷回复",
    reverse: false,
    buttonLabel: t(p + ".btnDownload"),
    buttonTo: downloadLink,
    points: [
      {
        title: t(p + ".feat3Point1Title"),
        description: t(p + ".feat3Point1Desc"),
      },
      {
        title: t(p + ".feat3Point2Title"),
        description: t(p + ".feat3Point2Desc"),
      },
    ],
  },
  {
    title: t(p + ".feat4Title"),
    imageSrc: "/images/product/collaboration/desc-4.png",
    imageAlt: "Traneasy 客户资产沉淀",
    reverse: true,
    buttonLabel: t(p + ".btnDownload"),
    buttonTo: downloadLink,
    points: [
      {
        title: t(p + ".feat4Point1Title"),
        description: t(p + ".feat4Point1Desc"),
      },
      {
        title: t(p + ".feat4Point2Title"),
        description: t(p + ".feat4Point2Desc"),
      },
    ],
  },
]);

const comparisonRows = computed(() => [
  {
    label: t(p + ".cmp1Label"),
    legacy: t(p + ".cmp1Legacy"),
    traneasy: t(p + ".cmp1Traneasy"),
  },
  {
    label: t(p + ".cmp2Label"),
    legacy: t(p + ".cmp2Legacy"),
    traneasy: t(p + ".cmp2Traneasy"),
  },
  {
    label: t(p + ".cmp3Label"),
    legacy: t(p + ".cmp3Legacy"),
    traneasy: t(p + ".cmp3Traneasy"),
  },
  {
    label: t(p + ".cmp4Label"),
    legacy: t(p + ".cmp4Legacy"),
    traneasy: t(p + ".cmp4Traneasy"),
  },
  {
    label: t(p + ".cmp5Label"),
    legacy: t(p + ".cmp5Legacy"),
    traneasy: t(p + ".cmp5Traneasy"),
  },
]);

const sceneItems = computed(() => [
  {
    title: t(p + ".sc1Title"),
    description: t(p + ".sc1Desc"),
    iconSrc: "/images/product/collaboration/scene-1.svg",
  },
  {
    title: t(p + ".sc2Title"),
    description: t(p + ".sc2Desc"),
    iconSrc: "/images/product/collaboration/scene-2.svg",
  },
  {
    title: t(p + ".sc3Title"),
    description: t(p + ".sc3Desc"),
    iconSrc: "/images/product/collaboration/scene-3.svg",
  },
]);

const faqs = computed(() => [
  { question: t(p + ".faq1Q"), answer: t(p + ".faq1A") },
  { question: t(p + ".faq2Q"), answer: t(p + ".faq2A") },
  { question: t(p + ".faq3Q"), answer: t(p + ".faq3A") },
]);

const ctaPoints = computed(() => [
  t(p + ".cta1"),
  t(p + ".cta2"),
  t(p + ".cta3"),
  t(p + ".cta4"),
  t(p + ".cta5"),
]);

useHead({
  title: () => t("pages.products.collaboration.seoTitle"),
  meta: [
    {
      name: "description",
      content: () => t("pages.products.collaboration.seoDesc"),
    },
  ],
});
</script>
