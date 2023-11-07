<script setup lang="ts">
    import { baseURL } from "@api";
    import VueMarkdown from "vue-markdown-render";

    defineProps<{
        id: number,
        content: string,
        author: string,
        year: number
    }>()
</script>

<template>
    <div class="card">
        <div class="card-body">
            <p class="card-text">
                <vue-markdown :source="content"/>
            </p>
            <h6 class="card-subtitle mb-2 text-muted text-end">({{ author }}, {{ year }})</h6>
            <a href="#" class="card-link">ABNT</a>
            <a href="#" class="card-link">BibTeX</a>
        </div>
    </div>
</template>

<style scoped>
    .card {
        margin-bottom: 16px;
    }
</style>
