const localeRaw: Record<string, string> = import.meta.glob('~/messages/*.json', { eager: true, query: '?raw', import: 'default' }) as any

const parsedCache: Record<string, any> = {}

function getParsed(key: string): any {
  if (!parsedCache[key]) {
    try {
      parsedCache[key] = JSON.parse(localeRaw[key])
    } catch {
      parsedCache[key] = {}
    }
  }
  return parsedCache[key]
}

export function useLocaleData() {
  const { locale } = useI18n()

  const messages = computed(() => {
    const key = Object.keys(localeRaw).find(k => k.endsWith(`/${locale.value}.json`))
    if (!key) return {}
    return getParsed(key)
  })

  return { messages }
}
