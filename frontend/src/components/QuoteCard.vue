<script setup lang="ts">
    import ItemDetailsModal from "@/components/ItemDetailsModal.vue"
    import { useUserStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const stateStore = storeToRefs(useStateStore());

    const props = defineProps<{
        id: number,
        content: string,
        page: number,
        workid?: number,
        worktitle: string,
        author: Array,
        year: number,
        uid?: number
    }>();

    function select() {
        stateStore.sact.value = 1;
        stateStore.stype.value = 0;
        stateStore.sid.value = props.id;

        stateStore.sdata.value = {
            id: props.id,
            content: props.content,
            page: props.page,
            workid: props.workid,
            worktitle: props.worktitle,
            author: authorList(props.author)
        };
    }

    function authorList(authors) {
        const res = [];

        for (const author of authors)
            res.push(`${author.attributes.fname} ${author.attributes.lname}`);
        
        return res;
    }

    function authorRef(authors) {
        let res = "";

        if (authors.length > 2) {
            res += authors[0].attributes.lname + " et al.";
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
    <div class="card col-md-10 mx-auto mb-2">
        <div class="card-body">
            <p class="card-text">{{ content }}</p>
            <h6 class="card-subtitle mb-3 text-muted">({{ authorRef(author) }}, {{ year }})</h6>
            <div class="d-flex justify-content-end">
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#itemDetailsModal"
                    @click="select"
                    ><i class="bi-eye"/>
                </button>
                <div v-if="userStore.user.role == 'admin'">
                    <button
                        type="button"
                        class="btn btn-primary mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#itemModal"
                        @click="select"
                        ><i class="bi-pencil"></i>
                    </button> 
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#delConfirmModal"
                        @click="select"
                        ><i class="bi-trash"></i>
                    </button> 
                </div>
            </div>
        </div>
    </div>
    <ItemDetailsModal></ItemDetailsModal>
</template>
