<script setup lang="ts">
    defineProps<{
        id: number,
        title: string
    }>()
</script>

<template>
    {{ title }}
</template>
