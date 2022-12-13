import axios from "axios";

const API = 'https://6356556e9243cf412f81f19c.mockapi.io/trains';

const api = {
    async fetchData() {
        try {
            return axios.get(API);
        }
        catch(error) {
            console.error(error);
        }
    }
}

export default api;