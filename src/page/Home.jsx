import React from "react";
import Addproduct from "./Addproduct";
import ListProduct from "./ListProduct";
import { Route, Routes } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
const Home = () => {
  return (
    <div className="flex">
      
      <Routes>
      

      <Route path="/add-product" element={<Addproduct />} />
      <Route path="/product-list" element={<ListProduct />} />
      
    </Routes>

     
    </div>
  );
};

export default Home;
