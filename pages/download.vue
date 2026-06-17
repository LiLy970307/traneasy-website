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
          客户端下载
        </h1>
        <p
          class="mx-auto mt-5 max-w-3xl text-[18px] leading-8 text-[#3A4050] sm:text-[20px]"
        >
          官方原版安装包，安全校验，高速下载无需等待
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
      title="常见问题"
      description="全系统适配指南+故障排查，快速上手无门槛！"
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

const pageTitle = "客户端下载 - Traneasy 易翻译";
const pageDescription =
  "官方原版安装包下载入口，提供 Windows、Mac 与 Signal 翻译版客户端，并附常见安装与适配问题说明。";

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
      item.label = "正式版 (win7/8/10/11)";
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
      title: "Windows客户端",
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
      title: "Mac客户端",
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
      title: "Signal翻译版",
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

const faqItems = [
  {
    question: "如何选择适合我电脑的 Windows 版本？",
    answer: `<ul class="list-disc pl-5 space-y-1">
      <li>Windows 10 / 11：如果您的电脑的系统为 Windows 10 或 Windows 11，请选择此版本以获得最佳性能和兼容性。</li>
      <li>Windows 7 / 8：如果您的电脑操作系统是 Windows 7 或 Windows 8/8.1，请仍然选择此版本，否则组件可能无法正常激活运行。</li>
      <li>适配版：如果您不能确定自己的系统版本，或者上述两个版本都无法正常运行，可以尝试下载适配版。它兼容大多数 Windows 系统环境，但体积可能更大。</li>
    </ul>`,
  },
  {
    question: "苹果电脑（Mac）用户应该下载哪个版本？",
    answer: `<ul class="list-disc pl-5 space-y-1">
      <li>M 芯片：适用于搭载 Apple M1、M2 等自研芯片的新款 Mac 电脑。</li>
      <li>Intel 芯片：适用于搭载英特尔处理器的旧款 Mac 电脑。</li>
    </ul>`,
  },
  {
    question: "下载后的文件如何安装？",
    answer:
      "下载完成后，双击安装包并按照向导完成安装。若系统提示权限验证，请根据系统要求允许应用执行安装。",
  },
  {
    question: "什么是“Signal翻译版”？",
    answer:
      "Signal翻译版是在原有消息安全能力基础上提供多语言翻译辅助的版本，适合需要跨语种沟通的团队或个人使用。",
  },
];

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDescription }],
});
</script>
