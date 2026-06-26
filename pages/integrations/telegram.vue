<template>
  <IntegrationDetail
    :seo-title="$t('pages.integrations.telegram.seoTitle')"
    :seo-description="$t('pages.integrations.telegram.seoDesc')"
    logo-src="/images/integration/telegram/logo.svg"
    :title="$t('pages.integrations.telegram.title')"
    :description="$t('pages.integrations.telegram.desc')"
    hero-image-src="/images/integration/telegram/detail-bg.png"
    hero-image-alt="Traneasy Telegram 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.integrations.telegram.comparisonTitle')"
    :comparison-description="$t('pages.integrations.telegram.comparisonDesc')"
    :comparison-product-name="
      $t('pages.integrations.telegram.comparisonProductName')
    "
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.integrations.telegram.sceneTitle')"
    :scene-description="$t('pages.integrations.telegram.sceneDesc')"
    :scene-items="sceneItems"
    :setup-title="$t('pages.integrations.telegram.setupTitle')"
    :setup-steps="setupSteps"
    :faq-description="$t('pages.integrations.telegram.faqDesc')"
    :faqs="faqs"
    :download-anchor="downloadAnchor"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const downloadAnchor = `${localePath("/")}#download`;
const p = "pages.integrations.telegram";

const highlights = computed(() => [
  {
    title: t(p + ".hl1Title"),
    description: t(p + ".hl1Desc"),
    iconSrc: "/images/integration/telegram/feature-1.svg",
  },
  {
    title: t(p + ".hl2Title"),
    description: t(p + ".hl2Desc"),
    iconSrc: "/images/integration/telegram/feature-2.svg",
  },
  {
    title: t(p + ".hl3Title"),
    description: t(p + ".hl3Desc"),
    iconSrc: "/images/integration/telegram/feature-3.svg",
  },
  {
    title: t(p + ".hl4Title"),
    description: t(p + ".hl4Desc"),
    iconSrc: "/images/integration/telegram/feature-4.svg",
  },
]);

const b = t(p + ".btnInstall");
const featureSections = computed(() => [
  {
    title: t(p + ".feat1Title"),
    imageSrc: "/images/integration/telegram/desc-1.png",
    imageAlt: "telegram 群组/频道实时翻译",
    reverse: false,
    buttonLabel: b,
    buttonTo: "#setup-guide",
    buttonVariant: "text" as const,
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
    imageSrc: "/images/integration/telegram/desc-2.png",
    imageAlt: "telegram 高效私域客户管理",
    reverse: true,
    buttonLabel: b,
    buttonTo: "#setup-guide",
    buttonVariant: "text" as const,
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
    imageSrc: "/images/integration/telegram/desc-3.png",
    imageAlt: "telegram 批量触达与营销",
    reverse: false,
    buttonLabel: b,
    buttonTo: "#setup-guide",
    buttonVariant: "text" as const,
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
    iconSrc: `/images/integration/telegram/scene-1.svg`,
  },
  {
    title: t(p + ".sc2Title"),
    description: t(p + ".sc2Desc"),
    iconSrc: `/images/integration/telegram/scene-2.svg`,
  },
  {
    title: t(p + ".sc3Title"),
    description: t(p + ".sc3Desc"),
    iconSrc: `/images/integration/telegram/scene-3.svg`,
  },
  {
    title: t(p + ".sc4Title"),
    description: t(p + ".sc4Desc"),
    iconSrc: `/images/integration/telegram/scene-4.svg`,
  },
]);

const setupSteps = computed(() => [
  { title: t(p + ".setup1Title"), description: t(p + ".setup1Desc") },
  { title: t(p + ".setup2Title"), description: t(p + ".setup2Desc") },
  { title: t(p + ".setup3Title"), description: t(p + ".setup3Desc") },
  { title: t(p + ".setup4Title"), description: t(p + ".setup4Desc") },
]);

const faqs = computed(() => [
  { question: t(p + ".faq1Q"), answer: t(p + ".faq1A") },
  { question: t(p + ".faq2Q"), answer: t(p + ".faq2A") },
  { question: t(p + ".faq3Q"), answer: t(p + ".faq3A") },
  { question: t(p + ".faq4Q"), answer: t(p + ".faq4A") },
]);
</script>
