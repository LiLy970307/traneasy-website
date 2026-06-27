<template>
  <div>
    <div
      :class="['flex items-center gap-2', props.class]"
      v-if="locale !== 'zh'"
    >
      <img
        src="/public/images/logo.svg"
        alt="Traneasy"
        class="h-12 w-12 flex-shrink-0"
      />
      <span
        class="text-[24px] font-semibold leading-none text-[#000213] font-logo"
        :class="{ 'tracking-[-1px]': locale !== 'zh', 'text-white': isFooter }"
      >
        {{ brandName }}
      </span>
    </div>
    <img
      v-else
      :src="isFooter ? footerLogo : topLogo"
      alt="易翻译"
      class="h-12 w-auto"
    />
  </div>
</template>

<script setup lang="ts">
import topLogo from "/public/images/traneasy-logo.svg";
import footerLogo from "/public/images/footer-logo.svg";
const props = withDefaults(
  defineProps<{
    isFooter?: boolean;
    class?: string;
  }>(),
  {
    class: "",
  },
);

const { locale } = useI18n();
const brandName = computed(() =>
  locale.value === "zh" ? "易翻译" : "Traneasy",
);
</script>
