// apiClient.js
import axios from "axios";

const BASE_URL =  process.env.NEXT_PUBLIC_BASE_URL;
console.log(BASE_URL,"enccvvvvv");

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});


export default axiosInstance;