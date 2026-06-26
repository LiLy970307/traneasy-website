export const useLoginRedirect = () => {
        const { locale } = useI18n()
        const runtimeConfig = useRuntimeConfig()
        const baseUrl = runtimeConfig.public.loginBaseUrl

        /**
         * 跳转登录页面
         * @param type 1=登录 2=注册
         */
        const goAuth = (type: 1 | 2) => {
                const lang = locale.value
                const targetUrl = `${baseUrl}/${lang}/#/login?type=${type}`
                // 新窗口打开
                window.open(targetUrl, '_blank')
        }

        return {
                // 登录
                goLogin: () => goAuth(1),
                // 注册
                goRegister: () => goAuth(2)
        }
}