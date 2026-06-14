export default defineEventHandler(async (event) => {
        const config = useRuntimeConfig()
        const data = await $fetch(`${config.public.clientUserApiBase}/notice/list`)
        return data
})