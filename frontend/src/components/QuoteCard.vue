<script setup lang="ts">
    import { useUserStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const stateStore = storeToRefs(useStateStore());

    const props = defineProps<{
        id: number,
        content: string,
        page: number,
        work: number,
        author: string,
        year: number
    }>();

    function select(){
        stateStore.sact.value = 1;
        stateStore.stype.value = 0;
        stateStore.sid.value = props.id;
    }

    function edit() {
        select();
        stateStore.sdata.value = {
            id: props.id,
            content: props.content,
            page: props.page,
            work: props.work
        };
    }
</script>

<template>
    <div class="card col-md-10 mx-auto mb-2">
        <div class="card-body">
            <p class="card-text">{{ content }}</p>
            <h6 class="card-subtitle mb-3 text-muted">({{ author }}, {{ year }})</h6>
            <div class="d-flex justify-content-end">
                <div v-if="userStore.user.username">
                    <button
                        type="button"
                        class="btn btn-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#itemModal"
                        @click="edit"
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
</template>
