import React from 'react';
// import logo1 from "../assets/StoreLogo1";
import { useNavigate } from 'react-router-dom';
import logogreen from "../assets/logogreen.png";

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <header className="w-[2800px] h-[250px] bg-amber-000   shadow-md">
      <div className=" px-4 sm:px-6 lg:px-8 py-3 flex items-center bg-amber-000 justify-between">
        {/* Logo */}
        <div className="flex ">
          <img
            src={logogreen}
            alt="Logo"
            className="h-[160px] w-auto object-contain"
          />
        </div>

        {/* Logout Button */}
        <div >
          <button onClick={() => navigate('/login')} 
           className="bg-blue-600 w-54 h-30 text-white px-4 py-2 rounded-lg  hover:bg-blue-700 transition">
            <p className="text-[42px] font-semibold">Logout</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
