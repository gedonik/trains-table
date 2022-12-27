import axios from "axios";

const API = 'https://6356556e9243cf412f81f19c.mockapi.io/trains';

const api = {
    async fetchData(limit, page) {
       return axios.get(API, {
           params: {
               _limit: limit,
               _page: page
           }
       })
    }
}

export default api;