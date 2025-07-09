export default async () => {
    const { data: content } = await useAsyncData(() => queryCollection('content').path('/').first())

    return {
        content
    }
}
