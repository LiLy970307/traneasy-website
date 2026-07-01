<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[355px] bg-cover bg-center bg-no-repeat"
      style="background-image: url(&quot;/images/pricing/top-bg.png&quot;)"
      aria-hidden="true"
    ></div>
    <section
      class="relative h-[286px] mx-auto max-w-container flex flex-col justify-between pt-[60px] sm:px-8 lg:px-12"
    >
      <div
        class="animate-hero-intro flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
      >
        <div class="w-full">
          <h1
            class="text-[32px] w1130:text-[40px] font-semibold leading-[1.35] text-[#000213]"
          >
            {{ $t("pages.pricing.pageTitle") }}
          </h1>
          <div class="mt-6 flex items-center justify-between">
            <h2
              class="text-[32px] w1130:text-[40px] font-semibold leading-tight text-[#000213] sm:text-[34px]"
            >
              {{ $t("pages.pricing.subtitle") }}
            </h2>

            <NuxtLink
              :to="localePath('/download')"
              class="inline-flex items-center"
            >
              <button
                type="button"
                class="inline-flex h-11 w-fit items-center justify-center rounded-[4px] bg-[#205DFF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#174fe0]"
              >
                {{ $t("pages.pricing.btnDownload") }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="animate-hero-intro-delayed flex items-center gap-8 border-b border-[#E7ECF4]"
      >
        <button
          v-for="tab in pricingTabs"
          :key="tab.target"
          type="button"
          class="relative pb-4 text-[13px] font-medium transition-colors"
          :class="
            activeTab === tab.target
              ? 'text-[#205DFF]'
              : 'text-[#6B7280] hover:text-[#205DFF]'
          "
          @click="scrollToSection(tab.target)"
        >
          {{ tab.label }}
          <span
            v-if="activeTab === tab.target"
            class="absolute inset-x-0 bottom-[-1px] h-[2px] rounded-full bg-[#205DFF]"
          />
        </button>
      </div>
    </section>

    <section
      id="char-packages"
      ref="charPackagesRef"
      class="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12"
    >
      <h3
        :class="[
          isCharSectionVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="text-[14px] font-medium text-[#374151] transition-all duration-700 ease-out will-change-transform"
      >
        {{ $t("pages.pricing.sectionChar") }}
      </h3>
      <Transition name="content-reveal" mode="out-in">
        <div
          v-if="pending"
          key="char-pending"
          class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          <article
            v-for="index in 4"
            :key="`char-skeleton-${index}`"
            class="flex min-h-[376px] flex-col rounded-[10px] border border-[#E7ECF3] bg-white px-5 pb-5 pt-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          >
            <div class="h-5 w-24 animate-pulse rounded bg-slate-100" />
            <div class="mt-2 h-3 w-full animate-pulse rounded bg-slate-100" />
            <div class="mt-5 h-10 w-20 animate-pulse rounded bg-slate-100" />
            <div class="mt-5 border-t border-[#EDF1F7] pt-5">
              <div class="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
            </div>
            <div class="mt-5 flex gap-4">
              <div class="h-4 w-20 animate-pulse rounded bg-slate-100" />
              <div class="h-4 w-20 animate-pulse rounded bg-slate-100" />
            </div>
            <div class="mt-auto h-11 w-full animate-pulse rounded bg-slate-100" />
          </article>
        </div>

        <div
          v-else-if="showLoadError"
          key="char-error"
          class="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-800"
        >
          {{ $t("pages.pricing.loadError") }}
        </div>

        <div
          v-else
          key="char-content"
          :class="[
            isCharSectionVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="mt-5 grid gap-5 transition-all delay-150 duration-700 ease-out will-change-transform md:grid-cols-2 xl:grid-cols-4"
        >
        <article
          v-for="plan in characterPlans"
          :key="plan.name"
          class="flex min-h-[376px] flex-col rounded-[10px] border border-[#E7ECF4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
        >
          <div class="px-5 pt-5">
            <div class="flex items-start justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <h4
                    class="text-[20px] font-semibold leading-none text-[#111827]"
                  >
                    {{ plan.name }}
                  </h4>
                  <span
                    v-if="plan.badge"
                    class="inline-flex rounded-[3px] border px-1.5 py-0.5 text-[10px] font-semibold leading-none"
                    :class="plan.badgeClass"
                  >
                    {{ plan.badge }}
                  </span>
                </div>
                <p class="mt-2 text-[11px] leading-5 text-[#8B90A0]">
                  {{ plan.description }}
                </p>
              </div>
              <span
                v-if="plan.originalPrice > plan.price"
                class="text-[10px] font-medium text-[#8B90A0]"
              >
                {{ $t("pages.pricing.discountLabel")
                }}{{ Math.round((1 - plan.price / plan.originalPrice) * 100) }}%
              </span>
            </div>

            <div class="mt-5 flex items-end gap-1">
              <span class="text-[20px] font-semibold text-[#111827]">￥</span>
              <span
                class="text-[40px] font-semibold leading-none text-[#111827]"
              >
                {{ plan.price }}
              </span>
            </div>
            <div
              class="mt-2 flex items-center justify-between text-[12px] text-[#B4B9C5]"
            >
              <span v-if="plan.originalPrice > plan.price">{{
                plan.originalPrice > plan.price ? "￥" + plan.originalPrice : ""
              }}</span>
            </div>
          </div>

          <div
            class="mt-5 flex flex-wrap gap-2 border-t border-[#EDF1F7] px-5 py-5 text-[14px] text-[#5F6472]"
          >
            <div class="whitespace-nowrap">
              <span class="text-slate-500">{{
                $t("pages.pricing.labelCharCount")
              }}</span>
              <span class="text-[20px] font-bold text-[#1d4ed8] mr-1">
                {{ plan.availability }}
              </span>
              <span
                v-if="plan.availabilityUnit"
                class="text-[20px] font-bold text-[#1d4ed8] mr-2"
              >
                {{ plan.availabilityUnit }}
              </span>
              <span class="text-slate-500">{{
                $t("pages.pricing.unitChar")
              }}</span>
            </div>
          </div>

          <div
            class="mt-5 flex justify-between gap-2 px-5 text-[12px] text-[#5F6472]"
          >
            <div
              v-for="feature in plan.features"
              :key="plan.name + feature"
              class="flex items-center gap-2"
            >
              <img
                src="/public/images/correct-icon.svg"
                width="20"
                height="20"
              />
              <span>{{ feature }}</span>
            </div>
          </div>

          <div class="mt-auto px-5 pb-5">
            <button
              type="button"
              @click="goLogin"
              class="inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-[#05091B] text-[13px] font-semibold text-white transition-colors hover:bg-[#111827]"
            >
              {{ plan.cta }}
            </button>
          </div>
        </article>
        </div>
      </Transition>
    </section>

    <section
      id="monthly-packages"
      ref="monthlyPackagesRef"
      class="relative mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12"
    >
      <h3
        :class="[
          isMonthlySectionVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="text-[14px] font-medium text-[#374151] transition-all duration-700 ease-out will-change-transform"
      >
        {{ $t("pages.pricing.sectionMonthly") }}
      </h3>
      <Transition name="content-reveal" mode="out-in">
        <div
          v-if="pending"
          key="monthly-pending"
          class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          <article
            v-for="index in 4"
            :key="`monthly-skeleton-${index}`"
            class="flex min-h-[376px] flex-col rounded-[10px] border border-[#E7ECF3] bg-white px-5 pb-5 pt-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          >
            <div class="h-5 w-24 animate-pulse rounded bg-slate-100" />
            <div class="mt-2 h-3 w-full animate-pulse rounded bg-slate-100" />
            <div class="mt-5 h-10 w-20 animate-pulse rounded bg-slate-100" />
            <div class="mt-5 border-t border-[#EDF1F7] pt-5">
              <div class="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
            </div>
            <div class="mt-5 flex gap-4">
              <div class="h-4 w-20 animate-pulse rounded bg-slate-100" />
              <div class="h-4 w-20 animate-pulse rounded bg-slate-100" />
            </div>
            <div class="mt-auto h-11 w-full animate-pulse rounded bg-slate-100" />
          </article>
        </div>

        <div
          v-else-if="showLoadError"
          key="monthly-error"
          class="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-800"
        >
          {{ $t("pages.pricing.loadError") }}
        </div>

        <div
          v-else
          key="monthly-content"
          :class="[
            isMonthlySectionVisible
              ? 'translate-y-0 opacity-100 blur-0'
              : 'translate-y-8 opacity-0 blur-sm',
          ]"
          class="mt-5 grid gap-5 transition-all delay-150 duration-700 ease-out will-change-transform md:grid-cols-2 xl:grid-cols-4"
        >
        <article
          v-for="plan in monthlyPlans"
          :key="plan.name"
          class="flex min-h-[376px] flex-col rounded-[10px] border border-[#E7ECF4] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
        >
          <div class="px-5 pt-5">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h4
                  class="text-[20px] font-semibold leading-none text-[#111827]"
                >
                  {{ plan.name }}
                </h4>
                <p class="mt-2 text-[11px] leading-5 text-[#8B90A0]">
                  {{ plan.description }}
                </p>
              </div>
              <span
                v-if="plan.originalPrice > plan.price"
                class="text-[10px] font-medium text-[#8B90A0]"
              >
                {{ $t("pages.pricing.discountLabel")
                }}{{ Math.round((1 - plan.price / plan.originalPrice) * 100) }}%
              </span>
            </div>

            <div class="mt-5 flex items-end gap-1">
              <span class="text-[20px] font-semibold text-[#111827]">￥</span>
              <span
                class="text-[40px] font-semibold leading-none text-[#111827]"
              >
                {{ plan.price }}
              </span>
            </div>

            <div
              class="mt-2 flex items-center justify-between text-[12px] text-[#B4B9C5]"
            >
              <span v-if="plan.originalPrice > plan.price">{{
                plan.originalPrice > plan.price ? "￥" + plan.originalPrice : ""
              }}</span>
            </div>
          </div>

          <div
            class="mt-5 flex flex-wrap gap-2 border-t border-[#EDF1F7] px-5 py-5 text-[14px] text-[#5F6472]"
          >
            <div class="whitespace-nowrap">
              <span class="text-slate-500">{{
                $t("pages.pricing.labelCharCount")
              }}</span>
              <span class="text-[20px] font-bold text-[#1d4ed8]">
                {{ plan.availability }}
              </span>
            </div>
          </div>

          <div
            class="flex justify-between gap-2 px-5 text-[12px] text-[#5F6472]"
          >
            <div
              v-for="(feature, index) in plan.features"
              :key="plan.name + feature"
              class="flex items-center gap-2"
            >
              <img
                v-if="index === 0"
                src="/public/images/time-icon.svg"
                width="20"
                height="20"
              />
              <img
                v-else
                src="/public/images/incorrect-icon.svg"
                width="20"
                height="20"
              />
              <span>{{ feature }}</span>
            </div>
          </div>

          <div class="mt-auto px-5 pb-5">
            <button
              type="button"
              class="inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-[#05091B] text-[13px] font-semibold text-white transition-colors hover:bg-[#111827]"
            >
              {{ plan.cta }}
            </button>
          </div>
        </article>
        </div>
      </Transition>
    </section>
    <FaqSection
      :title="$t('pages.pricing.faqTitle')"
      :description="$t('pages.pricing.faqDesc')"
      :faqs="faqs"
      section-class="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12"
      container-class="max-w-[1180px]"
    />
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { goLogin } = useLoginRedirect();

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  cta: string;
  availability: string;
  availabilityUnit?: string;
  features: string[];
  badge?: string;
  badgeClass?: string;
}

