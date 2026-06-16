<template>
  <header
    ref="headerEl"
    :class="[
      'fixed top-0 inset-x-0 z-50 font-inter transition-[border-color,box-shadow] duration-300 border-b border-transparent shadow-none',
    ]"
  >
    <div
      v-if="shouldUseScrollHeader"
      ref="headerBgEl"
      :class="[
        'pointer-events-none absolute inset-0 bg-white transition-opacity duration-300',
        'opacity-0',
      ]"
    />
    <div class="px-4 sm:px-8 lg:px-12">
      <div class="relative z-10 flex items-center justify-between h-[68px]">
        <!-- Logo -->
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-2 flex-shrink-0"
        >
          <img
            :src="'/images/traneasy logo.svg'"
            alt="TranEasy"
            class="h-12 w-auto"
          />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav
          class="hidden lg:flex items-center justify-center gap-2 flex-nowrap flex-1"
        >
          <NuxtLink
            :to="localePath('/')"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            {{ $t("nav.home") }}
          </NuxtLink>

          <!-- Products dropdown — pure CSS hover -->
          <div
            ref="productDropdownEl"
            :class="[
              'nav-dropdown product-dropdown relative flex-shrink-0',
              { 'is-dropdown-closing': isProductDropdownClosing },
            ]"
            @mouseenter="clearProductDropdownClosing"
          >
            <button
              type="button"
              class="nav-dropdown-trigger nav-item flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap"
            >
              {{ $t("nav.products") }}
              <svg
                class="w-3.5 h-3.5 transition-transform duration-200 nav-dropdown-arrow flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- Hover-safe wrapper: starts at button bottom, contains gap + panel -->
            <div class="nav-dropdown-area product-dropdown-area">
              <div class="nav-dropdown-panel product-dropdown-panel">
                <ProductsPanel @item-click="closeProductDropdown" />
              </div>
            </div>
          </div>

          <NuxtLink
            :to="localePath('/integrations')"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            {{ $t("nav.integrations") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/pricing')"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            {{ $t("nav.pricing") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/download')"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            {{ $t("nav.resources") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/statement')"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            声明
          </NuxtLink>

          <!-- <a
            v-if="isLoggedIn"
            href="https://www.traneasy.com.cn/zh/index#/UserCenterIndex"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-item text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-50/60 whitespace-nowrap flex-shrink-0"
          >
            控制台
          </a> -->
        </nav>
        <div
          class="relative z-[80] hidden lg:flex items-center gap-2 flex-shrink-0 ml-4"
        >
          <!-- Language switcher — pure CSS hover -->
          <div class="lang-dropdown relative flex-shrink-0">
            <button
              type="button"
              class="lang-dropdown-trigger flex items-center gap-1.5 text-slate-600 hover:text-blue-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer select-none bg-transparent border-none outline-none whitespace-nowrap"
            >
              <span class="text-base leading-none">{{ currentLang.flag }}</span>
              <svg
                class="w-3 h-3 flex-shrink-0 transition-transform lang-dropdown-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <!-- Hover-safe area for language dropdown -->
            <div class="lang-dropdown-area">
              <div class="lang-dropdown-panel">
                <NuxtLink
                  v-for="lang in languages"
                  :key="lang.code"
                  :to="switchLocalePath(lang.code)"
                  :class="[
                    'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer no-underline',
                    lang.code === locale
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-slate-600 hover:bg-slate-50',
                  ]"
                >
                  <span class="text-base">{{ lang.flag }}</span>
                  <span>{{ lang.label }}</span>
                  <svg
                    v-if="lang.code === locale"
                    class="w-3.5 h-3.5 ml-auto text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            v-if="!isLoggedIn"
            :to="localePath('/login')"
            class="ml-1 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 text-sm font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
          >
            {{ $t("nav.login") }}
          </NuxtLink>
          <span
            v-else
            class="ml-1 max-w-[140px] truncate rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 whitespace-nowrap flex-shrink-0"
            :title="displayNickname"
          >
            {{ displayNickname }}
          </span>
          <!-- <NuxtLink
            :to="localePath('/') + '#download'"
            class="ml-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap flex-shrink-0 max-w-[180px] truncate text-center"
          >
            {{ $t("nav.downloadBtn") }}
          </NuxtLink> -->
        </div>

        <!-- Mobile toggle -->
        <div class="flex lg:hidden items-center gap-2">
          <!-- Mobile language — native <details> for touch devices -->
          <details class="mobile-lang-details relative">
            <summary
              class="flex items-center gap-1.5 text-slate-600 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"
            >
              <span class="text-base leading-none">{{ currentLang.flag }}</span>
              <svg
                class="w-3 h-3 flex-shrink-0 transition-transform mobile-lang-arrow"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <!-- Backdrop: tap outside closes language panel -->
            <div
              class="fixed inset-0 z-[99]"
              onclick="this.closest('details').open = false"
            />
            <div
              class="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-[100] py-1"
            >
              <NuxtLink
                v-for="lang in languages"
                :key="'m-' + lang.code"
                :to="switchLocalePath(lang.code)"
                :class="[
                  'w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors text-left cursor-pointer no-underline',
                  lang.code === locale
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50',
                ]"
              >
                <span class="text-base">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </NuxtLink>
            </div>
          </details>

          <!-- Mobile menu — all content inside <details> so it works without JS -->
          <details ref="mobileMenuDetailsEl" class="mobile-menu-details">
            <summary
              class="p-2 rounded-full text-slate-500 hover:bg-blue-50 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <!-- Backdrop: covers entire screen behind menu, closes menu on tap -->
            <div
              class="fixed inset-0 top-[68px] z-[98]"
              onclick="this.closest('details').open = false"
            />
            <!-- Menu panel positioned below the full header bar -->
            <div
              class="fixed left-0 right-0 top-[68px] bg-white border-b border-slate-200 shadow-lg z-[99] px-6 pb-4 flex flex-col gap-1 pt-3"
            >
              <NuxtLink
                :to="localePath('/')"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium block"
              >
                {{ $t("nav.home") }}
              </NuxtLink>

              <!-- Mobile Products -->
              <details class="mobile-accordion">
                <summary
                  class="flex items-center justify-between px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium w-full cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  {{ $t("nav.products") }}
                  <svg
                    class="w-4 h-4 transition-transform accordion-arrow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div class="ml-3 flex flex-col gap-1 pb-1">
                  <NuxtLink
                    v-for="item in productItems"
                    :key="item.href"
                    :to="localePath(item.href)"
                    @click="closeMobileMenu"
                    class="flex items-center gap-2 px-3 py-2 rounded-full text-slate-600 hover:bg-blue-50 text-sm"
                  >
                    <img :src="item.iconSrc" class="w-5 h-5 object-contain" />
                    <span>{{ item.title }}</span>
                  </NuxtLink>
                </div>
              </details>

              <NuxtLink
                :to="localePath('/integrations')"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm block"
              >
                {{ $t("nav.integrations") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/pricing')"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm block"
              >
                {{ $t("nav.pricing") }}
              </NuxtLink>

              <NuxtLink
                :to="localePath('/download')"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm block"
              >
                {{ $t("nav.resources") }}
              </NuxtLink>

              <NuxtLink
                :to="localePath('/statement')"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium block nav-item"
              >
                {{ $t("nav.statement") }}
              </NuxtLink>
              <!-- 
              <a
                v-if="isLoggedIn"
                href="https://www.traneasy.com.cn/zh/index#/UserCenterIndex"
                target="_blank"
                rel="noopener noreferrer"
                class="px-3 py-2.5 rounded-full text-slate-600 hover:bg-blue-50 text-sm font-medium block nav-item"
                @click="closeMobileMenu"
              >
                控制台
              </a> -->
              <NuxtLink
                v-if="!isLoggedIn"
                :to="localePath('/login')"
                class="mt-2 border border-slate-200 text-slate-600 text-sm font-medium px-4 py-2.5 rounded-full text-center block"
              >
                {{ $t("nav.login") }}
              </NuxtLink>
              <div
                v-else
                class="mt-2 truncate rounded-full border border-blue-100 bg-blue-50 px-4 py-2.5 text-center text-sm font-semibold text-blue-600"
                :title="displayNickname"
              >
                {{ displayNickname }}
              </div>
              <NuxtLink
                :to="localePath('/download')"
                class="mt-1 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center block"
              >
                {{ $t("nav.downloadBtn") }}
              </NuxtLink>
            </div>
          </details>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

interface HeaderUserInfo {
  nickname?: string | null;
  username?: string | null;
  account?: string | null;
}

const userInfo = ref<HeaderUserInfo | null>(null);
const isLoggedIn = computed(() => Boolean(userInfo.value));
const displayNickname = computed(
  () =>
    userInfo.value?.nickname ||
    userInfo.value?.username ||
    userInfo.value?.account ||
    "用户",
);

const loadUserInfo = () => {
  if (!import.meta.client) {
    return;
  }

  const rawUserInfo = sessionStorage.getItem("userInfo");

  if (!rawUserInfo) {
    userInfo.value = null;
    return;
  }

  try {
    userInfo.value = JSON.parse(rawUserInfo) as HeaderUserInfo;
  } catch {
    userInfo.value = null;
  }
};

const handleStorageChange = (event: StorageEvent) => {
  if (event.key === "userInfo") {
    loadUserInfo();
  }
};

const shouldUseScrollHeader = ref(true);
const headerEl = ref<HTMLElement | null>(null);
const headerBgEl = ref<HTMLElement | null>(null);
const productDropdownEl = ref<HTMLElement | null>(null);
const mobileMenuDetailsEl = ref<HTMLDetailsElement | null>(null);
const isProductDropdownClosing = ref(false);
let headerSolidTimer: ReturnType<typeof window.setTimeout> | null = null;
let headerScrollFrame: number | null = null;
let lastHeaderScrollY = -1;
const triggerCleanupFns: Array<() => void> = [];
const dropdownCleanupFns: Array<() => void> = [];

// const handleDocumentClick = (e: MouseEvent) => {
//   const target = e.target as HTMLElement;
//   if (!target.closest(".nav-dropdown") && !target.closest(".lang-dropdown")) {
//     if (document.activeElement instanceof HTMLElement) {
//       document.activeElement.blur();
//     }
//   }
// };

const handleDocumentClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  // 新增：点击 Crisp 聊天区域，直接返回，不做任何失焦处理
  if (target.closest(".crisp-chatbox") || target.closest(".crisp-client")) {
    return;
  }
  // 原有逻辑不变
  if (!target.closest(".nav-dropdown") && !target.closest(".lang-dropdown")) {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }
};

const languages = [
  { code: "zh", label: "简体中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", label: "ภาษาไทย", flag: "🇹🇭" },
];

const currentLang = computed(
  () => languages.find((l) => l.code === locale.value) ?? languages[0],
);

const productItems = [
  {
    title: "全渠道沟通",
    description: "聚合全球主流社交平台，告别多平台切换的混乱",
    iconSrc: "/images/product/dropdown-1.svg",
    href: "/product/communication",
  },
  {
    title: "数据分析",
    description: "用数据复盘业务，用图表驱动决策，告别凭感觉做外贸",
    iconSrc: "/images/product/dropdown-2.svg",
    href: "/product/data-analysis",
  },
  {
    title: "精准消息群发",
    description: "用自动化工具实现千人千面的批量触达",
    iconSrc: "/images/product/dropdown-3.svg",
    href: "/product/mass-message",
  },
  {
    title: "实时翻译",
    description: "让沟通像母语一样自然流畅。",
    iconSrc: "/images/product/dropdown-4.svg",
    href: "/product/translation",
  },
  {
    title: "工单系统/分流链接",
    description: "自动化线索管理，让每个商机都有迹可循",
    iconSrc: "/images/product/dropdown-5.svg",
    href: "/product/work-order",
  },
  {
    title: "跨境团队协作管理",
    description: "从单打独斗到平团队作战，打造高执行力的跨境铁军",
    iconSrc: "/images/product/dropdown-6.svg",
    href: "/product/collaboration",
  },
  {
    title: "客户关系管理",
    description: "用精细化的 CRM 系统挖掘客户的终身价值",
    iconSrc: "/images/product/dropdown-7.svg",
    href: "/product/crm",
  },
];

const clearHeaderSolidTimer = () => {
  if (headerSolidTimer !== null) {
    window.clearTimeout(headerSolidTimer);
    headerSolidTimer = null;
  }
};

const clearProductDropdownClosing = () => {
  isProductDropdownClosing.value = false;
};

const closeProductDropdown = () => {
  isProductDropdownClosing.value = true;

  const focused = productDropdownEl.value?.querySelector(
    ":focus",
  ) as HTMLElement | null;
  focused?.blur();

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const closeMobileMenu = () => {
  mobileMenuDetailsEl.value?.removeAttribute("open");
};

const syncHeaderScrollState = () => {
  const header = headerEl.value;
  const headerBg = headerBgEl.value;

  if (!header) {
    clearHeaderSolidTimer();
    return;
  }

  if (!shouldUseScrollHeader.value || !headerBg) {
    clearHeaderSolidTimer();
    header.classList.remove("border-transparent", "shadow-none");
    header.classList.add("bg-white", "border-slate-200", "shadow-sm");
    return;
  }

  header.classList.remove("bg-white");

  const scrolled = window.scrollY > 0;

  if (!scrolled) {
    clearHeaderSolidTimer();
    header.classList.remove("border-slate-200", "shadow-sm");
    header.classList.add("border-transparent", "shadow-none");
    if (headerBg) {
      headerBg.classList.remove("opacity-70", "opacity-100");
      headerBg.classList.add("opacity-0");
    }
    return;
  }

  header.classList.remove("border-transparent", "shadow-none");
  header.classList.add("border-slate-200", "shadow-sm");

  if (
    headerBg.classList.contains("opacity-70") ||
    headerBg.classList.contains("opacity-100")
  ) {
    return;
  }

  headerBg.classList.remove("opacity-0", "opacity-100");
  headerBg.classList.add("opacity-70");

  clearHeaderSolidTimer();
  headerSolidTimer = window.setTimeout(() => {
    headerBg.classList.remove("opacity-70", "opacity-0");
    headerBg.classList.add("opacity-100");
    headerSolidTimer = null;
  }, 300);
};

const watchHeaderScrollState = () => {
  headerScrollFrame = null;
  const currentScrollY = window.scrollY;

  if (currentScrollY !== lastHeaderScrollY) {
    lastHeaderScrollY = currentScrollY;
    syncHeaderScrollState();
  }
};

const requestHeaderScrollSync = () => {
  if (headerScrollFrame !== null) {
    return;
  }

  headerScrollFrame = window.requestAnimationFrame(watchHeaderScrollState);
};

onMounted(() => {
  loadUserInfo();
  window.addEventListener("storage", handleStorageChange);
  lastHeaderScrollY = window.scrollY;
  syncHeaderScrollState();
  window.addEventListener("scroll", requestHeaderScrollSync, { passive: true });

  // ═══ Fix: macOS Safari/Chrome don't focus <button> on click ═══
  // This makes :focus-within CSS work when user clicks dropdown buttons
  const allTriggers = headerEl.value?.querySelectorAll(
    ".nav-dropdown-trigger, .lang-dropdown-trigger",
  );
  allTriggers?.forEach((btn) => {
    // On mousedown, force focus so :focus-within activates
    const handleTriggerMouseDown = (e: Event) => {
      e.preventDefault(); // prevent default to control focus manually
      const el = btn as HTMLElement;
      // If already focused (dropdown is open), blur to close it
      if (document.activeElement === el) {
        el.blur();
      } else {
        el.focus();
      }
    };

    btn.addEventListener("mousedown", handleTriggerMouseDown);
    triggerCleanupFns.push(() => {
      btn.removeEventListener("mousedown", handleTriggerMouseDown);
    });
  });

  // Mouse leaves dropdown area → blur button so panel hides
  headerEl.value
    ?.querySelectorAll(".nav-dropdown, .lang-dropdown")
    .forEach((wrapper) => {
      if (wrapper.classList.contains("product-dropdown")) return;

      const handleDropdownMouseLeave = () => {
        const focused = wrapper.querySelector(":focus") as HTMLElement | null;
        if (focused) focused.blur();
      };

      wrapper.addEventListener("mouseleave", handleDropdownMouseLeave);
      dropdownCleanupFns.push(() => {
        wrapper.removeEventListener("mouseleave", handleDropdownMouseLeave);
      });
    });

  // Click outside any dropdown → blur active trigger to close
  document.addEventListener("click", handleDocumentClick);
});

watch(
  () => route.path,
  () => {
    syncHeaderScrollState();
  },
);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", requestHeaderScrollSync);
  window.removeEventListener("storage", handleStorageChange);
  if (headerScrollFrame !== null) {
    window.cancelAnimationFrame(headerScrollFrame);
    headerScrollFrame = null;
  }
  clearHeaderSolidTimer();
  clearProductDropdownClosing();
  document.removeEventListener("click", handleDocumentClick);
  triggerCleanupFns.splice(0).forEach((cleanup) => cleanup());
  dropdownCleanupFns.splice(0).forEach((cleanup) => cleanup());
});
</script>

