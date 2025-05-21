  
 import { createContext, useState } from "react";
 
 export const AdminContext = createContext();
 
 const AdminContextProvider = (props) => {
   const [atoken, setAtoken] = useState(
     localStorage.getItem("aToken") ? localStorage.getItem("aToken") : false
   );
 
   const value = {
     atoken,
     setAtoken,
   };
 
   return (
     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
   );
 };
 
 export default AdminContextProvider;
 