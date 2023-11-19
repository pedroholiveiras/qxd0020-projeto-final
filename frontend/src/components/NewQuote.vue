<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { type Work } from "@/types";
    import WorkSelector from "@/components/WorkSelector.vue";
    import { NewQuote } from "@/components/NewQuote.vue";
    import { citadorService } from "@/api/CitadorService";

    const loading = ref(true);
    const works = ref<Work[]>([]);

    onMounted(async () => {
        works.value = await citadorService.getWorks();
        console.log(works.value);
    })
</script>

<template>
    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Nova citação</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="newQuoteContent" class="form-label">Texto</label>
                            <textarea class="form-control" id="newQuoteContent"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="newQuotePage" class="form-label">Número da página</label>
                            <input type="number" class="form-control" id="newQuotePage">
                        </div>
                        <div class="form-group">
                            <label for="newQuoteWork">Obra</label>
                            <select class="form-control" id="newQuoteObra">
                                <option v-for="work in works" :key="work.id" v-bind:value="work.id">{{work.attributes.title}}</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="newQuoteIsPublic">
                            <label class="form-check-label" for="newQuoteIsPublic">Privada</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="submit" class="btn btn-primary" @click="newQuote()">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>