<style scoped>
.nav-dropdown .nav-dropdown-area {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding-top: 10px;
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

/* The actual visible panel */
.nav-dropdown .nav-dropdown-panel {
  min-width: 700px;
}

.product-dropdown .product-dropdown-area {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  padding-top: 24px !important;
  transform: translateY(8px);
  padding-top: 0;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 24px 48px -24px rgb(15 23 42 / 0.18);
}

.product-dropdown .product-dropdown-panel {
  min-width: 0;
}

/* Show on hover or focus-within */
.nav-dropdown:hover .nav-dropdown-area,
.nav-dropdown:focus-within .nav-dropdown-area {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.product-dropdown:hover .product-dropdown-area,
.product-dropdown:focus-within .product-dropdown-area {
  transform: translateY(0);
}

.product-dropdown.is-dropdown-closing .product-dropdown-area,
.product-dropdown.is-dropdown-closing:hover .product-dropdown-area,
.product-dropdown.is-dropdown-closing:focus-within .product-dropdown-area {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(8px);
}

/* Rotate arrow */
.nav-dropdown:hover .nav-dropdown-arrow,
.nav-dropdown:focus-within .nav-dropdown-arrow {
  transform: rotate(180deg);
}

.product-dropdown.is-dropdown-closing .nav-dropdown-arrow,
.product-dropdown.is-dropdown-closing:hover .nav-dropdown-arrow,
.product-dropdown.is-dropdown-closing:focus-within .nav-dropdown-arrow {
  transform: rotate(0deg);
}

/* ═══════════════════════════════════════════════════
   LANGUAGE DROPDOWN — same hover-safe pattern
   ═══════════════════════════════════════════════════ */
.lang-dropdown .lang-dropdown-area {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  padding-top: 8px;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.lang-dropdown .lang-dropdown-panel {
  width: 12rem; /* w-48 */
  background: white;
  border-radius: 1rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border: 1px solid #f1f5f9;
  overflow: hidden;
  padding: 4px 0;
}

.lang-dropdown:hover .lang-dropdown-area,
.lang-dropdown:focus-within .lang-dropdown-area {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.lang-dropdown:hover .lang-dropdown-arrow,
.lang-dropdown:focus-within .lang-dropdown-arrow {
  transform: rotate(180deg);
}

/* ═══════════════════════════════════════════════════
   MOBILE ACCORDION
   ═══════════════════════════════════════════════════ */
.mobile-accordion[open] .accordion-arrow {
  transform: rotate(180deg);
}

.mobile-lang-details[open] .mobile-lang-arrow {
  transform: rotate(180deg);
}

/* ═══════════════════════════════════════════════════
   NAV SELECTED STATE — active route highlighting
   ═══════════════════════════════════════════════════ */
:deep(.nav-item.router-link-active) {
  color: #084aff !important;
}
</style>
