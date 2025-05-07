import React from 'react';
import logo1 from "../assets/StoreLogo1.png";

const Navbar = () => {
  return (
    <header className="w-full h-[150px]  shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo1}
            alt="Logo"
            className="h-[160px] w-auto object-contain"
          />
        </div>

        {/* Logout Button */}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <p className="text-[22px] font-semibold">Logout</p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
