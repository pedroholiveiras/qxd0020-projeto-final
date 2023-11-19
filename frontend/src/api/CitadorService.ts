import { api } from "@/api";
import { type Quote } from "@/types";
import { type Work } from "@/types";

class CitadorSevice {
    constructor() {}

    async getQuotes(page = 1, pageSize = 24): Promise<Quote[]> {
        try {
            const { data } = await api.get("/quotes");
            console.log(data.data);
            return data.data;
        } catch (e) {
            return Error("Não foi possivel carregar");
        }
    }
}

export const citadorService = new CitadorSevice();
