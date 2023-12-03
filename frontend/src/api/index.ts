import Axios from "axios";

export const baseURL = "http://192.168.0.8:1337";

export const api = Axios.create({
    baseURL: `${baseURL}/api/`,
    timeout: 10000
});
