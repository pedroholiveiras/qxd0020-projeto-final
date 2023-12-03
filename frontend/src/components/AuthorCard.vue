<script setup lang="ts">
    import { useUserStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const stateStore = storeToRefs(useStateStore());

    const props = defineProps<{
        id: number,
        fname: string,
        lname?: string,
        fields?: object
    }>();

    function select(){
        stateStore.sact.value = 1;
        stateStore.stype.value = 2;
        stateStore.sid.value = props.id;
    }

    function edit() {
        select();
        stateStore.sdata.value = {
            id: props.id,
            fname: props.fname,
            lname: props.lname,
            fields: props.fields
        };
    }
</script>

<template>
    <div class="card col-md-10 mx-auto mb-2">
        <div class="card-body">
            <div class="mb-3">
                <span class="text-muted">Nome</span>
                <span>{{fname}} {{lname}}</span>
            </div>
            <div class="mb-3" v-if="fields">
                <span class="text-muted">Áreas de atuação</span>
                <span>{{fields.join(', ')}}</span>
            </div>
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

<style scoped>
    span {
        display: block
    }
</style>
