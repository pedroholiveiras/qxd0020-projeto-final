import { api } from "@/api";
import qs from "qs";
import { type Quote } from "@/types";
import { type Work } from "@/types";
import { useUserStore } from "@/stores/userStore";

class CitadorSevice {
    constructor() {}

    async getQuote(id: number): Promise<Quote> {
        const query = qs.stringify({
            populate: {
                work: {
                    populate: ["authors"]
                }
            }
        }, {
            encodeValuesOnly: true
        });

        const { data } = await api.get(`/quotes/${id}?${query}`)
        console.log(data.data);
        return data.data;
    }

    async getQuotes(page = 1, pageSize = 24): Promise<Quote[]> {
        const query = qs.stringify({
            populate: {
                work: {
                    populate: ["authors"]
                }
            }
        }, {
            encodeValuesOnly: true
        });

        const { data } = await api.get(`/quotes?${query}`);
        return data.data.reverse();
    }

    async getWorks(page = 1, pageSize = 24): Promise<Work[]> {
        const { data } = await api.get("/works");
        return data.data;
    }

    async newQuote(content: string, page: number, work: number, userid: number): Promise<Quote> {
        const userStore = useUserStore();
        
        const { data } = await api.post('/quotes',
            {
                data: {
                    content: content,
                    page: page,
                    work: work,
                    users_permissions_user: userid
                }
            }, 
            {
                headers : {
                    Authorization: `Bearer ${userStore.token}`
                }
            }
        )
        return data.data;
    }

    async updateQuote(id: number, content: string, page: number, work: number, userid: number): Promise<Quote> {
        const userStore = useUserStore();
        
        const { data } = await api.put(`/quotes/${id}`,
            {
                data: {
                    content: content,
                    page: page,
                    work: work,
                    users_permissions_user: userid
                }
            }, 
            {
                headers : {
                    Authorization: `Bearer ${userStore.token}`
                }
            }
        )
        return data.data;
    }

    async delete(id: number): Promise<Quote> {
        const userStore = useUserStore();
        const { data } = await api.delete(`/quotes/${id}`, {
            headers : {
                Authorization: `Bearer ${userStore.token}`
            }
        });
        return data.data;
    }
}

export const citadorService = new CitadorSevice();
