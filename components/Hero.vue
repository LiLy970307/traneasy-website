<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-16">
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none" />
    <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

    <div class="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 w-full">
      <div class="flex flex-col lg:flex-row items-center lg:items-start lg:pt-20 gap-12 lg:gap-16">

        <!-- Left -->
        <div class="flex-1 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            {{ $t('hero.badge') }}
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-5 leading-tight tracking-tight">
            {{ $t('hero.title') }}
            <br />
            <span class="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {{ $t('hero.titleHighlight') }}
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-500 max-w-xl mb-7 leading-relaxed lg:mx-0 mx-auto">
            {{ $t('hero.subtitle') }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
            <a href="#download" class="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-200 transition-all">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              {{ $t('hero.downloadBtn') }}
            </a>
            <a href="#features" class="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 rounded-full border border-blue-200 shadow-sm transition-all text-center">
              {{ $t('hero.learnMore') }}
            </a>
          </div>

          <p class="text-sm text-slate-400">{{ $t('hero.freeNote') }}</p>
        </div>

        <!-- Right: Carousel -->
        <div class="w-full lg:flex-[1.6] lg:max-w-none lg:-mr-16">
          <div id="hero-track-wrap" style="overflow:hidden;border-radius:1rem;position:relative;">
            <div id="hero-track" style="display:flex;transition:transform 0.6s ease;width:400%;">
              <img :src="'/images/PC1.png'" alt="TranEasy" style="width:25%;flex-shrink:0;display:block;" />
              <img :src="'/images/PC2.png'" alt="TranEasy" style="width:25%;flex-shrink:0;display:block;" />
              <img :src="'/images/PC3.png'" alt="TranEasy" style="width:25%;flex-shrink:0;display:block;" />
              <img :src="'/images/PC1.png'" alt="TranEasy" style="width:25%;flex-shrink:0;display:block;" />
            </div>
          </div>
          <div id="hero-dots" style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:20px;">
            <span data-i="0" style="display:inline-block;width:28px;height:10px;border-radius:9999px;background:#2563eb;cursor:pointer;transition:all 0.3s"></span>
            <span data-i="1" style="display:inline-block;width:10px;height:10px;border-radius:9999px;background:#cbd5e1;cursor:pointer;transition:all 0.3s"></span>
            <span data-i="2" style="display:inline-block;width:10px;height:10px;border-radius:9999px;background:#cbd5e1;cursor:pointer;transition:all 0.3s"></span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

useHead({
  script: [
    {
      innerHTML: `
(function() {
  var cur = 0;
  var tid = null;
  var track = null;
  var dots = null;
  var busy = false;

  function updateDots() {
    if (!dots) return;
    var real = cur % 3;
    for (var d = 0; d < dots.length; d++) {
      dots[d].style.width = d === real ? '28px' : '10px';
      dots[d].style.backgroundColor = d === real ? '#2563eb' : '#cbd5e1';
    }
  }

  function slideTo(i) {
    if (busy || !track) return;
    cur = i;
    track.style.transition = 'transform 0.6s ease';
    track.style.transform = 'translateX(-' + (cur * 25) + '%)';
    updateDots();
    if (cur === 3) {
      busy = true;
      setTimeout(function() {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0%)';
        cur = 0;
        busy = false;
      }, 620);
    }
  }

  function advance() {
    slideTo(cur + 1);
  }

  function startAuto() {
    if (tid) clearInterval(tid);
    tid = setInterval(advance, 5000);
  }

  function init() {
    track = document.getElementById('hero-track');
    dots = document.querySelectorAll('#hero-dots span');
    for (var d = 0; d < dots.length; d++) {
      (function(idx) {
        dots[idx].addEventListener('click', function() {
          if (busy) return;
          slideTo(idx);
          startAuto();
        });
      })(d);
    }
    startAuto();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
      `,
      type: 'text/javascript',
    }
  ]
})
</script>
