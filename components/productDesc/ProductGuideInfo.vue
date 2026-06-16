<template>
  <div>
    <!-- 产品教程首页 cpjc -->
    <template v-if="nodeId === 'cpjc'">
      <div class="mb-8">
        <div class="flex items-center justify-center gap-2 mb-2">
          <Star class="w-6 h-6 text-blue-600" />
          <h2 class="text-2xl font-bold text-slate-900 text-center">易翻译产品教程</h2>
        </div>
        <p class="text-slate-500 text-center text-sm">Traneasy外贸出海专业级翻译软件</p>
      </div>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">简介</h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        易翻译助力于外贸出海客户，和不同国家的人聊天沟通的翻译服务，轻松与国际友人进行深度业务上交流。
      </p>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        支持全球主流社交聊天实时自动双向翻译、支持全球200+语种互翻、支持应用无限多开、进粉计数器、群发打粉等多种实用性功能。
      </p>
      <img :src="jc1" alt="产品教程" class="w-full rounded-xl border border-slate-200 shadow-sm mb-6" />

      <h3 class="text-lg font-semibold text-slate-800 mb-4">核心功能</h3>
      <p v-for="(item, idx) in features" :key="idx" class="text-slate-700 leading-relaxed text-indent mb-1">
        {{ item }}
      </p>
    </template>

    <!-- 新手必看 xsbk -->
    <template v-else-if="nodeId === 'xsbk'">
      <div class="flex items-center gap-2 mb-6">
        <Document class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">新手必看</h2>
      </div>
      <div v-for="(item, k) in urls" :key="k" class="text-slate-700 leading-relaxed mb-1">
        <span>{{ item.desc }}：</span>
        <a :href="item.url" target="_blank" class="text-blue-600 hover:underline">{{ item.url }}</a>
      </div>
      <div class="mb-8" v-if="!isMobile"></div>
    </template>

    <!-- 注册&登录 zcdl -->
    <template v-else-if="nodeId === 'zcdl'">
      <div class="flex items-center gap-2 mb-6">
        <Document class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">注册&amp;登录</h2>
      </div>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">易翻译注册账号</h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">① 在官网点击【注册】，进入会员账号注册页面</p>
      <img :src="jc2" alt="注册页面" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">② 按提示输入相对应的内容并勾选用户协议，在点击注册</p>
      <img :src="jc3" alt="注册填写" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">③ 易翻译仅支持邮箱注册，不限制邮箱类别；</p>
      <p class="text-slate-500 text-sm text-indent mb-4">如邮箱未收到验证码，请检查邮箱里的【垃圾箱】~【回收站】。</p>

      <h3 class="text-lg font-semibold text-slate-800 mb-4">易翻译账号官网登录</h3>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">① 在官网点击【登录】跳转登录界面</p>
      <img :src="jc4" alt="登录页面" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">② 按提示输入账号密码点击登录（注册时用户名、邮箱均可登录）</p>
      <img :src="jc5" alt="登录输入" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">③ 点击【控制台】进入会员账号管理中心，即可查看账号信息、修改密码、会员充值、创建并管理子账号等操作</p>
      <img :src="jc6" alt="控制台" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
    </template>

    <!-- 下载&安装 xzaz -->
    <template v-else-if="nodeId === 'xzaz'">
      <div class="flex items-center gap-2 mb-6">
        <Download class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">下载&amp;安装</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">① 在官网点击【软件下载】&amp;【立即下载】进入下载页面</p>
      <img :src="jc7" alt="下载页面" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">② 选择版本点击下载（软件版本之间的区别请咨询官网在线客服）</p>
      <img :src="jc8" alt="选择版本" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">③ 下载完成后，进入下载文件的路径，双击运行【易翻译setup×××.exe】</p>
      <img :src="jc9" alt="安装文件" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">安装并运行易翻译，打开软件为此页面即代表安装完成。</p>
      <img :src="jc10" alt="安装完成" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-red-500 text-sm leading-relaxed text-indent">
        温馨提示：安装包是下载后直接点击运行安装即可打开；解压包是需要先解压到某个文件夹里在打开应用程序；如有不清楚或者安装中遇到问题，请联系官网客服咨询解决。
      </p>
    </template>

    <!-- 会员信息 hyxx -->
    <template v-else-if="nodeId === 'hyxx'">
      <div class="flex items-center gap-2 mb-6">
        <User class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">会员信息</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">显示会员账号的套餐信息和有效期。</p>
      <img :src="jc11" alt="会员信息" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 会员充值 hycz -->
    <template v-else-if="nodeId === 'hycz'">
      <div class="flex items-center gap-2 mb-6">
        <Wallet class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">会员充值</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">可根据自身需求充值、续费、更换会员套餐；</p>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        先选择你所需要的会员套餐——在选择数量——然后选择支付方式跳转支付即可，所有会员套餐自动到账（
        <span class="text-red-500">注：子账号不支持充值</span>
        ）；如需其他充值方式请联系客服咨询。
      </p>
      <img :src="jc12" alt="会员充值" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 子账号管理 zzhgl -->
    <template v-else-if="nodeId === 'zzhgl'">
      <div class="flex items-center gap-2 mb-6">
        <Management class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">子账号管理</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">新增、删除子账号；给子账号分配字符资源；启用、禁用子账号；修改子账号密码等相关功能。</p>
      <img :src="jc13" alt="子账号管理" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 其他功能 xgmm -->
    <template v-else-if="nodeId === 'xgmm'">
      <div class="flex items-center gap-2 mb-6">
        <Edit class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">其他功能</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">修改当前登录账号密码、查询当前登录账号日志等更多功能。</p>
      <img :src="jc14" alt="其他功能" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 推广有礼 tgyl -->
    <template v-else-if="nodeId === 'tgyl'">
      <div class="flex items-center gap-2 mb-6">
        <Present class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">推广有礼</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">复制链接分享给朋友，注册成功并在线充值后，可获得相应的会员权限奖励。</p>
      <img :src="jc15" alt="推广有礼" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 用户中心 yhzx -->
    <template v-else-if="nodeId === 'yhzx'">
      <div class="flex items-center gap-2 mb-6">
        <User class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">用户中心</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">
        管理当前登录的翻译账号，切换翻译通道，管理子账户信息，切换翻译服务器线路（
        <span class="text-red-500">注：翻译线路只和翻译有关</span>
        ），管理编辑快捷回复等功能。
      </p>
      <img :src="jc16" alt="用户中心" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 添加应用 tjyy -->
    <template v-else-if="nodeId === 'tjyy'">
      <div class="flex items-center gap-2 mb-6">
        <DocumentAdd class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">添加应用</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        可一键添加多个应用。
        <span class="text-red-500">注：所有支持的应用都可以无限多开</span>
      </p>
      <img :src="jc17" alt="添加应用1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc18" alt="添加应用2" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc19" alt="添加应用3" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 应用管理 yygl -->
    <template v-else-if="nodeId === 'yygl'">
      <div class="flex items-center gap-2 mb-6">
        <Menu class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">应用管理</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">应用列表展开模式下，点击应用下方刷新和编辑按钮，可快速刷新应用和编辑应用名称。</p>
      <img :src="jc20" alt="应用管理1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc21" alt="应用管理2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 翻译设置 gysz -->
    <template v-else-if="nodeId === 'gysz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">翻译设置</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">在联系人对话界面点击右侧翻译设置快捷按钮，即可选择全局或单人的翻译语言，以及翻译字体大小颜色等更多功能。</p>
      <img :src="jc22" alt="翻译设置" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 快捷回复 kjhf -->
    <template v-else-if="nodeId === 'kjhf'">
      <div class="flex items-center gap-2 mb-6">
        <Iphone class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">快捷回复</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        点击软件上面的用户中心，下拉到快捷回复管理处，点击新增快捷回复创建内容（支持文字、图片等多种格式)。
        <span class="text-red-500">注：快捷回复的编辑、新增、删除、分享给子账号等相关功能皆在此处管理。</span>
      </p>
      <img :src="jc23" alt="快捷回复1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <p class="text-slate-700 leading-relaxed text-indent mb-2">
        在联系人对话窗口点击右侧快捷回复按钮展开即可一键点击快捷发送设置好的内容。
      </p>
      <img :src="jc24" alt="快捷回复2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 粉丝备注 fsbz -->
    <template v-else-if="nodeId === 'fsbz'">
      <div class="flex items-center gap-2 mb-6">
        <Notebook class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">粉丝备注</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">在联系人对话窗口点击右侧粉丝备注快捷操作按钮，即可进入粉丝画像界面，可查看并编辑粉丝信息。</p>
      <img :src="jc25" alt="粉丝备注" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 群发消息 qfxx -->
    <template v-else-if="nodeId === 'qfxx'">
      <div class="flex items-center gap-2 mb-6">
        <Message class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">群发消息</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">应用登录后的界面，点击右侧群发消息快捷操作按钮，即可对不同联系人和群组发送同一条消息。</p>
      <img :src="jc26" alt="群发消息" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- AI回复 aihf -->
    <template v-else-if="nodeId === 'aihf'">
      <div class="flex items-center gap-2 mb-6">
        <MessageBox class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">AI回复</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">点击右侧AI回复快捷操作按钮，进入并打开AI回复开关，在联系人对话界面点击收到消息后面的AI回复图标，即可生成AI回复内容。</p>
      <img :src="jc27" alt="AI回复" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 代理设置 dlsz -->
    <template v-else-if="nodeId === 'dlsz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">代理设置</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">点击打开右侧代理设置快捷操作按钮，即可设置针对当前应用的独立代理IP；亦可在软件上方的设置里进行全局代理设置。</p>
      <img :src="jc28" alt="代理设置1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc29" alt="代理设置2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 系统设置 xtsz -->
    <template v-else-if="nodeId === 'xtsz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">系统设置</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">点击软件上方设置按钮，进入软件系统设置，可快速调整横板布局、清理缓存、更新应用及更新主软件等功能。</p>
      <img :src="jc30" alt="系统设置" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 智能AI znai -->
    <template v-else-if="nodeId === 'znai'">
      <div class="flex items-center gap-2 mb-6">
        <ElementPlus class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">智能AI</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">智能问答、聊天对话、文案写手等多元化功能，懂你所言、答你说问、解你所难。</p>
      <img :src="jc31" alt="智能AI1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc32" alt="智能AI2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 图片翻译 tpfy -->
    <template v-else-if="nodeId === 'tpfy'">
      <div class="flex items-center gap-2 mb-6">
        <Refresh class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">图片翻译</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">可快速将本地图片或网页图片翻译成你所需要的语言。</p>
      <img :src="jc33" alt="图片翻译1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc34" alt="图片翻译2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 客户中心 khzx -->
    <template v-else-if="nodeId === 'khzx'">
      <div class="flex items-center gap-2 mb-6">
        <UserFilled class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">客户中心</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-2">客户中心提供查看当前账号所登录应用的进粉数据和客户详情。</p>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">主账号可查看子账号的粉丝数据及详情，不同账号之间亦可分享共享客户信息。</p>
      <img :src="jc35" alt="客户中心1" class="w-full rounded-xl border border-slate-200 shadow-sm mb-4" />
      <img :src="jc36" alt="客户中心2" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>

    <!-- 显示设置 xssz -->
    <template v-else-if="nodeId === 'xssz'">
      <div class="flex items-center gap-2 mb-6">
        <Setting class="w-5 h-5 text-blue-600" />
        <h2 class="text-xl font-bold text-slate-900">显示设置</h2>
      </div>
      <p class="text-slate-700 leading-relaxed text-indent mb-4">点击软件上方的日间模式/夜晚模式，即可快速切换软件显示的外观模式。</p>
      <img :src="jc37" alt="显示设置" class="w-full rounded-xl border border-slate-200 shadow-sm" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Link, Star, Document, Download, User, Wallet, Management, Edit,
  Present, Setting, DocumentAdd, Menu, Iphone, Notebook, Message,
  MessageBox, ElementPlus, Refresh, UserFilled
} from '@element-plus/icons-vue'

