<script setup lang="ts">
    import ItemModal from "@/components/ItemModal.vue";
    import AccountModal from "@/components/AccountModal.vue";
    import { useUserStore } from "@/stores/userStore";

    const userStore = useUserStore();
    
    /* -------- */

    import { storeToRefs } from "pinia";
    import { useStateStore } from "@/stores/userStore";

    const state = storeToRefs(useStateStore());
</script>

<template>
    <div class="dropdown">
        <button class="btn dropdown-toggle ml-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Conta
        </button>
        <ul class="dropdown-menu dropdown-menu-md-end shadow-sm">
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#accountModal" v-if="!userStore.user.username">Entrar</a></li>
            <li><a
                class="dropdown-item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#itemModal"
                v-if="userStore.user.username"
                @click="state.action.value = 0; state.stype.value = 0"
                >Nova citação
                </a>
            </li>
            <div v-if="userStore.user.username">
                <li class="dropdown-divider"></li>
                <div class="ms-3 text-muted">
                    Logado como:<br>
                    {{ userStore.user.username }}
                </div>
            </div>
            <li><a class="dropdown-item" href="#" v-if="userStore.user.username" @click="userStore.logout">Sair</a></li>
        </ul>
    </div>
    <ItemModal></ItemModal>
    <AccountModal></AccountModal>
</template>
