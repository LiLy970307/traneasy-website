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
const downloadLink = `${localePath("/")}#download`;

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
          "业务团队共用单一账号时，权限混杂、操作难追踪，主管也很难统一管理成员与资源。",
      },
      {
        title: "解决方案",
        description:
          "建立清晰的主子账号结构，主管可统一创建和管理成员账号，在保证协同效率的同时保持组织架构清晰可控。",
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
        description:
          "成员职能不同，却只能看到同样的数据和能力，既不安全，也容易导致误操作或流程越权。",
      },
      {
        title: "解决方案",
        description:
          "主账户可按岗位灵活配置子账户权限，精细控制可见范围与可执行动作，让协作更高效，也更符合管理要求。",
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
          "团队成员各自维护回复模板，口径不统一、更新不同步，客户体验和转化效率都容易受到影响。",
      },
      {
        title: "解决方案",
        description:
          "将高频话术、产品答复和售后模板统一沉淀为共享快捷回复，所有成员可按权限调用，确保对外表达稳定一致。",
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
          "客户资料、跟进记录和历史消息分散在个人账号里，一旦成员变动，企业很难完整接管客户关系。",
      },
      {
        title: "解决方案",
        description:
          "将客户信息、会话记录和协作痕迹统一沉淀到团队体系中，让客户真正成为企业资产，而不是个人资源。",
      },
    ],
  },
] as const;

const comparisonRows = [
  {
    label: "协作效率",
    legacy: "多人管理同一业务时频繁切号和同步信息，沟通成本高，执行链路也长。",
    traneasy: "多人可在统一体系下协作处理业务，信息同步更直接，配合更顺畅。",
  },
  {
    label: "账户权限",
    legacy: "不同成员权限边界模糊，容易看到不该看的内容，也容易误操作。",
    traneasy: "支持精细化权限分配，按角色控制可见范围与操作能力，管理更安全。",
  },
  {
    label: "回复标准",
    legacy: "团队成员各自回复客户，话术与质量不一致，难以形成统一服务体验。",
    traneasy: "共享快捷回复统一团队口径，让高频咨询回复更专业、更稳定。",
  },
  {
    label: "客户资产",
    legacy: "客户资料和跟进记录散落在个人账号中，成员离职或交接时容易流失。",
    traneasy: "客户信息统一沉淀在企业体系内，交接更平滑，资产沉淀更完整。",
  },
  {
    label: "团队管理",
    legacy:
      "主管难以了解成员配置、权限状态和协作流程，管理动作需要大量人工介入。",
    traneasy: "主账号统一配置成员、权限和协作规则，让团队管理更高效、更可视。",
  },
] as const;

const sceneItems = [
  {
    title: "矩阵工单线上手",
    description:
      "新员工加入团队后，主管可快速分配账号与权限，配合共享模板和统一流程，帮助成员更快进入稳定作业状态。",
    iconSrc: "/images/product/collaborate-icon-1.svg",
  },
  {
    title: "管理层实时管号",
    description:
      "主管能够统一查看团队账号和权限配置，并根据岗位职责调整协作范围，让管理动作不再依赖私下同步。",
    iconSrc: "/images/product/collaborate-icon-2.svg",
  },
  {
    title: "数据资产化",
    description:
      "客户资料、历史消息和协作记录持续沉淀为企业资产，便于后续复盘、交接与长期运营管理。",
    iconSrc: "/images/product/collaborate-icon-3.svg",
  },
] as const;

const faqs = [
  {
    question: "子账号可以登录多个设备吗？",
    answer:
      "支持。您可以为一个子账号分配独立成员使用，或根据团队分工共享权限。在满足企业管理规范的前提下，具体登录策略可结合实际业务流程配置。",
  },
  {
    question: "员工能看到其他同事的客户内容吗？",
    answer:
      "默认取决于权限配置。主账户可以按岗位分配客户可见范围、功能权限和数据查看范围，让成员只接触自己需要处理的客户与信息。",
  },
  {
    question: "其他问题",
    answer:
      "如果你还想了解更细的角色配置、共享模板策略、交接流程或客户资产管理方式，可以继续联系团队获取更完整的团队协作方案。",
  },
] as const;

const ctaPoints = [
  "支持多账号同时协作，也能确保权限和员工账号清晰分离",
  "高频聊天与业务资产沉淀同步，避免成员更替造成资料流失",
  "团队协作与话术复用统一，提升跨境团队工作效率",
  "客户资产真正归属企业，避免员工离职导致客户资源中断",
  "权限分级管理、主子账号协同工位可视化，保障运营安全",
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
