<template>
  <main class="min-h-screen bg-gradient-to-b from-blue-50/40 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
      <article
        class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 sm:p-10 lg:p-12"
      >
        <div class="text-center mb-10">
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-5"
          >
            <svg
              class="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            易翻译官方严正声明
          </h1>
          <p class="text-slate-400 text-sm">更新日期：2026 年 6 月</p>
        </div>

        <div class="space-y-6 text-slate-600 leading-relaxed">
          <p class="font-medium text-slate-700">尊敬的易翻译用户：</p>

          <p>
            近期，我司发现有不法分子利用以下及类似域名，假冒易翻译官方网站，诱导用户下载含有病毒或木马的套壳安装包：
          </p>

          <!-- Fake domain list -->
          <div
            class="bg-red-50/60 rounded-xl p-5 space-y-1.5 border border-red-100"
          >
            <p
              v-for="domain in fakeDomains"
              :key="domain"
              class="font-mono text-sm text-red-600"
            >
              {{ domain }}
            </p>
            <p class="font-mono text-sm text-slate-400">……</p>
          </div>

          <p>
            上述网站及其传播的任何软件、安装包，均与易翻译无关，属于<strong
              class="text-red-600"
              >网络诈骗行为</strong
            >。用户下载并使用相关软件，可能导致：电脑中毒、个人信息泄露、设备被远程控制，甚至遭受敲诈勒索。
          </p>

          <div
            class="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-800 font-medium"
          >
            <p>⚠️ 如不慎下载来历不明的软件，请务必重装电脑系统！</p>
          </div>

          <!-- Declaration -->
          <h2 class="text-xl font-bold text-slate-800 pt-4">
            易翻译郑重声明如下：
          </h2>

          <div class="space-y-5">
            <div class="flex gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm"
                >1</span
              >
              <div>
                <h3 class="font-semibold text-slate-700 mb-1">唯一官方网站</h3>
                <p>易翻译唯一官方网站为：</p>
                <a
                  href="https://www.traneasy.com.cn"
                  target="_blank"
                  class="inline-block mt-1 font-mono text-blue-600 hover:text-blue-700 underline underline-offset-2"
                >
                  https://www.traneasy.com.cn
                </a>
                <p class="mt-2">
                  请勿通过不明链接或第三方网站下载与易翻译相关的任何软件。
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm"
                >2</span
              >
              <div>
                <h3 class="font-semibold text-slate-700 mb-1">
                  未授权任何代理充值
                </h3>
                <p>
                  易翻译从未授权任何个人或机构代为充值。请用户务必通过易翻译官方渠道进行充值操作。
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm"
                >3</span
              >
              <div>
                <h3 class="font-semibold text-slate-700 mb-1">
                  已向执法部门提交相关资料
                </h3>
                <p>
                  我司已就上述诈骗行为向公安机关提交相关证据材料。案件进入调查程序后，我司将依法追究相关人员的法律责任。
                </p>
              </div>
            </div>
          </div>

          <p class="pt-2">
            请广大用户务必提高警惕，认准官方渠道，避免造成不必要的财产损失及个人信息泄露。感谢您一直以来对易翻译的信任与支持。易翻译始终将安全放在首位，筑牢安全防线，持续提供安全、专业、稳定的翻译服务。
          </p>

          <div class="text-center pt-6 border-t border-slate-100 mt-8">
            <p class="text-lg font-bold text-slate-800 mb-1">特此声明！</p>
            <p class="text-slate-500">易翻译团队</p>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const fakeDomains = [
  "https://pc-yifanyi.com/",
  "https://www.aiyifanyi.org/",
  "https://yifanyi.cc",
  "https://www.traneasya.com.cn",
  "https://transeasy.win",
  "https://www.yifanyi.org.cn/",
];
</script>
