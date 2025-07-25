import React from "react";
import { useNavigate } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";


const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className=" flex flex-col space-y-12 pt-[100px]  h-screen  p-4 shadow-lg">
      <div>
        <button onClick={() => navigate('/add-product' ) } 
        
         className="w-[190px] h-[60px] mb-4 p-3 bg-blue-500 text-black rounded hover:bg-blue-600">
          <p className="  cursor-pointer text-white  gap-x-2 text-[23px] items-center flex"> <IoAddCircleOutline />
          <p className=" font-semibold text-lg "> Add Product</p></p>
        </button>
      </div>

      <div>
        <button onClick={() => navigate('/product-List')} 
        
         className="w-[190px] h-[60px] mb-4 p-3 bg-blue-500 text-black rounded hover:bg-blue-600">
          <p className="  cursor-pointer text-white  gap-x-2 text-[23px] items-center flex"> <FaClipboardList />
          <p className=" font-semibold text-lg "> productlist</p></p>
        </button>
      </div>
    </div>
  )
};

export default Sidebar;
