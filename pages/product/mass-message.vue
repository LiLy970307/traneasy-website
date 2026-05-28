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
          精准消息群发
        </h1>
        <p
          class="mx-auto mt-4 max-w-5xl text-[24px] font-semibold leading-[1.5] text-[#000213] sm:text-[36px]"
        >
          用自动化工具实现千人千面的批量触达
        </p>
        <p
          class="mx-auto mt-6 max-w-5xl text-[14px] leading-7 text-[#5F6472] sm:text-[16px]"
        >
          为您提供企业级的精准消息群发解决方案。支持图文、视频、链接等多种格式，结合自动化发送与变量插入能力，
          让每一次批量触达依旧保持个性化表达，稳定覆盖海量目标客户。
        </p>
      </div>

      <div class="mx-auto mt-14 max-w-6xl">
        <img
          src="/images/product/message-image.png"
          alt="Traneasy 精准消息群发"
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
          传统方式 vs 精准消息群发
          <br />
          告别低效手动群发与高风险操作，用自动化触达让每一条营销信息都更快、更准、更自然。
        </h2>

        <div
          class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div
            class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
          >
            <div>对比维度</div>
            <div>传统方式</div>
            <div>Traneasy 精准消息群发</div>
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
      title="低成本获取高流量"
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
          高效触达全球客户，让每一条营销信息都精准落地。
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
            立即开启精准消息群发
            <br />
            让每一条营销信息，都精准触达目标客户
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

const pageTitle = "精准消息群发 - Traneasy 易翻译";
const pageDescription =
  "通过自动化批量发送、智能随机防封、灵活对象筛选和变量插入能力，让企业实现更稳定、更精准的消息群发。";
const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "极速批量发送",
    imageSrc: "/images/product/message-desc-1.png",
    imageAlt: "Traneasy 极速批量发送",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "手动逐条发送效率极低，一天最多处理几百条消息，难以支撑活动推广和客户集中触达。",
      },
      {
        title: "解决方案",
        description:
          "支持一键创建批量发送任务，文本、图片、视频和链接内容统一下发，快速覆盖海量客户。",
      },
    ],
  },
  {
    title: "智能随机防封",
    imageSrc: "/images/product/message-desc-2.png",
    imageAlt: "Traneasy 智能随机防封",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "群发频率和节奏过于一致，容易触发平台风控，导致限流、失败甚至账号异常。",
      },
      {
        title: "解决方案",
        description:
          "系统自动控制发送节奏与执行顺序，通过随机间隔和分批触达降低批量操作风险。",
      },
    ],
  },
  {
    title: "多模式选择群发对象",
    imageSrc: "/images/product/message-desc-3.png",
    imageAlt: "Traneasy 多模式选择群发对象",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "目标客户散落在标签、群组、聊天列表和通讯录中，缺乏统一筛选方式，群发对象难以精准锁定。",
      },
      {
        title: "解决方案",
        description:
          "支持按标签、群组、联系人范围和导入名单灵活选择发送对象，让大规模触达仍然保持精准。",
      },
    ],
  },
  {
    title: "个性化变量插入",
    imageSrc: "/images/product/message-desc-4.png",
    imageAlt: "Traneasy 个性化变量插入",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "统一模板内容缺少称呼和业务上下文，客户容易感知为群发广告，回复率与信任感都偏低。",
      },
      {
        title: "解决方案",
        description:
          "在消息中插入姓名、国家、产品等变量字段，同一批任务也能生成更自然的个性化内容。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "发送效率",
    legacy: "人工复制粘贴、逐条确认，发送速度慢，任务越大越容易漏发。",
    traneasy: "批量创建群发任务，统一执行和管理，大幅提升触达效率。",
  },
  {
    label: "风险控制",
    legacy: "发送节奏固定，容易触发风控，账号稳定性难以保障。",
    traneasy: "智能随机间隔和分批策略，降低异常操作风险，发送更稳定。",
  },
  {
    label: "筛选对象",
    legacy: "客户名单分散在不同位置，只能人工挑选，覆盖不全且效率低。",
    traneasy: "支持标签、群组、聊天列表等多模式筛选，精准圈定群发对象。",
  },
  {
    label: "个性化能力",
    legacy: "内容千篇一律，无法结合客户信息做差异化表达。",
    traneasy: "支持变量插入，让同一批消息根据客户信息自动生成个性化内容。",
  },
  {
    label: "结果复盘",
    legacy: "缺少统一任务视图，发送记录零散，后续跟进与优化困难。",
    traneasy: "任务执行过程清晰可查，便于团队复盘发送效果并持续优化策略。",
  },
] as const;

const sceneItems = [
  {
    title: "新品活动推广",
    description:
      "在新品上架、节日活动和限时促销场景下，快速向大批目标客户同步营销信息，放大活动曝光。",
    iconSrc: "/images/product/message-icon-1.svg",
  },
  {
    title: "沉默客户唤醒",
    description:
      "针对长期未回复或未下单客户统一发起激活触达，结合优惠与个性化文案提升再次互动概率。",
    iconSrc: "/images/product/message-icon-2.svg",
  },
  {
    title: "多语言市场拓展",
    description:
      "面向不同国家和区域客户执行批量消息触达，配合变量与多语言内容快速打开新市场。",
    iconSrc: "/images/product/message-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "群发会被封号吗？",
    answer:
      "合理设置发送节奏并结合平台规范使用时，风险是可控的。Traneasy 提供随机间隔与分批触达机制，帮助企业在大规模发送时保持更稳健的执行策略。",
  },
  {
    question: "支持发送图片和视频吗？",
    answer:
      "支持。除了文本消息，还可以根据业务场景发送图片、视频、链接等内容，让营销信息更完整、更有表现力。",
  },
  {
    question: "可以定时发送吗？",
    answer:
      "可以。您可以结合业务安排设置群发计划，在目标客户更活跃的时间段执行任务，提升消息到达后的互动效果。",
  },
  {
    question: "其他问题",
    answer:
      "如果您还想了解更细的发送策略、变量配置、对象筛选规则或多账号协作方式，可以继续联系团队获取更完整的落地方案。",
  },
] as const;

const ctaPoints = [
  "支持 WhatsApp、Facebook、Line 等主流社媒场景批量触达",
  "图文、视频、链接等内容统一编排，营销表达更完整",
  "支持智能随机发送节奏，降低高频批量操作带来的风险",
  "群发对象可按标签、群组、名单灵活筛选，触达更精准",
  "群发消息支持变量插入，规模化发送依旧保留个性化体验",
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
