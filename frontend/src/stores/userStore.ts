import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type User } from "@/types";
import { type Quote } from "@/types";
import { type Work } from "@/types";
import { type Author } from "@/types";
import { citadorService } from "@/api/CitadorService";

export const useUserStore = defineStore("user", () => {
    const user = ref<User>({} as User);

    const token = computed(() => user.value.jwt);

    function logout() {
        user.value = {} as User;
    }

    return { user, token, logout }
});

export const useEntityStore = defineStore("quote", () => {
    const quotes = ref<Quote[]>([]);
    const works = ref<Work[]>([]);
    const authors = ref<Author[]>([]);
    const author = ref<Author>({} as Author);

    async function getQuotes() {
        quotes.value = await citadorService.getQuotes();
    }

    async function getWorks() {
        works.value = await citadorService.getWorks();
    }

    return { quotes, getQuotes, works, authors };
});

export const useStateStore = defineStore("state", () => {
    return {
        sact: ref(0),
        stype: ref(0),
        sid: ref(0),
        sdata: ref({}),
        sauthor: ref({})
    };
});
