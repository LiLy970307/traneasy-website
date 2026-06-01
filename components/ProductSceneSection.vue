<template>
  <section class="bg-[#070B1A] px-6 py-20 text-white sm:px-8 lg:px-12">
    <div class="mx-auto max-w-container px-6 sm:px-8 lg:px-12">
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p v-if="eyebrow" class="text-[28px] text-[#F2F2FF]">
            {{ eyebrow }}
          </p>
          <h2 class="mt-3 text-[28px] text-[#F2F2FF]">
            {{ title }}
          </h2>
          <p
            v-if="description"
            class="mt-3 max-w-3xl text-[15px] leading-8 text-white/65 sm:text-[16px]"
          >
            {{ description }}
          </p>
        </div>

        <a
          v-if="buttonLabel && buttonTo && buttonTo.startsWith('#')"
          :href="buttonTo"
          class="inline-flex items-center justify-center rounded-[10px] border border-white/70 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#070B1A]"
        >
          {{ buttonLabel }}
        </a>

        <NuxtLink
          v-else-if="buttonLabel && buttonTo"
          :to="buttonTo"
          class="inline-flex items-center justify-center rounded-[10px] bg-white px-5 py-2.5 text-sm font-medium text-[#000213] transition-all duration-300 hover:bg-[#000213] hover:text-white hover:-translate-y-0.5"
        >
          {{ buttonLabel }}
        </NuxtLink>
      </div>

      <div :class="gridClass">
        <div
          v-for="scene in items"
          :key="scene.title"
          class="relative pl-6 first:pl-0 md:first:pl-0"
        >
          <img :src="scene.iconSrc" :alt="scene.title" class="h-10 w-10" />
          <h3 class="mt-6 text-[18px] font-semibold text-white">
            {{ scene.title }}
          </h3>
          <p class="mt-4 text-[14px] leading-7 text-white/65">
            {{ scene.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProductSceneItem {
  title: string;
  description: string;
  iconSrc: string;
}

const props = defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonTo?: string;
  items: readonly ProductSceneItem[];
  columns?: 2 | 3 | 4;
}>();

const gridClass = computed(() => {
  if (props.columns === 4) {
    return "mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10";
  }

  if (props.columns === 2) {
    return "mt-14 grid gap-8 md:grid-cols-2 md:gap-10";
  }

  return "mt-14 grid gap-8 md:grid-cols-3 md:gap-10";
});
</script>
