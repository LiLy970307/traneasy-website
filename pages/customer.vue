<template>
  <main class="relative overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[720px] bg-[url('/images/product/bg-top.png')] bg-cover bg-center"
      aria-hidden="true"
    />

    <section class="relative px-6 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-24">
      <div class="mx-auto max-w-6xl text-center">
        <h1
          class="text-[40px] font-semibold leading-[1.25] text-[#000213] sm:text-[52px]"
        >
          客户关系管理
        </h1>
        <p
          class="mx-auto mt-4 max-w-5xl text-[24px] font-semibold leading-[1.5] text-[#000213] sm:text-[36px]"
        >
          用精细化的 CRM 系统挖掘客户的终身价值
        </p>
        <p
          class="mx-auto mt-6 max-w-5xl text-[14px] leading-7 text-[#5F6472] sm:text-[16px]"
        >
          深度融合了 CRM
          客户关系管理理念，我们将客户从“初次接触到复购”的全过程数字化，帮助您构建高价值的私域流量池。
        </p>
      </div>

      <div class="mx-auto mt-14 max-w-6xl">
        <img
          src="/images/product/customer-image.png"
          alt="Traneasy 客户关系管理界面"
          width="2048"
          height="1074"
          class="h-auto w-full"
        />
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
        image-card-class="border-none bg-transparent p-0 shadow-none"
        image-class="rounded-[20px]"
      />
    </section>

    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-6xl">
        <h2
          class="max-w-5xl text-[28px] font-semibold leading-[1.6] text-[#000213] sm:text-[32px]"
        >
          传统方式 vs 客户关系管理
          <br />
          告别 Excel 表格和低效备注，构建 360
          度客户画像，让每一次跟进都精准到位。
        </h2>

        <div
          class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div
            class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
          >
            <div>对比维度</div>
            <div>传统方式</div>
            <div>Traneasy 客户关系管理</div>
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
      eyebrow="应用场景"
      title="私域流量的精细化耕作"
      button-label="立即下载"
      :button-to="downloadLink"
      :items="sceneItems"
    />

    <section class="px-6 py-20 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-5xl">
        <h2
          class="text-[28px] font-semibold leading-[1.5] text-[#000213] sm:text-[32px]"
        >
          常见问题
        </h2>
        <p class="mt-3 text-[18px] leading-8 text-[#3A4050]">
          360° 客户画像沉淀，让每一个客户都成为可复购的资产！
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

    <section class="px-6 pb-20 pt-4 sm:px-8 lg:px-12">
      <div
        class="mx-auto grid max-w-6xl gap-12 rounded-[32px] bg-white px-8 py-12 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-12 lg:py-14"
      >
        <div>
          <h2 class="text-[32px] font-semibold leading-[1.45] text-[#000213]">
            立即开启客户关系管理
            <br />
            把分散的客户信息，收拢成可沉淀的资产
          </h2>

          <NuxtLink
            :to="downloadLink"
            class="mt-8 inline-flex items-center justify-center rounded-[10px] bg-[#205DFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749cc]"
          >
            软件下载
          </NuxtLink>
        </div>

        <ul class="space-y-5">
          <li
            v-for="item in ctaPoints"
            :key="item"
            class="flex items-start gap-3 text-[15px] leading-7 text-[#3A4050]"
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
const localePath = useLocalePath();

const pageTitle = "客户关系管理 - Traneasy 易翻译";
const pageDescription =
  "通过智能标签系统、跟进计划提醒与客户资产沉淀能力，帮助企业建立 360 度客户画像，持续提升复购与运营效率。";
