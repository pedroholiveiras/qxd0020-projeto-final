import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type User } from "@/types";
import { type Quote } from "@/types";
import { citadorService } from "@/api/CitadorService";

export const useUserStore = defineStore("user", () => {
    const user = ref<User>({} as User);

    const token = computed(() => user.value.jwt);

    function logout() {
        user.value = {} as User;
    }

    return { user, token, logout }
});

export const useQuoteStore = defineStore("quote", () => {
    const quotes = ref<Quote[]>([]);

    async function getQuotes() {
        quotes.value = await citadorService.getQuotes();
    }

    return { quotes, getQuotes };
});

export const useStateStore = defineStore("state", () => {
    const action = ref(0);
    const stype = ref(0);
    const sitem = ref(0);

    return { action, stype, sitem };
})

export const useSelStore = defineStore("sel", () => {
    const sel = ref({});

    return { sel };
})
