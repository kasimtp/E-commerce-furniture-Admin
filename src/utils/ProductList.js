 
 import { apiClient } from "./api"

 export const getData = ()=>{
    return apiClient.get("/api/get-product")
 }

 