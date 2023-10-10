import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

  const getData = async ()=>{
      const response = await fetch('https://myfirstapi-data.vercel.app');
      const data = await response.json();

      // console.log(Array.isArray(data));  object h ye.

      console.log(data.products[0]);

      setProducts(data.products);

      console.log(products);
      
  }

  useEffect(()=>{
    getData();
  },[])
  return (
    <>
      {
        products.map((item,index)=>{
          // console.log(item);
          const {description,id,title,image,price} = item;
          return(
            <div key={index} className="p-2 md:w-1/4 w-full">
              <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                <img className='rounded-lg w-full mb-2' src={image} alt="" />
                <h2 className='text-xl text-black font-bold'>
                  {title.substr(0, 20)}
                </h2>
                <h2 className='text-xl text-black font-bold'>
                  ₹ {price}
                </h2>
                <h2 className='text-lg text-black mb-2'>
                  {description}
                </h2>
                <div className=" flex  space-x-2 justify-between">
                  <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                  </button>
                  <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                  </button>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default App
