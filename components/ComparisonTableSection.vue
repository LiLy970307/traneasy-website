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
          class="grid grid-cols-[0.6fr_1.2fr_1.2fr] gap-4 bg-[#F6F8FC] px-6 py-4 text-[14px] font-semibold text-[#000213] sm:px-8 sm:text-[15px]"
        >
          <div>{{ $t(dimensionLabel) }}</div>
          <div>{{ $t(legacyLabel) }}</div>
          <div>{{ productName }}</div>
        </div>

        <div
          v-for="row in rows"
          :key="row.label"
          class="grid grid-cols-[0.6fr_1.2fr_1.2fr] items-center gap-4 border-t border-[#EEF1F6] px-6 py-5 text-[14px] leading-7 sm:px-8 sm:text-[15px]"
        >
          <div class="font-medium text-[#000213]">{{ row.label }}</div>
          <div class="flex items-start gap-3 text-[#7B8191]">
            <img :src="closeIconSrc" class="w-6" />
            <span>{{ row.legacy }}</span>
          </div>
          <div class="flex items-center gap-3 text-[#000213]">
            <img :src="checkIconSrc" alt="Traneasy" class="w-4" />
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
    dimensionLabel: "comparisonTable.dimensionLabel",
    legacyLabel: "comparisonTable.legacyLabel",
  },
);

const checkIconSrc = "/images/product/check-icon.svg";
const closeIconSrc = "/images/product/close-grey-icon.svg";
</script>
