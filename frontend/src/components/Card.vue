<script setup lang="ts">
    import { useUserStore, useStateStore, useSelStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const state = storeToRefs(useStateStore());
    const sel = storeToRefs(useSelStore());

    const props = defineProps<{
        id: number,
        content: string,
        page: number,
        work: number,
        author: string,
        year: number
    }>();

    function selId(){
        state.action.value = 1;
        state.stype.value = 0;
        state.sitem.value = props.id;
    }

    function edit() {
        selId();
        const selItem = {
            id: props.id,
            content: props.content,
            page: props.page,
            work: props.work
        };

        sel.sel.value = selItem;
        console.log(sel.sel.value);
    }
</script>

<template>
    <div class="card col-md-10 mx-auto mb-2">
        <div class="card-body">
            <p class="card-text">{{ content }}</p>
            <h6 class="card-subtitle mb-3 text-muted">({{ author }}, {{ year }})</h6>
            <div class="d-flex">
                <div class="me-auto">
                    <a href="#" class="btn btn-primary me-2">ABNT</a>
                    <a href="#" class="btn btn-primary">bibLaTeX</a>
                </div>
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
                        @click="selId"
                        ><i class="bi-trash"></i>
                    </button> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .btn {
        color: white;
    }
</style>
