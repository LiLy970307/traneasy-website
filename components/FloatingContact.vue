<template>
  <ClientOnly>
    <Crisp ref="crispRef" />
    <div
      v-if="visible"
      ref="floatingContactRef"
      class="fixed bottom-5 right-6 z-[60] flex flex-col items-end"
      @click.stop
    >
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-x-0 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0 scale-100"
        leave-to-class="opacity-0 translate-y-4 scale-95"
        @after-leave="handlePanelAfterLeave"
      >
        <div
          v-if="expanded"
          class="relative mb-6 flex w-[370px] h-[570px] flex-col overflow-hidden rounded-[22px] border border-white/70 bg-[linear-gradient(to_bottom,#c9d8ff_0%,#e5f7f0_44%,#f7f9fc_100%)] shadow-[0_22px_70px_rgba(15,23,42,0.2)]"
        >
          <div class="relative overflow-hidden px-5 pb-4 pt-5 text-slate-950">
            <button
              type="button"
              aria-label="$t('floatingContact.closeAriaLabel')"
              class="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white/35 hover:text-slate-700"
              @click="handleCloseClick"
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
              class="mt-7 text-[20px] font-bold leading-tight text-[#17305f]"
            >
              <span>{{ $t("floatingContact.greeting") }}</span>
              <!-- <span class="block text-[#1558d6]">Traneasy!</span> -->
            </div>
          </div>

          <div class="-mt-1 flex-1 space-y-2.5 overflow-y-auto px-4 pb-4">
            <div
              class="rounded-xl bg-white/92 p-3.5 shadow-[0_12px_34px_rgba(30,41,59,0.1)]"
            >
              <div class="flex items-start gap-3">
                <!-- <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50"
                >
                  <img
                    src="/public/images/icon.png"
                    alt="Traneasy"
                    class="h-7 w-7 object-contain"
                  />
                </span> -->
                <div class="min-w-0 flex-1">
                  <div class="flex items-center justify-between gap-3">
                    <!-- {{ lastMessage?.nickname || $t("floatingContact.defaultNickname") }} -->
                    <div
                      class="relative inline-block font-semibold text-slate-900"
                    >
                      {{ $t("floatingContact.defaultNickname") }}

                      <span
                        v-if="crispHasNewMessage"
                        class="absolute -right-2 h-2 w-2 rounded-full bg-red-500"
                      ></span>
                    </div>
                    <div
                      class="shrink-0 text-sm text-slate-400"
                      v-if="lastMessage?.timestamp"
                    >
                      {{ formatMessageTime(lastMessage.timestamp) }}
                    </div>
                  </div>
                  <div class="mt-2 truncate text-sm text-slate-500">
                    {{
                      lastMessage?.content || $t("floatingContact.noMessages")
                    }}
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="mt-4 flex h-[46px] w-full items-center justify-center gap-3 rounded-full bg-[#2364f4] text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#1756df]"
                @click="openCrispPanel"
              >
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M4 11.2C4 7.2 7.6 4 12 4s8 3.2 8 7.2-3.6 7.2-8 7.2c-.7 0-1.5-.1-2.2-.3L5.6 20a.8.8 0 0 1-1.1-1l1.2-3.1A6.7 6.7 0 0 1 4 11.2Zm5-.7a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm3 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
                  />
                </svg>
                {{ $t("floatingContact.consultService") }}
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
              <div
                class="flex min-h-[48px] w-full cursor-pointer items-center gap-3 px-4 text-left"
                @click="toggleContactGroup(group)"
              >
                <button
                  type="button"
                  class="shrink-0"
                  @click.stop="openDefaultContact(group)"
                >
                  <img
                    :src="platformIcon(group.platform)"
                    :alt="group.platform"
                    class="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  class="text-left text-base text-slate-500 hover:text-[#2364f4]"
                  @click.stop="openDefaultContact(group)"
                >
                  {{ $t("floatingContact.contactUs") }}
                </button>
                <div class="flex justify-end flex-1">
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
                </div>
              </div>

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
                    class="rounded-lg border px-3 py-2 text-left text-sm transition-colors border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                    @click="openAccountContact(account)"
                  >
                    {{ formatAccountName(account.account, group.platform) }}
                  </button>
                </div>

                <div
                  class="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                >
                  <img
                    v-if="selectedGroupAccount(group)?.qrCode"
                    :src="selectedGroupAccount(group)?.qrCode"
                    :alt="`${group.platform} QR`"
                    class="mx-auto aspect-square w-full max-w-[210px] object-contain"
                    loading="lazy"
                  />
                  <div
                    v-else
                    class="mx-auto flex aspect-square w-full max-w-[210px] items-center justify-center text-sm text-slate-400"
                  >
                    {{ $t("floatingContact.noQrCode") }}
                  </div>
                </div>
              </div>
            </div>

            <!-- {{ $t("floatingContact.afterSales") }} @traneasy -->
            <div
              v-if="afterSalesAccount"
              class="w-full rounded-xl bg-white/92 text-left shadow-[0_10px_30px_rgba(30,41,59,0.08)] transition-colors hover:bg-white"
            >
              <div
                class="flex min-h-[48px] w-full cursor-pointer items-center gap-3 px-4 text-left"
                @click="toggleAfterSalesContact"
              >
                <button
                  type="button"
                  class="shrink-0"
                  @click.stop="openAccountContact(afterSalesAccount)"
                >
                  <img
                    :src="platformIcon(afterSalesAccount.platform)"
                    :alt="$t('floatingContact.afterSales')"
                    class="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                </button>
                <button
                  type="button"
                  class="text-left text-base text-slate-500 hover:text-[#2364f4]"
                  @click.stop="openAccountContact(afterSalesAccount)"
                >
                  {{ $t("floatingContact.afterSales") }}
                </button>
                <div class="flex flex-1 justify-end">
                  <span
                    :class="[
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-white transition-transform',
                      activePlatform === afterSalesPlatformKey
                        ? 'rotate-90'
                        : '',
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
                </div>
              </div>

              <div
                v-if="activePlatform === afterSalesPlatformKey"
                class="border-t border-slate-100 px-4 pb-4"
                @click.stop
              >
                <div class="grid gap-3 pt-4">
                  <button
                    type="button"
                    class="rounded-lg border px-3 py-2 text-left text-sm transition-colors border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900"
                    @click="openAccountContact(afterSalesAccount)"
                  >
                    {{ afterSalesAccount.account }}
                  </button>
                </div>

                <div
                  class="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-3 text-center"
                >
                  <img
                    v-if="afterSalesAccount.qrCode"
                    :src="afterSalesAccount.qrCode"
                    :alt="$t('floatingContact.afterSalesQrAlt')"
                    class="mx-auto aspect-square w-full max-w-[210px] object-contain"
                    loading="lazy"
                  />
                  <div
                    v-else
                    class="mx-auto flex aspect-square w-full max-w-[210px] items-center justify-center text-sm text-slate-400"
                  >
                    {{ $t("floatingContact.noQrCode") }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 客服验证 -->
            <button
              type="button"
              class="flex min-h-[48px] w-full items-center gap-3 rounded-xl bg-white/92 px-4 text-left shadow-[0_10px_30px_rgba(30,41,59,0.08)] transition-colors hover:bg-white"
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
              <span class="flex-1 text-base text-slate-500">{{
                $t("floatingContact.verifyTitle")
              }}</span>
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
          </div>

          <div
            v-if="crispLoading"
            class="absolute inset-0 z-20 flex items-center justify-center bg-white/92 text-sm font-medium text-slate-500"
          >
            {{ $t("floatingContact.connecting") }}
          </div>
        </div>
      </Transition>

      <button
        type="button"
        :class="[
          'relative flex items-center justify-center bg-[#2364f4] text-white shadow-[0_18px_36px_rgba(37,99,235,0.34)] transition-all hover:-translate-y-0.5 hover:bg-[#1756df]',
          compactFloatingButton
            ? 'h-12 w-12 rounded-full'
            : 'h-auto w-auto flex-col rounded-[120px] px-1.5 py-3 tracking-[4px]',
        ]"
        @click="toggleFloatingContact"
      >
        <!-- 新消息呼吸红点 -->
        <span
          v-if="crispHasNewMessage"
          class="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-red-500"
        ></span>
        <div
          v-if="!compactFloatingButton"
          style="writing-mode: vertical-rl; text-orientation: upright"
        >
          {{ $t("floatingContact.floatingBtn") }}
        </div>
        <svg
          v-if="compactFloatingButton"
          class="h-6 w-6"
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
          <h3 class="text-lg font-bold text-slate-900">
            {{ $t("floatingContact.verifyTitle") }}
          </h3>
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
            <label class="block text-sm font-medium text-slate-700">{{
              $t("floatingContact.verifyPlatformLabel")
            }}</label>
            <select
              v-model="verifyDialog.platform"
              class="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-black shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option
                v-for="platform in platformOptions"
                :key="platform"
                :value="platform"
                class="bg-white text-black"
              >
                {{ platform }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700">{{
              $t("floatingContact.verifyAccountLabel")
            }}</label>
            <input
              ref="accountInputRef"
              v-model="verifyDialog.account"
              type="text"
              :placeholder="$t('floatingContact.verifyAccountPlaceholder')"
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
            {{ $t("floatingContact.verifyClose") }}
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
              {{ $t("floatingContact.verifyLoading") }}
            </span>
            <span v-else>{{ $t("floatingContact.verifyBtn") }}</span>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import formatMessageTime from "@/utils/formatDateTime";
