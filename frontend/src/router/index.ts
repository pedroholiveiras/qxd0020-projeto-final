import { createRouter, createWebHistory } from "vue-router";
import HomeQuotes from "@/pages/HomeQuotes.vue";
import HomeWorks from "@/pages/HomeWorks.vue";
import HomeAuthors from "@/pages/HomeAuthors.vue";

const routes = [
    {
        path: "/",
        alias: "/citacoes",
        component: HomeQuotes
    },
    {
        path: "/obras",
        component: HomeWorks
    },
    {
        path: "/autores",
        component: HomeAuthors
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});
