<template>
  <footer class="bg-[#040716] text-white pt-20">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <div
        class="grid gap-y-14 gap-x-10 grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.1fr]"
      >
        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">产品</h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in productItems" :key="item.label">
              <component
                :is="item.href ? 'NuxtLink' : 'span'"
                v-bind="item.href ? { to: localePath(item.href) } : {}"
                class="transition-colors hover:text-white"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">集成</h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in integrationItems" :key="item.label">
              <component
                :is="item.href ? 'NuxtLink' : 'span'"
                v-bind="item.href ? { to: localePath(item.href) } : {}"
                class="transition-colors hover:text-white"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">关于</h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in aboutItems" :key="item.label">
              <component
                :is="item.href ? 'NuxtLink' : 'span'"
                v-bind="item.href ? { to: localePath(item.href) } : {}"
                class="transition-colors hover:text-white"
              >
                {{ item.label }}
              </component>
            </li>
          </ul>
        </div>

        <div class="lg:justify-self-end lg:text-left">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center">
            <img :src="footerLogoSrc" alt="易翻译" class="h-12 w-auto" />
          </NuxtLink>
          <p
            class="mt-6 max-w-xs text-[15px] font-semibold leading-8 text-white/90"
          >
            跨越语言鸿沟 链接全球商机
          </p>

          <div class="mt-12 flex items-center gap-4">
            <a
              v-for="item in socialItems"
              :key="item.label"
              :href="item.href || undefined"
              :target="item.href ? '_blank' : undefined"
              :rel="item.href ? 'noopener noreferrer' : undefined"
              class="flex h-11 w-11 items-center justify-center border border-white/15 text-white/95 transition-colors hover:border-white/30 hover:bg-white/5"
              :aria-label="item.label"
            >
              <img
                :src="item.icon"
                :alt="item.label"
                class="h-6 w-6 object-contain"
              />
            </a>
          </div>

          <div class="mt-14">
            <h4 class="text-[15px] font-semibold text-white">联系我们</h4>
            <p class="mt-6 text-[15px] text-white/75">
              投诉建议：yifanyi@traneasy.com.cn
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 border-t border-[#0d53c7]">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[15px] text-white/80 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12"
      >
        <div class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
          <span>蜀ICP备2024115121号</span>
          <span>Copyright © 2025-2026 UCloud</span>
          <NuxtLink
            :to="localePath('/privacy')"
            class="transition-colors hover:text-white"
            >隐私政策</NuxtLink
          >
        </div>
        <p>© 2026 TalentBridge. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const footerLogoSrc = "/images/icon/footerLogo.svg";

interface FooterLinkItem {
  label: string;
  href?: string;
}

const productItems: readonly FooterLinkItem[] = [
  { label: "全渠道沟通" },
  { label: "数据分析" },
  { label: "精准消息群发" },
  { label: "实时翻译" },
  { label: "工单系统/分流链接" },
  { label: "团队协作" },
  { label: "客户关系管理" },
];

const integrationItems: readonly FooterLinkItem[] = [
  { label: "WhatsApp" },
  { label: "Telegram" },
  { label: "Facebook" },
  { label: "instgram" },
  { label: "Line" },
  { label: "tiktok" },
];

const aboutItems: readonly FooterLinkItem[] = [
  { label: "合作伙伴关系" },
  { label: "服务协议", href: "/terms" },
  { label: "用户行为规范" },
  { label: "隐私政策", href: "/privacy" },
  { label: "自动续订协议" },
  { label: "SDK隐私政策" },
  { label: "SDK合规配置指引" },
];

const socialItems = [
  {
    label: "Facebook",
    icon: "/images/icon/Facebook_transparency.svg",
    href: "",
  },
  {
    label: "Instagram",
    icon: "/images/icon/Instagram_transparency.svg",
    href: "",
  },
  { label: "Twitter", icon: "/images/icon/Twitter_transparency.svg", href: "" },
  {
    label: "LinkedIn",
    icon: "/images/icon/LinkedIn_transparency.svg",
    href: "",
  },
];
</script>
