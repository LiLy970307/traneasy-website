<template>
  <ProductDetail
    title="跨境团队协作管理"
    subtitle="从单打独斗到军团作战，打造高执行力的跨境铁军"
    description="为企业打造了完善的团队协作架构，通过主子账号体系，实现权限分离与数据共享，让您的团队管理变得井井有条。"
    hero-image-src="/images/product/collaborate-image.png"
    hero-image-alt="Traneasy 跨境团队协作管理界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 团队协作"
    comparison-description="打破信息孤岛，实现团队无缝配合，让多人管理同一账号如同操作单机般流畅。"
    comparison-product-name="Traneasy 团队协作"
    :comparison-rows="comparisonRows"
    scene-title="企业级的高效运营"
    :scene-items="sceneItems"
    faq-description="多角色协同无界，让跨境团队管理像单机一样高效！"
    :faqs="faqs"
    cta-title="立即开启团队协作"
    cta-description="打破沟通孤岛，实现跨境团队高效协同"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "跨境团队协作管理 - Traneasy 易翻译";
const pageDescription =
  "通过主子账号体系、独立权限控制、共享快捷回复与客户资产沉淀能力，让跨境团队实现更稳定、更高效的协同管理。";
const downloadLink = `${localePath("/download")}`;
const featureSections = [
  {
    title: "主子账号体系",
    imageSrc: "/images/product/collaborate-desc-1.png",
    imageAlt: "Traneasy 主子账号体系",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "员工用自己私人号做业务，离职就把客户带走，企业留不住资产。",
      },
      {
        title: "解决方案",
        description:
          "老板（主账号） 拥有最高权限；员工（子账号） 只能登录公司分配的设备和账号，客户数据归属公司。",
      },
    ],
  },
  {
    title: "主账户管理子账户权限",
    imageSrc: "/images/product/collaborate-desc-2.png",
    imageAlt: "Traneasy 主账户管理子账户权限",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description: "担心员工误删数据，或者越权查看其他客户的报价单。",
      },
      {
        title: "解决方案",
        description:
          "细致到按钮级别的权限控制。您可以设置 A 员工只有“查看+回复”权限，B 员工有“群发+客户管理”权限，杜绝越权操作。",
      },
    ],
  },
  {
    title: "共享快捷回复",
    imageSrc: "/images/product/collaborate-desc-3.png",
    imageAlt: "Traneasy 共享快捷回复",
    reverse: false,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "每个员工都有自己的一套话术，回复质量参差不齐，新人上手要背很久。",
      },
      {
        title: "解决方案",
        description:
          "管理员统一上传 标准话术、产品参数、报价单。所有员工一键调用，确保对外形象专业统一。",
      },
    ],
  },
  {
    title: "客户资产沉淀",
    imageSrc: "/images/product/collaborate-desc-4.png",
    imageAlt: "Traneasy 客户资产沉淀",
    reverse: true,
    buttonLabel: "立即下载",
    buttonTo: downloadLink,
    points: [
      {
        title: "常见问题",
        description:
          "员工离职，他手里的几十个大客户就跟着消失了，企业损失惨重。",
      },
      {
        title: "解决方案",
        description:
          "员工离职只需一键移交客户，接手人无缝衔接，彻底解决“人走客丢”的痛点。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "账号登录",
    legacy: "账号只能一人登录，或多人共用密码，易挤下线",
    traneasy: "多人同时登录同一账号，互不干扰，独立环境",
  },
  {
    label: "客户撞单",
    legacy: "不知道同事是否正在沟通，重复回复或抢单",
    traneasy: "实时显示接待状态，正在输入提示，避免尴尬撞车",
  },
  {
    label: "消息同步",
    legacy: "离职员工带走客户，聊天记录无法继承",
    traneasy: "聊天记录云端永久保存，员工离职一键交接客户",
  },
  {
    label: "内部沟通",
    legacy: "需切出软件去钉钉/微信沟通客户情况",
    traneasy: "内置内部备注与留言功能，针对客户直接内部讨论",
  },
  {
    label: "权限管理",
    legacy: "员工拥有最高权限，私单风险高",
    traneasy: "精细化权限设置，敏感操作（如删除、导出）受控",
  },
] as const;

const sceneItems = [
  {
    title: "新员工极速上手",
    description:
      "新招的客服不懂产品？没关系，Traneasy 的共享话术库让他“照着念”也能把客户伺候好。",
    iconSrc: "/images/product/collaborate-icon-1.svg",
  },
  {
    title: "管理层实时督导",
    description:
      "主管无需一个个问“今天聊得怎么样”，直接在后台看报表和实时对话，发现回复慢的员工立刻提醒。",
    iconSrc: "/images/product/collaborate-icon-2.svg",
  },
  {
    title: "数据资产化",
    description:
      "所有的客户标签、备注、跟进记录都在系统里。哪怕负责该客户的员工离职，新接手的员工也能通过历史记录迅速了解客户背景。",
    iconSrc: "/images/product/collaborate-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "子账号可以登录多个设备吗？",
    answer:
      "支持。您可以为一个子账号设置多端登录，或者分配给多个人使用（视具体授权模式而定），灵活适应团队规模。",
  },
  {
    question: "员工能看到其他同事的客户内容吗？",
    answer:
      "默认情况下，员工只能看到自己名下的客户。主账号可以设置“公海池”或“共享客户组”，让特定团队成员共同查看某些客户。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更细的角色配置、共享模板策略、交接流程或客户资产管理方式，可以继续联系团队获取更完整的团队协作方案。",
  },
] as const;

const ctaPoints = [
  "支持多账号同时在线，一台电脑管理所有员工账号",
  "内部聊天与外部客户沟通分离，避免信息混乱",
  "任务分配与进度追踪，实时掌握团队工作进展",
  "客户资源内部共享，避免员工离职导致客户流失",
  "权限分级管理，灵活控制员工操作范围，保障数据安全",
] as const;

useHead({
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
  ],
});
</script>
