// plugins/crisp.client.ts
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
                        console.log("nuxt ready");

                        window.$crisp = [];
                        window.CRISP_WEBSITE_ID =
                                "eba4212e-b88b-49b3-ab76-a2b819998327";

                        window.CRISP_RUNTIME_CONFIG = {
                                locale: localStorage.getItem("language") || "zh",
                        };

                        const s = document.createElement("script");
                        s.src = "https://client.crisp.chat/l.js";
                        s.async = true;

                        document.head.appendChild(s);
                });
        });
});
// export default defineNuxtPlugin(() => {
//         // 1. 先创建脚本，不提前初始化变量（核心改动）
//         const script = document.createElement("script");
//         script.src = "https://client.crisp.chat/l.js";
//         script.async = true;

//         // 2. 脚本加载完成后，再初始化 Crisp 配置（彻底解决时序问题）
//         script.onload = () => {
//                 window.$crisp = [];
//                 window.CRISP_WEBSITE_ID = "eba4212e-b88b-49b3-ab76-a2b819998327";

//                 const lang1 = localStorage.getItem("language") || "zh";
//                 window.CRISP_RUNTIME_CONFIG = {
//                         locale: lang1,
//                 };

//                 // 设置网页标题
//                 document.title = lang1 === "zh" ? "易翻译" : "Traneasy";
//         };

//         // 3. 捕获脚本加载失败，增加兜底提示（便于排查）
//         script.onerror = () => {
//                 console.error("Crisp 客服脚本加载失败");
//         };

//         // 插入脚本
//         document.head.appendChild(script);
// });

