<template>
  <main class="relative min-h-screen overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(180deg,rgba(8,74,255,0.16)_0%,rgba(8,74,255,0)_100%)]"
      aria-hidden="true"
    />

    <section
      class="mx-auto max-w-container relative px-6 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24"
    >
      <div class="mx-auto max-w-4xl text-center">
        <h1
          class="text-[40px] font-semibold leading-[1.25] text-[#000213] sm:text-[56px]"
        >
          {{ $t("pages.integrations.index.pageTitle") }}
        </h1>
        <p
          class="mx-auto mt-5 max-w-4xl font-normal text-[18px] leading-8 text-[#000213] sm:text-[26px]"
        >
          {{ $t("pages.integrations.index.pageDesc") }}
        </p>
      </div>

      <div class="mx-auto mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in integrations"
          :key="item.name"
          class="rounded-[18px] border border-[#E8EDF5] bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
        >
          <div class="flex items-start gap-4">
            <img
              :src="item.iconSrc"
              :alt="item.name"
              class="w-16 flex-shrink-0 rounded-[12px]"
            />

            <div class="min-w-0">
              <h2 class="text-[30px] font-semibold leading-none text-[#2A2F3A]">
                {{ item.name }}
              </h2>
              <div
                class="mt-3 flex flex-wrap gap-2 text-[12px] leading-none text-[#9AA1AF]"
              >
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="rounded-full bg-[#F5F7FB] px-2.5 py-1"
                >
                  {{ $t(tag) }}
                </span>
              </div>
            </div>
          </div>

          <p
            class="mt-6 min-h-[72px] font-normal text-[16px] leading-7 text-[#000213]"
          >
            {{ $t(item.description) }}
          </p>

          <NuxtLink
            v-if="item.href"
            :to="localePath(item.href)"
            class="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#205DFF]"
          >
            {{ $t("pages.integrations.index.viewDetail") }}
            <span aria-hidden="true">↗</span>
          </NuxtLink>

          <span
            v-else
            class="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#AEB7C8]"
          >
            {{ $t("pages.integrations.index.comingSoon") }}
          </span>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const pageTitle = "pages.integrations.index.seoTitle";
const pageDescription = "pages.integrations.index.seoDesc";

const integrations = [
  {
    name: "WhatsApp",
    iconSrc: "/images/integration/whatsapp/logo.svg",
    tags: [
      "pages.integrations.index.tagEUUS",
      "pages.integrations.index.tagLatam",
      "pages.integrations.index.tagIndia",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/whatsapp",
  },
  {
    name: "Telegram",
    iconSrc: "/images/integration/telegram/logo.svg",
    tags: [
      "pages.integrations.index.tagGlobal",
      "pages.integrations.index.tagEurope",
      "pages.integrations.index.tagEastEurope",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/telegram",
  },
  {
    name: "Facebook",
    iconSrc: "/images/integration/facebook/logo.svg",
    tags: [
      "pages.integrations.index.tagWorldwide",
      "pages.integrations.index.tagSEAsia",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/facebook",
  },
  {
    name: "Instagram",
    iconSrc: "/images/integration/instagram/logo.svg",
    tags: [
      "pages.integrations.index.tagEUUS",
      "pages.integrations.index.tagYouth",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/instagram",
  },
  {
    name: "Line",
    iconSrc: "/images/integration/line/logo.svg",
    tags: [
      "pages.integrations.index.tagJapanKorea",
      "pages.integrations.index.tagThailand",
      "pages.integrations.index.tagTaiwan",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/line",
  },
  {
    name: "TikTok",
    iconSrc: "/images/integration/tiktok/logo.svg",
    tags: [
      "pages.integrations.index.tagWorldwide",
      "pages.integrations.index.tagEUUS",
      "pages.integrations.index.tagGenZ",
    ],
    description: "pages.integrations.index.descDefault",
    href: "/integrations/tiktok",
  },
] as const;

useHead({
  title: () => t(pageTitle),
  meta: [{ name: "description", content: t(pageDescription) }],
});
</script>
