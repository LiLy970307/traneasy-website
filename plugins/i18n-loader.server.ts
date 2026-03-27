export default defineNuxtPlugin(async () => {
  const { $i18n } = useNuxtApp()

  const modules: Record<string, () => Promise<any>> = {
    zh: () => import('~/messages/zh.json'),
    en: () => import('~/messages/en.json'),
    es: () => import('~/messages/es.json'),
    pt: () => import('~/messages/pt.json'),
    id: () => import('~/messages/id.json'),
    ja: () => import('~/messages/ja.json'),
    ko: () => import('~/messages/ko.json'),
    fr: () => import('~/messages/fr.json'),
    de: () => import('~/messages/de.json'),
    vi: () => import('~/messages/vi.json'),
    th: () => import('~/messages/th.json'),
  }

  const locale = $i18n.locale?.value || 'zh'
  try {
    const loader = modules[locale]
    if (loader) {
      const mod = await loader()
      const messages = mod.default || mod
      $i18n.mergeLocaleMessage(locale, messages)
    }
  } catch (e) {
    console.warn('[i18n-loader] Failed to merge locale messages:', e)
  }
})