const props = defineProps({
  nodeId: {
    type: String,
    default: 'cpjc'
  }
})

const isMobile = ref(false)

import { onMounted } from 'vue'
onMounted(() => {
  isMobile.value = !(window.screen.width >= 768)
})

// 图片走 public 目录
const jc1  = '/images/guide/jc1.png'
const jc2  = '/images/guide/jc2.png'
const jc3  = '/images/guide/jc3.png'
const jc4  = '/images/guide/jc4.png'
const jc5  = '/images/guide/jc5.png'
const jc6  = '/images/guide/jc6.png'
const jc7  = '/images/guide/jc7.png'
const jc8  = '/images/guide/jc8.png'
const jc9  = '/images/guide/jc9.png'
const jc10 = '/images/guide/jc10.png'
const jc11 = '/images/guide/jc11.png'
const jc12 = '/images/guide/jc12.png'
const jc13 = '/images/guide/jc13.png'
const jc14 = '/images/guide/jc14.png'
const jc15 = '/images/guide/jc15.png'
const jc16 = '/images/guide/jc16.png'
const jc17 = '/images/guide/jc17.png'
const jc18 = '/images/guide/jc18.png'
const jc19 = '/images/guide/jc19.png'
const jc20 = '/images/guide/jc20.png'
const jc21 = '/images/guide/jc21.png'
const jc22 = '/images/guide/jc22.png'
const jc23 = '/images/guide/jc23.png'
const jc24 = '/images/guide/jc24.png'
const jc25 = '/images/guide/jc25.png'
const jc26 = '/images/guide/jc26.png'
const jc27 = '/images/guide/jc27.png'
const jc28 = '/images/guide/jc28.png'
const jc29 = '/images/guide/jc29.png'
const jc30 = '/images/guide/jc30.png'
const jc31 = '/images/guide/jc31.png'
const jc32 = '/images/guide/jc32.png'
const jc33 = '/images/guide/jc33.png'
const jc34 = '/images/guide/jc34.png'
const jc35 = '/images/guide/jc35.png'
const jc36 = '/images/guide/jc36.png'
const jc37 = '/images/guide/jc37.png'

const features = [
  '★支持全球主流20+款社交APP',
  '★支持deepl、谷歌、微软等多种翻译通道',
  '★支持全球200+语种互相翻译',
  '★支持单人翻译语言独立设置',
  '★支持应用无限多开',
  '★支持无限子账号管理',
  '★支持语音翻译、图片翻译',
  '★支持文本、图片快捷回复',
  '★支持群发打粉、计数器',
  '★支持AI自动回复',
  '★支持粉丝画像',
  '★支持自定义IP代理',
]

const urls = [
  { desc: '易翻译官网', url: 'www.traneasy.com.cn' },
  { desc: '易翻译下载', url: 'https://www.traneasy.com.cn/#/download' },
  { desc: '易翻译注册', url: 'https://www.traneasy.com.cn/#/login?type=2' },
  { desc: '易翻译登录', url: 'https://www.traneasy.com.cn/#/login?type=1' },
  { desc: '易翻译客服验证', url: 'https://www.traneasy.com.cn/#/contactUs' },
]
</script>

<style scoped>
.text-indent {
  text-indent: 2em;
}
</style>
