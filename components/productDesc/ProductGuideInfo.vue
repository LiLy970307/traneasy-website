<template>
  <div>
    <!-- 产品教程首页 cpjc -->
    <template v-if="nodeId === 'cpjc'">
      <div class="mb-8">
        <div class="flex items-center justify-center gap-2 mb-2">
          <Star class="w-6 h-6 text-blue-600" />
          <h2 class="text-2xl font-bold text-slate-900 text-center">
            {{ $t("productGuide.info.pageTitle") }}
          </h2>
        </div>
        <p class="text-slate-500 text-center text-sm">
          {{ $t("productGuide.info.pageSubtitle") }}
        </p>
      </div>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">
        {{ $t("productGuide.info.intro") }}
      </h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.introDesc1") }}
      </p>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.introDesc2") }}
      </p>
      <img
        :src="jc1"
        alt="产品教程"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-6"
      />

      <h3 class="text-lg font-semibold text-slate-800 mb-4">
        {{ $t("productGuide.info.coreFeatures") }}
      </h3>
      <p
        v-for="(item, idx) in features"
        :key="idx"
        class="text-slate-700 leading-relaxed text-indent mb-1"
      >
        {{ $t(item) }}
      </p>
    </template>
    <template v-else-if="nodeId === 'xsbk'">
      <div class="flex items-center gap-2 mb-6">
        <Document class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.newbieGuide") }}
        </h2>
      </div>
      <div
        v-for="(item, k) in urls"
        :key="k"
        class="text-slate-700 leading-relaxed mb-1"
      >
        <span>{{ $t(item.desc) }}：</span>
        <a
          :href="item.url"
          target="_blank"
          class="text-blue-600 hover:underline"
          >{{ item.url }}</a
        >
      </div>
      <div class="mb-8" v-if="!isMobile"></div>
    </template>

    <!-- 注册&登录 zcdl -->
    <template v-else-if="nodeId === 'zcdl'">
      <div class="flex items-center gap-2 mb-6">
        <Document class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.registerLogin") }}
        </h2>
      </div>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">
        {{ $t("productGuide.info.registerTitle") }}
      </h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.registerStep1") }}
      </p>
      <img
        :src="jc2"
        alt="注册页面"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.registerStep2") }}
      </p>
      <img
        :src="jc3"
        alt="注册填写"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.registerStep3") }}
      </p>
      <p class="text-slate-500 text-sm text-indent mb-4">
        {{ $t("productGuide.info.registerHint") }}
      </p>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">
        {{ $t("productGuide.info.loginTitle") }}
      </h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.loginStep1") }}
      </p>
      <img
        :src="jc4"
        alt="登录页面"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.loginStep2") }}
      </p>
      <img
        :src="jc5"
        alt="登录输入"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.loginStep3") }}
      </p>
      <img
        :src="jc6"
        alt="控制台"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
    </template>

    <!-- 下载&安装 xzaz -->
    <template v-else-if="nodeId === 'xzaz'">
      <div class="flex items-center gap-2 mb-6">
        <!-- <Download class="w-5 h-5 text-blue-600" /> -->
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.downloadInstall") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.downloadStep1") }}
      </p>
      <img
        :src="jc7"
        alt="下载页面"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.downloadStep2") }}
      </p>
      <img
        :src="jc8"
        alt="选择版本"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.downloadStep3") }}
      </p>
      <img
        :src="jc9"
        alt="安装文件"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.downloadStep4") }}
      </p>
      <img
        :src="jc10"
        alt="安装完成"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-red-500 text-sm leading-relaxed text-indent">
        {{ $t("productGuide.info.downloadWarning") }}
      </p>
    </template>

    <!-- 会员信息 hyxx -->
    <template v-else-if="nodeId === 'hyxx'">
      <div class="flex items-center gap-2 mb-6">
        <User class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.memberInfo") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.memberInfoDesc") }}
      </p>
      <img
        :src="jc11"
        alt="会员信息"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 会员充值 hycz -->
    <template v-else-if="nodeId === 'hycz'">
      <div class="flex items-center gap-2 mb-6">
        <Wallet class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.memberRecharge") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.rechargeDesc1") }}
      </p>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.rechargeDesc2") }}
        <span class="text-red-500">{{
          $t("productGuide.info.rechargeNote")
        }}</span>
        {{ $t("productGuide.info.rechargeDesc3") }}
      </p>
      <img
        :src="jc12"
        alt="会员充值"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 子账号管理 zzhgl -->
    <template v-else-if="nodeId === 'zzhgl'">
      <div class="flex items-center gap-2 mb-6">
        <Management class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.subAccountMgmt") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.subAccountMgmtDesc") }}
      </p>
      <img
        :src="jc13"
        alt="子账号管理"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 其他功能 xgmm -->
    <template v-else-if="nodeId === 'xgmm'">
      <div class="flex items-center gap-2 mb-6">
        <Edit class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.otherFeatures") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.otherFeaturesDesc") }}
      </p>
      <img
        :src="jc14"
        alt="其他功能"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 推广有礼 tgyl -->
    <template v-else-if="nodeId === 'tgyl'">
      <div class="flex items-center gap-2 mb-6">
        <Present class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.referralRewards") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.referralRewardsDesc") }}
      </p>
      <img
        :src="jc15"
        alt="推广有礼"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 用户中心 yhzx -->
    <template v-else-if="nodeId === 'yhzx'">
      <div class="flex items-center gap-2 mb-6">
        <User class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.userCenter") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.userCenterDesc1") }}
        <span class="text-red-500">{{
          $t("productGuide.info.userCenterNote")
        }}</span>
        {{ $t("productGuide.info.userCenterDesc2") }}
      </p>
      <img
        :src="jc16"
        alt="用户中心"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 添加应用 tjyy -->
    <template v-else-if="nodeId === 'tjyy'">
      <div class="flex items-center gap-2 mb-6">
        <DocumentAdd class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.addApp") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.addAppDesc") }}
        <span class="text-red-500">{{
          $t("productGuide.info.addAppNote")
        }}</span>
      </p>
      <img
        :src="jc17"
        alt="添加应用1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc18"
        alt="添加应用2"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc19"
        alt="添加应用3"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 应用管理 yygl -->
    <template v-else-if="nodeId === 'yygl'">
      <div class="flex items-center gap-2 mb-6">
        <Menu class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.appMgmt") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.appMgmtDesc") }}
      </p>
      <img
        :src="jc20"
        alt="应用管理1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc21"
        alt="应用管理2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 翻译设置 gysz -->
    <template v-else-if="nodeId === 'gysz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.translationSettings") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.translationSettingsDesc") }}
      </p>
      <img
        :src="jc22"
        alt="翻译设置"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 快捷回复 kjhf -->
    <template v-else-if="nodeId === 'kjhf'">
      <div class="flex items-center gap-2 mb-6">
        <Iphone class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.quickReply") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.quickReplyDesc1") }}
        <span class="text-red-500">{{
          $t("productGuide.info.quickReplyNote")
        }}</span>
      </p>
      <img
        :src="jc23"
        alt="快捷回复1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.quickReplyDesc2") }}
      </p>
      <img
        :src="jc24"
        alt="快捷回复2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 粉丝备注 fsbz -->
    <template v-else-if="nodeId === 'fsbz'">
      <div class="flex items-center gap-2 mb-6">
        <Notebook class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.fanNotes") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.fanNotesDesc") }}
      </p>
      <img
        :src="jc25"
        alt="粉丝备注"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 群发消息 qfxx -->
    <template v-else-if="nodeId === 'qfxx'">
      <div class="flex items-center gap-2 mb-6">
        <Message class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.massMessage") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.massMessageDesc") }}
      </p>
      <img
        :src="jc26"
        alt="群发消息"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- AI回复 aihf -->
    <template v-else-if="nodeId === 'aihf'">
      <div class="flex items-center gap-2 mb-6">
        <MessageBox class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.aiReply") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.aiReplyDesc") }}
      </p>
      <img
        :src="jc27"
        alt="AI回复"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 代理设置 dlsz -->
    <template v-else-if="nodeId === 'dlsz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.proxySettings") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.proxySettingsDesc") }}
      </p>
      <img
        :src="jc28"
        alt="代理设置1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc29"
        alt="代理设置2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 系统设置 xtsz -->
    <template v-else-if="nodeId === 'xtsz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.systemSettings") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.systemSettingsDesc") }}
      </p>
      <img
        :src="jc30"
        alt="系统设置"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 智能AI znai -->
    <template v-else-if="nodeId === 'znai'">
      <div class="flex items-center gap-2 mb-6">
        <ElementPlus class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.smartAI") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.smartAIDesc") }}
      </p>
      <img
        :src="jc31"
        alt="智能AI1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc32"
        alt="智能AI2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 图片翻译 tpfy -->
    <template v-else-if="nodeId === 'tpfy'">
      <div class="flex items-center gap-2 mb-6">
        <Refresh class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.imageTranslation") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.imageTranslationDesc") }}
      </p>
      <img
        :src="jc33"
        alt="图片翻译1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc34"
        alt="图片翻译2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 客户中心 khzx -->
    <template v-else-if="nodeId === 'khzx'">
      <div class="flex items-center gap-2 mb-6">
        <UserFilled class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.customerCenter") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        {{ $t("productGuide.info.customerCenterDesc1") }}
      </p>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.customerCenterDesc2") }}
      </p>
      <img
        :src="jc35"
        alt="客户中心1"
        class="w-full rounded-xl border border-slate-200 shadow-sm mb-4"
      />
      <img
        :src="jc36"
        alt="客户中心2"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>

    <!-- 显示设置 xssz -->
    <template v-else-if="nodeId === 'xssz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">
          {{ $t("productGuide.info.displaySettings") }}
        </h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        {{ $t("productGuide.info.displaySettingsDesc") }}
      </p>
      <img
        :src="jc37"
        alt="显示设置"
        class="w-full rounded-xl border border-slate-200 shadow-sm"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Link,
  Star,
  Document,
  Download,
  User,
  Wallet,
  Management,
  Edit,
  Present,
  Setting,
  DocumentAdd,
  Menu,
  Iphone,
  Notebook,
  Message,
  MessageBox,
  ElementPlus,
  Refresh,
  UserFilled,
} from "@element-plus/icons-vue";

