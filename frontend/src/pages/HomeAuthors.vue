<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Quote } from "@/types";
    import { citadorService } from "@/api/CitadorService";

    import AuthorCard from "@/components/AuthorCard.vue";
    import DelConfirmModal from "@/components/DelConfirmModal.vue";
    import ItemModal from "@/components/ItemModal.vue";

    import { useEntityStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const entityStore = storeToRefs(useEntityStore());
    const stateStore = storeToRefs(useStateStore());

    const loading = ref(true);
    const sel = ref(0);

    onMounted(async () => {
        entityStore.authors.value = await citadorService.getAuthors();
    })

    async function refresh() {
        entityStore.authors.value = entityStore.authors.value.filter((m) => m.id != stateStore.sid.value);
        console.log("refreshado");
    }
</script>

<template>
    <div class="row">
        <div class="d-flex">
            <i class="bi-person-square" style="min-width: 48px; font-size: 30px; margin-right: 8px"></i>
            <h1 style="height: 40px">Autores</h1>
        </div>
        <hr>
        <div class="col">
            <div v-for="author in entityStore.authors.value" :key="author.id">
                <AuthorCard
                    :id="author.id"
                    :lname="author.attributes.lname"
                    :fname="author.attributes.fname"
                    :fields="author.attributes.fields"
                />
            </div>
            <DelConfirmModal @refresh="refresh"/>
            <ItemModal/>
        </div>
    </div>
</template>
