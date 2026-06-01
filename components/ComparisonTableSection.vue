<template>
  <section class="px-6 py-20 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <h2
        class="text-[28px] font-semibold leading-[1.6] text-[#000213] sm:text-[32px]"
      >
        {{ title }}
        <br />
        {{ description }}
      </h2>

      <div
        class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
      >
        <div
          class="grid grid-cols-[1.15fr_1fr_1fr] bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
        >
          <div>{{ dimensionLabel }}</div>
          <div>{{ legacyLabel }}</div>
          <div>{{ productName }}</div>
        </div>

        <div
          v-for="row in rows"
          :key="row.label"
          class="grid grid-cols-[1.15fr_1fr_1fr] items-start gap-4 border-t border-[#EEF1F6] px-6 py-5 text-[14px] leading-7 sm:px-8 sm:text-[15px]"
        >
          <div class="font-medium text-[#000213]">{{ row.label }}</div>
          <div class="flex items-start gap-3 text-[#7B8191]">
            <img
              :src="closeIconSrc"
              :alt="legacyLabel"
              class="mt-1 h-4 w-4 flex-shrink-0"
            />
            <span>{{ row.legacy }}</span>
          </div>
          <div class="flex items-start gap-3 text-[#000213]">
            <img
              :src="checkIconSrc"
              alt="Traneasy"
              class="mt-1 h-4 w-4 flex-shrink-0"
            />
            <span>{{ row.traneasy }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ComparisonRow {
  label: string;
  legacy: string;
  traneasy: string;
}

withDefaults(
  defineProps<{
    title: string;
    description: string;
    productName: string;
    rows: readonly ComparisonRow[];
    dimensionLabel?: string;
    legacyLabel?: string;
  }>(),
  {
    dimensionLabel: "对比维度",
    legacyLabel: "传统方式",
  },
);

const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-icon.svg";
</script>
