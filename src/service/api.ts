import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost/wordpress/wp-json/wp/v2',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;