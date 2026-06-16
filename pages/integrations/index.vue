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
          全渠道社交矩阵，一键触达全球客户
        </h1>
        <p
          class="mx-auto mt-5 max-w-4xl font-normal text-[18px] leading-8 text-[#000213] sm:text-[26px]"
        >
          无缝对接全球主流社交平台，统一管理客户沟通，高效转化每一笔商机
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
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <p
            class="mt-6 min-h-[72px] font-normal text-[16px] leading-7 text-[#000213]"
          >
            {{ item.description }}
          </p>

          <NuxtLink
            v-if="item.href"
            :to="localePath(item.href)"
            class="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#205DFF]"
          >
            查看详情
            <span aria-hidden="true">↗</span>
          </NuxtLink>

          <span
            v-else
            class="mt-6 inline-flex items-center gap-1 text-[14px] font-semibold text-[#AEB7C8]"
          >
            即将开放
          </span>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "集成资源 - Traneasy 易翻译";
const pageDescription =
  "集成资源，支持全球主流社交平台的对接，统一管理客户沟通，高效转化每一笔商机。";

const integrations = [
  {
    name: "WhatsApp",
    iconSrc: "/images/integration/whatsapp/logo.svg",
    tags: ["全球主流通讯", "拉美", "印度"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/whatsapp",
  },
  {
    name: "Telegram",
    iconSrc: "/images/integration/telegram/logo.svg",
    tags: ["全球主流通讯", "欧洲", "东欧"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/telegram",
  },
  {
    name: "Facebook",
    iconSrc: "/images/integration/facebook/logo.svg",
    tags: ["全球", "东南亚"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/facebook",
  },
  {
    name: "Instagram",
    iconSrc: "/images/integration/instagram/logo.svg",
    tags: ["欧美", "全球年轻群体活跃"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/instagram",
  },
  {
    name: "Line",
    iconSrc: "/images/integration/line/logo.svg",
    tags: ["日韩", "泰国", "中国台湾"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/line",
  },
  {
    name: "TikTok",
    iconSrc: "/images/integration/tiktok/logo.svg",
    tags: ["全球", "欧美", "Z世代"],
    description: "全球主流通讯，支持多账号管理、实时响应客户咨询，转化更高效。",
    href: "/integrations/tiktok",
  },
] as const;

useHead({
  title: () => pageTitle,
  meta: [{ name: "description", content: pageDescription }],
});
</script>
