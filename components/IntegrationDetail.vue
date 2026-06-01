<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[1204px] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backgroundImageSrc})` }"
      aria-hidden="true"
    />

    <section class="relative pb-10 pt-16 lg:pt-20">
      <div class="px-6 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-container text-center">
          <img
            :src="logoSrc"
            :alt="logoAlt || title"
            class="mx-auto w-[96px] rounded-[14px]"
          />
          <h1
            class="mx-auto mt-8 text-[42px] font-semibold leading-[1.25] text-[#000213] sm:text-[52px]"
          >
            {{ title }}
          </h1>
          <p
            class="mx-auto mt-5text-[14px] leading-8 text-[#000213] sm:text-[24px] mt-4"
          >
            {{ description }}
          </p>
        </div>

        <div class="mx-auto mt-12 max-w-container px-6 sm:px-8 lg:px-12">
          <img
            :src="heroImageSrc"
            :alt="heroImageAlt"
            width="100%"
            class="h-auto w-full"
          />
        </div>
      </div>

      <div
        class="mx-auto mt-10 overflow-hidden bg-white/[0.32] backdrop-blur-sm"
      >
        <div
          class="grid mx-auto max-w-container gap-6 px-6 py-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
        >
          <div
            v-for="item in highlights"
            :key="item.title"
            class="flex items-start gap-3"
          >
            <img
              :src="item.iconSrc"
              :alt="item.title"
              class="mt-0.5 h-5 w-5 flex-shrink-0"
            />
            <div>
              <h2 class="text-[14px] font-semibold text-[#000213]">
                {{ item.title }}
              </h2>
              <p class="mt-1 text-[12px] leading-6 text-[#5F6472]">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative pb-8 pt-4">
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
        :button-variant="section.buttonVariant || 'text'"
        image-card-class="border-none bg-transparent p-0 shadow-none"
        image-class="rounded-[20px]"
      />
    </section>

    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <h2
          class="max-w-5xl text-[28px] font-semibold leading-[1.6] text-[#000213] sm:text-[32px]"
        >
          {{ comparisonTitle }}
          <br />
          {{ comparisonDescription }}
        </h2>

        <div
          class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div
            class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
          >
            <div>对比维度</div>
            <div>传统方式</div>
            <div>{{ comparisonProductName }}</div>
          </div>

          <div
            v-for="row in comparisonRows"
            :key="row.label"
            class="grid grid-cols-[1.15fr_1fr_1fr] items-start gap-4 border-t border-[#EEF1F6] px-6 py-5 text-[14px] leading-7 sm:px-8 sm:text-[15px]"
          >
            <div class="font-medium text-[#000213]">{{ row.label }}</div>
            <div class="flex items-start gap-3 text-[#7B8191]">
              <img
                :src="closeIconSrc"
                alt="传统方式"
                class="mt-1 h-4 w-4 flex-shrink-0"
              />
              <span>{{ row.legacy }}</span>
            </div>
            <div class="flex items-start gap-3 text-[#000213]">
              <img
                :src="checkIconSrc"
                alt="Traneasy"
                class="mt-1 h-4 w-4 flex-shrink-0"
              />
              <span>{{ row.traneasy }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProductSceneSection
      :title="sceneTitle"
      :description="sceneDescription"
      button-label="立即下载"
      :button-to="`#${setupSectionId}`"
      :items="sceneItems"
      :columns="4"
    />

    <section
      :id="setupSectionId"
      class="scroll-mt-28 px-6 py-20 sm:px-8 lg:px-12"
    >
      <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div
          class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p class="text-[14px] font-medium tracking-[0.18em] text-[#205DFF]">
              使用教程
            </p>
            <h2
              class="mt-3 text-[30px] font-semibold leading-[1.45] text-[#000213] sm:text-[34px]"
            >
              {{ setupTitle }}
            </h2>
          </div>

          <a
            :href="downloadAnchor"
            class="inline-flex items-center justify-center rounded-[10px] border border-[#CCD4E5] px-5 py-2.5 text-sm font-medium text-[#000213] transition-colors hover:border-[#205DFF] hover:text-[#205DFF]"
          >
            立即下载
          </a>
        </div>

        <div class="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="(step, index) in setupSteps" :key="step.title">
            <div class="flex items-center gap-4">
              <img :src="stagePointSrc" alt="步骤节点" class="h-3 w-3" />
              <div
                class="left-[5px] top-5 h-[1px] w-[calc(100%-12px)] bg-[#DCE5F5] xl:block"
              />
            </div>

            <div>
              <h3 class="mt-3 text-[16px] font-semibold text-[#000213]">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-[14px] leading-7 text-[#5F6472]">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 pb-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <h2
          class="text-[28px] font-semibold leading-[1.5] text-[#000213] sm:text-[32px]"
        >
          常见问题
        </h2>
        <p class="mt-3 text-[18px] leading-8 text-[#3A4050]">
          {{ faqDescription }}
        </p>

        <div class="mt-10 space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="overflow-hidden rounded-[16px] border border-[#E7EBF2] bg-[#F9FBFE]"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              @click="openFaqIndex = openFaqIndex === index ? null : index"
            >
              <span
                class="text-[16px] font-semibold leading-7 text-[#000213] sm:text-[17px]"
              >
                {{ faq.question }}
              </span>
              <span class="text-[24px] leading-none text-[#7B8191]">
                {{ openFaqIndex === index ? "−" : "+" }}
              </span>
            </button>

            <div
              v-if="openFaqIndex === index"
              class="border-t border-[#E7EBF2] px-6 py-5 text-[15px] leading-8 text-[#5F6472]"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
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

const props = withDefaults(
  defineProps<{
    seoTitle: string;
    seoDescription: string;
    logoSrc: string;
    logoAlt?: string;
    title: string;
    description: string;
    heroImageSrc: string;
    heroImageAlt: string;
    highlights: readonly SimpleItem[];
    featureSections: readonly FeatureSection[];
    comparisonTitle: string;
    comparisonDescription: string;
    comparisonProductName: string;
    comparisonRows: readonly ComparisonRow[];
    sceneTitle: string;
    sceneDescription: string;
    sceneItems: readonly SimpleItem[];
    setupTitle: string;
    setupSteps: readonly { title: string; description: string }[];
    faqDescription: string;
    faqs: readonly FaqItem[];
    backgroundImageSrc?: string;
    stagePointSrc?: string;
    setupSectionId?: string;
    downloadAnchor?: string;
  }>(),
  {
    backgroundImageSrc: "/images/integration/detail-bg.png",
    stagePointSrc: "/images/integration/stage-point.svg",
    setupSectionId: "setup-guide",
    downloadAnchor: "#download",
  },
);

const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
const openFaqIndex = ref<number | null>(0);

useHead({
  title: props.seoTitle,
  meta: [
    {
      name: "description",
      content: props.seoDescription,
    },
  ],
});
</script>
