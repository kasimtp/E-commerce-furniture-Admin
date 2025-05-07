import React from 'react'

import { Route, Routes } from "react-router";
import Home from './page/Home'

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-row ' >
    {/* <Navbar/> */}
  <div >
  <Sidebar/>
  </div>
   <div className='w-[80%]'>
   <Home/>
   </div>
    
  
    
    </div>
    </>
  )
}

export default App
