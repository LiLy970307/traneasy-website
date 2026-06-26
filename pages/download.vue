<template>
  <main class="relative min-h-screen overflow-hidden bg-white pt-[68px]">
    <div
      class="absolute inset-x-0 top-0 h-[520px] bg-[linear-gradient(180deg,rgba(8,74,255,0.12)_0%,rgba(8,74,255,0)_100%)]"
      aria-hidden="true"
    />

    <section
      class="relative px-6 pb-12 pt-20 sm:px-8 lg:px-12 lg:pt-24 max-w-7xl mx-auto"
    >
      <div class="mx-auto text-center">
        <h1
          class="text-[40px] font-semibold leading-[1.25] text-[#000213] sm:text-[52px]"
        >
          {{ $t("pages.download.pageTitle") }}
        </h1>
        <p
          class="mx-auto mt-5 max-w-3xl text-[18px] leading-8 text-[#3A4050] sm:text-[20px]"
        >
          {{ $t("pages.download.pageDesc") }}
        </p>
      </div>

      <div class="mx-auto mt-14 flex flex-wrap justify-center gap-5">
        <article
          v-for="item in downloadCards"
          :key="item.title"
          class="min-w-[280px] flex-1 rounded-[18px] border border-[#E8EDF5] bg-white px-6 pb-6 pt-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
        >
          <img
            :src="item.iconSrc"
            :alt="item.title"
            class="mx-auto h-14 w-14"
          />
          <h2 class="mt-4 text-center text-[16px] font-medium text-[#2A2F3A]">
            {{ item.title }}
          </h2>

          <div class="mt-6 flex flex-col gap-3">
            <div
              v-for="button in item.buttons"
              :key="button.label"
              class="flex items-center gap-3 rounded-[10px] border border-[#E8EDF5] bg-[#F9FAFB] px-4 py-3"
            >
              <img
                :src="button.icon"
                :alt="button.label"
                class="h-9 w-9 flex-shrink-0"
              />
              <span class="flex-1 text-[13px] font-medium text-[#2A2F3A]">
                {{ button.label }}
              </span>
              <a
                :href="button.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex flex-shrink-0 items-center gap-1.5 rounded-[6px] bg-[#205DFF] px-4 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-[#174fe0]"
              >
                <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1L8 11M8 11L12 7M8 11L4 7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 12L1 13.5C1 14.3284 1.67157 15 2.5 15L13.5 15C14.3284 15 15 14.3284 15 13.5V12"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <FaqSection
      :title="$t('pages.download.faqTitle')"
      :description="$t('pages.download.faqDesc')"
      :faqs="faqItems"
      section-class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:px-8 lg:px-12"
      container-class="max-w-[1180px]"
    />
  </main>
</template>

<script setup lang="ts">
interface DownloadItem {
  id: number;
  label: string;
  val: string;
  enLabel?: string;
}

interface DownloadGroupChild {
  id: number;
  label: string;
  enLabel?: string;
  val?: string;
  childId?: number[];
  child?: DownloadGroupChild[];
}

interface DownloadConfigGroup {
  id: number;
  label: string;
  child: DownloadGroupChild[];
}

interface DownloadConfigResponse {
  success: boolean;
  code: number;
  msg: string;
  data: {
    keyed: string;
    valued: string;
  };
}

const pageTitle = "pages.download.seoTitle";
const pageDescription = "pages.download.seoDesc";

const { t } = useI18n();
const config = useRuntimeConfig();
const DOWNLOAD_API = `${config.public.clientUserApiBase}/dataCus/get`;

const { data: downloadData } = await useFetch<DownloadConfigResponse>(
  DOWNLOAD_API,
  {
    params: { id: "SOFT_DOWNLOAD_CONFIG" },
    server: false,
    lazy: true,
  },
);

interface DownloadCardItem {
  title: string;
  iconSrc: string;
  buttons: { label: string; url: string; icon: string }[];
  grid: string;
}

const downloadCards = computed<DownloadCardItem[]>(() => {
  const raw = downloadData.value?.data?.valued;
  if (!raw) {
    return [];
  }

  let groups: DownloadConfigGroup[];
  try {
    groups = JSON.parse(raw);
  } catch {
    return [];
  }

  const allChildren: DownloadGroupChild[] = [];
  for (const group of groups) {
    for (const child of group.child ?? []) {
      // If child has its own children, expand them
      if (child.child && child.child.length > 0) {
        // This child is a group (e.g. "易翻译" or "mac版"), include its children
        for (const sub of child.child) {
          if (sub.val) {
            allChildren.push(sub);
          }
        }
      } else if (child.val) {
        allChildren.push(child);
      }
    }
  }

  // Categorize by keyword matching
  const windowsItems = allChildren.filter(
    (item) =>
      !/mac|M芯片|inter芯片|Signal/i.test(item.label) &&
      !item.label.includes("mac版"),
  );
  // 如果存在"正式版"，在 label 后追加系统版本信息
  for (const item of windowsItems) {
    if (item.label === "正式版") {
      item.label = t("pages.download.btnOfficial");
    }
  }
  const macItems = allChildren.filter(
    (item) =>
      /mac|M芯片|inter芯片/i.test(item.label) || item.label.includes("mac版"),
  );
  const signalItems = allChildren.filter((item) => /Signal/i.test(item.label));

  const cards: DownloadCardItem[] = [];

  if (windowsItems.length > 0) {
    cards.push({
      title: t("pages.download.cardWin"),
      iconSrc: "/images/resource/Windows.svg",
      buttons: windowsItems.map((item) => ({
        label: item.label,
        url: item.val,
        icon: item.val.endsWith(".dmg")
          ? "/images/dmg-icon.svg"
          : "/images/exe-icon.svg",
      })),
      grid: windowsItems.length <= 2 ? "grid-cols-2" : "grid-cols-3",
    });
  }

  if (macItems.length > 0) {
    cards.push({
      title: t("pages.download.cardMac"),
      iconSrc: "/images/resource/Mac.svg",
      buttons: macItems.map((item) => ({
        label: item.label,
        url: item.val,
        icon: item.val.endsWith(".dmg")
          ? "/images/dmg-icon.svg"
          : "/images/exe-icon.svg",
      })),
      grid: macItems.length <= 2 ? "grid-cols-2" : "grid-cols-3",
    });
  }

  if (signalItems.length > 0) {
    cards.push({
      title: t("pages.download.cardSignal"),
      iconSrc: "/images/resource/Signal.svg",
      buttons: signalItems.map((item) => ({
        label: item.label,
        url: item.val,
        icon: item.val.endsWith(".dmg")
          ? "/images/dmg-icon.svg"
          : "/images/exe-icon.svg",
      })),
      grid: "grid-cols-1",
    });
  }

  return cards;
});

const faqItems = computed(() => [
  { question: t("pages.download.faqQ1"), answer: t("pages.download.faqA1") },
  { question: t("pages.download.faqQ2"), answer: t("pages.download.faqA2") },
  { question: t("pages.download.faqQ3"), answer: t("pages.download.faqA3") },
  { question: t("pages.download.faqQ4"), answer: t("pages.download.faqA4") },
]);

useHead({
  title: t(pageTitle),
  meta: [{ name: "description", content: t(pageDescription) }],
});
</script>
