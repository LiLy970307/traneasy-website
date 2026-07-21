<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden py-20 sm:pb-12 sm:pt-20"
  >
    <div
      class="relative mx-auto grid max-w-container gap-36 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12"
    >
      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="max-w-xl transition-all duration-700 ease-out will-change-transform"
        style="transition-delay: 150ms"
      >
        <ul class="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          <li
            v-for="benefit in benefits"
            :key="benefit.titleKey"
            class="flex gap-5 py-6"
          >
            <img
              :src="benefit.iconSrc"
              alt=""
              aria-hidden="true"
              width="48"
              height="48"
              class="mt-1 h-12 w-12 flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 class="text-lg font-semibold text-slate-900">
                {{ $t(benefit.titleKey) }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-slate-500 sm:text-base">
                {{ $t(benefit.descKey) }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="transition-all duration-700 ease-out will-change-transform"
        style="transition-delay: 300ms"
      >
        <NuxtImg
          :src="imageSrc"
          sizes="sm:100vw md:80vw lg:1368px"
          format="webp"
          quality="80"
          loading="lazy"
          decoding="async"
          class="h-auto w-full rounded-[1.5rem] object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
      threshold: 0.6,
    },
  );

  observer.observe(sectionRef.value);

  // 页面初始化时若已在视口内，直接显示
  const rect = sectionRef.value.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    isVisible.value = true;
    observer?.disconnect();
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

interface CapabilityBenefit {
  titleKey: string;
  descKey: string;
  iconSrc: string;
}

const imageSrc = "/images/index/computer.png";

const benefits: readonly CapabilityBenefit[] = [
  {
    titleKey: "homeCapability.benefit1Title",
    descKey: "homeCapability.benefit1Desc",
    iconSrc: "/images/index/scene-1.svg",
  },
  {
    titleKey: "homeCapability.benefit2Title",
    descKey: "homeCapability.benefit2Desc",
    iconSrc: "/images/index/scene-2.svg",
  },
  {
    titleKey: "homeCapability.benefit3Title",
    descKey: "homeCapability.benefit3Desc",
    iconSrc: "/images/index/scene-3.svg",
  },
];
</script>
