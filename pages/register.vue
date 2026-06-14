<template>
  <AuthPageWrapper>
    <div class="mb-10 flex items-center justify-between gap-4">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">注册</h1>
      <p class="text-sm text-slate-600">
        已有账号，
        <NuxtLink
          :to="localePath('/login')"
          class="font-semibold text-blue-500 transition-colors hover:text-blue-600"
        >
          直接登录
        </NuxtLink>
      </p>
    </div>

    <form class="" @submit.prevent="handleRegister">
      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          昵称
        </label>
        <input
          v-model.trim="form.nickname"
          type="text"
          class="auth-input"
          placeholder="请输入昵称"
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
          用户名
        </label>
        <input
          v-model.trim="form.username"
          type="text"
          autocomplete="username"
          class="auth-input"
          placeholder="请输入用户名（必填，必须字母开头，不出现特殊字符）"
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
            邮箱
          </label>
          <p class="text-right text-sm text-slate-500">
            用户名和邮箱都可以用于登录
          </p>
        </div>
        <input
          v-model.trim="form.account"
          type="email"
          autocomplete="email"
          class="auth-input"
          placeholder="请输入您的注册邮箱（必填）"
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
          验证码
        </label>
        <div class="grid gap-4 sm:grid-cols-[1fr_220px]">
          <input
            v-model.trim="form.vcode"
            type="text"
            inputmode="numeric"
            class="auth-input"
            placeholder="请输入验证码（必填）"
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
          密码
        </label>
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="new-password"
            class="auth-input pr-14"
            placeholder="请输入密码（必填）"
            @blur="validatePassword"
          />
          <button
            type="button"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            :aria-label="showPassword ? '隐藏密码' : '显示密码'"
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
          再次输入密码
        </label>
        <div class="relative">
          <input
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            autocomplete="new-password"
            class="auth-input pr-14"
            placeholder="请再次输入密码（必填）"
            @blur="validateConfirmPassword"
          />
          <button
            type="button"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            :aria-label="showConfirmPassword ? '隐藏密码' : '显示密码'"
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
          已阅读并同意
          <a
            href="https://www.traneasy.com.cn/zh/#/term-and-condition"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600"
          >
            用户协议
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
        {{ isRegistering ? "注册中..." : "注册" }}
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
              aria-label="关闭"
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
              确定
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

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
} = await useFetch<ApiResponse<boolean>>(CHECK_ACCOUNT_API, {
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
} = await useFetch<ApiResponse<boolean>>(CHECK_USERNAME_API, {
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
} = await useFetch<ApiResponse<boolean>>(SEND_VCODE_API, {
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
} = await useFetch<ApiResponse<unknown>>(REGISTER_API, {
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
    return "发送中...";
  }

  if (vcodeCountdown.value > 0) {
    return `${vcodeCountdown.value}s 后重新获取`;
  }

  return "点击获取验证码";
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
  dialog.title = options.title || "提示";
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
    fieldErrors.vcode = "请输入验证码";
    return false;
  }

  return true;
};

const validatePassword = () => {
  fieldErrors.password = "";

  if (!form.password) {
    fieldErrors.password = "请输入密码";
    return false;
  }

  return true;
};

const validateConfirmPassword = () => {
  fieldErrors.confirmPassword = "";

  if (!confirmPassword.value) {
    fieldErrors.confirmPassword = "请再次输入密码";
    return false;
  }

  if (form.password !== confirmPassword.value) {
    fieldErrors.confirmPassword = "两次输入的密码不一致";
    return false;
  }

  return true;
};

const validateAgreement = () => {
  fieldErrors.agreed = "";

  if (!agreed.value) {
    fieldErrors.agreed = "请先阅读并同意用户协议";
    return false;
  }

  return true;
};

const checkAccount = async () => {
  fieldErrors.account = "";

  if (!form.account) {
    fieldErrors.account = "请输入邮箱";
    return false;
  }

  if (!isEmail(form.account)) {
    fieldErrors.account = "请输入正确的邮箱地址";
    return false;
  }

  if (isCheckingAccount.value) {
    return false;
  }

  await executeCheckAccount();

  if (checkAccountError.value) {
    fieldErrors.account = getErrorMessage(
      checkAccountError.value,
      "邮箱检测失败，请稍后重试",
    );
    return false;
  }

  if (checkAccountData.value?.success === false) {
    fieldErrors.account = checkAccountData.value.msg || "邮箱检测失败";
    return false;
  }

  if (checkAccountData.value?.data === false) {
    fieldErrors.account = "该邮箱已被注册";
    return false;
  }

  return true;
};

const checkUsername = async () => {
  fieldErrors.username = "";

  if (!form.username) {
    fieldErrors.username = "请输入用户名";
    return false;
  }

  if (isCheckingUsername.value) {
    return false;
  }

  await executeCheckUsername();

  if (checkUsernameError.value) {
    fieldErrors.username = getErrorMessage(
      checkUsernameError.value,
      "用户名检测失败，请稍后重试",
    );
    return false;
  }

  if (checkUsernameData.value?.success === false) {
    fieldErrors.username = checkUsernameData.value.msg || "用户名检测失败";
    return false;
  }

  if (checkUsernameData.value?.data === false) {
    fieldErrors.username = "该用户名已被注册";
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
      getErrorMessage(sendVCodeError.value, "验证码发送失败，请稍后重试"),
    );
    return;
  }

  if (sendVCodeData.value?.success === false || !sendVCodeData.value?.data) {
    showDialog(sendVCodeData.value?.msg || "验证码发送失败，请稍后重试");
    return;
  }

  showDialog("验证码已发送，请查收邮箱", {
    title: "发送成功",
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
    showDialog(getErrorMessage(registerError.value, "注册失败，请稍后重试"));
    return;
  }

  const response = registerData.value;

  if (!response || response.code !== 200) {
    showDialog(response?.msg || "注册失败，请稍后重试");
    return;
  }

  showDialog("注册成功，请登录", {
    title: "注册成功",
    type: "success",
    onConfirm: () => navigateTo(localePath("/login")),
  });
};

onBeforeUnmount(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer);
  }
});

useHead({ title: "注册 - TranEasy" });
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
