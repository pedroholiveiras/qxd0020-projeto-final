<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Quote } from "@/types";
    import { citadorService } from "@/api/CitadorService";
    import Card from "@/components/Card.vue";
    import DelConfirmModal from "@/components/DelConfirmModal.vue";
    import ItemModal from "@/components/ItemModal.vue";
    import { useQuoteStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const quotes = storeToRefs(useQuoteStore()).quotes;
    const state = storeToRefs(useStateStore());

    const loading = ref(true);
    const sel = ref(0);

    onMounted(async () => {
        quotes.value = await citadorService.getQuotes();
    })

    const teste = ref<Quote>({} as Quote);

    async function refresh() {
        quotes.value = quotes.value.filter((m) => m.id != state.sitem.value);
        console.log("refreshado");
    }

    function authorList(authors) {
        let res = "";

        if (authors.length > 2) {
            res += authors[0].attributes.lname + "et al.";
        } else {
            for (let i = 0; i < authors.length; ++i) {
                res += authors[i].attributes.lname
                if (i != authors.length - 1)
                    res += "; ";
            }
        }
        return res;
    }
</script>

<template>
    <div class="row">
        <div class="col">
            <div v-for="quote in quotes" :key="quote.id">
                <Card
                    :id="quote.id"
                    :content="quote.attributes.content"
                    :page="quote.attributes.page"
                    :work="quote.attributes.work.data.id"
                    :author="authorList(quote.attributes.work.data.attributes.authors.data)"
                    :year="quote.attributes.work.data.attributes.year"
                    @click="sel == id"
                ></Card>
                <DelConfirmModal @refresh="refresh"></DelConfirmModal>
            </div>
            <ItemModal></ItemModal>
        </div>
    </div>
</template>
