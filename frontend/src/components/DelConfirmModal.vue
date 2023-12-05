<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { isAxiosError } from "axios";
    import { type Quote } from "@/types";
    import { getUploadURL } from "@/composables/useUploadFile";
    import { citadorService } from "@/api/CitadorService";
    import { useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const stateStore = storeToRefs(useStateStore());

    const emit = defineEmits(['refresh']);
    
    async function remove() {
        try {
            if (stateStore.stype.value == 0) {
                await citadorService.deleteQuote(stateStore.sid.value);
            } else if (stateStore.stype.value == 1) {
                await citadorService.deleteWork(stateStore.sid.value);
            } else if (stateStore.stype.value == 2) {
                await citadorService.deleteAuthor(stateStore.sid.value);
            }  
            console.log("removido");
        } catch (e) {
            console.log(e);
        }
    }
</script>

<template>
    <div class="modal" id="delConfirmModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="delConfirmModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="delConfirmModalLabel">Confirmação</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Você tem certeza que deseja apagar este item?
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        @click="remove(); $emit('refresh')"
                        >Sim
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
