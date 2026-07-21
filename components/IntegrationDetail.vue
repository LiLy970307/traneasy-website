<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[1204px] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backgroundImageSrc})` }"
      aria-hidden="true"
    />

    <section class="relative pb-10 pt-16 lg:pt-20">
      <div class="px-6 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-container animate-hero-intro text-center">
          <img
            :src="logoSrc"
            :alt="logoAlt || title"
            class="mx-auto w-[96px] rounded-[14px]"
          />
          <h1
            class="mx-auto mt-8 text-[42px] font-semibold leading-[1.25] text-[#000213] xl:text-[56px] lg:text-[48px]"
          >
            {{ title }}
          </h1>
          <p
            class="mx-auto mt-4 text-[18px] font-normal leading-8 text-[#000213] xl:text-[22px] lg:text-[24px]"
          >
            {{ description }}
          </p>
        </div>

        <div
          class="mx-auto mt-12 max-w-container animate-hero-intro-delayed px-6 sm:px-8 lg:px-12"
        >
          <img
            :src="heroImageSrc"
            :alt="heroImageAlt"
            width="100%"
            class="h-auto w-full"
          />
        </div>
      </div>

      <div
        class="mx-auto mt-10 animate-hero-intro-delayed-2 overflow-hidden bg-white/[0.32] backdrop-blur-sm"
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

    <ComparisonTableSection
      :title="comparisonTitle"
      :description="comparisonDescription"
      :product-name="comparisonProductName"
      :rows="comparisonRows"
    />

    <ProductSceneSection
      :title="sceneTitle"
      :description="sceneDescription"
      :button-label="$t('integrationDetail.downloadBtn')"
      :button-to="downloadAnchor"
      :items="sceneItems"
      :columns="4"
    />

    <section
      :id="setupSectionId"
      ref="setupSectionRef"
      class="scroll-mt-28 px-6 py-20 sm:px-8 lg:px-12"
    >
      <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
        <div
          :class="[
            isSetupVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="flex flex-col gap-6 transition-all duration-700 ease-out will-change-transform lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p class="text-[14px] font-medium tracking-[0.18em] text-[#205DFF]">
              {{ $t("integrationDetail.sceneEyebrow") }}
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
            {{ $t("integrationDetail.downloadBtn") }}
          </a>
        </div>

        <div
          :class="[
            isSetupVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="mt-12 grid gap-4 transition-all delay-150 duration-700 ease-out will-change-transform md:grid-cols-2 xl:grid-cols-4"
        >
          <div v-for="(step, index) in setupSteps" :key="step.title">
            <div class="flex items-center gap-4">
              <img
                :src="stagePointSrc"
                :alt="$t('integrationDetail.stepNodeAlt')"
                class="h-3 w-3"
              />
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

    <FaqSection :description="faqDescription" :faqs="faqs" />
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
    downloadAnchor: "/download",
  },
);

useHead({
  title: props.seoTitle,
  meta: [
    {
      name: "description",
      content: props.seoDescription,
    },
  ],
});

const setupSectionRef = shallowRef<HTMLElement | null>(null);
const isSetupVisible = ref(false);
let setupObserver: IntersectionObserver | null = null;

onMounted(() => {
  console.log(props.setupSectionId);

  if (!setupSectionRef.value) {
    return;
  }

  setupObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isSetupVisible.value = true;
        setupObserver?.disconnect();
      }
    },
    {
      threshold: 0.4,
    },
  );

  setupObserver.observe(setupSectionRef.value);
});

onBeforeUnmount(() => {
  setupObserver?.disconnect();
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

.animate-hero-intro-delayed-2 {
  animation: hero-intro 0.8s ease-out 0.3s both;
}
</style>
