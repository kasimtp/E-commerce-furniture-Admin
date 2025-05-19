import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAdd } from "react-icons/md";

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: '',
    unit: '',
  });

  // Handle file upload
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle input changes
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  // Add product to database
  const AddProduct = async () => {
    if (!productDetails.name || !productDetails.price ) {
      alert('Please fill all the product details');
      return;
    }

    if (!image) {
      alert('Please upload an image');
      return;
    }

    let formData = new FormData();
    formData.append('image', image);
    formData.append('name', productDetails.name);
    formData.append('price', productDetails.price);
    // formData.append('unit', productDetails.unit);
    
    

    try {
      const response = await fetch("http://localhost:5000/api/post-product", {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert('🎉 Product Added Successfully!');
      } else {
        alert(`❌ Failed to add product: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ An error occurred. Please try again.');
    }
  };

  return (
    <div className="p-8 box-border w-full rounded-sm mt-4 lg:m-7">
      <form>
        <div className="mb-3">
          <h4 className="font-semibold pb-2">Product title:</h4>
          <input
            type="text"
            name="name"
            value={productDetails.name}
            onChange={changeHandler}
            placeholder="Type here.."
            className="bg-[#f0f2f5] outline-none max-w-80 w-full py-3 px-4 border border-black rounded-md"
          />
        </div>

        <div className="mb-3">
          <h4 className="font-semibold pb-2">Price:</h4>
          <input
            type="text"
            name="price"
            value={productDetails.price}
            onChange={changeHandler}
            placeholder="Type here.."
            className="bg-zinc-100 outline-none max-w-80 w-full py-3 px-4 border border-black rounded-md"
          />
        </div>

        {/* <div className="mb-3">
          <h4 className="font-semibold pb-2">Unit:</h4>
          <input
            type="text"
            name="unit"
            value={productDetails.unit}
            onChange={changeHandler}
            placeholder="e.g., kg, liter"
            className="bg-zinc-100 outline-none max-w-80 w-full py-3 px-4 border border-black rounded-md"
          />
        </div> */}

        <div className="mb-5">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={imageHandler}
            className="hidden"
          />

          <label
            htmlFor="fileInput"
            className="flex mt-4 flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition duration-200 cursor-pointer"
          >
            <FaCloudUploadAlt className="text-gray-400 text-3xl mb-2" />
            <span className="text-gray-500">
              {image ? image.name : 'Upload'}
            </span>
          </label>
        </div>
      </form>
      
  
      
      

      <button
        type="button"
        onClick={AddProduct}
        className="border border-black rounded-full text-white bg-blue-500 mt-4 p-1 flex items-center w-[170px] justify-center h-14 text-2xl gap-x-1"
      >
        <MdAdd />
        <p className="text-lg font-semibold">Add Product</p>
      </button>
    </div>
  );
};

export default Addproduct;
