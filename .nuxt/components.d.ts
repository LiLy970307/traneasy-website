
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Advantages': typeof import("../components/Advantages.vue")['default']
    'Benefits': typeof import("../components/Benefits.vue")['default']
    'Breadcrumb': typeof import("../components/Breadcrumb.vue")['default']
    'CounterAnim': typeof import("../components/CounterAnim.vue")['default']
    'Download': typeof import("../components/Download.vue")['default']
    'FAQAccordion': typeof import("../components/FAQAccordion.vue")['default']
    'Features': typeof import("../components/Features.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'Hero': typeof import("../components/Hero.vue")['default']
    'HeroStats': typeof import("../components/HeroStats.vue")['default']
    'HowItWorks': typeof import("../components/HowItWorks.vue")['default']
    'IntegrationPreview': typeof import("../components/IntegrationPreview.vue")['default']
    'LanguageSwitcher': typeof import("../components/LanguageSwitcher.vue")['default']
    'NavDropdown': typeof import("../components/NavDropdown.vue")['default']
    'Partners': typeof import("../components/Partners.vue")['default']
    'PlatformUnify': typeof import("../components/PlatformUnify.vue")['default']
    'PricingPreview': typeof import("../components/PricingPreview.vue")['default']
    'ProductsPanel': typeof import("../components/ProductsPanel.vue")['default']
    'ResourcesPanel': typeof import("../components/ResourcesPanel.vue")['default']
    'ScrollReveal': typeof import("../components/ScrollReveal.vue")['default']
    'SeoFeatureGrid': typeof import("../components/SeoFeatureGrid.vue")['default']
    'SeoScenarios': typeof import("../components/SeoScenarios.vue")['default']
    'SolutionsPanel': typeof import("../components/SolutionsPanel.vue")['default']
    'Testimonials': typeof import("../components/Testimonials.vue")['default']
    'TrustBar': typeof import("../components/TrustBar.vue")['default']
    'UseCasePreview': typeof import("../components/UseCasePreview.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtLinkLocale': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAdvantages': LazyComponent<typeof import("../components/Advantages.vue")['default']>
    'LazyBenefits': LazyComponent<typeof import("../components/Benefits.vue")['default']>
    'LazyBreadcrumb': LazyComponent<typeof import("../components/Breadcrumb.vue")['default']>
    'LazyCounterAnim': LazyComponent<typeof import("../components/CounterAnim.vue")['default']>
    'LazyDownload': LazyComponent<typeof import("../components/Download.vue")['default']>
    'LazyFAQAccordion': LazyComponent<typeof import("../components/FAQAccordion.vue")['default']>
    'LazyFeatures': LazyComponent<typeof import("../components/Features.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHero': LazyComponent<typeof import("../components/Hero.vue")['default']>
    'LazyHeroStats': LazyComponent<typeof import("../components/HeroStats.vue")['default']>
    'LazyHowItWorks': LazyComponent<typeof import("../components/HowItWorks.vue")['default']>
    'LazyIntegrationPreview': LazyComponent<typeof import("../components/IntegrationPreview.vue")['default']>
    'LazyLanguageSwitcher': LazyComponent<typeof import("../components/LanguageSwitcher.vue")['default']>
    'LazyNavDropdown': LazyComponent<typeof import("../components/NavDropdown.vue")['default']>
    'LazyPartners': LazyComponent<typeof import("../components/Partners.vue")['default']>
    'LazyPlatformUnify': LazyComponent<typeof import("../components/PlatformUnify.vue")['default']>
    'LazyPricingPreview': LazyComponent<typeof import("../components/PricingPreview.vue")['default']>
    'LazyProductsPanel': LazyComponent<typeof import("../components/ProductsPanel.vue")['default']>
    'LazyResourcesPanel': LazyComponent<typeof import("../components/ResourcesPanel.vue")['default']>
    'LazyScrollReveal': LazyComponent<typeof import("../components/ScrollReveal.vue")['default']>
    'LazySeoFeatureGrid': LazyComponent<typeof import("../components/SeoFeatureGrid.vue")['default']>
    'LazySeoScenarios': LazyComponent<typeof import("../components/SeoScenarios.vue")['default']>
    'LazySolutionsPanel': LazyComponent<typeof import("../components/SolutionsPanel.vue")['default']>
    'LazyTestimonials': LazyComponent<typeof import("../components/Testimonials.vue")['default']>
    'LazyTrustBar': LazyComponent<typeof import("../components/TrustBar.vue")['default']>
    'LazyUseCasePreview': LazyComponent<typeof import("../components/UseCasePreview.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Advantages: typeof import("../components/Advantages.vue")['default']
export const Benefits: typeof import("../components/Benefits.vue")['default']
export const Breadcrumb: typeof import("../components/Breadcrumb.vue")['default']
export const CounterAnim: typeof import("../components/CounterAnim.vue")['default']
export const Download: typeof import("../components/Download.vue")['default']
export const FAQAccordion: typeof import("../components/FAQAccordion.vue")['default']
export const Features: typeof import("../components/Features.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Hero: typeof import("../components/Hero.vue")['default']
export const HeroStats: typeof import("../components/HeroStats.vue")['default']
export const HowItWorks: typeof import("../components/HowItWorks.vue")['default']
export const IntegrationPreview: typeof import("../components/IntegrationPreview.vue")['default']
export const LanguageSwitcher: typeof import("../components/LanguageSwitcher.vue")['default']
export const NavDropdown: typeof import("../components/NavDropdown.vue")['default']
export const Partners: typeof import("../components/Partners.vue")['default']
export const PlatformUnify: typeof import("../components/PlatformUnify.vue")['default']
export const PricingPreview: typeof import("../components/PricingPreview.vue")['default']
export const ProductsPanel: typeof import("../components/ProductsPanel.vue")['default']
export const ResourcesPanel: typeof import("../components/ResourcesPanel.vue")['default']
export const ScrollReveal: typeof import("../components/ScrollReveal.vue")['default']
export const SeoFeatureGrid: typeof import("../components/SeoFeatureGrid.vue")['default']
export const SeoScenarios: typeof import("../components/SeoScenarios.vue")['default']
export const SolutionsPanel: typeof import("../components/SolutionsPanel.vue")['default']
export const Testimonials: typeof import("../components/Testimonials.vue")['default']
export const TrustBar: typeof import("../components/TrustBar.vue")['default']
export const UseCasePreview: typeof import("../components/UseCasePreview.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAdvantages: LazyComponent<typeof import("../components/Advantages.vue")['default']>
export const LazyBenefits: LazyComponent<typeof import("../components/Benefits.vue")['default']>
export const LazyBreadcrumb: LazyComponent<typeof import("../components/Breadcrumb.vue")['default']>
export const LazyCounterAnim: LazyComponent<typeof import("../components/CounterAnim.vue")['default']>
export const LazyDownload: LazyComponent<typeof import("../components/Download.vue")['default']>
export const LazyFAQAccordion: LazyComponent<typeof import("../components/FAQAccordion.vue")['default']>
export const LazyFeatures: LazyComponent<typeof import("../components/Features.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../components/Hero.vue")['default']>
export const LazyHeroStats: LazyComponent<typeof import("../components/HeroStats.vue")['default']>
export const LazyHowItWorks: LazyComponent<typeof import("../components/HowItWorks.vue")['default']>
export const LazyIntegrationPreview: LazyComponent<typeof import("../components/IntegrationPreview.vue")['default']>
export const LazyLanguageSwitcher: LazyComponent<typeof import("../components/LanguageSwitcher.vue")['default']>
export const LazyNavDropdown: LazyComponent<typeof import("../components/NavDropdown.vue")['default']>
export const LazyPartners: LazyComponent<typeof import("../components/Partners.vue")['default']>
export const LazyPlatformUnify: LazyComponent<typeof import("../components/PlatformUnify.vue")['default']>
export const LazyPricingPreview: LazyComponent<typeof import("../components/PricingPreview.vue")['default']>
export const LazyProductsPanel: LazyComponent<typeof import("../components/ProductsPanel.vue")['default']>
export const LazyResourcesPanel: LazyComponent<typeof import("../components/ResourcesPanel.vue")['default']>
export const LazyScrollReveal: LazyComponent<typeof import("../components/ScrollReveal.vue")['default']>
export const LazySeoFeatureGrid: LazyComponent<typeof import("../components/SeoFeatureGrid.vue")['default']>
export const LazySeoScenarios: LazyComponent<typeof import("../components/SeoScenarios.vue")['default']>
export const LazySolutionsPanel: LazyComponent<typeof import("../components/SolutionsPanel.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../components/Testimonials.vue")['default']>
export const LazyTrustBar: LazyComponent<typeof import("../components/TrustBar.vue")['default']>
export const LazyUseCasePreview: LazyComponent<typeof import("../components/UseCasePreview.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
