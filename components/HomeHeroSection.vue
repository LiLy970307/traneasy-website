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

    <div class="relative mx-auto max-w-7xl px-6 pt-8">
      <div class="mx-auto animate-hero-intro text-center">
        <h1
          class="mt-8 text-center text-[44px] font-semibold not-italic leading-[1.2] text-[#000213]"
        >
          {{ $t("homeHero.brandName") }}
        </h1>

        <h1
          class="mt-8 text-[#000213] font-bold text-[56px] sm:text-5xl lg:text-6xl lg:leading-[1.08]"
        >
          {{ $t("homeHero.title") }}
        </h1>
        <p
          class="mx-auto mt-10 text-[26px] leading-8 text-[#000213] sm:text-xl"
        >
          {{ $t("homeHero.subtitle") }}
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            @click="goLogin"
            class="inline-flex min-w-36 items-center justify-center rounded bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            {{ $t("homeHero.ctaTrial") }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/download')"
            class="inline-flex min-w-36 items-center justify-center rounded border border-orange-200 bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_40px_rgba(249,115,22,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            {{ $t("homeHero.ctaDownload") }}
          </NuxtLink>
        </div>

        <p class="mt-10 text-[14px] font-normal text-[#000213]">
          {{ $t("homeHero.platformBadge") }}
        </p>
      </div>
    </div>

    <div
      class="relative w-full overflow-hidden px-6 pb-6 sm:px-8 lg:px-12 lg:pb-8"
    >
      <ul
        class="mt-10 flex w-max gap-3 animate-platform-scroll"
        :aria-label="$t('homeHero.supportedPlatforms')"
      >
        <li
          v-for="(platform, index) in displayPlatforms"
          :key="`${platform.name}-${index}`"
          class="shrink-0"
        >
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
const { goLogin } = useLoginRedirect();

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

const displayPlatforms = [...platforms, ...platforms, ...platforms];
</script>

<style scoped>
@keyframes platform-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333333%);
  }
}

.animate-platform-scroll {
  animation: platform-scroll 18s linear infinite;
  will-change: transform;
}
</style>
