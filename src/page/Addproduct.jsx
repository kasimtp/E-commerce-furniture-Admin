import React from 'react';
import upload_area from '../assets/upload_area.svg'; // Uncomment this
import { MdAdd } from "react-icons/md";

const Addproduct = () => {
  return (
    <div className="p-8 box-border w-full rounded-sm mt-4 lg:m-7">

      <div className="mb-3">
        <h4 className="font-semibold pb-2">Product title : </h4>
        <input
          type="text"
          name="name"
          placeholder="Type here.."
          className="bg-[#f0f2f5] outline-none max-w-80 w-full py-3 px-4 border border-black rounded-md"
        />
      </div>

      <div className="mb-3">
        <h4 className="font-semibold pb-2">Price: </h4>
        <input
          type="text"
          name="old_price"
          placeholder="Type here.."
          className="bg-zinc-100 outline-none max-w-80 w-full py-3 px-4 border border-black rounded-md"
        />
      </div>

      {/* <div className="mb-3">
        <h4 className="font-semibold pb-2">Offer Price </h4>
        <input
          type="text"
          name="new_price"
          placeholder="Type here.."
          className="outline-none bg-zinc-100 max-w-80 w-full py-3 px-4 border border-black rounded-md"
        />
      </div> */}

      <div className="mb-5">
        <label htmlFor="file-input">
          <img src={upload_area} alt="Upload Area" className="cursor-pointer" />
        </label>
        <input id="file-input" type="file" className="hidden" />
      </div>

      <button className="border border-black rounded-full text-white bg-blue-500 mt-4 p-1 flex items-center w-[170px] justify-center h-14 text-2xl gap-x-1">
        <MdAdd />
        <p className="text-lg font-semibold">Add Product</p>
      </button>
    </div>
  );
};

export default Addproduct;
