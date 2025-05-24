import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProductList from "./page/ProductList";
import Home from './page/Home'

const App = () => {
  return (
    <>
      <Navbar />
    <div className="flex min-h-screen">
  <Sidebar className="w-[200px] shrink-0" />
  <div className="  overflow- p-4">
    {/* <ProductList /> */}
    <Home/>
    {/* <Outlet /> */}
  </div>
</div>

    </>
  );
};

export default App;
