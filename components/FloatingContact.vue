<template>
  <ClientOnly>
    <div
      v-if="visible"
      class="fixed right-4 top-1/2 z-[60] hidden h-[88px] w-[88px] -translate-y-1/2 md:block xl:right-8"
    >
      <!-- QR code panel -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-x-3 scale-95"
        enter-to-class="opacity-100 translate-x-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-x-0 scale-100"
        leave-to-class="opacity-0 translate-x-3 scale-95"
      >
        <div
          v-if="expanded && activeGroup"
          class="absolute bottom-[138px] right-[104px] w-[190px] rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-[0_18px_50px_rgba(15,23,42,0.16)]"
        >
          <div class="text-sm font-semibold text-slate-800">
            {{ activeGroup.platform }}
          </div>
          <div
            class="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2"
          >
            <img
              v-if="activeAccount?.qrCode"
              :src="activeAccount.qrCode"
              :alt="`${activeGroup.platform} 客服二维码`"
              class="aspect-square w-full object-contain"
              loading="lazy"
            />
            <div
              v-else
              class="flex aspect-square w-full items-center justify-center text-xs text-slate-400"
            >
              暂无二维码
            </div>
          </div>

          <div
            v-if="activeGroup.accountList.length > 1"
            class="mt-3 space-y-1.5"
          >
            <button
              v-for="account in activeGroup.accountList"
              :key="account.id"
              type="button"
              :class="[
                'w-full truncate rounded-lg px-2.5 py-1.5 text-xs transition-colors',
                account.id === activeAccount?.id
                  ? 'bg-blue-50 font-semibold text-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700',
              ]"
              @click="activeAccountId = account.id"
            >
              {{ account.account }}
            </button>
          </div>

          <a
            v-if="activeAccount?.referUrl"
            :href="activeAccount.referUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 block rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700"
          >
            立即联系
          </a>
        </div>
      </Transition>

      <div class="absolute bottom-0 right-0 flex flex-col items-center gap-7">
        <!-- Platform buttons -->

        <div
          v-if="expanded"
          class="flex w-[68px] flex-col items-center rounded-xl border border-slate-100 bg-white py-4 shadow-[0_12px_36px_rgba(15,23,42,0.14)]"
        >
          <button
            @click="openCrisp"
            class="w-[42px] h-[42px] my-1.5 rounded-full bg-[linear-gradient(180deg,#5192fd,#1d6ced)] text-white text-[12px] flex items-center justify-center"
          >
            在线
            <br />
            客服
          </button>
          <template v-if="pending">
            <div
              v-for="item in 3"
              :key="item"
              class="my-2 h-11 w-11 animate-pulse rounded-full bg-slate-100"
            />
          </template>
          <template v-else>
            <button
              v-for="group in sortedGroups"
              :key="group.platform"
              type="button"
              :class="[
                'relative my-1.5 flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-105',
                activePlatform === group.platform
                  ? 'bg-blue-50 shadow-[0_8px_18px_rgba(37,99,235,0.16)]'
                  : 'bg-white hover:bg-slate-50',
              ]"
              @click="selectPlatform(group)"
            >
              <img
                :src="platformIcon(group.platform)"
                class="h-10 w-10 object-contain"
                loading="lazy"
              />
            </button>
          </template>
          <button
            @click="openVerifyDialog"
            class="w-[42px] h-[42px] my-1.5 rounded-full bg-[linear-gradient(180deg,#5192fd,#1d6ced)] text-white text-[12px] flex items-center justify-center"
          >
            客服
            <br />
            验证
          </button>
        </div>

        <!-- Toggle button -->
        <button
          type="button"
          :aria-label="expanded ? '收起客服入口' : '展开客服入口'"
          class="group flex h-[68px] w-[68px] items-center justify-center rounded-lg bg-blue-600 text-white shadow-[0_18px_36px_rgba(37,99,235,0.34)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          @click="expanded = !expanded"
        >
          <svg
            v-if="expanded"
            class="h-11 w-11 transition-transform group-hover:rotate-90"
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
          <div v-else class="flex flex-col items-center gap-1">
            <svg
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
            <span class="text-xs font-semibold">客服</span>
          </div>
        </button>
      </div>
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
const openCrisp = () => {
  window.$crisp?.push(["do", "chat:open"]);
};
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
const activePlatform = ref("WeChat");
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

const activeGroup = computed(() => {
  return (
    sortedGroups.value.find(
      (group) => group.platform === activePlatform.value,
    ) ?? sortedGroups.value[0]
  );
});

const activeAccount = computed(() => {
  const accountList = activeGroup.value?.accountList ?? [];
  return (
    accountList.find((account) => account.id === activeAccountId.value) ??
    accountList[0]
  );
});

const selectPlatform = (group: CustomerServiceGroup) => {
  activePlatform.value = group.platform;
  activeAccountId.value = group.accountList[0]?.id;
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
    if (!activePlatform.value && groupList[0]) {
      selectPlatform(groupList[0]);
      return;
    }

    const currentGroup = groupList.find(
      (group) => group.platform === activePlatform.value,
    );

    if (!currentGroup && groupList[0]) {
      selectPlatform(groupList[0]);
      return;
    }

    if (currentGroup && !activeAccount.value) {
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
