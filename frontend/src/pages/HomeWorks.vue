<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Quote } from "@/types";
    import { citadorService } from "@/api/CitadorService";

    import WorkCard from "@/components/WorkCard.vue";
    import DelConfirmModal from "@/components/DelConfirmModal.vue";
    import ItemModal from "@/components/ItemModal.vue";

    import { useEntityStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const entityStore = storeToRefs(useEntityStore());
    const stateStore = storeToRefs(useStateStore());

    onMounted(async () => {
        entityStore.works.value = await citadorService.getWorks();
    })

    async function refresh() {
        entityStore.works.value = entityStore.works.value.filter((m) => m.id != stateStore.sid.value);
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
            <i class="bi-journal-bookmark-fill" style="width: 48px; font-size: 32px; margin-right: 8px"></i>
            <h1 style="height: 40px">Obras</h1>
        </div>
        <hr>
        <div class="col">
            <div v-for="work in entityStore.works.value" :key="work.id">
                <WorkCard
                    :id="work.id" 
                    :title="work.attributes.title"
                    :subtitle="work.attributes.subtitle"
                    :author="authorList(work.attributes.authors.data)"
                    :edition="work.attributes.edition"
                    :year="work.attributes.year"
                    :publisher="work.attributes.publisher"
                    :address="work.attributes.address"
                    :isbn="work.attributes.isbn"
                />
            </div>
            <DelConfirmModal @refresh="refresh"/>
            <ItemModal/>
        </div>
    </div>
</template>
