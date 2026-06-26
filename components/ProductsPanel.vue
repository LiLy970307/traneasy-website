<template>
  <div class="w-full bg-white">
    <div class="mx-auto max-w-[1280px] px-10 py-12">
      <div class="grid grid-cols-3 gap-x-16 gap-y-12">
        <NuxtLink
          v-for="item in productItems"
          :key="item.titleKey"
          :to="item.href ? localePath(item.href) : undefined"
          @click="handleItemClick(item.href)"
          :class="[
            'group flex min-h-[84px] items-start gap-4 rounded-2xl px-2 py-1 transition-colors',
            item.href ? 'cursor-pointer hover:bg-slate-50' : 'cursor-default',
          ]"
        >
          <div
            class="flex h-6 w-6 flex-shrink-0 items-center justify-center pt-1"
          >
            <img
              :src="item.iconSrc"
              :alt="$t(item.titleKey)"
              class="h-5 w-5 object-contain"
            />
          </div>
          <div class="min-w-0">
            <h3 class="text-[18px] font-semibold leading-[28px] text-[#000213]">
              {{ $t(item.titleKey) }}
            </h3>
            <p
              class="mt-1 max-w-[260px] text-[14px] leading-[26px] text-[#8B90A0]"
            >
              {{ $t(item.descKey) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const emit = defineEmits<{
  itemClick: [];
}>();

const productItems = [
  {
    titleKey: "productsPanel.prod1Title",
    descKey: "productsPanel.prod1Desc",
    iconSrc: "/images/product/dropdown-1.svg",
    href: "/product/communication",
  },
  {
    titleKey: "productsPanel.prod2Title",
    descKey: "productsPanel.prod2Desc",
    iconSrc: "/images/product/dropdown-2.svg",
    href: "/product/data-analysis",
  },
  {
    titleKey: "productsPanel.prod3Title",
    descKey: "productsPanel.prod3Desc",
    iconSrc: "/images/product/dropdown-3.svg",
    href: "/product/mass-message",
  },
  {
    titleKey: "productsPanel.prod4Title",
    descKey: "productsPanel.prod4Desc",
    iconSrc: "/images/product/dropdown-4.svg",
    href: "/product/translation",
  },
  {
    titleKey: "productsPanel.prod5Title",
    descKey: "productsPanel.prod5Desc",
    iconSrc: "/images/product/dropdown-5.svg",
    href: "/product/work-order",
  },
  {
    titleKey: "productsPanel.prod6Title",
    descKey: "productsPanel.prod6Desc",
    iconSrc: "/images/product/dropdown-6.svg",
    href: "/product/collaboration",
  },
  {
    titleKey: "productsPanel.prod7Title",
    descKey: "productsPanel.prod7Desc",
    iconSrc: "/images/product/dropdown-7.svg",
    href: "/product/crm",
  },
];

const handleItemClick = (href?: string) => {
  if (!href) return;
  emit("itemClick");
};
</script>
