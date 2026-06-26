<template>
  <div class="product-guide-page">
    <!-- 主体内容 -->
    <div class="max-w-7xl mx-auto mt-[80px] px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- 左侧树形导航 (桌面) -->
        <!-- 左侧树形导航 (桌面) - 固定500px，不参与滚动 -->
        <aside class="hidden lg:block w-64 shrink-0">
          <div
            class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-y-auto h-[700px]"
          >
            <div class="p-3">
              <ProductGuideTree @select="handleSelect" ref="treeRef" />
            </div>
          </div>
        </aside>

        <!-- 右侧内容 - 可滚动 -->
        <main class="flex-1 min-w-0 overflow-y-auto h-[700px]">
          <div
            class="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm"
          >
            <ProductGuideInfo :node-id="currentNodeId" :key="currentNodeId" />
          </div>
        </main>
      </div>

      <!-- 移动端下拉选择 -->
      <div class="lg:hidden mb-6">
        <label class="block text-sm font-medium text-slate-700 mb-2"
          >{{ $t("pages.productGuide.selectFeature") }}</label
        >
        <select
          v-model="currentNodeId"
          @change="handleMobileSelect"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <optgroup :label="$t('pages.productGuide.optgroupTutorial')">
            <option value="cpjc">{{ $t("productGuide.tree.root") }}</option>
          </optgroup>
          <optgroup :label="$t('pages.productGuide.optgroupGettingStarted')">
            <option value="xsbk">{{ $t("productGuide.tree.newbieGuide") }}</option>
            <option value="zcdl">{{ $t("productGuide.tree.registerLogin") }}</option>
            <option value="xzaz">{{ $t("productGuide.tree.downloadInstall") }}</option>
          </optgroup>
          <optgroup :label="$t('pages.productGuide.optgroupConsole')">
            <option value="hyxx">{{ $t("productGuide.tree.memberInfo") }}</option>
            <option value="hycz">{{ $t("productGuide.tree.memberRecharge") }}</option>
            <option value="zzhgl">{{ $t("productGuide.tree.subAccountMgmt") }}</option>
            <option value="xgmm">{{ $t("productGuide.tree.otherFeatures") }}</option>
            <option value="tgyl">{{ $t("productGuide.tree.referralRewards") }}</option>
          </optgroup>
          <optgroup :label="$t('pages.productGuide.optgroupClient')">
            <option value="yhzx">{{ $t("productGuide.tree.userCenter") }}</option>
            <option value="tjyy">{{ $t("productGuide.tree.addApp") }}</option>
            <option value="yygl">{{ $t("productGuide.tree.appMgmt") }}</option>
            <option value="gysz">{{ $t("productGuide.tree.translationSettings") }}</option>
            <option value="kjhf">{{ $t("productGuide.tree.quickReply") }}</option>
            <option value="fsbz">{{ $t("productGuide.tree.fanNotes") }}</option>
            <option value="qfxx">{{ $t("productGuide.tree.massMessage") }}</option>
            <option value="aihf">{{ $t("productGuide.tree.aiReply") }}</option>
            <option value="dlsz">{{ $t("productGuide.tree.proxySettings") }}</option>
            <option value="xtsz">{{ $t("productGuide.tree.systemSettings") }}</option>
          </optgroup>
          <optgroup :label="$t('pages.productGuide.optgroupSpecial')">
            <option value="znai">{{ $t("productGuide.tree.smartAI") }}</option>
            <option value="tpfy">{{ $t("productGuide.tree.imageTranslation") }}</option>
            <option value="khzx">{{ $t("productGuide.tree.customerCenter") }}</option>
            <option value="xssz">{{ $t("productGuide.tree.displaySettings") }}</option>
          </optgroup>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Reading } from "@element-plus/icons-vue";
import ProductGuideTree from "../components/productDesc/ProductGuideTree.vue";
import ProductGuideInfo from "../components/productDesc/ProductGuideInfo.vue";

const currentNodeId = ref("cpjc");

function handleSelect(id) {
  currentNodeId.value = id;
}

function handleMobileSelect(event) {
  currentNodeId.value = event.target.value;
}
</script>

<style scoped>
.product-guide-page {
  min-height: 60vh;
}
</style>
