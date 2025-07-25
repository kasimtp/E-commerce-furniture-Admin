// import React, { useEffect, useState } from 'react';
// import { MdDeleteOutline } from 'react-icons/md';
// import { deleteData, getData } from '../utils/ProductList';
// // import { baseUrl } from '../utils/api';


// function ProductList() {
//   const [allproducts, setAllproducts] = useState([]);
  
//   const fetchInfo = async () => {
//     const response = await getData()
//     console.log(response.data)
//     if(response.data){
//       setAllproducts(response.data);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const remove_product = async (id) => {
//     try {
//       const response = await deleteData(id); // ✅ Await the result
//       console.log('Delete Response:', response.data); // Log the response
//       await fetchInfo(); // Refetch data after deletion
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };
  
//   return (
//     <div className='p-2 w-[1200px]  mr-10 h-auto'>
//       <h1 className='text-2xl font-bold border-b-3 mb-4'>Product List</h1>
//       <div>
//         <table className='mt-5 border-2 w-full mx-auto border-collapse text-center'>
//           <thead>
//             <tr className='bg-slate-300'>
//               <th className='border-2'>Products</th>
//               <th className='border-2'>Title</th>
//               <th className='border-2'>Price</th>
              
//               <th className='border-2'>description</th>
//                <th className='border-2'>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allproducts.map((product, index) => (
//               <tr key={index}>
//                 <td className='border-2'>
//                   <img src={product.image} className='h-20 w-20 mx-auto' />
//                 </td>
//                 <td className='border-2'>{product.name}</td>
//                 <td className='border-2'>{product.price}</td>
//                  <td className='border-2'>{product.description }</td>
//                 <td className='border-2'>
//                   <MdDeleteOutline onClick={() => remove_product(product._id)} className='mx-auto cursor-pointer text-2xl' />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ProductList;  



import React, { useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { deleteData, getData } from '../utils/ProductList';

function ProductList() {
  const [allproducts, setAllproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    const response = await getData();
    if (response.data) {
      setAllproducts(response.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      const response = await deleteData(id);
      console.log('Delete Response:', response.data);
      await fetchInfo();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='p-2 w-[1200px] mr-10 h-auto'>
      <h1 className='text-2xl font-bold border-b-3 mb-4'>Product List</h1>
      {loading ? (
        <p className='text-center mt-10'>Loading products...</p>
      ) : allproducts.length === 0 ? (
        <p className='text-center mt-10'>No products found.</p>
      ) : (
        <div>
          <table className='mt-5 border-2 w-full mx-auto border-collapse text-center'>
            <thead>
              <tr className='bg-slate-300'>
                <th className='border-2'>Product</th>
                <th className='border-2'>Title</th>
                <th className='border-2'>Price</th>
                <th className='border-2'>Description</th>
                <th className='border-2'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {allproducts.map((product, index) => (
                <tr key={index}>
                  <td className='border-2'>
                    <img src={product.image} className='h-20 w-20 mx-auto object-cover' alt="product" />
                  </td>
                  <td className='border-2'>{product.name}</td>
                  <td className='border-2'>₹{product.price}</td>
                  <td className='border-2'>{product.description}</td>
                  <td className='border-2'>
                    <MdDeleteOutline
                      onClick={() => remove_product(product._id)}
                      className='mx-auto cursor-pointer text-2xl text-red-500 hover:text-red-700'
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductList;

