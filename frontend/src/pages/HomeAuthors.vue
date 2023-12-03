<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Quote } from "@/types";
    import { citadorService } from "@/api/CitadorService";

    import QuoteCard from "@/components/QuoteCard.vue";
    import DelConfirmModal from "@/components/DelConfirmModal.vue";
    import ItemModal from "@/components/ItemModal.vue";

    import { useEntityStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const quotes = storeToRefs(useEntityStore()).quotes;
    const stateStore = storeToRefs(useStateStore());

    const loading = ref(true);
    const sel = ref(0);

    onMounted(async () => {
        quotes.value = await citadorService.getQuotes();
    })

    const teste = ref<Quote>({} as Quote);

    async function refresh() {
        quotes.value = quotes.value.filter((m) => m.id != stateStore.sid.value);
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
        <div class="d-flex">
            <i class="bi-person-square" style="min-width: 48px; font-size: 32px; margin-right: 8px"></i>
            <h1 style="height: 40px">Autores</h1>
        </div>
        <hr>
        <div class="col">
            <ItemModal></ItemModal>
        </div>
    </div>
</template>
