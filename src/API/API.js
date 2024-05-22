import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.beer.mishazx.ru/',
    withCredentials: true,
});

export const API = {
    getEvents() {
        return instance.get(`get_brewing_events/`)
            .then(response => {
                return response.data;
            });
    },

    getProduction() {
        return instance.get(`get_production/`)
            .then(response => {
                return response.data;
            })
    }
}



export const authAPI = {
    me() {
        return instance.get(`auth/me` );
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`,
            { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
