import React from "react";
import Addproduct from "./Addproduct";
import ListProduct from "./ListProduct";
import { Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="flex">
      
      <Routes>
      

      <Route path="/add-product" element={<Addproduct />} />
      <Route path="/product-list" element={<ListProduct />} />
    </Routes>

     <div className="p-4"> home page</div>
    </div>
  );
};

export default Home;
