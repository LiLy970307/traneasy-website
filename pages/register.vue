<template>
  <AuthPageWrapper>
    <div class="mb-10 flex items-center justify-between gap-4">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">{{ $t("pages.register.pageTitle") }}</h1>
      <p class="text-sm text-slate-600">
        {{ $t("pages.register.hasAccount") }}
        <NuxtLink
          :to="localePath('/login')"
          class="font-semibold text-blue-500 transition-colors hover:text-blue-600"
        >
          {{ $t("pages.register.goLogin") }}
        </NuxtLink>
      </p>
    </div>

    <form class="" @submit.prevent="handleRegister">
      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          {{ $t("pages.register.labelNickname") }}
        </label>
        <input
          v-model.trim="form.nickname"
          type="text"
          class="auth-input"
          :placeholder="$t('pages.register.placeholderNickname')"
          @blur="validateNickname"
        />
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.nickname },
          ]"
        >
          {{ fieldErrors.nickname }}
        </p>
      </div>

      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          <span class="text-red-500">*</span>
          {{ $t("pages.register.labelUsername") }}
        </label>
        <input
          v-model.trim="form.username"
          type="text"
          autocomplete="username"
          class="auth-input"
          :placeholder="$t('pages.register.placeholderUsername')"
          @blur="checkUsername"
        />
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.username },
          ]"
        >
          {{ fieldErrors.username }}
        </p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-3">
          <label class="block text-sm font-bold text-slate-800">
            <span class="text-red-500">*</span>
            {{ $t("pages.register.labelEmail") }}
          </label>
          <p class="text-right text-sm text-slate-500">
            {{ $t("pages.register.emailHint") }}
          </p>
        </div>
        <input
          v-model.trim="form.account"
          type="email"
          autocomplete="email"
          class="auth-input"
          :placeholder="$t('pages.register.placeholderEmail')"
          @blur="checkAccount"
        />
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.account },
          ]"
        >
          {{ fieldErrors.account }}
        </p>
      </div>

      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          <span class="text-red-500">*</span>
          {{ $t("pages.register.labelCaptcha") }}
        </label>
        <div class="grid gap-4 sm:grid-cols-[1fr_220px]">
          <input
            v-model.trim="form.vcode"
            type="text"
            inputmode="numeric"
            class="auth-input"
            :placeholder="$t('pages.register.placeholderCaptcha')"
            @blur="validateVCode"
          />
          <button
            type="button"
            :disabled="isSendingCode || vcodeCountdown > 0"
            class="rounded-lg border border-slate-200 bg-slate-50 px-4 text-lg font-bold text-slate-300 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-500 disabled:cursor-not-allowed disabled:hover:border-slate-200 disabled:hover:bg-slate-50 disabled:hover:text-slate-300"
            @click="sendVCode"
          >
            {{ vcodeButtonText }}
          </button>
        </div>
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.vcode },
          ]"
        >
          {{ fieldErrors.vcode }}
        </p>
      </div>

      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          <span class="text-red-500">*</span>
          {{ $t("pages.register.labelPassword") }}
        </label>
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="new-password"
            class="auth-input pr-14"
            :placeholder="$t('pages.register.placeholderPassword')"
            @blur="validatePassword"
          />
          <button
            type="button"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            :aria-label="showPassword ? $t('pages.register.hidePassword') : $t('pages.register.showPassword')"
            @click="showPassword = !showPassword"
          >
            <svg
              v-if="showPassword"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.8" />
              <path
                d="M7.1 7.1C3.8 8.9 2 12 2 12s3.5 6 10 6c1.7 0 3.2-.4 4.4-1"
              />
              <path
                d="M20.2 15.2C21.4 13.7 22 12 22 12s-3.5-6-10-6c-.8 0-1.6.1-2.3.3"
              />
            </svg>
          </button>
        </div>
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.password },
          ]"
        >
          {{ fieldErrors.password }}
        </p>
      </div>

      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          <span class="text-red-500">*</span>
          {{ $t("pages.register.labelConfirmPassword") }}
        </label>
        <div class="relative">
          <input
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            autocomplete="new-password"
            class="auth-input pr-14"
            :placeholder="$t('pages.register.placeholderConfirmPassword')"
            @blur="validateConfirmPassword"
          />
          <button
            type="button"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            :aria-label="showConfirmPassword ? $t('pages.register.hidePassword') : $t('pages.register.showPassword')"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <svg
              v-if="showConfirmPassword"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.8" />
              <path
                d="M7.1 7.1C3.8 8.9 2 12 2 12s3.5 6 10 6c1.7 0 3.2-.4 4.4-1"
              />
              <path
                d="M20.2 15.2C21.4 13.7 22 12 22 12s-3.5-6-10-6c-.8 0-1.6.1-2.3.3"
              />
            </svg>
          </button>
        </div>
        <p
          :class="[
            'mt-2 min-h-[20px] text-sm text-red-500 text-right',
            { invisible: !fieldErrors.confirmPassword },
          ]"
        >
          {{ fieldErrors.confirmPassword }}
        </p>
      </div>

      <label class="flex items-center gap-3 text-lg font-bold text-slate-900">
        <input
          v-model="agreed"
          type="checkbox"
          class="h-5 w-5 rounded border-slate-300 text-blue-500 focus:ring-blue-500"
          @change="validateAgreement"
        />
        <span class="text-sm">
          {{ $t("pages.register.agreePrefix") }}
          <a
            href="https://www.traneasy.com.cn/zh/#/term-and-condition"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600"
          >
            {{ $t("pages.register.userAgreement") }}
          </a>
        </span>
      </label>
      <p
        :class="[
          'mt-2 min-h-[20px] text-sm text-red-500 text-right',
          { invisible: !fieldErrors.agreed },
        ]"
      >
        {{ fieldErrors.agreed }}
      </p>

      <button
        type="submit"
        :disabled="isRegistering"
        class="mt-4 w-full rounded-full bg-blue-500 py-2 text-xl font-bold text-white shadow-[0_12px_28px_rgba(59,130,246,0.28)] transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        {{ isRegistering ? $t("pages.register.btnLoading") : $t("pages.register.btnRegister") }}
      </button>
    </form>
  </AuthPageWrapper>

  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="dialog.visible"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/45 px-4 backdrop-blur-[2px]"
      @click.self="closeDialog"
    >
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="scale-95 opacity-0 translate-y-2"
        enter-to-class="scale-100 opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="scale-100 opacity-100 translate-y-0"
        leave-to-class="scale-95 opacity-0 translate-y-2"
      >
        <div
          v-if="dialog.visible"
          class="w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_rgba(15,23,42,0.28)]"
        >
          <div class="flex items-start gap-4 px-6 pb-4 pt-6">
            <div
              :class="[
                'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
                dialog.type === 'success'
                  ? 'bg-green-50 text-green-500'
                  : 'bg-amber-50 text-amber-500',
              ]"
            >
              <svg
                v-if="dialog.type === 'success'"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <svg
                v-else
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                />
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <h3 class="text-lg font-bold text-slate-900">
                {{ dialog.title }}
              </h3>
              <p class="mt-2 break-words text-sm leading-6 text-slate-500">
                {{ dialog.message }}
              </p>
            </div>

            <button
              type="button"
              class="text-slate-300 transition-colors hover:text-slate-500"
              :aria-label="$t('pages.register.dialogClose')"
              @click="closeDialog"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="flex justify-end bg-slate-50 px-6 py-4">
            <button
              type="button"
              class="rounded-lg bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              @click="confirmDialog"
            >
              {{ $t("pages.register.dialogConfirm") }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const { t } = useI18n();
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const localePath = useLocalePath();
const config = useRuntimeConfig();

const CHECK_ACCOUNT_API = `${config.public.clientUserApiBase}/login/checkAccount`;
const CHECK_USERNAME_API = `${config.public.clientUserApiBase}/login/checkUsername`;
const SEND_VCODE_API = `${config.public.clientUserApiBase}/login/sendVCode`;
const REGISTER_API = `${config.public.clientUserApiBase}/login/register`;

interface ApiResponse<T = unknown> {
  success: boolean;
  code: number;
  msg: string;
  data: T;
}

const form = reactive({
  nickname: "",
  username: "",
  account: "",
  password: "",
  vcode: "",
  inviteCode: "",
});

const confirmPassword = ref("");
const agreed = ref(false);
const fieldErrors = reactive({
  nickname: "",
  username: "",
  account: "",
  vcode: "",
  password: "",
  confirmPassword: "",
  agreed: "",
});
const dialog = reactive<{
  visible: boolean;
  title: string;
  message: string;
  type: "success" | "warning";
  onConfirm?: () => void | Promise<void>;
}>({
  visible: false,
  title: "",
  message: "",
  type: "warning",
});
const vcodeCountdown = ref(0);
let countdownTimer: ReturnType<typeof setInterval> | undefined;

const checkAccountBody = computed(() => ({
  account: form.account,
}));

const checkUsernameBody = computed(() => ({
  username: form.username,
}));

const sendVCodeBody = computed(() => ({
  account: form.account,
}));

const registerBody = computed(() => ({
  nickname: form.nickname,
  username: form.username,
  account: form.account,
  password: form.password,
  vcode: form.vcode,
  inviteCode: form.inviteCode,
}));

const {
  data: checkAccountData,
  error: checkAccountError,
  status: checkAccountStatus,
  execute: executeCheckAccount,
} = await useApiFetch<ApiResponse<boolean>>(CHECK_ACCOUNT_API, {
  key: "register-check-account",
  method: "POST",
  body: checkAccountBody,
  immediate: false,
  watch: false,
});

const {
  data: checkUsernameData,
  error: checkUsernameError,
  status: checkUsernameStatus,
  execute: executeCheckUsername,
} = await useApiFetch<ApiResponse<boolean>>(CHECK_USERNAME_API, {
  key: "register-check-username",
  method: "POST",
  body: checkUsernameBody,
  immediate: false,
  watch: false,
});

const {
  data: sendVCodeData,
  error: sendVCodeError,
  status: sendVCodeStatus,
  execute: executeSendVCode,
} = await useApiFetch<ApiResponse<boolean>>(SEND_VCODE_API, {
  key: "register-send-vcode",
  method: "POST",
  body: sendVCodeBody,
  immediate: false,
  watch: false,
});

const {
  data: registerData,
  error: registerError,
  status: registerStatus,
  execute: executeRegister,
} = await useApiFetch<ApiResponse<unknown>>(REGISTER_API, {
  key: "register-submit",
  method: "POST",
  body: registerBody,
  immediate: false,
  watch: false,
});

const isCheckingAccount = computed(
  () => checkAccountStatus.value === "pending",
);
const isCheckingUsername = computed(
  () => checkUsernameStatus.value === "pending",
);
const isSendingCode = computed(() => sendVCodeStatus.value === "pending");
const isRegistering = computed(() => registerStatus.value === "pending");

const vcodeButtonText = computed(() => {
  if (isSendingCode.value) {
    return t("pages.register.captchaSending");
  }

  if (vcodeCountdown.value > 0) {
    return t("pages.register.captchaRetry").replace("{n}", String(vcodeCountdown.value));
  }

  return t("pages.register.captchaGet");
});

const isEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const showDialog = (
  message: string,
  options: {
    title?: string;
    type?: "success" | "warning";
    onConfirm?: () => void | Promise<void>;
  } = {},
) => {
  dialog.visible = true;
  dialog.title = options.title || t("pages.register.dialogTitle");
  dialog.message = message;
  dialog.type = options.type || "warning";
  dialog.onConfirm = options.onConfirm;
};

const closeDialog = () => {
  dialog.visible = false;
  dialog.onConfirm = undefined;
};

const confirmDialog = async () => {
  const callback = dialog.onConfirm;
  closeDialog();
  await callback?.();
};

const getErrorMessage = (error: unknown, fallback: string) => {
  const fetchError = error as {
    data?: ApiResponse;
    message?: string;
  };

  return fetchError?.data?.msg || fetchError?.message || fallback;
};

const startCountdown = () => {
  vcodeCountdown.value = 60;

  if (countdownTimer) {
    clearInterval(countdownTimer);
  }

  countdownTimer = setInterval(() => {
    vcodeCountdown.value -= 1;

    if (vcodeCountdown.value <= 0 && countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = undefined;
    }
  }, 1000);
};

const validateNickname = () => {
  fieldErrors.nickname = "";
  return true;
};

const validateVCode = () => {
  fieldErrors.vcode = "";

  if (!form.vcode) {
    fieldErrors.vcode = t("pages.register.errCaptchaRequired");
    return false;
  }

  return true;
};

const validatePassword = () => {
  fieldErrors.password = "";

  if (!form.password) {
    fieldErrors.password = t("pages.register.errPasswordRequired");
    return false;
  }

  return true;
};

const validateConfirmPassword = () => {
  fieldErrors.confirmPassword = "";

  if (!confirmPassword.value) {
    fieldErrors.confirmPassword = t("pages.register.errConfirmRequired");
    return false;
  }

  if (form.password !== confirmPassword.value) {
    fieldErrors.confirmPassword = t("pages.register.errPasswordMismatch");
    return false;
  }

  return true;
};

const validateAgreement = () => {
  fieldErrors.agreed = "";

  if (!agreed.value) {
    fieldErrors.agreed = t("pages.register.errAgreementRequired");
    return false;
  }

  return true;
};

const checkAccount = async () => {
  fieldErrors.account = "";

  if (!form.account) {
    fieldErrors.account = t("pages.register.errEmailRequired");
    return false;
  }

  if (!isEmail(form.account)) {
    fieldErrors.account = t("pages.register.errEmailInvalid");
    return false;
  }

  if (isCheckingAccount.value) {
    return false;
  }

  await executeCheckAccount();

  if (checkAccountError.value) {
    fieldErrors.account = getErrorMessage(
      checkAccountError.value,
      t("pages.register.errEmailCheckFailed"),
    );
    return false;
  }

  if (checkAccountData.value?.success === false) {
    fieldErrors.account = checkAccountData.value.msg || t("pages.register.errEmailCheckFailShort");
    return false;
  }

  if (checkAccountData.value?.data === false) {
    fieldErrors.account = t("pages.register.errEmailRegistered");
    return false;
  }

  return true;
};

const checkUsername = async () => {
  fieldErrors.username = "";

  if (!form.username) {
    fieldErrors.username = t("pages.register.errUsernameRequired");
    return false;
  }

  if (isCheckingUsername.value) {
    return false;
  }

  await executeCheckUsername();

  if (checkUsernameError.value) {
    fieldErrors.username = getErrorMessage(
      checkUsernameError.value,
      t("pages.register.errUsernameCheckFailed"),
    );
    return false;
  }

  if (checkUsernameData.value?.success === false) {
    fieldErrors.username = checkUsernameData.value.msg || t("pages.register.errUsernameCheckFailShort");
    return false;
  }

  if (checkUsernameData.value?.data === false) {
    fieldErrors.username = t("pages.register.errUsernameRegistered");
    return false;
  }

  return true;
};

const sendVCode = async () => {
  if (isSendingCode.value || vcodeCountdown.value > 0) {
    return;
  }

  const accountAvailable = await checkAccount();

  if (!accountAvailable) {
    return;
  }

  await executeSendVCode();

  if (sendVCodeError.value) {
    showDialog(
      getErrorMessage(sendVCodeError.value, t("pages.register.errCaptchaSendFailed")),
    );
    return;
  }

  if (sendVCodeData.value?.success === false || !sendVCodeData.value?.data) {
    showDialog(sendVCodeData.value?.msg || t("pages.register.errCaptchaSendFailed"));
    return;
  }

  showDialog(t("pages.register.captchaSent"), {
    title: t("pages.register.captchaSentTitle"),
    type: "success",
  });
  startCountdown();
};

const validateRegisterForm = async () => {
  const usernameAvailable = await checkUsername();

  if (!usernameAvailable) {
    return false;
  }

  const accountAvailable = await checkAccount();

  if (!accountAvailable) {
    return false;
  }

  if (!validateVCode()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  if (!validateConfirmPassword()) {
    return false;
  }

  if (!validateAgreement()) {
    return false;
  }

  return true;
};

const handleRegister = async () => {
  if (isRegistering.value) {
    return;
  }

  const valid = await validateRegisterForm();

  if (!valid) {
    return;
  }

  await executeRegister();

  if (registerError.value) {
    showDialog(getErrorMessage(registerError.value, t("pages.register.errRegisterFailed")));
    return;
  }

  const response = registerData.value;

  if (!response || response.code !== 200) {
    showDialog(response?.msg || t("pages.register.errRegisterFailed"));
    return;
  }

  showDialog(t("pages.register.registerSuccess"), {
    title: t("pages.register.registerSuccessTitle"),
    type: "success",
    onConfirm: () => navigateTo(localePath("/login")),
  });
};

onBeforeUnmount(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }
});

useHead({ title: t("pages.register.seoTitle") });
</script>

<style scoped>
.auth-input {
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #d7dbe3;
  background: #fff;
  padding: 6px 12px;
  font-size: 14px;
  color: #000123;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.auth-input::placeholder {
  color: #c4c8d1;
}

.auth-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.14);
}
</style>
