 
 import { apiClient } from "./api";


 export const getData = ()=>{
    return apiClient.get("/get-product")

 }

 export const deleteData = (id) => {
   return apiClient.delete(`/api/delete-product/${id}`, {

   })
 };

 