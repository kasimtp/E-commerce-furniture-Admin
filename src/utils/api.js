// import axios from "axios"


// export const baseUrl = "http://localhost:5000"


// export const apiClient = axios.create({
//     baseURL:baseUrl,
//     headers:{
//         "Content-Type":"application/json"
//     }
// })

// src/utils/api.js
// import axios from "axios";

// export const baseUrl = "https://e-commerce-furniture-backend-gpxh.onrender.com/api";

// export const apiClient = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Content-Type": "application/json"
//   }
// });





import axios from "axios";

export const baseUrl = "https://e-commerce-furniture-backend-gpxh.onrender.com/api";

// Default JSON client
export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create new function for multipart/form-data
export const postFormData = async (url, formData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${baseUrl}${url}`, formData); // No content-type set
    return response.data;
  } catch (err) {
    throw err;
  }
};
