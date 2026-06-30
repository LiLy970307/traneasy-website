<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[720px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageSrc})` }"
      aria-hidden="true"
    />

    <section class="relative px-6 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div class="mx-auto max-w-6xl animate-hero-intro text-center">
        <h1 class="text-[48px] font-semibold leading-[1.25] text-[#000213]">
          {{ title }}
        </h1>
        <p
          class="mx-auto mt-4 leading-[1.5] text-[48px] font-semibold text-[#000213]"
        >
          {{ subtitle }}
        </p>
        <p
          class="mx-auto mt-6 max-w-7xl text-[26px] font-normal leading-[40px] text-[#000213]"
        >
          {{ description }}
        </p>
      </div>

      <div
        class="mx-auto mt-14 max-w-container animate-hero-intro-delayed px-6 sm:px-8 lg:px-12"
      >
        <img :src="heroImageSrc" :alt="heroImageAlt" class="h-auto w-full" />
      </div>
    </section>

    <section class="relative pb-8 pt-6">
      <MarketingFeatureSplit
        v-for="section in featureSections"
        :key="section.title"
        :title="section.title"
        :points="section.points"
        :image-src="section.imageSrc"
        :image-alt="section.imageAlt"
        :reverse="section.reverse"
        :button-label="section.buttonLabel"
        :button-to="section.buttonTo"
        :button-variant="section.buttonVariant"
        image-card-class="border-none bg-transparent p-0 shadow-none"
        image-class="rounded-[20px]"
      />
    </section>

    <ComparisonTableSection
      :title="comparisonTitle"
      :description="comparisonDescription"
      :product-name="comparisonProductName"
      :rows="comparisonRows"
    />

    <ProductSceneSection
      :eyebrow="$t('productDetail.sceneEyebrow')"
      :title="sceneTitle"
      :button-label="$t('productDetail.downloadBtn')"
      :button-to="downloadLink"
      :items="sceneItems"
    />

    <FaqSection :description="faqDescription" :faqs="faqs" />

    <section ref="ctaSectionRef" class="px-6 pb-20 pt-4 sm:px-8 lg:px-12">
      <div
        class="mx-auto max-w-container grid gap-12 rounded-[32px] py-12 px-6 sm:px-8 lg:px-12 lg:grid-cols-[2fr_1fr]"
      >
        <div
          :class="[
            isCtaVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="transition-all duration-700 ease-out will-change-transform"
        >
          <h2 class="text-[28px] font-medium leading-[1.45] text-[#000213]">
            {{ ctaTitle }}
            <br />
            {{ ctaDescription }}
          </h2>

          <NuxtLink
            :to="downloadLink"
            class="mt-10 inline-flex items-center justify-center rounded bg-[#084AFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749cc]"
          >
            {{ ctaLabel }}
          </NuxtLink>
        </div>

        <ul
          :class="[
            isCtaVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="space-y-5 transition-all delay-150 duration-700 ease-out will-change-transform"
        >
          <li
            v-for="item in ctaPoints"
            :key="item"
            class="flex items-start gap-3 text-[16px] leading-7 text-[#000213]"
          >
            <img
              :src="checkIconSrc"
              alt="check"
              class="mt-1 h-4 w-4 flex-shrink-0"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface FeaturePoint {
  title: string;
  description: string;
  iconSrc?: string;
}

interface FeatureSection {
  title: string;
  points: readonly FeaturePoint[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  buttonLabel?: string;
  buttonTo?: string;
  buttonVariant?: "outline" | "text";
}

interface ComparisonRow {
  label: string;
  legacy: string;
  traneasy: string;
}

interface SimpleItem {
  title: string;
  description: string;
  iconSrc: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    title: string;
    subtitle: string;
    description: string;
    heroImageSrc: string;
    heroImageAlt: string;
    featureSections: readonly FeatureSection[];
    comparisonTitle: string;
    comparisonDescription: string;
    comparisonProductName: string;
    comparisonRows: readonly ComparisonRow[];
    sceneTitle: string;
    sceneItems: readonly SimpleItem[];
    faqDescription: string;
    faqs: readonly FaqItem[];
    ctaTitle: string;
    ctaDescription: string;
    ctaPoints: readonly string[];
    downloadLink: string;
    backgroundImageSrc?: string;
    ctaButtonLabel?: string;
  }>(),
  {
    backgroundImageSrc: "/images/product/bg-top.png",
  },
);

const ctaLabel = computed(
  () => props.ctaButtonLabel || t("productDetail.downloadBtn"),
);

const checkIconSrc = "/images/product/check-icon.svg";

const ctaSectionRef = shallowRef<HTMLElement | null>(null);
const isCtaVisible = ref(false);
let ctaObserver: IntersectionObserver | null = null;

onMounted(() => {
  if (!ctaSectionRef.value) {
    return;
  }

  ctaObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isCtaVisible.value = true;
        ctaObserver?.disconnect();
      }
    },
    {
      threshold: 0.4,
    },
  );

  ctaObserver.observe(ctaSectionRef.value);
});

onBeforeUnmount(() => {
  ctaObserver?.disconnect();
});
</script>

<style scoped>
@keyframes hero-intro {
  from {
    filter: blur(8px);
    opacity: 0;
    transform: translateY(32px);
  }

  to {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-hero-intro {
  animation: hero-intro 0.8s ease-out both;
}

.animate-hero-intro-delayed {
  animation: hero-intro 0.8s ease-out 0.15s both;
}
</style>
