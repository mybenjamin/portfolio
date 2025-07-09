export default async () => {
    const { data: content } = await useAsyncData(() => queryCollection('docs').path('/').first())

    return {
        content
    }
}
