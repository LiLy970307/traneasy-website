<template>
  <IntegrationDetail
    :seo-title="$t('pages.integrations.instagram.seoTitle')"
    :seo-description="$t('pages.integrations.instagram.seoDesc')"
    logo-src="/images/integration/instagram/logo.svg"
    :title="$t('pages.integrations.instagram.title')"
    :description="$t('pages.integrations.instagram.desc')"
    hero-image-src="/images/integration/instagram/detail-bg.png"
    hero-image-alt="Traneasy Instagram 集成界面"
    :highlights="highlights"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.integrations.instagram.comparisonTitle')"
    :comparison-description="$t('pages.integrations.instagram.comparisonDesc')"
    :comparison-product-name="$t('pages.integrations.instagram.comparisonProductName')"
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.integrations.instagram.sceneTitle')"
    :scene-description="$t('pages.integrations.instagram.sceneDesc')"
    :scene-items="sceneItems"
    :setup-title="$t('pages.integrations.instagram.setupTitle')"
    :setup-steps="setupSteps"
    :faq-description="$t('pages.integrations.instagram.faqDesc')"
    :faqs="faqs"
    :download-anchor="downloadAnchor"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const downloadAnchor = `${localePath("/download")}`;
const p = "pages.integrations.instagram";

const highlights = computed(() => [
  { title: t(p+".hl1Title"), description: t(p+".hl1Desc"), iconSrc: "/images/integration/instagram/feature-1.svg" },
  { title: t(p+".hl2Title"), description: t(p+".hl2Desc"), iconSrc: "/images/integration/instagram/feature-2.svg" },
  { title: t(p+".hl3Title"), description: t(p+".hl3Desc"), iconSrc: "/images/integration/instagram/feature-3.svg" },
  { title: t(p+".hl4Title"), description: t(p+".hl4Desc"), iconSrc: "/images/integration/instagram/feature-4.svg" },
]);

const b = t(p+".btnInstall");
const featureSections = computed(() => [
  { title: t(p+".feat1Title"), imageSrc: "/images/integration/instagram/desc-1.png", imageAlt: "Instagram DM 私信与评论翻译", reverse: false, buttonLabel: b, buttonTo: "#setup-guide", buttonVariant: "text" as const, points: [
    { title: t(p+".feat1Point1Title"), description: t(p+".feat1Point1Desc") },
    { title: t(p+".feat1Point2Title"), description: t(p+".feat1Point2Desc") },
  ]},
  { title: t(p+".feat2Title"), imageSrc: "/images/integration/instagram/desc-2.png", imageAlt: "Instagram 集群讯息下发", reverse: true, buttonLabel: b, buttonTo: "#setup-guide", buttonVariant: "text" as const, points: [
    { title: t(p+".feat2Point1Title"), description: t(p+".feat2Point1Desc") },
    { title: t(p+".feat2Point2Title"), description: t(p+".feat2Point2Desc") },
  ]},
  { title: t(p+".feat3Title"), imageSrc: "/images/integration/instagram/desc-3.png", imageAlt: "Instagram 独立语言个性化管理", reverse: false, buttonLabel: b, buttonTo: "#setup-guide", buttonVariant: "text" as const, points: [
    { title: t(p+".feat3Point1Title"), description: t(p+".feat3Point1Desc") },
    { title: t(p+".feat3Point2Title"), description: t(p+".feat3Point2Desc") },
  ]},
]);

const comparisonRows = computed(() => [
  { label: t(p+".cmp1Label"), legacy: t(p+".cmp1Legacy"), traneasy: t(p+".cmp1Traneasy") },
  { label: t(p+".cmp2Label"), legacy: t(p+".cmp2Legacy"), traneasy: t(p+".cmp2Traneasy") },
  { label: t(p+".cmp3Label"), legacy: t(p+".cmp3Legacy"), traneasy: t(p+".cmp3Traneasy") },
  { label: t(p+".cmp4Label"), legacy: t(p+".cmp4Legacy"), traneasy: t(p+".cmp4Traneasy") },
  { label: t(p+".cmp5Label"), legacy: t(p+".cmp5Legacy"), traneasy: t(p+".cmp5Traneasy") },
]);

const sceneItems = computed(() => [
  { title: t(p+".sc1Title"), description: t(p+".sc1Desc"), iconSrc: "/images/integration/instagram/scene-1.svg" },
  { title: t(p+".sc2Title"), description: t(p+".sc2Desc"), iconSrc: "/images/integration/instagram/scene-2.svg" },
  { title: t(p+".sc3Title"), description: t(p+".sc3Desc"), iconSrc: "/images/integration/instagram/scene-3.svg" },
  { title: t(p+".sc4Title"), description: t(p+".sc4Desc"), iconSrc: "/images/integration/instagram/scene-4.svg" },
]);

const setupSteps = computed(() => [
  { title: t(p+".setup1Title"), description: t(p+".setup1Desc") },
  { title: t(p+".setup2Title"), description: t(p+".setup2Desc") },
  { title: t(p+".setup3Title"), description: t(p+".setup3Desc") },
  { title: t(p+".setup4Title"), description: t(p+".setup4Desc") },
]);

const faqs = computed(() => [
  { question: t(p+".faq1Q"), answer: t(p+".faq1A") },
  { question: t(p+".faq2Q"), answer: t(p+".faq2A") },
  { question: t(p+".faq3Q"), answer: t(p+".faq3A") },
  { question: t(p+".faq4Q"), answer: t(p+".faq4A") },
]);
</script>