import {
  useCrispLastMessage,
  useCrispHasNewMessage,
} from "~/composables/useCrisp";

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

interface CrispExposed {
  open: () => void;
  close: () => void;
  isOpen: boolean;
  isLoading: boolean;
}

const config = useRuntimeConfig();
const { t } = useI18n();
const API_URL = `${config.public.clientUserApiBase}/customer-service/list`;
const VERIFY_API = `${config.public.clientUserApiBase}/customer-service/get`;
const PLATFORM_LIST_API = `${config.public.clientUserApiBase}/customer-service/platform/list`;

const { data: platformData } = await useApiFetch<PlatformListResponse>(
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
const afterSalesPlatformKey = "__after_sales__";

const visible = ref(true);
const expanded = ref(false);
const compactFloatingButton = ref(false);
const crispChatOpen = computed(() => crispRef.value?.isOpen ?? false);
const crispLoading = computed(() => crispRef.value?.isLoading ?? false);
const activePlatform = ref("");
const accountInputRef = ref<HTMLInputElement | null>(null);
const floatingContactRef = ref<HTMLElement | null>(null);
const crispRef = ref<CrispExposed | null>(null);
const lastMessage = useCrispLastMessage();
const crispHasNewMessage = useCrispHasNewMessage();

const { data, pending, error } = await useApiFetch<CustomerServiceResponse>(
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

const isAfterSalesAccount = (account: CustomerAccount) => {
  return account.account === "@traneasy";
};

const groups = computed(() => {
  if (error.value) {
    return [];
  }

  return (data.value?.data ?? [])
    .map((group) => ({
      ...group,
      accountList: (group.accountList ?? []).filter(
        (account) => !isAfterSalesAccount(account),
      ),
    }))
    .filter((group) => group.accountList.length);
});

const afterSalesAccount = computed(() => {
  if (error.value) {
    return undefined;
  }

  return (data.value?.data ?? [])
    .flatMap((group) => group.accountList ?? [])
    .find(isAfterSalesAccount);
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
};

const toggleContactGroup = (group: CustomerServiceGroup) => {
  if (activePlatform.value === group.platform) {
    activePlatform.value = "";
    return;
  }

  selectPlatform(group);
};

const toggleAfterSalesContact = () => {
  if (activePlatform.value === afterSalesPlatformKey) {
    activePlatform.value = "";
    return;
  }

  activePlatform.value = afterSalesPlatformKey;
};

const selectedGroupAccount = (group: CustomerServiceGroup) => {
  return group.accountList[0];
};

const openAccountContact = (account?: CustomerAccount) => {
  console.log(account);
  const referUrl = account?.referUrl;
  if (!referUrl || typeof window === "undefined") return;

  window.open(referUrl, "_blank", "noopener,noreferrer");
};

const openDefaultContact = (group: CustomerServiceGroup) => {
  console.log(group);
  openAccountContact(group.accountList?.[0]);
};

const formatAccountName = (account: string, fallback: string) => {
  return account === "@traneasy"
    ? t("floatingContact.afterSales")
    : account || fallback;
};

const openCrispPanel = () => {
  crispHasNewMessage.value = false;
  crispRef.value?.open();
};

const closeFloatingPanel = () => {
  if (!expanded.value) {
    compactFloatingButton.value = false;
    return;
  }

  expanded.value = false;
};

const handlePanelAfterLeave = () => {
  if (!expanded.value && !crispChatOpen.value) {
    compactFloatingButton.value = false;
  }
};

const handleCloseClick = () => {
  if (crispChatOpen.value) {
    crispRef.value?.close();
    visible.value = false;
    return;
  }

  closeFloatingPanel();
};

const handleOutsideClick = (event: MouseEvent) => {
  if (!expanded.value && !crispChatOpen.value && !crispLoading.value) return;

  const target = event.target as Node | null;
  if (!target) return;

  if (floatingContactRef.value?.contains(target)) return;

  const targetElement =
    target instanceof Element ? target : target.parentElement;
  if (targetElement?.closest(".crisp-client")) return;

  if (crispChatOpen.value) {
    crispRef.value?.close();
  }

  closeFloatingPanel();
};

const toggleFloatingContact = () => {
  if (crispChatOpen.value) {
    crispRef.value?.close();
    closeFloatingPanel();
    return;
  }

  if (expanded.value) {
    closeFloatingPanel();
    return;
  }

  compactFloatingButton.value = true;
  expanded.value = true;
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
      verifyDialog.result = t("floatingContact.verifySuccess");
      verifyDialog.resultType = "success";
    } else {
      verifyDialog.result = data.msg || t("floatingContact.verifyFail");
      verifyDialog.resultType = "error";
    }
  } catch (err) {
    verifyDialog.result = t("floatingContact.verifyError");
    verifyDialog.resultType = "error";
  } finally {
    verifyDialog.loading = false;
  }
};

watch(
  sortedGroups,
  (groupList) => {
    if (!activePlatform.value) return;

    if (activePlatform.value === afterSalesPlatformKey) {
      if (!afterSalesAccount.value) {
        activePlatform.value = "";
      }
      return;
    }

    const currentGroup = groupList.find(
      (group) => group.platform === activePlatform.value,
    );

    if (!currentGroup) {
      activePlatform.value = "";
    }
  },
  { immediate: true },
);

watch(error, (fetchError) => {
  if (fetchError) {
    console.error("Failed to fetch customer service list:", fetchError);
  }
});

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<style>
@keyframes crisp-dot-breathe {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.35);
  }
}
</style>
