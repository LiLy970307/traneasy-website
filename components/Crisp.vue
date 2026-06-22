<template>
  <div class="flex h-full min-h-0 flex-col bg-white">
    <div
      class="flex h-14 shrink-0 items-center justify-between border-b border-slate-100 px-4"
    >
      <div class="flex items-center gap-3">
        <button
          type="button"
          aria-label="返回客服中心"
          class="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
          @click="close"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50"
        >
          <img
            src="/public/images/icon.png"
            alt="Traneasy"
            class="h-6 w-6 object-contain"
          />
        </span>
        <span class="font-semibold text-slate-900">在线客服</span>
      </div>
    </div>

    <div class="relative min-h-0 flex-1 bg-white">
      <div
        ref="chatContainer"
        class="h-full min-h-[520px] w-full overflow-hidden bg-white"
      />
      <div
        v-if="loading"
        class="absolute inset-0 flex items-center justify-center bg-white text-sm text-slate-500"
      >
        正在连接客服...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  close: [];
}>();

const chatContainer = ref<HTMLDivElement | null>(null);
const loading = ref(false);
let originalParent: Node | null = null;
let originalNextSibling: Node | null = null;
let crispClient: HTMLElement | null = null;
let hideLauncherTimers: Array<ReturnType<typeof window.setTimeout>> = [];

const getCrispQueue = () => {
  return (window as any).$crisp as any[] | undefined;
};

const waitForCrisp = async () => {
  for (let i = 0; i < 30; i += 1) {
    const crisp = getCrispQueue();
    if (crisp) return crisp;
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }

  return null;
};

const waitForCrispClient = async () => {
  for (let i = 0; i < 50; i += 1) {
    const client = document.querySelector<HTMLElement>(".crisp-client");
    if (client) return client;
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }

  return null;
};

const getCrispLaunchers = () => {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      ".crisp-client .cc-13wro, .crisp-client [role='button'][aria-expanded], .crisp-client [aria-label='关闭聊天']",
    ),
  );
};

const hideCrispLauncher = () => {
  getCrispLaunchers().forEach((launcher) => {
    launcher.style.setProperty("display", "none", "important");
    launcher.style.setProperty("visibility", "hidden", "important");
    launcher.style.setProperty("opacity", "0", "important");
    launcher.style.setProperty("pointer-events", "none", "important");
  });
};

const clearHideLauncherTimers = () => {
  hideLauncherTimers.forEach((timer) => window.clearTimeout(timer));
  hideLauncherTimers = [];
};

const scheduleHideCrispLauncher = () => {
  clearHideLauncherTimers();
  [0, 100, 300, 700, 1200].forEach((delay) => {
    const timer = window.setTimeout(() => {
      hideCrispLauncher();
    }, delay);
    hideLauncherTimers.push(timer);
  });
};

const mountCrispClient = async () => {
  const client = await waitForCrispClient();
  if (!client || !chatContainer.value) return false;

  if (!originalParent) {
    originalParent = client.parentNode;
    originalNextSibling = client.nextSibling;
  }

  crispClient = client;
  client.classList.add("traneasy-crisp-embedded");
  chatContainer.value.appendChild(client);
  scheduleHideCrispLauncher();
  return true;
};

const open = async () => {
  loading.value = true;
  await nextTick();

  const crisp = await waitForCrisp();
  if (!chatContainer.value || !crisp) {
    loading.value = false;
    return;
  }

  crisp.push(["do", "chat:show"]);
  crisp.push(["do", "chat:open"]);
  scheduleHideCrispLauncher();

  const mounted = await mountCrispClient();
  if (!mounted) {
    loading.value = false;
    return;
  }

  loading.value = false;
};

const close = () => {
  clearHideLauncherTimers();

  const crisp = getCrispQueue();
  crisp?.push(["do", "chat:close"]);
  crisp?.push(["do", "chat:hide"]);

  if (crispClient && originalParent) {
    crispClient.classList.remove("traneasy-crisp-embedded");
    originalParent.insertBefore(crispClient, originalNextSibling);
  }

  loading.value = false;
  emit("close");
};

onMounted(() => {
  open();
});

onBeforeUnmount(() => {
  clearHideLauncherTimers();
});

defineExpose({
  open,
  close,
});
</script>

<style>
.traneasy-crisp-embedded {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: static !important;
  inset: auto !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 520px !important;
  transform: none !important;
  z-index: auto !important;
}

.traneasy-crisp-embedded .cc-kxkl,
.traneasy-crisp-embedded .cc-1brb6,
.traneasy-crisp-embedded .cc-1yy0g,
.traneasy-crisp-embedded iframe {
  position: static !important;
  inset: auto !important;
  width: 100% !important;
  height: 100% !important;
  min-height: 520px !important;
  max-height: none !important;
  transform: none !important;
}

.traneasy-crisp-embedded .cc-13wro,
.traneasy-crisp-embedded [role="button"][aria-expanded],
.traneasy-crisp-embedded [aria-label="关闭聊天"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
</style>
