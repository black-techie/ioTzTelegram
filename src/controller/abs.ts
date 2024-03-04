import axios from "axios";
const token = "7152328164:AAGzkucP0M9Mtq3QEJQMqwbZd0xkrhZqWIA"

const BASE_URL = `https://api.telegram.org/bot${token}`


const axiosInstance = () =>{
    return {
        get(method: string,params: any){
            return axios.get(`/${method}`,{
                baseURL: BASE_URL,
                params
            })

        },
        post(method: string, data: any){
            return axios({
                method: "post",
                baseURL:  BASE_URL,
                url: `/${method}`,
                data
            })
        }
    }
}


export {axiosInstance}