const pageTitle = "pages.pricing.seoTitle";
const pageDescription = "pages.pricing.seoDesc";

const { t, locale } = useI18n();
const pricingTabs = [
  { label: t("pages.pricing.tabChar"), target: "char-packages" },
  { label: t("pages.pricing.tabMonthly"), target: "monthly-packages" },
] as const;

const charPackagesRef = shallowRef<HTMLElement | null>(null);
const monthlyPackagesRef = shallowRef<HTMLElement | null>(null);
const activeTab = ref<(typeof pricingTabs)[number]["target"]>("char-packages");
const isCharSectionVisible = ref(false);
const isMonthlySectionVisible = ref(false);

const config = useRuntimeConfig();
const SALE_API = `${config.public.clientUserApiBase}/memberGroup/saleList`;

interface SaleItem {
  id: number;
  name: string;
  enName: string;
  showPrice: number;
  salePrice: number;
  usdPrice: number;
  num: number;
  availability: string;
  translationBillingMode: string;
  sort: number;
  authTranslationChannelList: string;
}

interface SaleListResponse {
  success: boolean;
  code: number;
  msg: string;
  data: SaleItem[];
}

const planDescriptionKeys: Record<string, string> = {
  标准版: "pages.pricing.planStandardDesc",
  高级版: "pages.pricing.planAdvancedDesc",
  专业版: "pages.pricing.planProDesc",
  AI翻译: "pages.pricing.planAIDesc",
};

