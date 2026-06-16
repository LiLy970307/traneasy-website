<template>
  <div class="product-guide-page">
    <!-- 主体内容 -->
    <div class="max-w-7xl mx-auto mt-[120px] px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- 左侧树形导航 (桌面) -->
        <aside class="hidden lg:block w-64 shrink-0">
          <div
            class="sticky top-8 bg-white rounded-xl border border-slate-200 p-3 shadow-sm"
          >
            <ProductGuideTree @select="handleSelect" ref="treeRef" />
          </div>
        </aside>

        <!-- 右侧内容 -->
        <main class="flex-1 min-w-0">
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
          >选择功能</label
        >
        <select
          v-model="currentNodeId"
          @change="handleMobileSelect"
          class="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <optgroup label="产品教程">
            <option value="cpjc">易翻译产品教程</option>
          </optgroup>
          <optgroup label="入门指南">
            <option value="xsbk">新手必看</option>
            <option value="zcdl">注册&登录</option>
            <option value="xzaz">下载&安装</option>
          </optgroup>
          <optgroup label="功能详解 - 官网控制台">
            <option value="hyxx">会员信息</option>
            <option value="hycz">会员充值</option>
            <option value="zzhgl">子账号管理</option>
            <option value="xgmm">其他功能</option>
            <option value="tgyl">推广有礼</option>
          </optgroup>
          <optgroup label="功能详解 - 客户端">
            <option value="yhzx">用户中心</option>
            <option value="tjyy">添加应用</option>
            <option value="yygl">应用管理</option>
            <option value="gysz">翻译设置</option>
            <option value="kjhf">快捷回复</option>
            <option value="fsbz">粉丝备注</option>
            <option value="qfxx">群发消息</option>
            <option value="aihf">AI回复</option>
            <option value="dlsz">代理设置</option>
            <option value="xtsz">系统设置</option>
          </optgroup>
          <optgroup label="特色功能">
            <option value="znai">智能AI</option>
            <option value="tpfy">图片翻译</option>
            <option value="khzx">客户中心</option>
            <option value="xssz">显示设置</option>
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
