<template>
  <section
    class="relative overflow-hidden bg-[#000213] py-20 text-white sm:py-24"
  >
    <div
      class="relative mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12"
    >
      <div class="max-w-xl">
        <ul class="mt-10 divide-y divide-white/10 border-y border-white/10">
          <li
            v-for="benefit in benefits"
            :key="benefit.title"
            class="flex gap-5 py-6"
          >
            <img
              :src="benefit.iconSrc"
              alt=""
              aria-hidden="true"
              width="48"
              height="48"
              class="mt-1 h-12 w-12 flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 class="text-lg font-semibold text-white">
                {{ benefit.title }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                {{ benefit.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm"
      >
        <img
          :src="imageSrc"
          alt="Traneasy 在电脑端的多账号沟通工作台"
          width="1368"
          height="1024"
          loading="lazy"
          decoding="async"
          class="h-auto w-full rounded-[1.5rem] object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface CapabilityBenefit {
  title: string;
  description: string;
  iconSrc: string;
}

const imageSrc = "/images/index/computer.png";

const benefits: readonly CapabilityBenefit[] = [
  {
    title: "AI 无感翻译",
    description:
      "输入中文秒发外文，200+ 语种实时互译，把跨语言协作变成自然动作。",
    iconSrc: "/images/index/black-1.png",
  },
  {
    title: "指纹级防关联",
    description: "模拟环境 + 全球 IP，帮助账号批量矩阵管理更稳定，降低风险。",
    iconSrc: "/images/index/black-3.png",
  },
  {
    title: "高效获客",
    description: "一键群发 + 细颗粒分析，让客户来源清晰可回收。",
    iconSrc: "/images/index/black-2.png",
  },
];
</script>
