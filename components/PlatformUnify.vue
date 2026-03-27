<template>
  <section class="relative bg-[#0d0f1a] overflow-hidden pt-16 pb-20">
    <div class="absolute inset-0 opacity-[0.04]" :style="{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '48px 48px' }" />
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

    <div class="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
      <div class="grid lg:grid-cols-[1fr_1.8fr] gap-8 items-center">
        <!-- Left -->
        <div class="lg:-translate-x-8">
          <span class="inline-flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span class="w-5 h-px bg-blue-400" />{{ $t('platformUnify.eyebrow') }}
          </span>
          <h2 class="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">{{ $t('platformUnify.title') }}</h2>
          <h2 class="text-2xl sm:text-3xl font-bold leading-tight mb-4">
            <span class="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{{ $t('platformUnify.titleHighlight') }}</span>
          </h2>
          <p class="text-slate-400 text-sm leading-relaxed mb-5">{{ $t('platformUnify.desc') }}</p>
          <div class="flex flex-wrap gap-2 mb-5">
            <span v-for="key in ['badge1', 'badge2', 'badge3']" :key="key"
              class="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1 rounded-full">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400" />{{ $t('platformUnify.' + key) }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2 mb-5">
            <div v-for="p in platforms" :key="p.name" class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 transition-colors cursor-default" :title="p.name">
              <img :src="p.icon" :alt="p.name" class="w-5 h-5 object-contain" />
              <span class="text-slate-300 text-xs font-medium">{{ p.name }}</span>
            </div>
          </div>
          <NuxtLink :to="localePath('/integrations')" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group">
            {{ $t('platformUnify.cta') }}
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>
        </div>

        <!-- Right: image carousel -->
        <div class="relative flex items-center justify-end lg:translate-x-32">
          <div class="w-full relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 bg-black/20">
            <div class="carousel-track">
              <div class="carousel-slide"><img :src="'/images/111.png'" alt="TranEasy" /></div>
              <div class="carousel-slide"><img :src="'/images/222.png'" alt="TranEasy" /></div>
              <div class="carousel-slide"><img :src="'/images/333.png'" alt="TranEasy" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const platforms = [
  { name: 'Zoom', icon: '/images/icon/zoom.svg' },
  { name: 'Teams', icon: '/images/icon/Teams.svg.png' },
  { name: 'Meet', icon: '/images/icon/meet.svg' },
  { name: 'WhatsApp', icon: '/images/icon/whatsapp-color.svg' },
  { name: 'WeChat', icon: '/images/icon/wechat.svg' },
  { name: 'Telegram', icon: '/images/icon/telegram.svg' },
  { name: 'LINE', icon: '/images/icon/line.svg' },
  { name: 'Slack', icon: '/images/icon/slack.svg' },
  { name: 'Discord', icon: '/images/icon/discord-icon.svg' },
  { name: 'Skype', icon: '/images/icon/skype-color.svg' },
]
</script>

<style scoped>
.carousel-track {
  display: flex;
  width: 300%;
  animation: carousel-slide 10.5s ease-in-out infinite;
}
.carousel-slide {
  width: 33.3333%;
  flex-shrink: 0;
  overflow: hidden;
}
.carousel-slide img {
  width: 100%;
  height: auto;
  display: block;
}
@keyframes carousel-slide {
  0%, 28%    { transform: translateX(0); }
  33%, 61%   { transform: translateX(-33.3333%); }
  66%, 94%   { transform: translateX(-66.6666%); }
  100%       { transform: translateX(0); }
}
</style>
