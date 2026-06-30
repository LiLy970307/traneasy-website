<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#000213] py-20 text-white sm:py-24"
  >
    <div
      class="relative mx-auto grid max-w-container items-center gap-14 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12"
    >
      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="max-w-xl transition-all duration-700 ease-out will-change-transform"
      >
        <ul class="mt-10 divide-y divide-white/10 border-y border-white/10">
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
              <h3 class="text-lg font-semibold text-white">
                {{ $t(benefit.titleKey) }}
              </h3>
              <p class="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
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
        class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all delay-150 duration-700 ease-out will-change-transform"
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
    iconSrc: "/images/index/black-1.png",
  },
  {
    titleKey: "homeCapability.benefit2Title",
    descKey: "homeCapability.benefit2Desc",
    iconSrc: "/images/index/black-3.png",
  },
  {
    titleKey: "homeCapability.benefit3Title",
    descKey: "homeCapability.benefit3Desc",
    iconSrc: "/images/index/black-2.png",
  },
];
</script>
