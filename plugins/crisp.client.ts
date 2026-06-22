// plugins/crisp.client.ts
// declare global {
//         interface Window {
//                 $crisp: any[];
//                 CRISP_WEBSITE_ID: string;
//                 CRISP_RUNTIME_CONFIG: {
//                         locale: string;
//                 };
//         }
// }


// export default defineNuxtPlugin(() => {
//         // const { locale } = useI18n()
//         onNuxtReady(() => {
//                 // console.log(locale.value)
//                 requestAnimationFrame(() => {
//                         console.log("nuxt ready");

//                         window.$crisp = [["do", "chat:hide"]];
//                         window.CRISP_WEBSITE_ID =
//                                 "eba4212e-b88b-49b3-ab76-a2b819998327";

//                         window.CRISP_RUNTIME_CONFIG = {
//                                 locale: localStorage.getItem("language") || "en",
//                         };

//                         const s = document.createElement("script");
//                         s.src = "https://client.crisp.chat/l.js";
//                         s.async = true;

//                         document.head.appendChild(s);
//                 });
//         });
// });



import { useCrispLastMessage } from "~/composables/useCrisp";

declare global {
        interface Window {
                $crisp: any[];
                CRISP_WEBSITE_ID: string;
                CRISP_RUNTIME_CONFIG: {
                        locale: string;
                };
        }
}

export default defineNuxtPlugin(() => {
        onNuxtReady(() => {
                requestAnimationFrame(() => {
                        const crispLastMessage = useCrispLastMessage();

                        // 页面刷新后恢复缓存
                        const cache = localStorage.getItem("crisp-last-message");

                        if (cache) {
                                try {
                                        crispLastMessage.value = JSON.parse(cache);
                                } catch (error) {
                                        console.error(
                                                "Failed to parse crisp-last-message:",
                                                error,
                                        );
                                }
                        }

                        // 防止重复初始化
                        window.$crisp = window.$crisp || [];

                        // 默认隐藏聊天窗口
                        window.$crisp.push(["do", "chat:hide"]);

                        window.CRISP_WEBSITE_ID =
                                "eba4212e-b88b-49b3-ab76-a2b819998327";

                        window.CRISP_RUNTIME_CONFIG = {
                                locale: localStorage.getItem("language") || "zh",
                        };

                        // 监听客服消息
                        window.$crisp.push([
                                "on",
                                "message:received",
                                (message: any) => {
                                        if (message.from !== "operator") {
                                                return;
                                        }

                                        const data = {
                                                content: message.content,
                                                timestamp: message.timestamp,
                                                nickname: message.user?.nickname,
                                        };

                                        // 更新响应式状态
                                        crispLastMessage.value = data;

                                        // 持久化
                                        localStorage.setItem(
                                                "crisp-last-message",
                                                JSON.stringify(data),
                                        );

                                        console.log("[Crisp] Received:", data);
                                },
                        ]);

                        // 加载 Crisp SDK
                        const script = document.createElement("script");

                        script.src = "https://client.crisp.chat/l.js";
                        script.async = true;

                        document.head.appendChild(script);
                });
        });
});