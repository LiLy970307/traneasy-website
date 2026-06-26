<template>
  <!-- Renderless: manages Crisp chat integration -->
</template>

<script setup lang="ts">
const isOpen = ref(false);
const isLoading = ref(false);
const { t } = useI18n();

let hideCrispLauncherTimers: number[] = [];
let injectCrispBackButtonTimers: number[] = [];
let resizeCrispWindowTimers: number[] = [];
let crispWindowRevealTimer: number | undefined;
let crispLoadingTimer: number | undefined;

const getCrisp = () => {
  return typeof window !== "undefined" ? window.$crisp : undefined;
};

const hideCrispLauncher = () => {
  if (typeof document === "undefined") return;

  document
    .querySelectorAll<HTMLElement>(".crisp-client .cc-13wro")
    .forEach((launcher) => {
      launcher.style.setProperty("display", "none", "important");
      launcher.style.setProperty("visibility", "hidden", "important");
      launcher.style.setProperty("opacity", "0", "important");
      launcher.style.setProperty("pointer-events", "none", "important");
    });
};

const clearHideCrispLauncherTimers = () => {
  hideCrispLauncherTimers.forEach((timer) => window.clearTimeout(timer));
  hideCrispLauncherTimers = [];
};

const injectCrispBackButton = () => {
  if (typeof document === "undefined") return;

  const header = document.querySelector<HTMLElement>(".crisp-client .cc-1wrj8");
  if (!header || header.querySelector(".traneasy-crisp-back")) return;

  const arrow = document.createElement("img");
  arrow.className = "traneasy-crisp-back";
  arrow.src = "/images/icon/arrow-left.svg";
  arrow.alt = t('crisp.backToService');
  arrow.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    close();
  });

  header.prepend(arrow);
  header.classList.add("traneasy-crisp-header-with-back");
};

const clearInjectCrispBackButtonTimers = () => {
  injectCrispBackButtonTimers.forEach((timer) => window.clearTimeout(timer));
  injectCrispBackButtonTimers = [];
};

const hideCrispWindowUntilSized = () => {
  document.body.classList.add("traneasy-crisp-sizing");
  window.clearTimeout(crispWindowRevealTimer);
  crispWindowRevealTimer = window.setTimeout(() => {
    document.body.classList.remove("traneasy-crisp-sizing");
  }, 2000);
};

const revealCrispWindow = () => {
  document.body.classList.remove("traneasy-crisp-sizing");
  window.clearTimeout(crispWindowRevealTimer);
  crispWindowRevealTimer = undefined;
  isLoading.value = false;
  window.clearTimeout(crispLoadingTimer);
  crispLoadingTimer = undefined;
};

const resizeCrispWindow = () => {
  if (typeof document === "undefined") return;

  const chatWindows = document.querySelectorAll<HTMLElement>(
    ".crisp-client .cc-w7v18",
  );

  chatWindows.forEach((chatWindow) => {
    chatWindow.style.setProperty("width", "370px", "important");
    chatWindow.style.setProperty("height", "570px", "important");
  });

  if (chatWindows.length) {
    revealCrispWindow();
  }
};

const clearResizeCrispWindowTimers = () => {
  resizeCrispWindowTimers.forEach((timer) => window.clearTimeout(timer));
  resizeCrispWindowTimers = [];
};

const scheduleHideCrispLauncher = () => {
  clearHideCrispLauncherTimers();
  [0, 50, 150, 300, 700, 1200, 2000].forEach((delay) => {
    hideCrispLauncherTimers.push(
      window.setTimeout(() => {
        hideCrispLauncher();
      }, delay),
    );
  });
};

const scheduleInjectCrispBackButton = () => {
  clearInjectCrispBackButtonTimers();
  [0, 50, 150, 300, 700, 1200, 2000].forEach((delay) => {
    injectCrispBackButtonTimers.push(
      window.setTimeout(() => {
        injectCrispBackButton();
      }, delay),
    );
  });
};

const scheduleResizeCrispWindow = () => {
  clearResizeCrispWindowTimers();
  [0, 50, 150, 300, 700, 1200, 2000].forEach((delay) => {
    resizeCrispWindowTimers.push(
      window.setTimeout(() => {
        resizeCrispWindow();
      }, delay),
    );
  });
};

const refreshCrispWindowLayout = () => {
  if (!isOpen.value) return;

  scheduleHideCrispLauncher();
  scheduleInjectCrispBackButton();
  scheduleResizeCrispWindow();
};

const handlePageVisibilityChange = () => {
  if (document.visibilityState === "visible") {
    refreshCrispWindowLayout();
  }
};

const open = () => {
  const crisp = getCrisp();
  isLoading.value = true;
  window.clearTimeout(crispLoadingTimer);
  crispLoadingTimer = window.setTimeout(() => {
    isLoading.value = false;
  }, 8000);
  hideCrispWindowUntilSized();
  crisp?.push(["do", "chat:show"]);
  crisp?.push(["do", "chat:open"]);
  scheduleHideCrispLauncher();
  scheduleInjectCrispBackButton();
  scheduleResizeCrispWindow();
  isOpen.value = true;
};

const close = () => {
  clearHideCrispLauncherTimers();
  clearInjectCrispBackButtonTimers();
  clearResizeCrispWindowTimers();
  const crisp = getCrisp();
  crisp?.push(["do", "chat:close"]);
  crisp?.push(["do", "chat:hide"]);
  revealCrispWindow();
  isLoading.value = false;
  isOpen.value = false;
};

const cleanup = () => {
  clearHideCrispLauncherTimers();
  clearInjectCrispBackButtonTimers();
  clearResizeCrispWindowTimers();
  revealCrispWindow();
  window.clearTimeout(crispLoadingTimer);
};

onMounted(() => {
  window.addEventListener("focus", refreshCrispWindowLayout);
  window.addEventListener("pageshow", refreshCrispWindowLayout);
  window.addEventListener("resize", refreshCrispWindowLayout);
  document.addEventListener("visibilitychange", handlePageVisibilityChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("focus", refreshCrispWindowLayout);
  window.removeEventListener("pageshow", refreshCrispWindowLayout);
  window.removeEventListener("resize", refreshCrispWindowLayout);
  document.removeEventListener("visibilitychange", handlePageVisibilityChange);
  cleanup();
});

defineExpose({
  open,
  close,
  isOpen: computed(() => isOpen.value),
  isLoading: computed(() => isLoading.value),
});
</script>

<style>
.crisp-client .cc-13wro {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

.crisp-client .cc-w7v18 {
  height: 570px !important;
  width: 370px !important;
}

body.traneasy-crisp-sizing .crisp-client .cc-w7v18 {
  opacity: 0 !important;
}

.crisp-client .traneasy-crisp-back {
  cursor: pointer !important;
  height: 24px !important;
  left: 12px !important;
  pointer-events: auto !important;
  position: absolute !important;
  top: 12px !important;
  visibility: visible !important;
  width: 24px !important;
  z-index: 2147483647 !important;
}

.crisp-client .traneasy-crisp-header-with-back {
  position: relative !important;
}
</style>