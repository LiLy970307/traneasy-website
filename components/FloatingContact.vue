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
            {{ platformLabel(activeGroup.platform) }}
          </div>
          <div
            class="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2"
          >
            <img
              v-if="activeAccount?.qrCode"
              :src="activeAccount.qrCode"
              :alt="`${platformLabel(activeGroup.platform)} 客服二维码`"
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
              :title="platformLabel(group.platform)"
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
                :alt="platformLabel(group.platform)"
                class="h-10 w-10 object-contain"
                loading="lazy"
              />
            </button>
          </template>
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

const config = useRuntimeConfig();
const API_URL = `${config.public.clientUserApiBase}/customer-service/list`;

const platformOrder = ["WeChat", "WhatsApp", "Telegram"];

const visible = ref(true);
const expanded = ref(false);
const activePlatform = ref("WeChat");
const activeAccountId = ref<number>();

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

const platformLabel = (platform: string) => {
  const labelMap: Record<string, string> = {
    WeChat: "微信客服",
    WhatsApp: "WhatsApp",
    Telegram: "Telegram",
  };

  return labelMap[platform] ?? platform;
};

const platformIcon = (platform: string) => {
  const iconMap: Record<string, string> = {
    WeChat: "/images/icon/WeChat.svg",
    WhatsApp: "/images/icon/Whatsapp_green.svg",
    Telegram: "/images/icon/Telegram_blue.svg",
  };

  return iconMap[platform] ?? "/images/icon/global.svg";
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
