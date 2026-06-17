<template>
  <ClientOnly>
    <div
      v-if="visible"
      class="fixed bottom-5 right-4 z-[60] md:bottom-8 md:right-8"
    >
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-x-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-95"
      >
        <div
          v-if="expanded"
          class="mb-4 flex w-[400px] h-[700px] flex-col overflow-hidden rounded-[22px] border border-white/70 bg-[linear-gradient(to_bottom,#c9d8ff_0%,#e5f7f0_44%,#f7f9fc_100%)] shadow-[0_22px_70px_rgba(15,23,42,0.2)]"
        >
          <div class="relative overflow-hidden px-5 pb-4 pt-5 text-slate-950">
            <button
              type="button"
              aria-label="收起客服入口"
              class="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white/35 hover:text-slate-700"
              @click="expanded = false"
            >
              <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </button>

            <div class="flex items-center gap-3 pr-10">
              <span
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
              >
                <img
                  src="/public/images/icon.png"
                  alt="Traneasy"
                  class="h-8 w-8 object-contain"
                />
              </span>
              <span class="text-2xl font-bold leading-none text-slate-900">
                Traneasy
              </span>
            </div>

            <div
              class="mt-7 text-[22px] font-bold leading-tight text-[#17305f]"
            >
              <span>👋 您好！欢迎来到易翻译客服中心</span>
              <!-- <span class="block text-[#1558d6]">Traneasy!</span> -->
            </div>
          </div>

          <div class="-mt-1 flex-1 space-y-2.5 overflow-y-auto px-4 pb-4">
            <div
              class="rounded-xl bg-white/92 p-3.5 shadow-[0_12px_34px_rgba(30,41,59,0.1)]"
            >
              <div class="flex items-start gap-3">
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50"
                >
                  <img
                    src="/public/images/icon.png"
                    alt="Traneasy"
                    class="h-7 w-7 object-contain"
                  />
                </span>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-3">
                    <div class="font-semibold text-slate-900">Traneasy</div>
                    <div class="shrink-0 text-sm text-slate-400">
                      yesterday 03:17:01
                    </div>
                  </div>
                  <div class="mt-2 text-sm text-slate-500">
                    [Template message]
                  </div>
                </div>
                <span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white ring-2 ring-white"
                >
                  2
                </span>
              </div>

              <button
                type="button"
                class="mt-4 flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#2364f4] text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#1756df]"
              >
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M4 11.2C4 7.2 7.6 4 12 4s8 3.2 8 7.2-3.6 7.2-8 7.2c-.7 0-1.5-.1-2.2-.3L5.6 20a.8.8 0 0 1-1.1-1l1.2-3.1A6.7 6.7 0 0 1 4 11.2Zm5-.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
                Enter chat
              </button>
            </div>

            <template v-if="pending">
              <div
                v-for="item in 3"
                :key="item"
                class="h-[58px] animate-pulse rounded-xl bg-white/80"
              />
            </template>

            <div
              v-for="group in sortedGroups"
              :key="group.platform"
              class="w-full rounded-xl bg-white/92 text-left shadow-[0_10px_30px_rgba(30,41,59,0.08)] transition-colors hover:bg-white"
            >
              <button
                type="button"
                class="flex min-h-[58px] w-full items-center gap-3 px-4 text-left"
                @click="toggleContactGroup(group)"
              >
                <img
                  :src="platformIcon(group.platform)"
                  :alt="group.platform"
                  class="h-9 w-9 shrink-0 object-contain"
                  loading="lazy"
                />
                <span class="flex-1 text-base text-slate-500">联系我们</span>
                <span
                  :class="[
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-white transition-transform',
                    activePlatform === group.platform ? 'rotate-90' : '',
                  ]"
                >
                  <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.5 3L7.5 6L4.5 9"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                v-if="activePlatform === group.platform"
                class="border-t border-slate-100 px-4 pb-4"
                @click.stop
              >
                <div class="grid gap-3 pt-4">
                  <button
                    v-for="account in group.accountList"
                    :key="account.id"
                    type="button"
                    :class="[
                      'rounded-lg border px-3 py-2 text-left text-sm transition-colors',
                      account.id === activeAccountId
                        ? 'border-blue-200 bg-blue-50 text-blue-700'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:bg-slate-100',
                    ]"
                    @click="activeAccountId = account.id"
                  >
                    {{ account.account || group.platform }}
                  </button>
                </div>

                <div
                  class="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                >
                  <img
                    v-if="selectedGroupAccount(group)?.qrCode"
                    :src="selectedGroupAccount(group)?.qrCode"
                    :alt="`${group.platform} 客服二维码`"
                    class="mx-auto aspect-square w-full max-w-[210px] object-contain"
                    loading="lazy"
                  />
                  <div
                    v-else
                    class="mx-auto flex aspect-square w-full max-w-[210px] items-center justify-center text-sm text-slate-400"
                  >
                    暂无二维码
                  </div>
                </div>

                <a
                  v-if="selectedGroupAccount(group)?.referUrl"
                  :href="selectedGroupAccount(group)?.referUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-3 flex h-10 w-full items-center justify-center rounded-full bg-[#2364f4] text-sm font-semibold text-white transition-colors hover:bg-[#1756df]"
                >
                  快速联系
                </a>
                <button
                  v-else
                  type="button"
                  disabled
                  class="mt-3 flex h-10 w-full cursor-not-allowed items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-400"
                >
                  快速联系
                </button>
              </div>
            </div>

            <button
              type="button"
              class="flex min-h-[58px] w-full items-center gap-3 rounded-xl bg-white/92 px-4 text-left shadow-[0_10px_30px_rgba(30,41,59,0.08)] transition-colors hover:bg-white"
              @click="openVerifyDialog"
            >
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2364f4] text-white"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 4h8a2 2 0 0 1 2 2v14l-4-2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 8h6M9 12h4"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              <span class="flex-1 text-base text-slate-500">客服验证</span>
              <span
                class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-white"
              >
                <svg class="h-3 w-3" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 3L7.5 6L4.5 9"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>

            <div class="pt-20 text-center text-base text-slate-500">
              Powered by Traneasy
            </div>
          </div>
        </div>
      </Transition>

      <button
        type="button"
        :aria-label="expanded ? '收起客服入口' : '展开客服入口'"
        class="ml-auto flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#2364f4] text-white shadow-[0_18px_36px_rgba(37,99,235,0.34)] transition-all hover:-translate-y-0.5 hover:bg-[#1756df]"
        @click="expanded = !expanded"
      >
        <svg
          v-if="expanded"
          class="h-9 w-9"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 13L35 35M35 13L13 35"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <svg
          v-else
          class="h-9 w-9"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 21.5C12 14.596 17.82 9 25 9s13 5.596 13 12.5S32.18 34 25 34h-3.5L14 39v-8.017A12.222 12.222 0 0 1 12 21.5Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linejoin="round"
          />
          <path
            d="M19 21.5h.01M25 21.5h.01M31 21.5h.01"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </ClientOnly>

  <!-- Verify Customer Service Dialog -->
  <Teleport to="body">
    <div
      v-show="verifyDialog.visible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4"
      @click.self="closeVerifyDialog"
    >
      <div
        class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
        @click.stop
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-slate-900">客服验证</h3>
          <button
            type="button"
            class="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            @click="closeVerifyDialog"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        <div class="mt-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700"
              >客服平台</label
            >
            <select
              v-model="verifyDialog.platform"
              class="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option
                v-for="platform in platformOptions"
                :key="platform"
                :value="platform"
              >
                {{ platform }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700"
              >客服用户名/账号</label
            >
            <input
              ref="accountInputRef"
              v-model="verifyDialog.account"
              type="text"
              placeholder="请输入客服账号"
              class="mt-1.5 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-700 shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              @keyup.enter="doVerify"
            />
          </div>

          <!-- Result message -->
          <div
            v-if="verifyDialog.result"
            :class="[
              'rounded-lg px-4 py-3 text-sm',
              verifyDialog.resultType === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200',
            ]"
          >
            <div class="flex items-start gap-2">
              <svg
                v-if="verifyDialog.resultType === 'success'"
                class="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                class="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ verifyDialog.result }}</span>
            </div>
          </div>
        </div>

        <div class="mt-6 flex gap-3">
          <button
            type="button"
            class="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            @click="closeVerifyDialog"
          >
            关闭
          </button>
          <button
            type="button"
            :disabled="
              verifyDialog.loading ||
              !verifyDialog.platform ||
              !verifyDialog.account
            "
            class="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            @click="doVerify"
          >
            <span
              v-if="verifyDialog.loading"
              class="flex items-center justify-center gap-2"
            >
              <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              验证中...
            </span>
            <span v-else>验证</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
