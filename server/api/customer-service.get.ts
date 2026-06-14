export default defineEventHandler(async () => {
        const config = useRuntimeConfig()
        const data = await $fetch(
                `${config.public.clientUserApiBase}/customer-service/list`
        )
        return data
})