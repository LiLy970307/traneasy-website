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

      <div class="mx-auto mt-14 grid gap-5 md:grid-cols-3">
        <article
          v-for="item in downloadCards"
          :key="item.title"
          class="rounded-[18px] border border-[#E8EDF5] bg-white px-6 pb-6 pt-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
        >
          <img
            :src="item.iconSrc"
            :alt="item.title"
            class="mx-auto h-14 w-14"
          />
          <h2 class="mt-4 text-center text-[16px] font-medium text-[#2A2F3A]">
            {{ item.title }}
          </h2>

          <div :class="item.grid" class="mt-6 grid gap-2">
            <button
              v-for="button in item.buttons"
              :key="button"
              type="button"
              class="inline-flex min-h-[36px] items-center justify-center rounded-[6px] border border-[#AEB7C8] px-3 text-[12px] font-medium text-[#2A2F3A] transition-colors hover:border-[#205DFF] hover:text-[#205DFF]"
            >
              {{ button }}
            </button>
          </div>
        </article>
      </div>
    </section>

    <section class="px-6 pb-24 pt-10 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div class="mx-auto">
        <h2
          class="text-[28px] font-semibold leading-[1.5] text-[#000213] sm:text-[32px]"
        >
          常见问题
        </h2>
        <p class="mt-2 text-[18px] leading-8 text-[#3A4050]">
          全系统适配指南+故障排查，快速上手无门槛！
        </p>

        <div
          class="mt-8 overflow-hidden rounded-[16px] border border-[#E7EBF2] bg-white"
        >
          <div
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="border-b border-[#EEF1F6] last:border-b-0"
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
              <span class="text-[22px] leading-none text-[#8D94A3]">
                {{ openFaqIndex === index ? "×" : "+" }}
              </span>
            </button>

            <div
              v-if="openFaqIndex === index"
              class="bg-[#F8FAFD] px-6 pb-5 pt-1 text-[15px] leading-8 text-[#5F6472]"
            >
              <ul v-if="faq.points" class="list-disc space-y-1 pl-5">
                <li v-for="point in faq.points" :key="point">
                  {{ point }}
                </li>
              </ul>
              <p v-else>
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface ResourceFaq {
  question: string;
  points?: readonly string[];
  answer?: string;
}

const pageTitle = "客户端下载 - Traneasy 易翻译";
const pageDescription =
  "官方原版安装包下载入口，提供 Windows、Mac 与 Signal 翻译版客户端，并附常见安装与适配问题说明。";

const downloadCards = [
  {
    title: "Windows客户端",
    iconSrc: "/images/resource/Windows.svg",
    buttons: ["win10/11", "win7/8", "电脑适配"],
    grid: "grid-cols-3",
  },
  {
    title: "Windows客户端",
    iconSrc: "/images/resource/Mac.svg",
    buttons: ["5.2.0 M芯片", "5.2.0 intel芯片"],
    grid: "grid-cols-2",
  },
  {
    title: "Signal翻译版",
    iconSrc: "/images/resource/Signal.svg",
    buttons: ["立即下载"],
    grid: "grid-cols-1",
  },
] as const;

const faqs: readonly ResourceFaq[] = [
  {
    question: "如何选择适合我电脑的 Windows 版本？",
    points: [
      "Windows 10 / 11：如果您的电脑的系统为 Windows 10 或 Windows 11，请选择此版本以获得最佳性能和兼容性。",
      "Windows 7 / 8：如果您的电脑操作系统是 Windows 7 或 Windows 8/8.1，请仍然选择此版本，否则组件可能无法正常激活运行。",
      "适配版：如果您不能确定自己的系统版本，或者上述两个版本都无法正常运行，可以尝试下载适配版。它兼容大多数 Windows 系统环境，但体积可能更大。",
    ],
  },
  {
    question: "苹果电脑（Mac）用户应该下载哪个版本？",
    points: [
      "M 芯片：适用于搭载 Apple M1、M2 等自研芯片的新款 Mac 电脑。",
      "Intel 芯片：适用于搭载英特尔处理器的旧款 Mac 电脑。",
    ],
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
] as const;

const openFaqIndex = ref<number | null>(0);

useHead({
  title: pageTitle,
  meta: [{ name: "description", content: pageDescription }],
});
</script>
