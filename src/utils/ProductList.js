 
//  import { apiClient } from "./api.js";


//  export const getData = ()=>{
//     return apiClient.get("/api/get-product")

//  }

//  export const deleteData = (id) => {
//    return apiClient.delete(`/api/delete-product/${id}`, {

//    })
//  };



 import { apiClient } from "./api.js";

// GET products
export const getData = () => {
  return apiClient.get("/get-product"); // ✅ Calling backend route
};

// DELETE product
export const deleteData = (id) => {
  return apiClient.delete(`/delete-product/${id}`);
};


 