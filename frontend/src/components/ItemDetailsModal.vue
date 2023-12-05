<script setup lang="ts">
    import { useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    function resetFields() {
        stateStore.sdata.value = {};
    }

    const stateStore = storeToRefs(useStateStore());
</script>

<template>
    <div class="modal" id="itemDetailsModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="itemDetailsModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="itemDetailsModalLabel">Detalhes</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="resetFields"></button>
                </div>
                <div class="modal-body" v-if="stateStore.stype.value == 0">
                    <div class="mb-3">
                        <span class="text-muted">Conteúdo</span>
                        <span class="ms-4">{{ stateStore.sdata.value.content }}</span>
                    </div>
                    <div v-if="stateStore.sdata.value.page != 0" class="mb-3">
                        <span class="text-muted">Página</span>
                        <span class="ms-4">{{ stateStore.sdata.value.page }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted">Obra</span>
                        <span class="ms-4">{{ stateStore.sdata.value.worktitle }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted">Autor</span>
                        <div v-for="author in stateStore.sdata.value.author">
                            <span class="ms-4">{{ author }}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-body" v-if="stateStore.stype.value == 1">
                    <div class="mb-3">
                        <span class="text-muted">Título</span>
                        <span class="ms-4">{{ stateStore.sdata.value.title }}</span>
                    </div>
                    <div class="mb-3" v-if="stateStore.sdata.value.subtitle">
                        <span class="text-muted">Subtítulo</span>
                        <span class="ms-4">{{ stateStore.sdata.value.subtitle }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted">Autor(es)</span>
                        <div v-for="author in stateStore.sdata.value.author">
                            <span class="ms-4">{{ author }}</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted" v-if="stateStore.sdata.value.edition != 0">Edição</span>
                        <span class="ms-4">{{ stateStore.sdata.value.edition }}ª ed.</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted" v-if="stateStore.sdata.value.year != 0">Ano</span>
                        <span class="ms-4">{{ stateStore.sdata.value.year }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted" v-if="stateStore.sdata.value.publisher">Editora</span>
                        <span class="ms-4">{{ stateStore.sdata.value.publisher }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted" v-if="stateStore.sdata.value.address">Local</span>
                        <span class="ms-4">{{ stateStore.sdata.value.address }}</span>
                    </div>
                    <div class="mb-3">
                        <span class="text-muted" v-if="stateStore.sdata.value.isbn">ISBN</span>
                        <span class="ms-4">{{ stateStore.sdata.value.isbn }}</span>
                    </div>
                </div>
                <div class="modal-body" v-if="stateStore.stype.value == 2">
                    <div class="mb-3">
                        <span class="text-muted">Nome</span>
                        <span class="ms-4">{{ stateStore.sdata.value.fname }} {{ stateStore.sdata.value.lname }}</span>
                    </div>
                    <div class="mb-3" v-if="stateStore.sdata.value.fields && stateStore.sdata.value.fields.length > 0">
                        <span class="text-muted">Áreas</span>
                        <span class="ms-4 br">{{ stateStore.sdata.value.fields.join('\n') }} </span>
                    </div>
                    <div class="mb-3" v-if="stateStore.sdata.value.works && stateStore.sdata.value.works.length > 0">
                        <span class="text-muted">Obras</span>
                        <span class="ms-4 br">{{ stateStore.sdata.value.works.join('\n') }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    span {
        display: block
    }

    .br {
        white-space: pre;
    }
</style>
