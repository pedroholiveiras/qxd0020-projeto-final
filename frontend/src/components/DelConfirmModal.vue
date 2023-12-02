<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { isAxiosError } from "axios";
    import { type Quote } from "@/types";
    import { getUploadURL } from "@/composables/useUploadFile";
    import { citadorService } from "@/api/CitadorService";
    import { useStateStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    const loading = ref(true);
    const error = ref("");
    const feedback = ref("");
    const state = storeToRefs(useStateStore());

    const emit = defineEmits(['refresh']);
    
    async function remove() {
        try {
            console.log(`removido ${state.sitem.value}`);
            console.log(typeof(state.sitem.value))
            const res = await citadorService.delete(state.sitem.value);
        } catch (e) {
//            console.log(e);
            if(e instanceof Error)
                error.value = e.message;
        }
    }
</script>

<template>
    <div class="modal" id="delConfirmModal" tabindex="-1" aria-labelledby="delConfirmModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="delConfirmModalLabel">Confirmação</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Você tem certeza que deseja apagar esta citação?
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        @click="remove(); $emit('refresh')"
                        >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
