import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from '../config/env';

let headers = {}

const axiosInstance =  axios.create({
    baseURL:envs.DEV_BACKEND_URL,
    headers
})

console.log('envs', envs.DEV_BACKEND_URL)

axiosInstance.interceptors.request.use(
    async (config)=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
        config.headers.Autorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default axiosInstance;
