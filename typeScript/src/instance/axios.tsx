import axios from "axios";

const axiosInsta = axios.create({
    baseURL: 'http://localhost:3001/'
});

export {axiosInsta}