import * as axios from 'axios'

// @ts-ignore
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});
