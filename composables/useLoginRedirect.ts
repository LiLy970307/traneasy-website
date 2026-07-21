// export const useLoginRedirect = () => {
//         const { locale } = useI18n()
//         const runtimeConfig = useRuntimeConfig()
//         const baseUrl = runtimeConfig.public.loginBaseUrl

//         /**
//          * 跳转登录页面
//          * @param type 1=登录 2=注册
//          */
//         const goAuth = (type: 1 | 2) => {
//                 const lang = locale.value
//                 const targetUrl = `${baseUrl}/${lang}/#/login?type=${type}`
//                 // 新窗口打开
//                 window.open(targetUrl, '_blank')
//         }

//         return {
//                 // 登录
//                 goLogin: () => goAuth(1),
//                 // 注册
//                 goRegister: () => goAuth(2)
//         }
// }


// export const useLoginRedirect = () => {
//         const { locale } = useI18n()
//         const runtimeConfig = useRuntimeConfig()
//         const baseUrl = runtimeConfig.public.loginBaseUrl

//         // 缓存登录弹窗句柄，全局唯一
//         let authWindow: Window | null = null
//         // 固定窗口名称，用来复用标签，不能用 _blank
//         const WINDOW_NAME = 'authTab'

//         /**
//          * 跳转登录/注册页面
//          * @param type 1=登录 2=注册
//          */
//         const goAuth = (type: 1 | 2) => {
//                 const lang = locale.value
//                 // 读取当前页面sessionStorage里的token，传给登录页
//                 const token = sessionStorage.getItem('token') || ''
//                 // 拼接地址：携带type、语言、临时token
//                 let targetUrl = `${baseUrl}/${lang}/#/login?type=${type}`
//                 if (token) {
//                         targetUrl += `&temp_token=${encodeURIComponent(token)}`
//                 }

//                 // 1. 尝试获取已存在的同名窗口
//                 authWindow = window.open('', WINDOW_NAME)

//                 // 2. 判断窗口有效且未关闭
//                 if (authWindow && !authWindow.closed) {
//                         // 已有标签：刷新页面同步最新token，然后置顶聚焦
//                         authWindow.location.href = targetUrl
//                         authWindow.focus()
//                 } else {
//                         // 无窗口/已关闭：全新打开登录标签
//                         authWindow = window.open(targetUrl, WINDOW_NAME)
//                 }
//         }

//         return {
//                 goLogin: () => goAuth(1),
//                 goRegister: () => goAuth(2)
//         }
// }
export const useLoginRedirect = () => {
    const { locale } = useI18n()
    const runtimeConfig = useRuntimeConfig()

    const baseUrl = runtimeConfig.public.loginBaseUrl

    let authWindow: Window | null = null

    const WINDOW_NAME = 'authTab'


    const goAuth = (type: 1 | 2) => {

        const targetUrl =
            `${baseUrl}/${locale.value}/#/login?type=${type}`


        if (
            authWindow &&
            !authWindow.closed
        ) {

            // B存在
            authWindow.focus()

        } else {

            // B不存在
            authWindow = window.open(
                targetUrl,
                WINDOW_NAME
            )
        }
    }


    return {
        goLogin: () => goAuth(1),
        goRegister: () => goAuth(2)
    }
}