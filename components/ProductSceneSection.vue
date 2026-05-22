<template>
  <section class="bg-[#070B1A] px-6 py-20 text-white sm:px-8 lg:px-12">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p class="text-[14px] font-medium tracking-[0.18em] text-white/55">
            {{ eyebrow }}
          </p>
          <h2 class="mt-3 text-[30px] font-semibold leading-[1.45] text-white sm:text-[34px]">
            {{ title }}
          </h2>
        </div>

        <NuxtLink
          v-if="buttonLabel && buttonTo"
          :to="buttonTo"
          class="inline-flex items-center justify-center rounded-[10px] border border-white/70 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#070B1A]"
        >
          {{ buttonLabel }}
        </NuxtLink>
      </div>

      <div class="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
        <div
          v-for="scene in items"
          :key="scene.title"
          class="relative border-l border-white/12 pl-6 first:border-l-0 first:pl-0 md:first:pl-0"
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
  title: string
  description: string
  iconSrc: string
}

defineProps<{
  eyebrow: string
  title: string
  buttonLabel?: string
  buttonTo?: string
  items: readonly ProductSceneItem[]
}>()
</script>