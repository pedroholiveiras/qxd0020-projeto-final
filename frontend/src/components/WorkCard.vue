<script setup lang="ts">
    import { useUserStore, useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const userStore = useUserStore();
    const stateStore = storeToRefs(useStateStore());

    const props = defineProps<{
        id: number,
        title: string,
        subtitle?: string,
        author?: string,
        edition?: number,
        year: number,
        publisher?: string,
        address?: string,
        isbn?: string
    }>();

    function select(){
        stateStore.sact.value = 1;
        stateStore.stype.value = 1;
        stateStore.sid.value = props.id;
    }

    function edit() {
        select();
        stateStore.sdata.value = {
            id: props.id,
            title: props.title,
            subtitle: props.subtitle,
            author: props.author,
            edition: props.edition,
            year: props.year,
            publisher: props.publisher,
            address: props.address,
            isbn: props.isbn
        };
    }
</script>

<template>
    <div class="card col-md-10 mx-auto mb-2">
        <div class="card-body">
            <div class="mb-4">
                <span v-if="author">{{author}}.</span>
                <span v-if="title">&nbsp<i>{{title}}</i></span>
                <span v-if="subtitle">: {{subtitle}}</span>.
                <span v-if="edition">{{edition}}ª ed.</span>
                <span v-if="address">&nbsp{{address}}:</span>
                <span v-if="publisher">&nbsp{{publisher}},</span>
                <span v-if="year">&nbsp{{year}}.</span>
                <span v-if="isbn">&nbspISBN {{isbn}}.</span>
            </div>
            <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-primary"><i class="bi-eye"/></a>
                <div v-if="userStore.user.username">
                    <button
                        type="button"
                        class="btn btn-primary mx-2"
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
