<template>
  <ProductDetail
    :title="$t('pages.products.translation.title')"
    :subtitle="$t('pages.products.translation.subtitle')"
    :description="$t('pages.products.translation.desc')"
    hero-image-src="/images/product/translate/home-bg.png"
    hero-image-alt="Traneasy 实时翻译界面"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.products.translation.comparisonTitle')"
    :comparison-description="$t('pages.products.translation.comparisonDesc')"
    :comparison-product-name="
      $t('pages.products.translation.comparisonProductName')
    "
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.products.translation.sceneTitle')"
    :scene-items="sceneItems"
    :faq-description="$t('pages.products.translation.faqDesc')"
    :faqs="faqs"
    :cta-title="$t('pages.products.translation.ctaTitle')"
    :cta-description="$t('pages.products.translation.ctaDesc')"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const p = "pages.products.translation";
const downloadLink = `${localePath("/download")}`;

const featureSections = computed(() => [
  {
    title: t(p + ".feat1Title"),
    imageSrc: "/images/product/translate/desc-1.png",
    imageAlt: "Traneasy 双向自动互译",
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
    imageSrc: "/images/product/translate/desc-2.png",
    imageAlt: "Traneasy ai助理回复",
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
    imageSrc: "/images/product/translate/desc-3.png",
    imageAlt: "Traneasy 多语种全覆盖",
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
    imageSrc: "/images/product/translate/desc-4.png",
    imageAlt: "Traneasy 原文对照模式",
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
  {
    title: t(p + ".feat5Title"),
    imageSrc: "/images/product/translate/desc-5.png",
    imageAlt: "Traneasy 专业术语库",
    reverse: false,
    buttonLabel: t(p + ".btnDownload"),
    buttonTo: downloadLink,
    points: [
      {
        title: t(p + ".feat5Point1Title"),
        description: t(p + ".feat5Point1Desc"),
      },
      {
        title: t(p + ".feat5Point2Title"),
        description: t(p + ".feat5Point2Desc"),
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
    iconSrc: "/images/product/translate/scene-1.svg",
  },
  {
    title: t(p + ".sc2Title"),
    description: t(p + ".sc2Desc"),
    iconSrc: "/images/product/translate/scene-2.svg",
  },
  {
    title: t(p + ".sc3Title"),
    description: t(p + ".sc3Desc"),
    iconSrc: "/images/product/translate/scene-3.svg",
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
  t(p + ".cta5"),
]);

useHead({
  title: () => t("pages.products.translation.seoTitle"),
  meta: [
    {
      name: "description",
      content: () => t("pages.products.translation.seoDesc"),
    },
  ],
});
</script>
