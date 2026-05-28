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
          全渠道沟通
        </h1>
        <p
          class="mx-auto mt-4 max-w-4xl text-[18px] leading-8 text-[#000213] sm:text-[20px]"
        >
          聚合全球主流社交平台，告别多平台切换的混乱
        </p>
        <p
          class="mx-auto mt-6 max-w-5xl text-[14px] leading-7 text-[#5F6472] sm:text-[16px]"
        >
          将 WhatsApp、Telegram、Line、Facebook、Instagram、TikTok
          等全球主流社交平台整合到一个工作台，
          告别平台客户端之间的反复切换，让客户消息、翻译和运营动作统一完成，跨境沟通效率提升
          300%。
        </p>
      </div>

      <div class="mx-auto mt-14 max-w-6xl">
        <img
          :src="heroImageSrc"
          alt="Traneasy 全渠道沟通工作台"
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
          传统方式 vs 全渠道沟通
          <br />
          告别多平台切换、翻译繁琐、客户管理割裂的低效模式，效率与体验的全面升级。
        </h2>

        <div
          class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div
            class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
          >
            <div>对比维度</div>
            <div>传统方式</div>
            <div>Traneasy 全渠道沟通</div>
          </div>

          <div
            v-for="row in comparisonRows"
            :key="row.label"
            class="grid grid-cols-[1.15fr_1fr_1fr] items-start gap-4 border-t border-[#EEF1F6] px-6 py-5 text-[14px] leading-7 sm:px-8 sm:text-[15px]"
          >
            <div class="font-medium text-[#000213]">
              {{ row.label }}
            </div>
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
      title="打破平台壁垒的沉浸式沟通"
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
          全渠道实时翻译，打破国际沟通壁垒！
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
            立即开启全渠道沟通
            <br />
            把分散在全球各平台的消息，收拢到一个屏幕里。
          </h2>

          <NuxtLink
            :to="downloadLink"
            class="mt-8 inline-flex items-center justify-center rounded-[10px] bg-[#205DFF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1749cc]"
          >
            下载软件
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
const { t } = useI18n();

const heroImageSrc = "/images/product/app-image.png";
const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
  {
    title: "多平台统一收件箱",
    imageSrc: "/images/product/app-desc-2.png",
    imageAlt: "Traneasy 多平台统一收件箱",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "聚合收件箱",
        description:
          "将 WhatsApp、Telegram、Facebook、Line 等消息统一归集到同一个会话视图，避免重复切换客户端。",
      },
      {
        title: "系统分类",
        description:
          "按平台、未读、特别关注和群组等维度自动分类，重要消息更容易被及时处理。",
      },
    ],
  },
  {
    title: "跨平台实时翻译",
    imageSrc: "/images/product/app-desc-3.png",
    imageAlt: "Traneasy 跨平台实时翻译",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "双向翻译",
        description:
          "输入母语即可自动翻译为对方语言发送，接收外语消息后也会同步展示原文与译文。",
      },
      {
        title: "系统方案",
        description:
          "适配客服、销售、跟单等高频场景，不切换窗口也能完成跨语言沟通闭环。",
      },
    ],
  },
  {
    title: "统一客户标签与备注",
    imageSrc: "/images/product/app-desc-4.png",
    imageAlt: "Traneasy 客户标签与备注",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "客户沉淀",
        description:
          "为每位客户统一设置备注、电话、标签、待办事项和更新时间，关系资产集中管理。",
      },
      {
        title: "系统方案",
        description:
          "在一个界面完成信息录入、标签关联和后续跟进，方便团队共享和持续运营。",
      },
    ],
  },
  {
    title: "多账号聚合管理",
    imageSrc: "/images/product/app-desc-1.png",
    imageAlt: "Traneasy 多账号聚合管理",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "批量登陆",
        description:
          "同平台账号可批量接入、统一管理，支持分组展示和置顶，提高团队协同效率。",
      },
      {
        title: "系统方案",
        description:
          "一个操作后台即可查看多个账号状态、消息和资料，降低账号矩阵运营成本。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "沟通入口",
    legacy: "每个平台单独打开客户端，消息分散难汇总。",
    traneasy: "一个收件箱整合所有平台消息，统一查看与回复。",
  },
  {
    label: "平台切换",
    legacy: "来回切换窗口中断节奏，容易遗漏重点客户。",
    traneasy: "消息、翻译、备注都在同一工作台完成。",
  },
  {
    label: "翻译体验",
    legacy: "复制消息到翻译软件，操作繁琐且时效性差。",
    traneasy: "会话内实时翻译，发送和接收双向联动。",
  },
  {
    label: "客户管理",
    legacy: "客户信息分散，缺少标签和备注沉淀。",
    traneasy: "统一标签、备注、待办与联系信息。",
  },
  {
    label: "多账号管理",
    legacy: "多个账号切换频繁，团队协作成本高。",
    traneasy: "一个后台同时管理多个账号，队伍协作更顺畅。",
  },
] as const;

const sceneItems = [
  {
    title: "跨平台统一营销",
    description:
      "在 WhatsApp、Facebook、TikTok 等多个渠道统一承接线索，把客户咨询沉淀到同一套会话体系中。",
    iconSrc: "/images/product/scene-1.svg",
  },
  {
    title: "全球化无障沟通",
    description:
      "面对多语种客户、海外经销商、品牌代理和本地团队时，保持消息同步与即时翻译，沟通不再断层。",
    iconSrc: "/images/product/scene-2.svg",
  },
  {
    title: "私域运营效率升级",
    description:
      "标签、备注、分组和快捷动作全部沉淀在平台里，让客户运营从零散响应升级为流程化管理。",
    iconSrc: "/images/product/scene-3.svg",
  },
] as const;

const faqs = [
  {
    question: "Traneasy 目前支持聚合哪些主流的海外社交软件？",
    answer:
      "目前可统一接入 WhatsApp、Telegram、Facebook、Instagram、Line、TikTok 等主流社交平台。后续还会持续扩展更多渠道，方便企业在一个工作台内完成全球沟通。",
  },
  {
    question: "使用 Traneasy 进行多账号登录，是否会导致账号被封禁？",
    answer:
      "系统支持账号聚合管理与环境隔离配置，能够降低多账号运营中的风险。实际效果也与账号使用习惯、平台风控策略和网络环境有关，建议结合规范运营共同使用。",
  },
  {
    question: "实时翻译的准确率如何？支持小语种正常沟通吗？",
    answer:
      "Traneasy 的翻译能力适合外贸沟通、客户服务和营销回复等主流场景，支持多语言双向互译。对于小语种和专业术语，也可以通过上下文辅助和人工校正提升最终沟通质量。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还有部署、团队管理、权限设置或价格相关问题，可以继续查看帮助中心，或联系团队获取更具体的业务方案。",
  },
] as const;

const ctaPoints = [
  "支持全球主流社交平台接入",
  "统一消息视图，天然适合团队协作",
  "翻译+客户管理+矩阵账号三位一体",
  "多账号聚合分析，一台电脑管理多个窗口",
] as const;

const openFaqIndex = ref<number | null>(0);

useHead({
  title: () => t("seo.featuresTitle"),
  meta: [{ name: "description", content: () => t("seo.featuresDesc") }],
});
</script>
