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
          <span class="flex-1">{{ $t(item.label) }}</span>
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
                <span class="flex-1">{{ $t(child.label) }}</span>
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
                  <span>{{ $t(grandchild.label) }}</span>
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
              <span>{{ $t(child.label) }}</span>
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
    label: "productGuide.tree.root",
    icon: Star,
    id: "cpjc",
  },
  {
    label: "productGuide.tree.gettingStarted",
    icon: Promotion,
    children: [
      { label: "productGuide.tree.newbieGuide", icon: Document, id: "xsbk" },
      { label: "productGuide.tree.registerLogin", icon: Document, id: "zcdl" },
      { label: "productGuide.tree.downloadInstall", icon: Download, id: "xzaz" },
    ],
  },
  {
    label: "productGuide.tree.featureDetails",
    icon: Search,
    children: [
      {
        label: "productGuide.tree.console",
        icon: Platform,
        children: [
          { label: "productGuide.tree.memberInfo", icon: User, id: "hyxx" },
          { label: "productGuide.tree.memberRecharge", icon: Wallet, id: "hycz" },
          { label: "productGuide.tree.subAccountMgmt", icon: Management, id: "zzhgl" },
          { label: "productGuide.tree.otherFeatures", icon: Edit, id: "xgmm" },
          { label: "productGuide.tree.referralRewards", icon: Present, id: "tgyl" },
        ],
      },
      {
        label: "productGuide.tree.client",
        icon: Platform,
        children: [
          { label: "productGuide.tree.userCenter", icon: User, id: "yhzx" },
          { label: "productGuide.tree.addApp", icon: DocumentAdd, id: "tjyy" },
          { label: "productGuide.tree.appMgmt", icon: Menu, id: "yygl" },
          { label: "productGuide.tree.translationSettings", icon: Setting, id: "gysz" },
          { label: "productGuide.tree.quickReply", icon: Iphone, id: "kjhf" },
          { label: "productGuide.tree.fanNotes", icon: Notebook, id: "fsbz" },
          { label: "productGuide.tree.massMessage", icon: Message, id: "qfxx" },
          { label: "productGuide.tree.aiReply", icon: MessageBox, id: "aihf" },
          { label: "productGuide.tree.proxySettings", icon: Setting, id: "dlsz" },
          { label: "productGuide.tree.systemSettings", icon: Setting, id: "xtsz" },
        ],
      },
    ],
  },
  {
    label: "productGuide.tree.specialFeatures",
    icon: Star,
    children: [
      { label: "productGuide.tree.smartAI", icon: ElementPlus, id: "znai" },
      { label: "productGuide.tree.imageTranslation", icon: Refresh, id: "tpfy" },
      { label: "productGuide.tree.customerCenter", icon: UserFilled, id: "khzx" },
      { label: "productGuide.tree.displaySettings", icon: Setting, id: "xssz" },
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