const planBadgeKeys: Record<string, { badgeKey: string; badgeClass: string }> =
  {
    高级版: {
      badgeKey: "pages.pricing.badgeHot",
      badgeClass: "border-[#FFB8A0] bg-[#FFF1EB] text-[#FF6B2C]",
    },
    专业版: {
      badgeKey: "pages.pricing.badgeEnterprise",
      badgeClass: "border-[#FFD7A8] bg-[#FFF8E8] text-[#FF8D1A]",
    },
  };

const { data: saleData, pending, error } = await useApiFetch<SaleListResponse>(SALE_API, {
  server: false,
  lazy: true,
});

const showLoadError = computed(
  () => !pending.value && (!!error.value || saleData.value?.success === false),
);

const allPlans = computed(() => {
  return [...(saleData.value?.data ?? [])].sort((a, b) => a.sort - b.sort);
});

const characterPlans = computed(() => {
  return allPlans.value
    .filter((item) => item.translationBillingMode === "char")
    .sort((a, b) => a.salePrice - b.salePrice)
    .map((item) => mapToPlan(item));
});

const monthlyPlans = computed(() => {
  return allPlans.value
    .filter((item) => item.translationBillingMode === "time")
    .sort((a, b) => a.salePrice - b.salePrice)
    .map((item) => mapToPlan(item));
});

