import { api } from "@/api";
import qs from "qs";
import { type Quote } from "@/types";
import { type Work } from "@/types";
import { type Author } from "@/types";
import { useUserStore } from "@/stores/userStore";

class CitadorSevice {
    constructor() {}

//    async getQuote(id: number): Promise<Quote> {
//       const query = qs.stringify({
//            populate: {
//                work: {
//                    populate: ["authors"]
//                }
//            }
//        }, {
//            encodeValuesOnly: true
//        });
//
//        const { data } = await api.get(`/quotes/${id}?${query}`)
//        console.log(data.data);
//        return data.data;
//    }

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

    async deleteQuote(id: number): Promise<Quote> {
        const userStore = useUserStore();
        const { data } = await api.delete(`/quotes/${id}`, {
            headers : {
                Authorization: `Bearer ${userStore.token}`
            }
        });
        return data.data;
    }

    async getWorks(page = 1, pageSize = 24): Promise<Work[]> {
        const { data } = await api.get("/works", {
            params: {
                populate: ["authors"]
            }
        });
        return data.data.reverse();
    }

    async newWork(title: string, subtitle: string, authors: object, edition: number, year: number, address: string ,publisher: string, isbn: string, userid: number): Promise<Quote> {
        const userStore = useUserStore();
        
        const { data } = await api.post('/works',
            {
                data: {
                    title: title,
                    subtitle: subtitle,
                    authors: authors,
                    edition: edition,
                    year: year,
                    address: address,
                    publisher: publisher,
                    isbn: isbn,
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

    async updateWork(id: number, title: string, subtitle: string, authors: object, edition: number, year: number, address: string,publisher: string, isbn: string, userid: number): Promise<Work> {
        const userStore = useUserStore();
        
        const { data } = await api.put(`/works/${id}`,
            {
                data: {
                    title: title,
                    subtitle: subtitle,
                    authors: authors,
                    edition: edition,
                    year: year,
                    address: address,
                    publisher: publisher,
                    isbn: isbn,
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

    async deleteWork(id: number): Promise<Work> {
        const userStore = useUserStore();
        const { data } = await api.delete(`/works/${id}`, {
            headers : {
                Authorization: `Bearer ${userStore.token}`
            }
        });
        return data.data;
    }

    async getAuthors(page = 1, pageSize = 24): Promise<Work[]> {
        const { data } = await api.get("/authors", {
            params: {
                populate: ["works"]
            }
        });
        return data.data.reverse();
    }

    async newAuthor(fname: string, lname: string, fields: object, userid: number): Promise<Author> {
        const userStore = useUserStore();
        
        const { data } = await api.post('/authors',
            {
                data: {
                    fname: fname,
                    lname: lname,
                    fields: fields,
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

    async updateAuthor(id: number, fname: string, lname: string, fields: object, userid: number): Promise<Author> {
        const userStore = useUserStore();
        
        const { data } = await api.put(`/authors/${id}`,
            {
                data: {
                    fname: fname,
                    lname: lname,
                    fields: fields,
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

    async deleteAuthor(id: number): Promise<Author> {
        const userStore = useUserStore();
        const { data } = await api.delete(`/authors/${id}`, {
            headers : {
                Authorization: `Bearer ${userStore.token}`
            }
        });
        return data.data;
    }
}

export const citadorService = new CitadorSevice();
