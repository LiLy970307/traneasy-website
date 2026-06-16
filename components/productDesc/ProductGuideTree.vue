<template>
  <div class="guide-tree">
    <div class="space-y-1">
      <div v-for="item in treeData" :key="item.id || item.label">
        <!-- 一级节点 -->
        <div
          @click="toggleNode(item)"
          :class="[
            'flex items-center gap-2 px-4 py-2.5 rounded-lg cursor-pointer transition-colors text-sm',
            isActive(item)
              ? 'bg-blue-50 text-blue-700 font-medium'
              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900',
          ]"
        >
          <component :is="item.icon" class="w-4 h-4 shrink-0" />
          <span class="flex-1">{{ item.label }}</span>
          <ArrowRight
            v-if="item.children"
            :class="[
              'w-3.5 h-3.5 text-slate-400 transition-transform duration-200',
              expandedNodes.has(item.id || item.label) ? 'rotate-90' : '',
            ]"
          />
        </div>

        <!-- 二级节点 -->
        <div
          v-if="item.children && expandedNodes.has(item.id || item.label)"
          class="ml-3 mt-0.5 space-y-0.5 border-l-2 border-slate-100 pl-2"
        >
          <div v-for="child in item.children" :key="child.id || child.label">
            <div v-if="child.children">
              <!-- 有三级菜单的二级节点 -->
              <div
                @click="toggleNode(child)"
                :class="[
                  'flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm',
                  isActive(child)
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
                ]"
              >
                <component :is="child.icon" class="w-3.5 h-3.5 shrink-0" />
                <span class="flex-1">{{ child.label }}</span>
                <ArrowRight
                  :class="[
                    'w-3 h-3 text-slate-400 transition-transform duration-200',
                    expandedNodes.has(child.id || child.label)
                      ? 'rotate-90'
                      : '',
                  ]"
                />
              </div>
              <!-- 三级节点 -->
              <div
                v-if="expandedNodes.has(child.id || child.label)"
                class="ml-3 mt-0.5 space-y-0.5 border-l-2 border-slate-100 pl-2"
              >
                <div
                  v-for="grandchild in child.children"
                  :key="grandchild.id"
                  @click="selectNode(grandchild)"
                  :class="[
                    'flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm',
                    activeId === grandchild.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900',
                  ]"
                >
                  <component :is="grandchild.icon" class="w-3 h-3 shrink-0" />
                  <span>{{ grandchild.label }}</span>
                </div>
              </div>
            </div>
            <!-- 无子级的二级节点 -->
            <div
              v-else
              @click="selectNode(child)"
              :class="[
                'flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors text-sm',
                activeId === child.id
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
              ]"
            >
              <component :is="child.icon" class="w-3.5 h-3.5 shrink-0" />
              <span>{{ child.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  Star,
  Promotion,
  Document,
  Download,
  Search,
  Platform,
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
  ArrowRight,
} from "@element-plus/icons-vue";

const emit = defineEmits(["select"]);

const activeId = ref("cpjc");
const expandedNodes = ref(new Set(["cpjc"]));

const treeData = [
  {
    label: "易翻译产品教程",
    icon: Star,
    id: "cpjc",
  },
  {
    label: "入门指南",
    icon: Promotion,
    children: [
      { label: "新手必看", icon: Document, id: "xsbk" },
      { label: "注册&登录", icon: Document, id: "zcdl" },
      { label: "下载&安装", icon: Download, id: "xzaz" },
    ],
  },
  {
    label: "功能详解",
    icon: Search,
    children: [
      {
        label: "易翻译官网控制台",
        icon: Platform,
        children: [
          { label: "会员信息", icon: User, id: "hyxx" },
          { label: "会员充值", icon: Wallet, id: "hycz" },
          { label: "子账号管理", icon: Management, id: "zzhgl" },
          { label: "其他功能", icon: Edit, id: "xgmm" },
          { label: "推广有礼", icon: Present, id: "tgyl" },
        ],
      },
      {
        label: "易翻译客户端",
        icon: Platform,
        children: [
          { label: "用户中心", icon: User, id: "yhzx" },
          { label: "添加应用", icon: DocumentAdd, id: "tjyy" },
          { label: "应用管理", icon: Menu, id: "yygl" },
          { label: "翻译设置", icon: Setting, id: "gysz" },
          { label: "快捷回复", icon: Iphone, id: "kjhf" },
          { label: "粉丝备注", icon: Notebook, id: "fsbz" },
          { label: "群发消息", icon: Message, id: "qfxx" },
          { label: "AI回复", icon: MessageBox, id: "aihf" },
          { label: "代理设置", icon: Setting, id: "dlsz" },
          { label: "系统设置", icon: Setting, id: "xtsz" },
        ],
      },
    ],
  },
  {
    label: "特色功能",
    icon: Star,
    children: [
      { label: "智能AI", icon: ElementPlus, id: "znai" },
      { label: "图片翻译", icon: Refresh, id: "tpfy" },
      { label: "客户中心", icon: UserFilled, id: "khzx" },
      { label: "显示设置", icon: Setting, id: "xssz" },
    ],
  },
];

function isActive(item) {
  if (item.id === activeId.value) return true;
  // 如果当前激活的节点是这个item的子级
  if (item.children) {
    return item.children.some((c) => {
      if (c.id === activeId.value) return true;
      if (c.children) return c.children.some((gc) => gc.id === activeId.value);
      return false;
    });
  }
  return false;
}

function isTopLevelAncestorOf(item, targetKey) {
  // 判断 item（一级节点）是否包含 targetKey
  if ((item.id || item.label) === targetKey) return true;
  if (item.children) {
    for (const child of item.children) {
      if ((child.id || child.label) === targetKey) return true;
      if (child.children) {
        for (const gc of child.children) {
          if ((gc.id || gc.label) === targetKey) return true;
        }
      }
    }
  }
  return false;
}

function getAllLevelKeys(item) {
  const keys = [item.id || item.label];
  if (item.children) {
    for (const c of item.children) {
      keys.push(c.id || c.label);
      if (c.children) {
        for (const gc of c.children) keys.push(gc.id || gc.label);
      }
    }
  }
  return keys;
}

function toggleNode(item) {
  const key = item.id || item.label;
  const newSet = new Set(expandedNodes.value);

  if (newSet.has(key)) {
    // 点击已展开的节点，折叠它
    newSet.delete(key);
  } else {
    // accordion：找到 item 所属的一级节点，只保留它展开
    const topLevelIndex = treeData.findIndex((t) =>
      isTopLevelAncestorOf(t, key),
    );
    if (topLevelIndex !== -1) {
      // 清空所有展开
      newSet.clear();
      // 展开当前一级节点及其路径上的所有节点
      for (const k of getAllLevelKeys(treeData[topLevelIndex])) {
        newSet.add(k);
      }
    } else {
      newSet.add(key);
    }
  }
  expandedNodes.value = newSet;

  // 如果是含子级的一级/二级节点，点展开时把第一个可选子节点选中
  if (item.children) {
    const firstLeaf = findFirstLeaf(item.children);
    if (firstLeaf) {
      activeId.value = firstLeaf.id;
      emit("select", firstLeaf.id);
    }
  }
}

function selectNode(item) {
  activeId.value = item.id;
  emit("select", item.id);
}

function findFirstLeaf(children) {
  for (const child of children) {
    if (child.id) return child;
    if (child.children) {
      const found = findFirstLeaf(child.children);
      if (found) return found;
    }
  }
  return null;
}
</script>
