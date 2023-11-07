import { api } from "@/api";
import { type Quote } from "@/types";

class CitadorSevice {
    constructor() {}

    async allQuotes(page = 1, pageSize = 24): Promise<Quote[]> {
        try {
            const { data } = await api.get("/quotes?populate[work][populate][0]=authors");
            console.log(data.data);
            return data.data;
        } catch (e) {
            return Error("Não foi possivel carregar");
        }
    }
}

export const citadorService = new CitadorSevice();