interface CustomerAccount {
  id: number;
  platform: string;
  accountType: number;
  account: string;
  referUrl: string;
  qrCodeUrl?: string;
  qrCode?: string;
}

interface CustomerServiceGroup {
  platform: string;
  accountList: CustomerAccount[];
}

interface CustomerServiceResponse {
  success: boolean;
  code: number;
  msg: string;
  data: CustomerServiceGroup[];
}

interface PlatformListResponse {
  success: boolean;
  code: number;
  msg: string;
  data: string[];
}

interface VerifyResponse {
  success: boolean;
  code: number;
  msg: string;
  data: unknown;
}

const config = useRuntimeConfig();
const API_URL = `${config.public.clientUserApiBase}/customer-service/list`;
const VERIFY_API = `${config.public.clientUserApiBase}/customer-service/get`;
const PLATFORM_LIST_API = `${config.public.clientUserApiBase}/customer-service/platform/list`;

const { data: platformData } = await useFetch<PlatformListResponse>(
  PLATFORM_LIST_API,
  {
    key: "customer-service-platform-list",
    server: false,
    lazy: true,
  },
);

const platformOptions = computed(() => {
  return platformData.value?.data ?? ["WeChat", "WhatsApp", "Telegram"];
});

const verifyDialog = reactive({
  visible: false,
  platform: "",
  account: "",
  loading: false,
  result: null as string | null,
  resultType: "" as "success" | "error" | "",
});

