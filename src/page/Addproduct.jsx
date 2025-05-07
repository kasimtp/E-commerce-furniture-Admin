import React from 'react'
// import upload_area from '../assets/upload_area.svg'
import { MdAdd } from "react-icons/md";

const Addproduct = () => {
  return (
    <div className="p-8 box-border  w-full rounded-sm mt-4 lg:m-7">
     
      <div className="mb-3">
        <h4 className="font-semibold pb-2">Product title : </h4>
        <input
          type="text" 
          name="name"
          placeholder="Type here.."
          className="bg-[#f0f2f5] outline-none max-w-80 w-full py-3 px-4  border border-black  rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="font-semibold pb-2">Price: </h4>
        <input
          type="text"  
          name="old_price"
          placeholder="Type here.."
          className=" bg-zinc-100 outline-none max-w-80 w-full py-3 px-4 border border-black  rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="font-semibold pb-2">Offer Price </h4>
        <input
          type="text" 
          name="new_price"
          placeholder="Type here.."
          className="outline-none bg-zinc-100 max-w-80 w-full py-3 px-4 border border-black  rounded-md"
        />
      </div>
      <div className="mb-3 flex items-center gap-x-4">
        <h4 className="font-semibold pb-2">Product Category</h4>
        <select   className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none">
          <option value={"Women"}>Women</option>
          <option value={"Men"}>Men</option>
          <option value={"Kid"}>Kid</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img  alt="" className="w-20 rounded-sm inline-block" />
        </label>
        <input className="bg-primary max-w-80 py-3 px-" />
      </div>
      <button  className="border border-black  rounded-full text-white
       bg-blue-500 mt-4  p-1 flex items-center w-[170px] justify-center h-14 text-2xl gap-x-1"><MdAdd />
      <p className='text-lg font-semibold'> Add Product</p>
      </button>
    </div>
  )
}

export default Addproduct