const props = defineProps({
  nodeId: {
    type: String,
    default: "cpjc",
  },
});

const isMobile = ref(false);

import { onMounted } from "vue";
onMounted(() => {
  isMobile.value = !(window.screen.width >= 768);
});

// 图片走 public 目录
const jc1 = "/images/guide/jc1.png";
const jc2 = "/images/guide/jc2.png";
const jc3 = "/images/guide/jc3.png";
const jc4 = "/images/guide/jc4.png";
const jc5 = "/images/guide/jc5.png";
const jc6 = "/images/guide/jc6.png";
const jc7 = "/images/guide/jc7.png";
const jc8 = "/images/guide/jc8.png";
const jc9 = "/images/guide/jc9.png";
const jc10 = "/images/guide/jc10.png";
const jc11 = "/images/guide/jc11.png";
const jc12 = "/images/guide/jc12.png";
const jc13 = "/images/guide/jc13.png";
const jc14 = "/images/guide/jc14.png";
const jc15 = "/images/guide/jc15.png";
const jc16 = "/images/guide/jc16.png";
const jc17 = "/images/guide/jc17.png";
const jc18 = "/images/guide/jc18.png";
const jc19 = "/images/guide/jc19.png";
const jc20 = "/images/guide/jc20.png";
const jc21 = "/images/guide/jc21.png";
const jc22 = "/images/guide/jc22.png";
const jc23 = "/images/guide/jc23.png";
const jc24 = "/images/guide/jc24.png";
const jc25 = "/images/guide/jc25.png";
const jc26 = "/images/guide/jc26.png";
const jc27 = "/images/guide/jc27.png";
const jc28 = "/images/guide/jc28.png";
const jc29 = "/images/guide/jc29.png";
const jc30 = "/images/guide/jc30.png";
const jc31 = "/images/guide/jc31.png";
const jc32 = "/images/guide/jc32.png";
const jc33 = "/images/guide/jc33.png";
const jc34 = "/images/guide/jc34.png";
const jc35 = "/images/guide/jc35.png";
const jc36 = "/images/guide/jc36.png";
const jc37 = "/images/guide/jc37.png";

const features = [
  "productGuide.info.feature1",
  "productGuide.info.feature2",
  "productGuide.info.feature3",
  "productGuide.info.feature4",
  "productGuide.info.feature5",
  "productGuide.info.feature6",
  "productGuide.info.feature7",
  "productGuide.info.feature8",
  "productGuide.info.feature9",
  "productGuide.info.feature10",
  "productGuide.info.feature11",
  "productGuide.info.feature12",
];

const urls = [
  { desc: "productGuide.info.urlOfficialSite", url: "www.traneasy.com.cn" },
  {
    desc: "productGuide.info.urlDownload",
    url: "https://www.traneasy.com.cn/#/download",
  },
  {
    desc: "productGuide.info.urlRegister",
    url: "https://www.traneasy.com.cn/#/login?type=2",
  },
  {
    desc: "productGuide.info.urlLogin",
    url: "https://www.traneasy.com.cn/#/login?type=1",
  },
  {
    desc: "productGuide.info.urlVerify",
    url: "https://www.traneasy.com.cn/#/contactUs",
  },
];
</script>

<style scoped>
.text-indent {
  text-indent: 2em;
}
</style>
