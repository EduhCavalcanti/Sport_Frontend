import axios from 'axios';

const api = (
    axios.create({ baseURL: 'https://projetosport.herokuapp.com' })
)

api.interceptors.request.use(async config => {
    try {
        const token = await localStorage.getItem('@SportAtletas:token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    } catch (err) {
        console.log(err)
    }
})

export default api;


/* 'https://atletasport-backend.herokuapp.com' */