<template>
  <section ref="sectionRef" class="bg-white py-20 sm:py-24">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <div
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="flex flex-col gap-6 border-b border-slate-200 pb-10 transition-all duration-700 ease-out will-change-transform lg:flex-row lg:items-end lg:justify-between align-center lg:align-end"
      >
        <div class="max-w-3xl">
          <h2
            class="mt-4 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]"
          >
            {{ $t("homeStats.title") }}
          </h2>
          <p class="mt-4 text-lg text-[#000000] leading-8">
            {{ $t("homeStats.subtitle") }}
          </p>
        </div>

        <NuxtLink
          :to="localePath('/login')"
          class="inline-flex items-center justify-center rounded bg-[#084AFF] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#084AFF]/90"
        >
          {{ $t("homeStats.ctaTrial") }}
        </NuxtLink>
      </div>

      <dl
        :class="[
          isVisible
            ? 'translate-y-0 opacity-100 blur-0'
            : 'translate-y-8 opacity-0 blur-sm',
        ]"
        class="grid gap-10 transition-all delay-150 duration-700 ease-out will-change-transform md:grid-cols-2 xl:grid-cols-4"
      >
        <div
          v-for="stat in stats"
          :key="stat.labelKey"
          class="border-l border-slate-200 pl-6 pt-6 xl:first:border-l-0"
        >
          <dt class="text-sm font-semibold text-brand-600">
            {{ $t(stat.labelKey) }}
          </dt>
          <dd
            class="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl"
          >
            {{ $t(stat.valueKey) }}
          </dd>
          <p class="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
            {{ $t(stat.descKey) }}
          </p>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
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

interface StatItem {
  labelKey: string;
  valueKey: string;
  descKey: string;
}

const stats: readonly StatItem[] = [
  {
    labelKey: "homeStats.stat1Label",
    valueKey: "homeStats.stat1Value",
    descKey: "homeStats.stat1Desc",
  },
  {
    labelKey: "homeStats.stat2Label",
    valueKey: "homeStats.stat2Value",
    descKey: "homeStats.stat2Desc",
  },
  {
    labelKey: "homeStats.stat3Label",
    valueKey: "homeStats.stat3Value",
    descKey: "homeStats.stat3Desc",
  },
  {
    labelKey: "homeStats.stat4Label",
    valueKey: "homeStats.stat4Value",
    descKey: "homeStats.stat4Desc",
  },
];
</script>
