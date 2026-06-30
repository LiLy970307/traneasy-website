<template>
  <section ref="sectionRef" class="px-6 py-20 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <h2
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="text-[28px] font-semibold leading-[1.6] text-[#000213] transition-all duration-700 ease-out will-change-transform sm:text-[32px]"
      >
        {{ title }}
        <br />
        {{ description }}
      </h2>

      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="mt-10 overflow-hidden rounded-[20px] border border-[#E9ECF3] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition-all delay-150 duration-700 ease-out will-change-transform"
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

const sectionRef = shallowRef<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!sectionRef.value) {
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    {
      threshold: 0.4,
    },
  );

  observer.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
