<template>
  <section
    class="relative -mt-[68px] overflow-hidden bg-[linear-gradient(180deg,#eff5ff_0%,#ffffff_72%)] pt-[68px]"
  >
    <div
      class="absolute inset-0 opacity-80"
      style="
        background-image: url(&quot;/images/index/home-bg.png&quot;);
        background-size: cover;
        background-position: center;
      "
      aria-hidden="true"
    />
    <div
      class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-100/70 to-transparent"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto max-w-7xl px-6 pt-20 sm:px-8 lg:px-12 lg:pt-28"
    >
      <div class="mx-auto max-w-4xl text-center">
        <h1
          class="mt-8 text-center text-[44px] font-semibold not-italic leading-[1.2] text-[#000213]"
        >
          Traneasy 易翻译
        </h1>

        <h1
          class="mt-8 text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]"
        >
          跨越语言鸿沟，链接全球商机
        </h1>
        <p
          class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl"
        >
          专为出海企业打造，集实时翻译、客户管理、矩阵运营于一体，一站式解决出海沟通与获客难题。
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            :to="localePath('/login')"
            class="inline-flex min-w-36 items-center justify-center rounded bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            免费试用
          </NuxtLink>
          <NuxtLink
            :to="localePath('/pricing')"
            class="inline-flex min-w-36 items-center justify-center rounded border border-orange-200 bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(249,115,22,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            预约演示
          </NuxtLink>
        </div>

        <p class="mt-10 text-[14px] font-normal text-[#000213]">
          全平台覆盖 一屏掌控
        </p>
      </div>
    </div>

    <div class="relative w-full px-6 pb-16 sm:px-8 lg:px-12 lg:pb-20">
      <ul
        class="mt-10 flex w-full flex-wrap justify-center gap-3 lg:justify-between"
        aria-label="支持的平台"
      >
        <li v-for="platform in platforms" :key="platform.name">
          <img
            :src="platform.src"
            :alt="platform.name"
            width="48"
            height="48"
            class="h-12 w-12 object-contain"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

interface PlatformIcon {
  name: string;
  src: string;
}

const platforms: readonly PlatformIcon[] = [
  { name: "Skype", src: "/images/icon/Skype.svg" },
  { name: "YouTube", src: "/images/icon/Youtube.svg" },
  { name: "LinkedIn", src: "/images/icon/Linkedin.svg" },
  { name: "Vimeo", src: "/images/icon/Vimeo.svg" },
  { name: "Line", src: "/images/icon/Line.svg" },
  { name: "Telegram", src: "/images/icon/Telegram.svg" },
  { name: "Twitter", src: "/images/icon/Twitter.svg" },
  { name: "WhatsApp", src: "/images/icon/Whatsapp.svg" },
  { name: "TikTok", src: "/images/icon/TikTok.svg" },
  { name: "Messenger", src: "/images/icon/Messenger.svg" },
  { name: "Facebook", src: "/images/icon/Facebook.svg" },
  { name: "Instagram", src: "/images/icon/Instagram.svg" },
  { name: "Snapchat", src: "/images/icon/Snapchat.svg" },
  { name: "Discord", src: "/images/icon/Discord.svg" },
  { name: "Zalo", src: "/images/icon/Zalo.svg" },
  { name: "GitHub", src: "/images/icon/Github.svg" },
  { name: "Tumblr", src: "/images/icon/Tumblr.svg" },
  { name: "X", src: "/images/icon/X.svg" },
  { name: "Google", src: "/images/icon/Google.svg" },
  { name: "Dropbox", src: "/images/icon/Dropbox.svg" },
];
</script>
