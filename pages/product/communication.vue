<template>
  <ProductDetail
    :title="$t('pages.products.communication.title')"
    :subtitle="$t('pages.products.communication.subtitle')"
    :description="$t('pages.products.communication.desc')"
    hero-image-src="/images/product/communication/home-bg.png"
    hero-image-alt="Traneasy 全渠道沟通工作台"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.products.communication.comparisonTitle')"
    :comparison-description="$t('pages.products.communication.comparisonDesc')"
    :comparison-product-name="
      $t('pages.products.communication.comparisonProductName')
    "
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.products.communication.sceneTitle')"
    :scene-items="sceneItems"
    :faq-description="$t('pages.products.communication.faqDesc')"
    :faqs="faqs"
    :cta-title="$t('pages.products.communication.ctaTitle')"
    :cta-description="$t('pages.products.communication.ctaDesc')"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const p = "pages.products.communication";
const downloadLink = `${localePath("/download")}`;

const featureSections = computed(() => [
  {
    title: t(p + ".feat1Title"),
    imageSrc: "/images/product/communication/desc-1.png",
    imageAlt: "Traneasy 多平台统一收件箱",
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
    imageSrc: "/images/product/communication/desc-2.png",
    imageAlt: "Traneasy 跨平台实时翻译",
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
    imageSrc: "/images/product/communication/desc-3.png",
    imageAlt: "Traneasy 客户标签与备注",
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
    imageSrc: "/images/product/communication/desc-4.png",
    imageAlt: "Traneasy 多账号聚合管理",
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
    iconSrc: "/images/product/communication/scene-1.svg",
  },
  {
    title: t(p + ".sc2Title"),
    description: t(p + ".sc2Desc"),
    iconSrc: "/images/product/communication/scene-2.svg",
  },
  {
    title: t(p + ".sc3Title"),
    description: t(p + ".sc3Desc"),
    iconSrc: "/images/product/communication/scene-3.svg",
  },
]);

const faqs = computed(() => [
  { question: t(p + ".faq1Q"), answer: t(p + ".faq1A") },
  { question: t(p + ".faq2Q"), answer: t(p + ".faq2A") },
  { question: t(p + ".faq3Q"), answer: t(p + ".faq3A") },
  { question: t(p + ".faq4Q"), answer: t(p + ".faq4A") },
]);

const ctaPoints = computed(() => [
  t(p + ".cta1"),
  t(p + ".cta2"),
  t(p + ".cta3"),
  t(p + ".cta4"),
]);

useHead({
  title: () => t("pages.products.communication.seoTitle"),
  meta: [
    {
      name: "description",
      content: () => t("pages.products.communication.seoDesc"),
    },
  ],
});
</script>
