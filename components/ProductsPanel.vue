<template>
  <div class="w-full bg-white">
    <div class="mx-auto max-w-[1280px] px-10 py-12">
      <div class="grid grid-cols-3 gap-x-16 gap-y-12">
        <NuxtLink
          v-for="item in productItems"
          :key="item.title"
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
              :alt="item.title"
              class="h-5 w-5 object-contain"
            />
          </div>
          <div class="min-w-0">
            <h3 class="text-[18px] font-semibold leading-[28px] text-[#000213]">
              {{ item.title }}
            </h3>
            <p
              class="mt-1 max-w-[260px] text-[14px] leading-[26px] text-[#8B90A0]"
            >
              {{ item.description }}
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
    title: "全渠道沟通",
    description: "聚合全球主流社交平台，告别多平台切换的混乱",
    iconSrc: "/images/product/dropdown-1.svg",
    href: "/product/communication",
  },
  {
    title: "数据分析",
    description: "用数据复盘业务，用图表驱动决策，告别凭感觉做外贸",
    iconSrc: "/images/product/dropdown-2.svg",
    href: "/product/data-analysis",
  },
  {
    title: "精准消息群发",
    description: "用自动化工具实现千人千面的批量触达",
    iconSrc: "/images/product/dropdown-3.svg",
    href: "/product/mass-message",
  },
  {
    title: "实时翻译",
    description: "让沟通像母语一样自然流畅。",
    iconSrc: "/images/product/dropdown-4.svg",
    href: "/product/translation",
  },
  {
    title: "工单系统/分流链接",
    description: "自动化线索管理，让每个商机都有迹可循",
    iconSrc: "/images/product/dropdown-5.svg",
    href: "/product/work-order",
  },
  {
    title: "跨境团队协作管理",
    description: "从单打独斗到平团队作战，打造高执行力的跨境铁军",
    iconSrc: "/images/product/dropdown-6.svg",
    href: "/product/collaboration",
  },
  {
    title: "客户关系管理",
    description: "用精细化的 CRM 系统挖掘客户的终身价值",
    iconSrc: "/images/product/dropdown-7.svg",
    href: "/product/crm",
  },
];

const handleItemClick = (href?: string) => {
  if (!href) return;
  emit("itemClick");
};
</script>
