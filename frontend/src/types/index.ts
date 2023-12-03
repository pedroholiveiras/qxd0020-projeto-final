export type Quote = {
    id: number,
    content: string,
    page: number
    userid: number
    work: string,
    year: number,
    author: string,
}

export type Work = {
    id: number,
    title: string,
    subtitle: string
}

export type Author = {
    id: number,
    lname: string,
    fname: string,
    fields: object
}

export type User = {
    jwt: string,
    id: number,
    username: string,
    email: string,
    role: string
}
