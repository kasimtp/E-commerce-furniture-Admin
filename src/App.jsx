import React from 'react'

import { Route, Routes } from "react-router";
import Home from './page/Home'

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './components/Login';


const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Login/> */}
    <div className='flex flex-rol ' >
    {/* <Navbar/> */}
  <div >
  <Sidebar/>
  </div>
   <div  className='w-full'>
   <Home/>
   <Routes>
<Route path="/login" element={<Login/>} />
</Routes>

   </div>
    
  
    
    </div>
    </>
  )
}

export default App
