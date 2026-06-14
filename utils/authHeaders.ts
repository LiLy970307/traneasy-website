import { md5 } from "~/utils/md5";

interface LoginSessionLike {
  sk?: string | null;
  userId?: string | number | null;
}

export const saveLoginSession = (loginSession: LoginSessionLike) => {
  if (!import.meta.client) {
    return;
  }

  if (loginSession.sk) {
    sessionStorage.setItem("sk", loginSession.sk);
  }

  if (loginSession.userId !== undefined && loginSession.userId !== null) {
    sessionStorage.setItem("userId", String(loginSession.userId));
  }
};

export const buildAuthHeaders = (loginSession?: LoginSessionLike | null) => {
  const userId = loginSession?.userId ?? (import.meta.client ? sessionStorage.getItem("userId") : null);
  const sk = loginSession?.sk ?? (import.meta.client ? sessionStorage.getItem("sk") : null);

  if (!userId || !sk) {
    return undefined;
  }

  const token = md5(`${sk}_${userId}`).toUpperCase();
  const timestamp = Date.now().toString();
  const sign = md5(`${token}_${timestamp}`).toUpperCase();

  return {
    Authorization: token,
    "auth-token": token,
    "auth-timestamp": timestamp,
    "auth-sign": sign,
  };
};
