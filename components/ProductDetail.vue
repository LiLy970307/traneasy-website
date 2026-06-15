<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[720px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${backgroundImageSrc})` }"
      aria-hidden="true"
    />

    <section class="relative px-6 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div class="mx-auto max-w-6xl text-center">
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

      <div class="mx-auto mt-14 max-w-container px-6 sm:px-8 lg:px-12">
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
      eyebrow="应用场景"
      :title="sceneTitle"
      button-label="立即下载"
      :button-to="downloadLink"
      :items="sceneItems"
    />

    <FaqSection :description="faqDescription" :faqs="faqs" />

    <section class="px-6 pb-20 pt-4 sm:px-8 lg:px-12">
      <div
        class="mx-auto max-w-container grid gap-12 rounded-[32px] py-12 px-6 sm:px-8 lg:px-12 lg:grid-cols-[2fr_1fr]"
      >
        <div>
          <h2 class="text-[28px] font-medium leading-[1.45] text-[#000213]">
            {{ ctaTitle }}
            <br />
            {{ ctaDescription }}
          </h2>

          <NuxtLink
            :to="downloadLink"
            class="mt-10 inline-flex items-center justify-center rounded bg-[#084AFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749cc]"
          >
            {{ ctaButtonLabel }}
          </NuxtLink>
        </div>

        <ul class="space-y-5">
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

withDefaults(
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
    ctaButtonLabel: "软件下载",
  },
);

const checkIconSrc = "/images/product/check-icon.svg";
</script>
