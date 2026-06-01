<template>
  <ProductDetail
    title="工单系统/分流链接"
    subtitle="自动化线索管理，让每个商机都有迹可循"
    description="提供智能工单与分流链接解决方案。通过生成带参数的专属链接，自动识别客户来源，并生成工单进行分配， 实现线索管理的自动化。"
    hero-image-src="/images/product/order-image.png"
    hero-image-alt="Traneasy 工单系统与分流链接界面"
    :feature-sections="featureSections"
    comparison-title="传统方式 vs 工单系统/分流链接"
    comparison-description="告别客户询问“该找谁”的混乱，实现流量的自动化分类与分配，让专业服务从第一秒开始。"
    comparison-product-name="Traneasy 工单系统/分流链接"
    :comparison-rows="comparisonRows"
    scene-title="广告投放的闭环管理"
    :scene-items="sceneItems"
    faq-description="智能分流精准分配，让每一个客户咨询都高效响应。"
    :faqs="faqs"
    cta-title="立即开启工单系统/分流链接"
    cta-description="告别客户分配混乱，实现高效协同服务"
    :cta-points="ctaPoints"
    :download-link="downloadLink"
  />
</template>

<script setup lang="ts">
const localePath = useLocalePath();

const pageTitle = "工单系统/分流链接 - Traneasy 易翻译";
const pageDescription =
	"通过分流链接追踪、自动打标分组、智能接待分配、客户工单生成和业绩归属管理，让线索流转更清晰、更高效。";
const downloadLink = `${localePath("/")}#download`;

const featureSections = [
	{
		title: "短链接智能追踪",
		imageSrc: "/images/product/order-desc-1.png",
		imageAlt: "Traneasy 短链接智能追踪",
		reverse: false,
		buttonLabel: "立即下载",
		buttonTo: downloadLink,
		points: [
			{
				title: "常见问题",
				description:
					"广告投放、渠道合作和社媒引流入口分散，客户点进来后往往难以判断具体来源，后续跟进和复盘都缺少依据。",
			},
			{
				title: "解决方案",
				description:
					"为不同渠道生成专属分流短链接，客户访问后自动识别来源并写入系统，让每一条线索都带着清晰来源进入后续流程。",
			},
		],
	},
	{
		title: "自动打标与分组",
		imageSrc: "/images/product/order-desc-2.png",
		imageAlt: "Traneasy 自动打标与分组",
		reverse: true,
		buttonLabel: "立即下载",
		buttonTo: downloadLink,
		points: [
			{
				title: "常见问题",
				description:
					"客户进入系统后仍需人工判断渠道、地区或业务属性再做分类，不仅耗时，还容易出现标记遗漏和分配错误。",
			},
			{
				title: "解决方案",
				description:
					"根据链接参数、来源渠道和预设规则自动完成标签写入与客户分组，帮助团队第一时间掌握线索类型并进入对应流程。",
			},
		],
	},
	{
		title: "智能分配接待",
		imageSrc: "/images/product/order-desc-3.png",
		imageAlt: "Traneasy 智能分配接待",
		reverse: false,
		buttonLabel: "立即下载",
		buttonTo: downloadLink,
		points: [
			{
				title: "常见问题",
				description:
					"咨询高峰期依赖人工抢单或手动转交，容易出现客户等待过久、多人重复跟进，或者优质线索无人及时承接。",
			},
			{
				title: "解决方案",
					description:
					"结合客服在线状态、业务分组和分配规则自动将客户分派给对应人员，让咨询在进入会话的第一时间就被精准接待。",
			},
		],
	},
	{
		title: "客户工单生成",
		imageSrc: "/images/product/order-desc-4.png",
		imageAlt: "Traneasy 客户工单生成",
		reverse: true,
		buttonLabel: "立即下载",
		buttonTo: downloadLink,
		points: [
			{
				title: "常见问题",
				description:
					"客户对话记录、来源信息和跟进动作散落在不同位置，团队交接时难以快速还原背景，服务连续性也容易断档。",
			},
			{
				title: "解决方案",
				description:
					"新客户进入后自动生成关联工单，将来源、标签、负责人和跟进状态集中管理，方便多人协作和后续追踪。",
			},
		],
	},
	{
		title: "业绩归属清晰",
		imageSrc: "/images/product/order-desc-5.png",
		imageAlt: "Traneasy 业绩归属清晰",
		reverse: false,
		buttonLabel: "立即下载",
		buttonTo: downloadLink,
		points: [
			{
				title: "常见问题",
				description:
					"当多个渠道同时投放、多名客服协同时，客户最终成交归属常常不清晰，影响团队激励、渠道评估和管理判断。",
			},
			{
				title: "解决方案",
				description:
					"系统保留完整的来源链路与接待流转记录，帮助企业更准确判断客户归属、评估投放效果，并沉淀清晰的协同规则。",
			},
		],
	},
] as const;

