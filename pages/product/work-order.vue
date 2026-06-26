<template>
  <ProductDetail
    :title="$t('pages.products.workOrder.title')"
    :subtitle="$t('pages.products.workOrder.subtitle')"
    :description="$t('pages.products.workOrder.desc')"
    hero-image-src="/images/product/workOrder/home-bg.png"
    hero-image-alt="Traneasy 工单系统与分流链接界面"
    :feature-sections="featureSections"
    :comparison-title="$t('pages.products.workOrder.comparisonTitle')"
    :comparison-description="$t('pages.products.workOrder.comparisonDesc')"
    :comparison-product-name="$t('pages.products.workOrder.comparisonProductName')"
    :comparison-rows="comparisonRows"
    :scene-title="$t('pages.products.workOrder.sceneTitle')"
    :scene-items="sceneItems"
    :faq-description="$t('pages.products.workOrder.faqDesc')"
    :faqs="faqs"
    :cta-title="$t('pages.products.workOrder.ctaTitle')"
    :cta-description="$t('pages.products.workOrder.ctaDesc')"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
const p = "pages.products.workOrder";
const downloadLink = `${localePath("/download")}`;

const featureSections = computed(() => [
  { title: t(p+".feat1Title"), imageSrc: "/images/product/workOrder/desc-1.png", imageAlt: "Traneasy 短链接智能追踪", reverse: false, buttonLabel: t(p+".btnDownload"), buttonTo: downloadLink, points: [
    { title: t(p+".feat1Point1Title"), description: t(p+".feat1Point1Desc") },
    { title: t(p+".feat1Point2Title"), description: t(p+".feat1Point2Desc") },
  ]},
  { title: t(p+".feat2Title"), imageSrc: "/images/product/workOrder/desc-2.png", imageAlt: "Traneasy 自动打标与分组", reverse: true, buttonLabel: t(p+".btnDownload"), buttonTo: downloadLink, points: [
    { title: t(p+".feat2Point1Title"), description: t(p+".feat2Point1Desc") },
    { title: t(p+".feat2Point2Title"), description: t(p+".feat2Point2Desc") },
  ]},
  { title: t(p+".feat3Title"), imageSrc: "/images/product/workOrder/desc-3.png", imageAlt: "Traneasy 智能分配接待", reverse: false, buttonLabel: t(p+".btnDownload"), buttonTo: downloadLink, points: [
    { title: t(p+".feat3Point1Title"), description: t(p+".feat3Point1Desc") },
    { title: t(p+".feat3Point2Title"), description: t(p+".feat3Point2Desc") },
  ]},
  { title: t(p+".feat4Title"), imageSrc: "/images/product/workOrder/desc-4.png", imageAlt: "Traneasy 客户工单生成", reverse: true, buttonLabel: t(p+".btnDownload"), buttonTo: downloadLink, points: [
    { title: t(p+".feat4Point1Title"), description: t(p+".feat4Point1Desc") },
    { title: t(p+".feat4Point2Title"), description: t(p+".feat4Point2Desc") },
  ]},
  { title: t(p+".feat5Title"), imageSrc: "/images/product/workOrder/desc-5.png", imageAlt: "Traneasy 业绩归属清晰", reverse: false, buttonLabel: t(p+".btnDownload"), buttonTo: downloadLink, points: [
    { title: t(p+".feat5Point1Title"), description: t(p+".feat5Point1Desc") },
    { title: t(p+".feat5Point2Title"), description: t(p+".feat5Point2Desc") },
  ]}
]);

const comparisonRows = computed(() => [
  { label: t(p+".cmp1Label"), legacy: t(p+".cmp1Legacy"), traneasy: t(p+".cmp1Traneasy") },
  { label: t(p+".cmp2Label"), legacy: t(p+".cmp2Legacy"), traneasy: t(p+".cmp2Traneasy") },
  { label: t(p+".cmp3Label"), legacy: t(p+".cmp3Legacy"), traneasy: t(p+".cmp3Traneasy") },
  { label: t(p+".cmp4Label"), legacy: t(p+".cmp4Legacy"), traneasy: t(p+".cmp4Traneasy") },
  { label: t(p+".cmp5Label"), legacy: t(p+".cmp5Legacy"), traneasy: t(p+".cmp5Traneasy") }
]);

const sceneItems = computed(() => [
  { title: t(p+".sc1Title"), description: t(p+".sc1Desc"), iconSrc: "/images/product/workOrder/scene-1.svg" },
  { title: t(p+".sc2Title"), description: t(p+".sc2Desc"), iconSrc: "/images/product/workOrder/scene-2.svg" },
  { title: t(p+".sc3Title"), description: t(p+".sc3Desc"), iconSrc: "/images/product/workOrder/scene-3.svg" }
]);

const faqs = computed(() => [
  { question: t(p+".faq1Q"), answer: t(p+".faq1A") },
  { question: t(p+".faq2Q"), answer: t(p+".faq2A") },
  { question: t(p+".faq3Q"), answer: t(p+".faq3A") }
]);

const ctaPoints = computed(() => [
  t(p+".cta1"),
  t(p+".cta2"),
  t(p+".cta3"),
  t(p+".cta4"),
  t(p+".cta5")
]);

useHead({
  title: () => t("pages.products.workOrder.seoTitle"),
  meta: [{ name: "description", content: () => t("pages.products.workOrder.seoDesc") }],
});
</script>
