import axios from "axios";

export const API_URL = "http://localhost:8080/api";

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    console.log("Token: " + token);
    
    config.headers.Authorization = 'Bearer' + localStorage.getItem("token");
    // console.log('localStorage.getItem: ', localStorage.getItem('token'));
    return config;
});

export default $api;
