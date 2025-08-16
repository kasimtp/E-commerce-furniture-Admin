


import React from "react";
import Addproduct from "./Addproduct";
import ListProduct from "./ProductList";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen max-w-full">
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
