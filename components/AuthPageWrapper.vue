<template>
  <main
    class="bg-[url('/images/login-bg.png')] relative min-h-screen bg-slate-100 bg-cover bg-center px-4 py-10 font-inter"
  >
    <NuxtLink
      :to="localePath('/')"
      class="absolute left-6 top-6 z-10 flex items-center sm:left-8 sm:top-8"
      aria-label="$t('authPage.homeAriaLabel')"
    >
      <img
        src="/public/images/traneasy-logo.svg"
        alt="TranEasy"
        class="h-10 w-auto sm:h-12"
      />
    </NuxtLink>

    <section
      class="mx-auto flex min-h-[calc(100vh-80px)] items-center justify-around"
    >
      <!-- 大标题 -->
      <div class="text-left h-[500px]">
        <h1 class="text-4xl font-bold text-[#000213] mb-4">{{ $t("authPage.brandName") }}</h1>
        <h1 class="text-4xl font-bold text-[#000213]">{{ $t("authPage.subtitle") }}</h1>
        <p class="mt-4 text-lg text-[#000213]">{{ $t("authPage.description") }}</p>
      </div>
      <div class="w-[460px] rounded-[44px] border border-white/70 bg-white p-8">
        <slot />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
