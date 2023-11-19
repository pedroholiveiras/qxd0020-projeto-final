<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Quote } from "@/types";
    import Card from "@/components/Card.vue";
    import { citadorService } from "@/api/CitadorService";

    const loading = ref(true);
    const quotes = ref<Quote[]>([]);

    onMounted(async () => {
        quotes.value = await citadorService.getQuotes();
    })
</script>

<template>
    <div class="container">
        <h1>Citações</h1>
        <div v-for="quote in quotes" :key="quote.id">
            <Card
                :id="quote.id"
                :content="quote.attributes.content"
                :author="a"
                :year="a"
            ></Card>
        </div>
    </div>
</template>
