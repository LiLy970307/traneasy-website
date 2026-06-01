<template>
	<IntegrationDetail
		seo-title="WhatsApp 集成 - Traneasy 易翻译"
		seo-description="让 WhatsApp 跨国沟通像微信一样简单，支持消息翻译、群发、标签管理和单人语音设置，帮助企业高效承接海外客户。"
		logo-src="/images/integration/whatsapp/logo.svg"
		title="让 WhatsApp 跨国沟通，像用微信一样简单"
		description="深度适配 WhatsApp，实现收发实时自动翻译、无需来回粘贴，无需切换软件，让语言不再是成交的障碍。"
		hero-image-src="/images/integration/whatsapp/top-bg.png"
		hero-image-alt="Traneasy WhatsApp 集成界面"
		:highlights="highlights"
		:feature-sections="featureSections"
		comparison-title="传统方式 vs Traneasy 集成"
		comparison-description="终结低效手工翻译，打造无障碍全球沟通流"
		comparison-product-name="Traneasy 集成"
		:comparison-rows="comparisonRows"
		scene-title="谁最适合使用？"
		scene-description="覆盖全球获客与即时通讯场景，高效率转化海外询盘"
		:scene-items="sceneItems"
		setup-title="零门槛配置指南"
		:setup-steps="setupSteps"
		faq-description="解锁 WhatsApp 多账号安全接入，防封又高效！"
		:faqs="faqs"
		:download-anchor="downloadAnchor"
	/>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const closeIconSrc = "/images/product/close-icon.svg";
const checkIconSrc = "/images/product/check-icon.svg";
const downloadAnchor = `${localePath("/")}#download`;

const highlights = [
	{
		title: "账号轻量接入",
		description: "接入简单，无需代码配置",
		iconSrc: "/images/integration/whatsapp/feature-1.svg",
	},
	{
		title: "跨店引流",
		description: "统一承接多账号、促成留资转化",
		iconSrc: "/images/integration/whatsapp/feature-2.svg",
	},
	{
		title: "24h 在线",
		description: "消息聚合更稳定，客户响应更及时",
		iconSrc: "/images/integration/whatsapp/feature-3.svg",
	},
	{
		title: "AI 智能加持",
		description: "多语种接待提效，客服处理更轻松",
		iconSrc: "/images/integration/whatsapp/feature-4.svg",
	},
] as const;

const featureSections = [
	{
		title: "聊天消息双向翻译",
		imageSrc: "/images/integration/whatsapp/desc-1.png",
		imageAlt: "WhatsApp 聊天消息双向翻译",
		reverse: false,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"客户说英文、阿拉伯语、泰语时，客服需要复制粘贴到翻译工具，回复节奏容易被打断。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"消息收发两端自动互译，原窗口就能完成理解和回复，跨语言沟通节奏更自然，接待效率更高。",
				iconSrc: checkIconSrc,
			},
		],
	},
	{
		title: "跨国营销一键群发",
		imageSrc: "/images/integration/whatsapp/desc-2.png",
		imageAlt: "WhatsApp 跨国营销一键群发",
		reverse: true,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"海外活动要批量通知客户，手动逐条发送效率低，还难以兼顾不同语言市场。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"批量群发结合多语种内容管理，让跨国营销任务可以更稳定地统一下发，覆盖更多目标客户。",
				iconSrc: checkIconSrc,
			},
		],
	},
	{
		title: "客户标签与备注管理",
		imageSrc: "/images/integration/whatsapp/desc-3.png",
		imageAlt: "WhatsApp 客户标签与备注管理",
		reverse: false,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"客户分散在不同聊天窗口，咨询偏好、跟进状态和来源记录难以持续积累。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"为客户打上标签并沉淀备注信息，让后续筛选、分层运营和二次触达都更有依据。",
				iconSrc: checkIconSrc,
			},
		],
	},
	{
		title: "单人语音设置",
		imageSrc: "/images/integration/whatsapp/desc-4.png",
		imageAlt: "WhatsApp 单人语音设置",
		reverse: true,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"语音沟通需要额外切换翻译或人工记录重点，响应和协作成本都会变高。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"通过单人语音相关能力和统一设置入口，让语音场景的沟通与管理更顺手，服务动作更连贯。",
				iconSrc: checkIconSrc,
			},
		],
	},
] as const;

const comparisonRows = [
	{
		label: "对话理解",
		legacy: "复制消息到翻译器后再回聊，流程缓慢。",
		traneasy: "双向实时互译，理解和回复都更快。",
	},
	{
		label: "客户管理",
		legacy: "客户信息分散在多个聊天窗口中。",
		traneasy: "统一标签和备注管理，客户资料更清晰。",
	},
	{
		label: "群发触达",
		legacy: "手动逐个发送，效率低且容易漏发。",
		traneasy: "一键批量群发，跨国营销执行更稳。",
	},
	{
		label: "响应速度",
		legacy: "翻译、切号、记录都需要人工频繁切换。",
		traneasy: "消息聚合处理，客服响应更快。",
	},
	{
		label: "沟通稳定性",
		legacy: "跨语言沟通容易出现误解和中断。",
		traneasy: "沟通链路更顺滑，海外客户体验更稳定。",
	},
] as const;

const sceneItems = [
	{
		title: "外贸业务员",
		description:
			"外贸团队统一承接海外询盘，用更短响应时间提升商机转化效率。",
		iconSrc: "/images/integration/whatsapp/scene-1.svg",
	},
	{
		title: "跨境电商客服",
		description:
			"在多语言客服场景中高效回复售前售后问题，减少沟通误差和等待时间。",
		iconSrc: "/images/integration/whatsapp/scene-2.svg",
	},
	{
		title: "B2B 销售",
		description:
			"将客户咨询、报价与跟进动作放在同一套工作台里，提高跨国成交效率。",
		iconSrc: "/images/integration/whatsapp/scene-3.svg",
	},
	{
		title: "海外采购",
		description:
			"与海外供应商实时沟通需求变更和采购细节，降低协作成本。",
		iconSrc: "/images/integration/whatsapp/scene-4.svg",
	},
] as const;

const setupSteps = [
	{
		title: "第一步",
		description: "下载并安装 Traneasy。",
	},
	{
		title: "第二步",
		description: "打开集成后台并进入 WhatsApp 专区。",
	},
	{
		title: "第三步",
		description: "扫码登录账号，授权并完成基础配置。",
	},
	{
		title: "第四步",
		description: "启用多语种能力与 AI 功能，即可开始上线使用。",
	},
] as const;

const faqs = [
	{
		question: "使用 Traneasy 会导致 WhatsApp 封号吗？",
		answer:
			"Traneasy 采用更稳健的接入和使用机制，结合合理的业务操作节奏，能够帮助企业更安全地管理账号。封号风险还会受到具体业务方式和平台规则影响。",
	},
	{
		question: "支持语音和图片翻译吗？",
		answer:
			"支持。Traneasy 针对文本、图片和语音等常见沟通内容都提供能力支持，便于覆盖更完整的海外沟通场景。",
	},
	{
		question: "支持 WhatsApp Business 吗？",
		answer:
			"支持。Traneasy 可适配 WhatsApp 个人账号与 Business 场景，便于企业灵活使用。",
	},
	{
		question: "其他问题",
		answer:
			"如果你还想了解更多关于账号接入、群发策略、多语言设置或团队协作方式的问题，可以继续联系团队获取更完整的实施方案。",
	},
] as const;
</script>