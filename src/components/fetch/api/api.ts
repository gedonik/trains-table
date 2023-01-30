import axios from "axios";

const API = 'https://6356556e9243cf412f81f19c.mockapi.io/trains';

type ApiType = {
    fetchData: () => Promise<Function>
}

const api: ApiType = {
    async fetchData() {
       return axios.get(API)
    }
}

export default api;