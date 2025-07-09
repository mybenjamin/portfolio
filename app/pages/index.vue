<script setup lang="ts">
const { content } = await useContent()
console.log('Content:', content.value)
</script>
<template>
    <UApp>
        {{ content }}
        <h1>Welcome to my portfolio!</h1>
        <p>Created by mybenjamin.dev</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </UApp>
</template>
