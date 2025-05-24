  
 import { createContext, useState } from "react";
 
 export const AdminContext = createContext();
 
 const AdminContextProvider = (props) => {
   const [atoken, setAtoken] = useState(
     localStorage.getItem("atoken") ? localStorage.getItem("atoken") : false
   );
 
   const value = {
     atoken,
     setAtoken,
   };
 
   return (
     <AdminContext.Provider value={value}>{props.children}</AdminContext.Provider>
   );
 };
 
 export default AdminContextProvider;
 