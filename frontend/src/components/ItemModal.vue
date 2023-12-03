<script setup lang="ts">
    import { ref, onMounted, onBeforeMount } from "vue";
    import { type Work } from "@/types";
    import { type Quote } from "@/types";
    import AuthorSelect from "@/components/AuthorSelect.vue";
    import { citadorService } from "@/api/CitadorService";
    import { useUserStore, useEntityStore, useStateStore } from "@/stores/userStore";

    import { storeToRefs } from "pinia";
    onMounted(async () => {
        works.value = await citadorService.getWorks();
        authors.value = await citadorService.getAuthors();
        console.log(authors.value);
    })

    const stateStore = storeToRefs(useStateStore());
    const entityStore = useEntityStore();
    const userStore = useUserStore();

    const works = storeToRefs(entityStore).works;
    const quotes = storeToRefs(entityStore).quotes;
    const authors = storeToRefs(entityStore).authors;
    const quote = ref<Quote>({} as Quote);

    const actions = ["Adicionar", "Atualizar"];
    const types = ["citação", "obra", "autor"];

    /* ------------------- */
    

    const checkedAuthors = ref([]);
    let checkedAuthorIds = [];

    function selAuthors () {
        for (let i = 0; i < authors.value.length; i++) {
            if (checkedAuthors.value[i] == true) {
                checkedAuthorIds.push(authors.value[i].id);
            }
        }
    }

    /* ADICIONAR/ATUALIZAR E DEPOIS LIMPAR AUTORES SELECIONADOS!!! */
    /* ------------------- */

    async function newQuote() {
        try {
            await citadorService.newQuote(
                stateStore.sdata.value.content,
                stateStore.sdata.value.page,
                stateStore.sdata.value.work,
                userStore.user.id
            );
            quotes.value = await citadorService.getQuotes();
            console.log("adicionado");
        } catch (e) {
            console.log(e);
        }
    }

    async function updateQuote() {
        try {
            await citadorService.updateQuote(
                stateStore.sid.value,
                stateStore.sdata.value.content,
                stateStore.sdata.value.page,
                stateStore.sdata.value.work,
                userStore.user.id
            );
            quotes.value = await citadorService.getQuotes();
            console.log("atualizado");
        } catch (e) {
            console.log(e);
        }
    }

    async function newWork() {
        selAuthors();
        try {
            await citadorService.newWork(
                stateStore.sdata.value.title,
                stateStore.sdata.value.subtitle,
                checkedAuthorIds,
                stateStore.sdata.value.edition,
                stateStore.sdata.value.year,
                stateStore.sdata.value.publisher,
                stateStore.sdata.value.isbn,
                userStore.user.id
            );
            works.value = await citadorService.getWorks();
            console.log("atualizada obra");
            checkedAuthorIds = [];
        } catch (e) {
            console.log(e);
        }
    }

    async function updateWork() {
        selAuthors();
        try {
            await citadorService.updateWork(
                stateStore.sid.value,
                stateStore.sdata.value.title,
                stateStore.sdata.value.subtitle,
                checkedAuthorIds,
                stateStore.sdata.value.edition,
                stateStore.sdata.value.year,
                stateStore.sdata.value.publisher,
                stateStore.sdata.value.isbn,
                userStore.user.id
            );
            works.value = await citadorService.getWorks();
            console.log("atualizado");
            checkedAuthorIds = [];
        } catch (e) {
            console.log(e);
        }
    }

    function action(act, ent) {
        if (act == 0 && ent == 0) {
            newQuote();
        } else if (act == 1 && ent == 0) {
            updateQuote();
        } else if (act == 0 && ent == 1) {
            newWork();
        } else if (act == 1 && ent == 1) {
            updateWork();
        }

        resetFields();
    }

    function resetFields() {
        stateStore.sdata.value = {};
    }
</script>

<template>
    <div class="modal" id="itemModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="itemModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                        {{ actions[stateStore.sact.value] }} {{ types[stateStore.stype.value] }}
                    </h1>
                    <button @click="resetFields()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <!-- formulário p/ citação -->
                <div class="modal-body" v-if="stateStore.stype.value == 0">
                    <form action="">
                        <div class="mb-3">
                            <label for="quoteContent" class="form-label">Conteúdo</label>
                            <textarea v-model="stateStore.sdata.value.content" class="form-control" id="quoteContent" rows="3"></textarea>
                        </div>

                        <div class="mb-3">
                            <label for="quotePage" class="form-label">Página</label>
                            <input v-model="stateStore.sdata.value.page" type="number" class="form-control" id="quotePage">
                        </div>

                        <label class="mb-2" for="quoteWork">Escolha uma obra</label>
                        <select v-model="stateStore.sdata.value.work" class="form-select mb-2" id="quoteWork" aria-label="Escolher obra">
                            <option v-for="work in works" :key="work.id" v-bind:value="work.id">
                                {{work.attributes.title}}
                            </option>
                        </select>
                    </form>
                </div>

                <!-- formulário p/ obra -->
                <div class="modal-body" v-if="stateStore.stype.value == 1">
                    <form action="">
                        <div class="mb-3">
                            <label for="workTitle" class="form-label">Título</label>
                            <input v-model="stateStore.sdata.value.title" type="text" class="form-control" id="workTitle">
                        </div>
                        <div class="mb-3">
                            <label for="workSubtitle" class="form-label">Subtítulo</label>
                            <input v-model="stateStore.sdata.value.subtitle" type="text" class="form-control" id="workSubtitle">
                        </div>
                        <div class="mb-3">
                            <label for="workAuthor" class="form-label">Autor(es):</label>
                                <fieldset class="row overflow-x-hidden overflow-y-hidden" style="max-height: 128px">
                                    <div class="col-sm-10" v-for="(author, i) in authors" :key="author.id">
                                        <div class="form-check">
                                            <input v-model="checkedAuthors[i]" class="form-check-input" type="checkbox" name="gridRadios" :id="i" value="option1">
                                            <label class="form-check-label" :for="i">
                                                {{ author.attributes.fname }} {{ author.attributes.lname }}
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                        </div>
                        <div class="mb-3">
                            <label for="workEdition" class="form-label">Edição</label>
                            <input v-model="stateStore.sdata.value.edition" type="number" class="form-control" id="workEdition">
                        </div>
                        <div class="mb-3">
                            <label for="workEdition" class="form-label">Ano</label>
                            <input v-model="stateStore.sdata.value.year" type="number" class="form-control" id="workEdition">
                        </div>
                        <div class="mb-3">
                            <label for="workPublisher" class="form-label">Editora</label>
                            <input v-model="stateStore.sdata.value.publisher" type="text" class="form-control" id="workPublisher">
                        </div>
                        <div class="mb-3">
                            <label for="workISBN" class="form-label">ISBN</label>
                            <input v-model="stateStore.sdata.value.isbn" type="text" class="form-control" id="workISBN">
                        </div>

                    </form>
                </div>

                <!-- formulário p/ autor -->
                <div class="modal-body" v-if="stateStore.stype.value == 2">
                    <h1>teste 123</h1>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="action(stateStore.sact.value, stateStore.stype.value)">
                        {{ actions[stateStore.sact.value] }}
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>
