<script setup lang="ts">
    import { ref, computed } from "vue";
    import { isAxiosError } from "axios";
    import { useRouter } from "vue-router";
    import { authenticationService} from "@/api/AuthenticationService";

    const email = ref("");
    const password = ref("");
    const isEmpty = computed(() => email.value.length == 0 || password.value.length == 0);
    const submitted = ref(false);
    const errorMessage = ref("");

    const router = useRouter();

    async function authenticate() {
        submitted.value = true;
        try {
            const user = await authenticationService.login(email.value, password.value);
        } catch (e) {
            if(isAxiosError(e)) {
                console.log(e.response?.data);
                errorMessage.value = e.response?.data.error.message;
            }
        }
    }

    function resetFields() {
        email.value = "";
        password.value = "";
    }    
</script>

<template>
    <div class="modal" id="accountModal" data-bs-keyboard="true" tabindex="-1" aria-labelledby="accountModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Entrar</h1>
                    <button @click="resetFields()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="errorMessage"  class="alert alert-danger" role="alert">
                        {{ errorMessage }}
                    </div>
                    <form novalidate @submit.prevent="authenticate" :class="{ 'was-validated': submitted }">
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Endereço eletrônico:</label>
                            <input
                                v-model="email"
                                type="email"
                                class="form-control"
                                id="emailInput"
                                placeholder="mail@mail.com"
                                required
                                />
                            <div class="invalid-feedback">Endereço eletrônico inválido</div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Senha</label>
                            <input
                                v-model="password"
                                type="password"
                                class="form-control"
                                id="passwordInput"
                                required
                                />
                            <div class="invalid-feedback">Senha obrigatória</div>
                        </div>
                        <div class="mb-3">
                            <input
                                type="submit"
                                class="float-end btn btn-primary"
                                value="Entrar"
                                :disabled="isEmpty"
                                />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