const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "智能标签系统",
    imageSrc: "/images/product/customer-desc-1.png",
    imageAlt: "Traneasy 智能标签系统",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户太多了，标签和备注全靠人工维护，信息散落在聊天、表格和成员脑海里，筛选客户时非常低效。",
      },
      {
        title: "解决方案",
        description:
          "支持按来源、阶段、地区、购买意向、跟进状态等维度为客户建立标签体系，一次沉淀，后续筛选、分层和复盘都更高效。",
      },
    ],
  },
  {
    title: "跟进客户计划与提醒",
    imageSrc: "/images/product/customer-desc-2.png",
    imageAlt: "Traneasy 跟进客户计划与提醒",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "客户跟进节奏经常依赖个人记忆，销售一忙就忘，客户当前处于什么阶段、该何时联系也缺少统一提醒。",
      },
      {
        title: "解决方案",
        description:
          "可以为客户创建跟进计划和提醒节点，并结合标签、负责人和历史记录统一管理，帮助团队按节奏推进客户转化。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "信息管理",
    legacy: "客户信息散落在表格、聊天记录和成员备注中，查找和同步都很费时。",
    traneasy: "统一沉淀客户档案、标签和跟进记录，信息查找更快更完整。",
  },
  {
    label: "客户分层",
    legacy: "客户多却缺少统一分类标准，高价值客户和普通线索混在一起。",
    traneasy: "支持多维标签分层，帮助团队快速识别重点客户并制定差异化策略。",
  },
  {
    label: "生命周期",
    legacy: "客户从首次咨询到成交、复购的阶段变化难追踪，容易漏掉关键节点。",
    traneasy: "清晰记录客户全生命周期轨迹，持续跟踪每个阶段的业务动作。",
  },
  {
    label: "沟通节奏",
    legacy: "客户跟进大多依靠个人记忆，忙起来就容易忘记联系。",
    traneasy: "跟进计划与提醒机制协同工作，让关键客户始终处于可推进状态。",
  },
  {
    label: "资产沉淀",
    legacy: "客户资料分散且难复用，成员变动时历史信息容易断层。",
    traneasy: "客户资料持续沉淀为企业资产，交接更顺畅，长期复购更有依据。",
  },
] as const;

const sceneItems = [
  {
    title: "大客户专属维护",
    description:
      "针对 TOP 10% 的高净值客户建立专属标签、跟进计划和服务视图，帮助团队用更精细的策略提升长期价值。",
    iconSrc: "/images/product/customer-icon-1.svg",
  },
  {
    title: "节日营销与复购",
    description:
      "基于 CRM 历史标签和跟进记录筛选目标客户，在节日节点、活动节点执行更精准的二次营销。",
    iconSrc: "/images/product/customer-icon-2.svg",
  },
  {
    title: "销售漏斗分析",
    description:
      "通过客户阶段、来源和负责人等维度，持续观察客户从咨询到成交、复购的推进效率，优化整体转化节奏。",
    iconSrc: "/images/product/customer-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "客户信息会丢失吗？",
    answer:
      "所有客户数据都会统一沉淀在系统内，并结合权限规则进行管理。只要业务流程在系统中完成，历史记录、标签和跟进信息都可以持续保留。",
  },
  {
    question: "标签数量有限制吗？",
    answer:
      "无硬性的一刀切限制，你可以根据业务需要自由创建标签体系，并按团队实际运营方式持续扩展和优化。",
  },
  {
    question: "客户数据能导出吗？",
    answer:
      "支持导出为 Excel 或其他适合业务复盘的格式，方便进行下游分析、汇报或与外部流程衔接。",
  },
  {
    question: "CRM 数据可以和外部系统对接吗？",
    answer:
      "支持。Traneasy 支持基于接口或数据导出的方式与企业现有系统协同，便于把客户数据同步到 ERP、BI 或其他业务系统。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解标签策略、客户分层方法、导出能力或 CRM 与现有业务系统的衔接方式，可以继续联系团队获取更完整方案。",
  },
] as const;

const ctaPoints = [
  "支持跨平台客户信息聚合，告别多 APP 切换查看",
  "统一客户标签与生命周期管理，精准识别客户潜力等级",
  "客户全生命周期信息沉淀，降低团队交接成本和断层风险",
  "客户流失预警、复购计划与进度提醒让运营更可控",
  "客户资料可沉淀为企业资产，持续累积长期客户价值",
] as const;

const openFaqIndex = ref<number | null>(0);

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
  ],
});
</script>
