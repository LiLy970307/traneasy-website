<template>
  <section class="py-24 bg-white px-6 sm:px-8 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-14">
        <span
          class="inline-flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <span class="w-5 h-px bg-blue-600" />{{ $t("useCases.title")
          }}<span class="w-5 h-px bg-blue-600" />
        </span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          {{ $t("useCases.subtitle") }}
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NuxtLink
          v-for="uc in useCases"
          :key="uc.slug"
          :to="localePath('/solutions/' + uc.slug)"
          class="group"
        >
          <div
            class="h-full bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div
              :class="[
                'bg-gradient-to-br px-6 pt-8 pb-6 text-white',
                uc.gradient,
              ]"
            >
              <div class="text-5xl mb-4">{{ uc.icon }}</div>
              <h3 class="text-xl font-bold">{{ $t("useCases." + uc.key) }}</h3>
            </div>
            <div class="px-6 py-5 flex flex-col flex-1">
              <p class="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                {{ $t("useCases." + uc.key + "Desc") }}
              </p>
              <div
                :class="[
                  'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 w-fit',
                  uc.lightBg,
                  uc.lightText,
                ]"
              >
                <svg
                  class="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                {{ $t("useCases." + uc.statKey) }}
              </div>
              <span
                :class="[
                  'text-sm font-semibold group-hover:underline flex items-center gap-1',
                  uc.lightText,
                ]"
              >
                {{ $t("useCases.learnMore") }}
                <svg
                  class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const useCases = [
  {
    key: "ecommerce",
    slug: "ecommerce",
    icon: "🛍️",
    statKey: "ecommerceStat",
    gradient: "from-orange-500 to-red-500",
    lightBg: "bg-orange-50",
    lightText: "text-orange-600",
  },
  {
    key: "meetings",
    slug: "meetings",
    icon: "🎥",
    statKey: "meetingsStat",
    gradient: "from-blue-500 to-cyan-500",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
  },
  {
    key: "education",
    slug: "education",
    icon: "📚",
    statKey: "educationStat",
    gradient: "from-purple-500 to-pink-500",
    lightBg: "bg-purple-50",
    lightText: "text-purple-600",
  },
  {
    key: "customerSupport",
    slug: "customer-support",
    icon: "💬",
    statKey: "customerSupportStat",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
  },
];
</script>
