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
        class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
      >
        <div class="w-full">
          <h1
            class="text-[32px] w1130:text-[40px] font-semibold leading-[1.35] text-[#000213]"
          >
            灵活配置，精准匹配——打造适合您的全周期翻译解决方案
          </h1>
          <div class="mt-6 flex items-center justify-between">
            <h2
              class="text-[32px] w1130:text-[40px] font-semibold leading-tight text-[#000213] sm:text-[34px]"
            >
              套餐选择
            </h2>

            <NuxtLink
              :to="localePath('/download')"
              class="inline-flex items-center"
            >
              <button
                type="button"
                class="inline-flex h-11 w-fit items-center justify-center rounded-[4px] bg-[#205DFF] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#174fe0]"
              >
                下载试用
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-8 border-b border-[#E7ECF4]">
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
      <h3 class="text-[14px] font-medium text-[#374151]">字符套餐</h3>
      <div class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                优惠{{
                  Math.round((1 - plan.price / plan.originalPrice) * 100)
                }}%
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
              <span class="text-slate-500">字符数量：</span>
              <span class="text-[20px] font-bold text-[#1d4ed8] mr-2">
                {{ plan.availability }}
              </span>
              <span class="text-slate-500">字符</span>
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
              class="inline-flex h-11 w-full items-center justify-center rounded-[4px] bg-[#05091B] text-[13px] font-semibold text-white transition-colors hover:bg-[#111827]"
            >
              {{ plan.cta }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <section
      id="monthly-packages"
      ref="monthlyPackagesRef"
      class="relative mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12"
    >
      <h3 class="text-[14px] font-medium text-[#374151]">包月套餐</h3>
      <div class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                优惠{{
                  Math.round((1 - plan.price / plan.originalPrice) * 100)
                }}%
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
              <span class="text-slate-500">字符数量：</span>
              <span class="text-[20px] font-bold text-[#1d4ed8] mr-2">
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
    </section>
    <FaqSection
      title="常见问题"
      description="有疑问？看这里，让您的每一分投入都清晰透明！"
      :faqs="faqs"
      section-class="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12"
      container-class="max-w-[1180px]"
    />
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface PricingPlan {
  name: string;
  enName?: string;
  description: string;
  price: number;
  originalPrice: number;
  cta: string;
  availability: string;
  features: string[];
  badge?: string;
  badgeClass?: string;
}

const pageTitle = "套餐价格 - Traneasy 易翻译";
const pageDescription =
  "查看 TranEasy 易翻译字符套餐与包月套餐，按业务阶段灵活选择更适合团队的翻译与客服协作方案。";

const pricingTabs = [
  { label: "字符套餐", target: "char-packages" },
  { label: "包月套餐", target: "monthly-packages" },
] as const;

const charPackagesRef = ref<HTMLElement | null>(null);
const monthlyPackagesRef = ref<HTMLElement | null>(null);
const activeTab = ref<(typeof pricingTabs)[number]["target"]>("char-packages");

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

const planDescriptions: Record<string, string> = {
  标准版: "支持腾讯、有道两种翻译通道任意切换",
  高级版: "支持谷歌、微软两种翻译通道任意切换",
  专业版: "支持Deepl精准翻译",
  AI翻译: "支持ChatGpt智能翻译",
};

const planBadges: Record<string, { badge: string; badgeClass: string }> = {
  高级版: {
    badge: "热销推荐",
    badgeClass: "border-[#FFB8A0] bg-[#FFF1EB] text-[#FF6B2C]",
  },
  专业版: {
    badge: "企业优选",
    badgeClass: "border-[#FFD7A8] bg-[#FFF8E8] text-[#FF8D1A]",
  },
};

const { data: saleData } = await useFetch<SaleListResponse>(SALE_API, {
  server: false,
  lazy: true,
});

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
  const badgeInfo = planBadges[item.name];
  const description = planDescriptions[item.name] || "支持翻译功能";

  const numText =
    item.translationBillingMode === "char"
      ? item.num >= 10000
        ? `${item.num / 10000}万`
        : `${item.num}`
      : "时间限制30天";

  return {
    name: item.name,
    enName: item.enName,
    description,
    price,
    originalPrice: item.showPrice / 100,
    cta: "立即购买",
    availability: item.translationBillingMode === "char" ? numText : "不限量",
    features:
      item.translationBillingMode === "char"
        ? ["无时间限制", "支持子账号"]
        : [numText, "不支持子账号"],
    badge: badgeInfo?.badge,
    badgeClass: badgeInfo?.badgeClass,
  };
}

const faqs = [
  {
    question: "150万字符具体指什么？如果用完了怎么办？",
    answer: `
      <ul class="list-disc pl-5 space-y-1">
      <li>150万字符是指翻译引擎处理的文本总量（包含发送和接收的双向翻译）。对于绝大多数中小微外贸企业，这通常足够使用6-12个月。</li>
      <li>超出处理： 如果字符数用完，您的账号不会被冻结，系统会提示您以极低的单价单独购买字符包，或者升级到更高阶的套餐，确保您的业务不中断。</li>
      </ul>
    `,
  },
  {
    question: "为什么专业版和AI版价格更高？值得升级吗？",
    answer:
      "更高版本提供更强的翻译能力、术语库匹配和智能化辅助，适合对准确率、效率和复杂业务场景有更高要求的团队。",
  },
  {
    question: "什么是子账号？我为什么要选支持子账号的套餐？",
    answer:
      "子账号适合多人协作和权限分配场景，主管可以统一管理成员、数据与客户归属，避免团队协作时账号混用。",
  },
  {
    question: "包月版（不限量）和字符版有什么区别？",
    answer: `
      <ul class="list-disc pl-5 space-y-1">
      <li>字符版（推荐）： 性价比高，适合日常业务沟通，数据永久有效。</li>
      <li>包月版（不限量）： 适合短期内有爆发式营销需求的用户。因为包月版有时间限制（30天），过期作废，请根据您的实际业务节奏选择。</li>
      </ul>
    `,
  },
];

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
  const observer = new IntersectionObserver(
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
      observer.observe(sectionRef.value);
    }
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDescription }],
});
</script>
