<template>
  <footer class="bg-[#040716] text-white pt-20">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <div
        class="grid gap-y-14 gap-x-10 grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_1.1fr]"
      >
        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">
            {{ $t("footer.colProducts") }}
          </h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in productItems" :key="item.labelKey">
              <template v-if="item.href">
                <NuxtLink
                  :to="localePath(item.href)"
                  class="transition-colors hover:text-white"
                  >{{ $t(item.labelKey!) }}</NuxtLink
                >
              </template>
              <template v-else>
                <span class="transition-colors hover:text-white">{{
                  $t(item.labelKey!)
                }}</span>
              </template>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">
            {{ $t("footer.colIntegrations") }}
          </h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in integrationItems" :key="item.label">
              <template v-if="item.href">
                <NuxtLink
                  :to="localePath(item.href)"
                  class="transition-colors hover:text-white"
                  >{{ item.label }}</NuxtLink
                >
              </template>
              <template v-else>
                <span class="transition-colors hover:text-white">{{
                  item.label
                }}</span>
              </template>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-8 text-[15px] font-semibold text-white">
            {{ $t("footer.colAbout") }}
          </h4>
          <ul class="space-y-6 text-[15px] leading-none text-white/75">
            <li v-for="item in aboutItems" :key="item.labelKey">
              <template v-if="item.href">
                <NuxtLink
                  :to="localePath(item.href)"
                  :target="item.external ? '_blank' : undefined"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                  class="transition-colors hover:text-white"
                  >{{ $t(item.labelKey!) }}</NuxtLink
                >
              </template>
              <template v-else>
                <span class="transition-colors hover:text-white">{{
                  $t(item.labelKey!)
                }}</span>
              </template>
            </li>
          </ul>
        </div>

        <div class="lg:justify-self-end lg:text-left">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center">
            <LogoContainer :isFooter="true" />
          </NuxtLink>
          <p
            class="mt-6 max-w-xs text-[15px] font-semibold leading-8 text-white/90"
          >
            {{ $t("footer.brandSlogan") }}
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
            <h4 class="text-[15px] font-semibold text-white">
              {{ $t("footer.colContact") }}
            </h4>
            <p class="mt-6 text-[15px] text-white/75">
              {{ $t("footer.contactEmail") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-16 bg-[#000424]">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[15px] text-white/80 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12"
      >
        <div class="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
          <span>{{ $t("footer.icp") }}</span>
          <span>{{ $t("footer.copyright") }}</span>
          <NuxtLink class="transition-colors hover:text-white">{{
            $t("footer.privacyPolicy")
          }}</NuxtLink>
        </div>
        <p>{{ $t("footer.allRightsReserved") }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface FooterLinkItem {
  labelKey?: string;
  label?: string;
  href?: string;
  external?: boolean;
}

const productItems: readonly FooterLinkItem[] = [
  { labelKey: "productsPanel.prod1Title", href: "/product/communication" },
  { labelKey: "productsPanel.prod2Title", href: "/product/data-analysis" },
  { labelKey: "productsPanel.prod3Title", href: "/product/mass-message" },
  { labelKey: "productsPanel.prod4Title", href: "/product/translation" },
  { labelKey: "productsPanel.prod5Title", href: "/product/work-order" },
  { labelKey: "productsPanel.prod6Title", href: "/product/collaboration" },
  { labelKey: "productsPanel.prod7Title", href: "/product/crm" },
];

const integrationItems: readonly FooterLinkItem[] = [
  { label: "WhatsApp", href: "/integrations/whatsapp" },
  { label: "Telegram", href: "/integrations/telegram" },
  { label: "Facebook", href: "/integrations/facebook" },
  { label: "Instagram", href: "/integrations/instagram" },
  { label: "Line", href: "/integrations/line" },
  { label: "TikTok", href: "/integrations/tiktok" },
];

const aboutItems: readonly FooterLinkItem[] = [
  { labelKey: "footer.productTutorial", href: "/product-guide" },
  {
    labelKey: "footer.serviceAgreement",
    href: "/service-agreement",
    external: true,
  },
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