const platformOrder = ["WeChat", "WhatsApp", "Telegram"];

const visible = ref(true);
const expanded = ref(false);
const activePlatform = ref("");
const activeAccountId = ref<number>();
const accountInputRef = ref<HTMLInputElement | null>(null);

const { data, pending, error } = await useFetch<CustomerServiceResponse>(
  API_URL,
  {
    key: "floating-customer-service-list",
    query: {
      height: 400,
      width: 400,
    },
    server: false,
    lazy: true,
  },
);

const groups = computed(() => {
  if (error.value) {
    return [];
  }

  return (data.value?.data ?? []).filter((group) => group.accountList?.length);
});

const sortedGroups = computed(() => {
  return [...groups.value].sort((a, b) => {
    const aIndex = platformOrder.indexOf(a.platform);
    const bIndex = platformOrder.indexOf(b.platform);
    return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
  });
});

const selectPlatform = (group: CustomerServiceGroup) => {
  activePlatform.value = group.platform;
  activeAccountId.value = group.accountList[0]?.id;
};

const toggleContactGroup = (group: CustomerServiceGroup) => {
  if (activePlatform.value === group.platform) {
    activePlatform.value = "";
    activeAccountId.value = undefined;
    return;
  }

  selectPlatform(group);
};

const selectedGroupAccount = (group: CustomerServiceGroup) => {
  return (
    group.accountList.find((account) => account.id === activeAccountId.value) ??
    group.accountList[0]
  );
};

const platformIcon = (platform: string) => {
  const iconMap: Record<string, string> = {
    WeChat: "/images/icon/WeChat.svg",
    WhatsApp: "/images/icon/Whatsapp_green.svg",
    Telegram: "/images/icon/Telegram_blue.svg",
  };

  return iconMap[platform] ?? "/images/icon/global.svg";
};

const openVerifyDialog = () => {
  verifyDialog.visible = true;
  verifyDialog.platform = "";
  verifyDialog.account = "";
  verifyDialog.result = null;
  verifyDialog.resultType = "";
  nextTick(() => {
    accountInputRef.value?.focus();
  });
};

const closeVerifyDialog = () => {
  verifyDialog.visible = false;
  verifyDialog.result = null;
  verifyDialog.resultType = "";
};

const doVerify = async () => {
  if (!verifyDialog.platform || !verifyDialog.account) return;

  verifyDialog.loading = true;
  verifyDialog.result = null;
  verifyDialog.resultType = "";

  try {
    const data = await $fetch<VerifyResponse>(VERIFY_API, {
      params: {
        account: verifyDialog.account,
        platform: verifyDialog.platform,
      },
    });

    if (data.success) {
      verifyDialog.result = "该账号为官方客服账号，请放心联系！";
      verifyDialog.resultType = "success";
    } else {
      verifyDialog.result =
        data.msg || "该账户非官方客服帐号，请注意防范！！！";
      verifyDialog.resultType = "error";
    }
  } catch (err) {
    verifyDialog.result = "网络异常，请稍后重试";
    verifyDialog.resultType = "error";
  } finally {
    verifyDialog.loading = false;
  }
};

watch(
  sortedGroups,
  (groupList) => {
    if (!activePlatform.value) return;

    const currentGroup = groupList.find(
      (group) => group.platform === activePlatform.value,
    );

    if (!currentGroup) {
      activePlatform.value = "";
      activeAccountId.value = undefined;
      return;
    }

    const currentAccount = currentGroup.accountList.find(
      (account) => account.id === activeAccountId.value,
    );

    if (!currentAccount) {
      activeAccountId.value = currentGroup.accountList[0]?.id;
    }
  },
  { immediate: true },
);

watch(error, (fetchError) => {
  if (fetchError) {
    console.error("Failed to fetch customer service list:", fetchError);
  }
});
</script>
