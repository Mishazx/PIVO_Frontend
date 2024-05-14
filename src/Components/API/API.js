import axios from "axios";


const instance = axios.create({
    baseURL: 'https://beer.mishazx.ru/',
    withCredentials: true,
});

export const eventsAPI = {
    getEvents() {
        return instance.get(`get_brewing_events/`)
            .then(response => {
                return response.data;
            });
    },
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

