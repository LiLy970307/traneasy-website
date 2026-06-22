<template>
  <section class="py-16 sm:py-20 lg:py-24">
    <div
      :class="[
        'mx-auto grid max-w-container items-center gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16 lg:px-12',
        containerClass,
      ]"
    >
      <div :class="reverse ? 'lg:order-2' : ''" class="max-w-xl">
        <h2
          class="text-left text-[32px] font-normal not-italic leading-[48px] text-[#000213] normal-case"
        >
          {{ title }}
        </h2>

        <ul class="mt-8 space-y-6">
          <li
            v-for="(point, index) in points"
            :key="point.title"
            class="flex items-start gap-4"
          >
            <div>
              <div class="flex items-center gap-3">
                <img
                  :src="
                    points.length === 2 && index === 0
                      ? closeIcon
                      : checkIconSrc
                  "
                  alt="checkmark"
                  class="w-5 flex-shrink-0"
                />
                <h3 class="text-lg font-semibold text-slate-900">
                  {{ point.title }}
                </h3>
              </div>

              <p
                class="mt-1 pl-6 text-sm leading-7 text-slate-500 sm:text-base"
              >
                {{ point.description }}
              </p>
            </div>
          </li>
        </ul>

        <div class="pl-6">
          <a
            v-if="buttonLabel && buttonTo && buttonTo.startsWith('#')"
            :href="buttonTo"
            :class="[
              buttonVariant === 'text'
                ? 'mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#205DFF] transition-colors hover:text-[#1749cc]'
                : 'mt-8 inline-flex items-center justify-center rounded-[10px] border border-[#000213] px-5 py-2.5 text-sm font-medium leading-none text-[#000213] transition-colors hover:bg-[#000213] hover:text-white',
              buttonClass,
            ]"
          >
            {{ buttonLabel }}
            <span aria-hidden="true">→</span>
          </a>

          <NuxtLink
            v-else-if="buttonLabel && buttonTo"
            :to="buttonTo"
            :class="[
              buttonVariant === 'text'
                ? 'mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#205DFF] transition-colors hover:text-[#1749cc]'
                : 'mt-8 inline-flex items-center justify-center rounded border border-[#000213] px-5 py-2.5 text-sm font-medium leading-none text-[#000213] transition-colors hover:bg-[#000213] hover:text-white',
              buttonClass,
            ]"
          >
            {{ buttonLabel }}
            <span aria-hidden="true" class="ml-1">→</span>
          </NuxtLink>
        </div>
      </div>

      <div :class="reverse ? 'lg:order-1' : ''">
        <div
          :class="[
            'overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-4',
            imageCardClass,
          ]"
        >
          <NuxtImg
            :src="imageSrc"
            :alt="imageAlt"
            format="webp"
            quality="80"
            loading="lazy"
            decoding="async"
            :class="['h-auto w-full rounded-[1.5rem] object-cover', imageClass]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FeaturePoint {
  title: string;
  description: string;
  iconSrc?: string;
}

const closeIcon = "/images/product/close-icon.svg";
const checkIconSrc = "/images/product/check-icon.svg";

withDefaults(
  defineProps<{
    title: string;
    description?: string;
    points: readonly FeaturePoint[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    buttonLabel?: string;
    buttonTo?: string;
    containerClass?: string;
    buttonClass?: string;
    imageCardClass?: string;
    imageClass?: string;
    buttonVariant?: "outline" | "text";
  }>(),
  {
    buttonVariant: "outline",
  },
);
</script>
