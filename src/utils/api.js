import axios from "axios"


export const baseUrl = "http://localhost:5000"


export const apiClient = axios.create({
    baseURL:baseUrl,
    headers:{
        "Content-Type":"application/json"
    }
})

