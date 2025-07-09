<script setup lang="ts">
const { content } = await useContent()

useSeoMeta({
    title: content.value?.title,
    description: content.value?.description
})

console.log('Home data:', content.value)
</script>

<template>
    <ContentRenderer v-if="content" :value="content" />
    <div v-else>Home not found</div>
</template>