function mapToPlan(item: SaleItem): PricingPlan {
  const price = item.salePrice / 100;
  const badgeInfo = planBadgeKeys[item.name];
  const descKey =
    planDescriptionKeys[item.name] || "pages.pricing.defaultPlanDesc";

  const isCJK = (["zh", "ja", "ko"] as string[]).includes(locale.value);

  let numText: string;
  let availabilityUnit: string | undefined;

  if (item.translationBillingMode === "char") {
    if (isCJK) {
      if (item.num >= 10000) {
        const val = item.num / 10000;
        numText = val % 1 === 0 ? `${val}` : val.toFixed(1);
        availabilityUnit = t("pages.pricing.unitWan");
      } else {
        numText = `${item.num}`;
        availabilityUnit = undefined;
      }
    } else {
      if (item.num >= 1000) {
        const val = item.num / 1000;
        numText = val % 1 === 0 ? `${val}` : val.toFixed(1);
        availabilityUnit = "K";
      } else {
        numText = `${item.num}`;
        availabilityUnit = undefined;
      }
    }
  } else {
    numText = t("pages.pricing.limit30Days");
    availabilityUnit = undefined;
  }

  return {
    name: locale.value === "zh" ? item.name : item.enName,
    description: t(descKey),
    price,
    originalPrice: item.showPrice / 100,
    cta: t("pages.pricing.btnBuy"),
    availability: numText,
    availabilityUnit,
    features:
      item.translationBillingMode === "char"
        ? [
            t("pages.pricing.featureNoTimeLimit"),
            t("pages.pricing.featureSubAccount"),
          ]
        : [numText, t("pages.pricing.featureNoSubAccount")],
    badge: badgeInfo ? t(badgeInfo.badgeKey) : undefined,
    badgeClass: badgeInfo?.badgeClass,
  };
}

const faqs = computed(() => [
  {
    question: t("pages.pricing.faqQ1"),
    answer: t("pages.pricing.faqA1"),
  },
  {
    question: t("pages.pricing.faqQ2"),
    answer: t("pages.pricing.faqA2"),
  },
  {
    question: t("pages.pricing.faqQ3"),
    answer: t("pages.pricing.faqA3"),
  },
  {
    question: t("pages.pricing.faqQ4"),
    answer: t("pages.pricing.faqA4"),
  },
]);

const sectionRefs = {
  "char-packages": charPackagesRef,
  "monthly-packages": monthlyPackagesRef,
} as const;

const scrollToSection = (target: (typeof pricingTabs)[number]["target"]) => {
  activeTab.value = target;

  const element = sectionRefs[target].value;
  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - 118;
  window.scrollTo({ top, behavior: "smooth" });
};

onMounted(() => {
  const tabObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (left, right) => right.intersectionRatio - left.intersectionRatio,
        )[0];

      if (!visibleEntry?.target.id) {
        return;
      }

      activeTab.value = visibleEntry.target
        .id as (typeof pricingTabs)[number]["target"];
    },
    {
      rootMargin: "-140px 0px -55% 0px",
      threshold: [0.2, 0.45, 0.7],
    },
  );

  Object.values(sectionRefs).forEach((sectionRef) => {
    if (sectionRef.value) {
      tabObserver.observe(sectionRef.value);
    }
  });

  const animationObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        if (entry.target.id === "char-packages") {
          isCharSectionVisible.value = true;
        }

        if (entry.target.id === "monthly-packages") {
          isMonthlySectionVisible.value = true;
        }

        animationObserver.unobserve(entry.target);
      }
    },
    {
      threshold: 0.4,
    },
  );

  if (charPackagesRef.value) {
    animationObserver.observe(charPackagesRef.value);
  }

  if (monthlyPackagesRef.value) {
    animationObserver.observe(monthlyPackagesRef.value);
  }

  onBeforeUnmount(() => {
    tabObserver.disconnect();
    animationObserver.disconnect();
  });
});

useHead({
  title: t(pageTitle),
  meta: [{ name: "description", content: t(pageDescription) }],
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

.content-reveal-enter-active {
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out,
    filter 0.8s ease-out;
}

.content-reveal-leave-active {
  transition: opacity 0.3s ease-in;
}

.content-reveal-enter-from {
  opacity: 0;
  transform: translateY(24px);
  filter: blur(8px);
}

.content-reveal-leave-to {
  opacity: 0;
}
</style>
