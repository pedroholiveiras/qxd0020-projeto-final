<script setup lang="ts">
    import ItemDetailsModal from "@/components/ItemDetailsModal.vue"
    import { citadorService } from "@/api/CitadorService";
    import { useUserStore, useStateStore  } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const stateStore = storeToRefs(useStateStore());

    const props = defineProps<{
        id: number,
        fname: string,
        lname?: string,
        fields?: object,
        works?: object
    }>();

    function workList(works) {
        const res = [];

        for (const work of works)
            res.push(work.attributes.title);
        return res;            
    }

    async function select() {
        stateStore.sact.value = 1;
        stateStore.stype.value = 2;
        stateStore.sid.value = props.id;

        stateStore.sdata.value = {
            id: props.id,
            fname: props.fname,
            lname: props.lname,
            fields: props.fields,
            works: workList(props.works)
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

<style scoped>
    span {
        display: block
    }
</style>
