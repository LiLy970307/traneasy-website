export function useApiFetch<T>(url: string, options: any = {}) {
        const { locale } = useI18n()
        console.log(locale, 'locale');

        return useFetch<T>(url, {
                ...options,
                headers: {
                        ...(options.headers || {}),
                        'Accept-Language': locale.value,
                },
        })
}