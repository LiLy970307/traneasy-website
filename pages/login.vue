<template>
  <AuthPageWrapper>
    <div class="mb-10 flex items-center justify-between gap-4">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">
        {{ $t("pages.login.pageTitle") }}
      </h1>
      <p class="text-sm text-slate-600">
        {{ $t("pages.login.noAccount") }}
        <NuxtLink
          :to="localePath('/register')"
          class="font-semibold text-blue-500 transition-colors hover:text-blue-600"
        >
          {{ $t("pages.login.goRegister") }}
        </NuxtLink>
      </p>
    </div>

    <form @submit.prevent="handleLogin">
      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          {{ $t("pages.login.labelUsername") }}
        </label>
        <input
          v-model.trim="form.account"
          type="text"
          autocomplete="username"
          class="auth-input"
          :placeholder="$t('pages.login.placeholderUsername')"
          @blur="validateAccount"
        />
        <p
          :class="[
            'mt-2 min-h-[20px] text-right text-sm text-red-500',
            { invisible: !fieldErrors.account },
          ]"
        >
          {{ fieldErrors.account }}
        </p>
      </div>

      <div>
        <label class="mb-3 block text-sm font-bold text-slate-800">
          {{ $t("pages.login.labelPassword") }}
        </label>
        <div class="relative">
          <input
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="current-password"
            class="auth-input pr-14"
            :placeholder="$t('pages.login.placeholderPassword')"
            @blur="validatePassword"
          />
          <button
            type="button"
            class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
            :aria-label="
              showPassword
                ? $t('pages.login.hidePassword')
                : $t('pages.login.showPassword')
            "
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
            'mt-2 min-h-[20px] text-right text-sm text-red-500',
            { invisible: !fieldErrors.password },
          ]"
        >
          {{ fieldErrors.password }}
        </p>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        class="mt-4 w-full rounded-full bg-blue-500 py-2 text-xl font-bold text-white shadow-[0_12px_28px_rgba(59,130,246,0.28)] transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
      >
        {{
          isSubmitting
            ? $t("pages.login.btnLoading")
            : $t("pages.login.btnLogin")
        }}
      </button>

      <p class="mt-7 text-center text-sm text-slate-500">
        {{ $t("pages.login.agreementPrefix") }}
        <a
          href="https://www.traneasy.com.cn/zh/#/term-and-condition"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-blue-500 hover:text-blue-600"
        >
          {{ $t("pages.login.userAgreement") }}
        </a>
      </p>
    </form>
  </AuthPageWrapper>
</template>

<script setup lang="ts">
import { buildAuthHeaders, saveLoginSession } from "~/utils/authHeaders";
definePageMeta({ layout: false });

const { t } = useI18n();
const showPassword = ref(false);
const localePath = useLocalePath();
const config = useRuntimeConfig();
const LOGIN_API = `${config.public.clientUserApiBase}/login/login`;
const USER_INFO_API = `${config.public.clientUserApiBase}/user/get`;
const form = reactive({
  account: "",
  password: "",
});
const fieldErrors = reactive({
  account: "",
  password: "",
});

interface LoginData {
  sk: string;
  userId: number;
  expiresTime: number;
}

interface LoginResponse {
  success?: boolean;
  code?: number;
  msg?: string;
  data?: LoginData;
}

interface UserInfoResponse {
  success?: boolean;
  code?: number;
  msg?: string;
  data?: unknown;
}

const loginSession = ref<LoginData | null>(null);

const loginBody = computed(() => ({
  account: form.account,
  password: form.password,
  clientType: "web",
}));

const userInfoHeaders = computed(() => {
  const authHeaders = buildAuthHeaders(loginSession.value);

  if (!authHeaders) {
    return undefined;
  }

  return {
    ...authHeaders,
    "client-version": "0.0.0",
    "Accept-Language": "zh",
  };
});

const {
  data: loginData,
  error: loginError,
  status: loginStatus,
  execute: executeLogin,
} = await useApiFetch<LoginResponse>(LOGIN_API, {
  method: "POST",
  body: loginBody,
  immediate: false,
  watch: false,
});

const {
  data: userInfoData,
  error: userInfoError,
  execute: executeGetUserInfo,
} = await useApiFetch<UserInfoResponse>(USER_INFO_API, {
  method: "GET",
  headers: userInfoHeaders,
  immediate: false,
  watch: false,
});

const isSubmitting = computed(() => loginStatus.value === "pending");

const validateAccount = () => {
  fieldErrors.account = form.account
    ? ""
    : t("pages.login.errUsernameRequired");
  return !fieldErrors.account;
};

const validatePassword = () => {
  fieldErrors.password = form.password
    ? ""
    : t("pages.login.errPasswordRequired");
  return !fieldErrors.password;
};

const validateForm = () => {
  const accountValid = validateAccount();
  const passwordValid = validatePassword();
  return accountValid && passwordValid;
};

const setLoginError = (message: string) => {
  fieldErrors.password = message;
};

const handleLogin = async () => {
  if (isSubmitting.value) {
    return;
  }

  fieldErrors.account = "";
  fieldErrors.password = "";

  if (!validateForm()) {
    return;
  }

  try {
    await executeLogin();

    if (loginError.value) {
      const fetchError = loginError.value as {
        data?: LoginResponse;
        message?: string;
      };
      setLoginError(
        fetchError.data?.msg ||
          fetchError.message ||
          t("pages.login.errLoginFailed"),
      );
      return;
    }

    const response = loginData.value;

    if (response?.success === false) {
      setLoginError(response.msg || t("pages.login.errWrongCredentials"));
      return;
    }

    if (!response?.data?.sk) {
      setLoginError(t("pages.login.errNoToken"));
      return;
    }

    loginSession.value = response.data;
    saveLoginSession(response.data);
    await executeGetUserInfo();

    if (userInfoError.value) {
      const fetchError = userInfoError.value as {
        data?: UserInfoResponse;
        message?: string;
      };
      setLoginError(
        fetchError.data?.msg ||
          fetchError.message ||
          t("pages.login.errUserInfoFailed"),
      );
      return;
    }

    const userInfoResponse = userInfoData.value;

    if (userInfoResponse?.success === false) {
      setLoginError(userInfoResponse.msg || t("pages.login.errUserInfoFailed"));
      return;
    }

    if (import.meta.client) {
      const userInfo = userInfoResponse?.data ?? null;

      sessionStorage.setItem("sk", response.data.sk);
      sessionStorage.setItem("userId", String(response.data.userId));
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    await navigateTo(localePath("/"));
  } catch (error: unknown) {
    const fetchError = error as {
      data?: LoginResponse;
      message?: string;
    };
    setLoginError(
      fetchError.data?.msg ||
        fetchError.message ||
        t("pages.login.errLoginFailed"),
    );
  }
};

useHead({ title: t("pages.login.seoTitle") });
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
