import React from "react";

import { Outlet, Route, Routes } from "react-router";
import Home from "./page/Home";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <main className="relative w-full">
        <Navbar />
        <Sidebar />
        <Login />
        <Outlet />
      </main>
    </>
  );
};

export default App;