const comparisonRows = [
	{
		label: "来源追踪",
		legacy: "客户从多个渠道进入后只能靠人工询问和备注判断来源，信息容易缺失。",
		traneasy: "通过专属分流链接自动记录来源渠道，让每条线索都带有清晰入口信息。",
	},
	{
		label: "客户分配",
		legacy: "分配依赖人工转交或群内通知，响应慢且容易重复接待或漏接。",
		traneasy: "按规则自动分配给对应客服或团队，客户进入后即可被快速承接。",
	},
	{
		label: "标签管理",
		legacy: "客户标签需要人工补录，执行标准不统一，后续筛选与复盘价值有限。",
		traneasy: "根据来源和业务规则自动打标分组，让客户画像从进入系统起就更完整。",
	},
	{
		label: "工单协同",
		legacy: "聊天记录与跟进状态分散，跨人协作时需要反复同步背景信息。",
		traneasy: "自动生成客户工单并沉淀处理状态，让协同、交接和追踪都更顺畅。",
	},
	{
		label: "业绩归属",
		legacy: "渠道贡献和客服接待路径不透明，成交归属容易产生争议。",
		traneasy: "来源、分配与跟进链路完整留痕，帮助企业更清晰地核算业绩与评估投放效果。",
	},
] as const;

const sceneItems = [
	{
		title: "Facebook/Google 投放",
		description:
			"为不同广告计划生成专属分流链接，自动记录客户来源，帮助运营快速判断各渠道投放质量与转化表现。",
		iconSrc: "/images/product/order-icon-1.svg",
	},
	{
		title: "TikTok/Instagram 引流",
		description:
			"针对短视频、社媒主页和达人合作入口统一管理线索来源，进入咨询后自动分流到对应团队，提高首响与接待效率。",
		iconSrc: "/images/product/order-icon-2.svg",
	},
	{
		title: "独立站客户分配",
		description:
			"客户从独立站表单、落地页或咨询入口进入时，可结合渠道与业务规则自动建单分配，让后续跟进一开始就有明确负责人。",
		iconSrc: "/images/product/order-icon-3.svg",
	},
] as const;

const faqs = [
	{
		question: "分流链接怎么生成？",
		answer:
			"系统支持按渠道、广告组、落地页或业务场景生成不同的专属分流链接，并自动附带识别参数。客户通过对应入口进入后，来源信息会被自动写入后续流程。",
	},
	{
		question: "客户来源信息会显示在客户昵称吗？",
		answer:
			"可以根据企业当前的管理方式选择展示策略。常见做法是将来源信息同步到标签、分组或客户资料字段中，方便客服在接待时快速识别客户背景。",
	},
	{
		question: "其他问题",
		answer:
			"如果你还想了解分配规则、工单字段配置、渠道识别方式或不同投放平台的接入方法，可以继续联系团队获取更完整的实施方案。",
	},
] as const;

const ctaPoints = [
	"渠道专属分流短链接生成，自动追踪每一条客户来源",
	"支持按渠道、业务类型、团队角色配置接待分配规则",
	"客户进入后自动建单，来源、状态与负责人统一沉淀",
	"多渠道投放和多人协作场景下，线索流转依旧清晰可控",
	"来源与跟进链路完整留痕，便于复盘投放效果和业绩归属",
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