<template>
	<IntegrationDetail
		seo-title="Telegram 集成 - Traneasy 易翻译"
		seo-description="让 Telegram 群组、频道与私聊沟通跨越语言障碍，支持实时翻译、私域管理与批量触达，帮助企业更高效服务全球用户。"
		logo-src="/images/integration/telegram/logo.svg"
		title="让 Telegram 打破加密通讯的语言壁垒"
		description="支持群组消息实时翻译与私域运营一体化，无论是频道流量沉淀还是社群营销，沟通都能更加顺畅。"
		hero-image-src="/images/integration/telegram/detail-bg.png"
		hero-image-alt="Traneasy Telegram 集成界面"
		:highlights="highlights"
		:feature-sections="featureSections"
		comparison-title="传统方式 vs Traneasy 集成"
		comparison-description="告别低效手动翻译，重建社群运营新标准"
		comparison-product-name="Traneasy 集成"
		:comparison-rows="comparisonRows"
		scene-title="谁最适合使用？"
		scene-description="覆盖加密通讯与社群运营场景，精准触达高净值用户"
		:scene-items="sceneItems"
		setup-title="零门槛配置指南"
		:setup-steps="setupSteps"
		faq-description="解锁 Telegram 多账号安全接入，防封又高效！"
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
		title: "群组消息翻译",
		description: "多人群聊实时互译，沟通不断档",
		iconSrc: "/images/integration/telegram/feature-1.svg",
	},
	{
		title: "频道内容沉淀",
		description: "统一管理频道内容与私域运营动作",
		iconSrc: "/images/integration/telegram/feature-2.svg",
	},
	{
		title: "多端人格分离",
		description: "私聊、群组、频道场景灵活切换",
		iconSrc: "/images/integration/telegram/feature-3.svg",
	},
	{
		title: "批量触达",
		description: "多账号批量群发，推广效率更高",
		iconSrc: "/images/integration/telegram/feature-4.svg",
	},
] as const;

const featureSections = [
	{
		title: "群组 / 频道实时翻译",
		imageSrc: "/images/integration/telegram/desc-1.png",
		imageAlt: "Telegram 群组频道实时翻译",
		reverse: false,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"群组和频道里消息量大、语种杂，人工复制翻译不仅慢，还容易错过关键讨论和用户反馈。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"接收与发送内容都可在原会话中实时翻译，群组协作和频道运营无需跳出 Telegram 工作流。",
				iconSrc: checkIconSrc,
			},
		],
	},
	{
		title: "高效私域客户管理",
		imageSrc: "/images/integration/telegram/desc-2.png",
		imageAlt: "Telegram 私域客户管理",
		reverse: true,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"私聊客户分散在多个账号与聊天窗口里，标签、备注和跟进节奏难以统一，私域运营容易失焦。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"通过客户标签、备注和聚合消息能力统一管理 Telegram 私域线索，让后续筛选、维护与复购触达更有序。",
				iconSrc: checkIconSrc,
			},
		],
	},
	{
		title: "批量触达与营销",
		imageSrc: "/images/integration/telegram/desc-3.png",
		imageAlt: "Telegram 批量触达与营销",
		reverse: false,
		buttonLabel: "极简安装流程",
		buttonTo: "#setup-guide",
		buttonVariant: "text",
		points: [
			{
				title: "常见问题",
				description:
					"跨国活动通知、社群召回和新品推广需要快速触达大量用户，手动发送既低效，也难保证不同语言版本同步。",
				iconSrc: closeIconSrc,
			},
			{
				title: "解决方案",
				description:
					"多账号批量群发结合多语言内容管理，可更稳定地覆盖私聊、群组与频道营销场景，提升触达效率。",
				iconSrc: checkIconSrc,
			},
		],
	},
] as const;

const comparisonRows = [
	{
		label: "消息翻译",
		legacy: "复制粘贴到外部翻译工具，群聊场景跟进滞后。",
		traneasy: "群组、频道、私聊内实时翻译，沟通更连贯。",
	},
	{
		label: "客户管理",
		legacy: "私聊客户零散分布，标签备注难统一。",
		traneasy: "统一标签和备注沉淀，私域线索更清晰。",
	},
	{
		label: "群发效率",
		legacy: "手动分发消息，执行慢且容易漏发。",
		traneasy: "批量群发更高效，跨语种营销更稳定。",
	},
	{
		label: "协作体验",
		legacy: "翻译、记录、切号都依赖人工频繁切换。",
		traneasy: "聚合消息和统一工作台让协作更顺手。",
	},
	{
		label: "用户触达",
		legacy: "社群运营节奏分散，关键用户难持续维护。",
		traneasy: "频道与私域协同运营，触达与转化更有节奏。",
	},
] as const;

const sceneItems = [
	{
		title: "社群运营",
		description:
			"在 Telegram 群组与频道中统一管理多语种沟通，提高社群活跃与留存效率。",
		iconSrc: "/images/integration/telegram/scene-1.svg",
	},
	{
		title: "加密社区项目方",
		description:
			"面向全球社区发布公告、维护用户关系，用更稳定的多语言能力支撑增长。",
		iconSrc: "/images/integration/telegram/scene-2.svg",
	},
	{
		title: "海外推广",
		description:
			"针对不同国家和语种快速分发营销内容，降低活动执行门槛。",
		iconSrc: "/images/integration/telegram/scene-3.svg",
	},
	{
		title: "开源项目维护者",
		description:
			"在国际社区里更高效回应问题与反馈，减少因语言造成的协作损耗。",
		iconSrc: "/images/integration/telegram/scene-4.svg",
	},
] as const;

const setupSteps = [
	{
		title: "第一步",
		description: "下载并安装 Traneasy 客户端。",
	},
	{
		title: "第二步",
		description: "打开集成后台并切换到 Telegram 模块。",
	},
	{
		title: "第三步",
		description: "扫码或授权登录 Telegram 账号，完成基础连接。",
	},
	{
		title: "第四步",
		description: "开启翻译、群发和客户管理能力，即可开始使用。",
	},
] as const;

const faqs = [
	{
		question: "Telegram 群组人数多，翻译会卡顿吗？",
		answer:
			"Traneasy 针对高频消息场景做了优化，群组和频道消息可以稳定接入与处理。实际体验仍会受到账号状态、网络环境和消息密度影响。",
	},
	{
		question: "支持 Telegram 的文件翻译吗？",
		answer:
			"支持。除文本消息外，图片、语音及部分常见文件内容也可配合翻译能力使用，便于覆盖更完整的沟通场景。",
	},
	{
		question: "多开账号会拖慢 Telegram 吗？",
		answer:
			"Traneasy 支持在合规范围内进行多账号管理，前提是网络、设备和业务操作节奏合理。具体表现会受账号规模和负载情况影响。",
	},
	{
		question: "其他问题",
		answer:
			"如果你还想了解更多关于账号接入、群发策略、群组翻译或私域运营方式的问题，可以继续联系团队获取更完整的实施方案。",
	},
] as const;
</script>