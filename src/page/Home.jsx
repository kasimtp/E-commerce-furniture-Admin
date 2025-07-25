// import React from "react";
// import Addproduct from "./Addproduct";
// import ListProduct from "./ProductList";
// import { Route, Routes } from "react-router";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Login from "../components/Login";
// const Home = () => {
//   return (
//     <div className=" ">
      
//       <Routes>
      

//       <Route path="/Add-product" element={<Addproduct />} />
//       <Route path="/Product-list" element={<ListProduct />} />
      
//     </Routes>

     
//     </div>
//   );
// };

// export default Home;







import React from "react";
import Addproduct from "./Addproduct";
import ListProduct from "./ProductList";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <Routes>
            <Route path="/add-product" element={<Addproduct />} />
            <Route path="/product-list" element={<ListProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
