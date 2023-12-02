<script setup lang="ts">
    import { ref, onMounted, onBeforeMount } from "vue";
    import { type Work } from "@/types";
    import { type Quote } from "@/types";
    import { citadorService } from "@/api/CitadorService";
    import { useUserStore, useQuoteStore, useSelStore } from "@/stores/userStore";
    import { storeToRefs } from "pinia";

    import { useStateStore } from "@/stores/userStore";

    const state = storeToRefs(useStateStore());
    const sel = storeToRefs(useSelStore());

    const actions = ["Adicionar", "Atualizar"];
    const types = ["citação", "obra", "autor"];

    onMounted(async () => {
        works.value = await citadorService.getWorks();
    })

    const userStore = useUserStore();
    const quoteStore = useQuoteStore();
    const works = ref<Work[]>([]);

    const quotes = storeToRefs(quoteStore).quotes;

    async function newQuote() {
        try {
            await citadorService.newQuote(
                sel.sel.value.content,
                sel.sel.value.page,
                sel.sel.value.work,
                userStore.user.id
            );
            console.log(quotes.value);
            quotes.value = await citadorService.getQuotes();
            state.sitem.value = 0;
            console.log("adicionado");
        } catch (e) {
            // console.log(e);
        }
    }

    const content = ref(sel.sel.value.content);

    async function updateQuote() {
        try {
            await citadorService.updateQuote(
                state.sitem.value,
                sel.sel.value.content,
                sel.sel.value.page,
                sel.sel.value.work,
                userStore.user.id
            );
            quotes.value = await citadorService.getQuotes();
            console.log("atualizado");
        } catch (e) {
            // console.log(e);
        }
    }

    function action(a) {
        switch (a) {
            case a = 0:
                newQuote();
                break;
            case a = 1:
                updateQuote();
                break;
            default:
                console.log("açao invalida");
        }
    }

    function resetFields() {
        sel.sel.value = {};
    }
</script>

<template>
    <div class="modal" id="itemModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ actions[state.action.value] }} {{ types[state.stype.value] }}
                    </h1>
                    <button @click="resetFields()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- formulário p/ citação -->
                <div class="modal-body" v-if="state.stype.value == 0">
                    <form action="">
                        <div class="mb-3">
                            <label for="itemContent" class="form-label">Conteúdo</label>
                            <textarea v-model="sel.sel.value.content" class="form-control" id="itemContent" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="itemPage" class="form-label">Página</label>
                            <input v-model="sel.sel.value.page" type="number" class="form-control" id="itemPage">
                        </div>

                        <label class="mb-2" for="ItemWork">Escolha uma obra</label>
                        <select v-model="sel.sel.value.work" class="form-select mb-2" id="ItemWork" aria-label="Escolher obra">
                            <option v-for="work in works" :key="work.id" v-bind:value="work.id">
                                {{work.attributes.title}}
                            </option>
                        </select>
                    </form>
                </div>

                <!-- formulário p/ obra -->
                <div class="modal-body" v-if="state.stype.value == 1">
                    <h1>teste {{ state.sitem.value }}</h1>
                </div>

                <!-- formulário p/ autor -->
                <div class="modal-body" v-if="state.stype.value == 2">
                    <h1>teste 123</h1>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="action(state.action.value)">
                        {{ actions[state.action.value] }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
