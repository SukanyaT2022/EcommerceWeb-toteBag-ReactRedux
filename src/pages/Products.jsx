import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../styleFolder/product.css'
import {updateCart} from '../store/cartSlice'

const Product = () => {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(data.value)
  },[data])

  const cartHandler = (item) => {
    // Step2: calling redux function from cartSlice
    dispatch(updateCart(item)); 
  }

  return (
    // below div wrap the all cart
    <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-col-1 gap-5 p-10 bg-gray-50 justify-center'>

      {products && products.map((item)=>(
        // one cart div
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  xl:h-[500px] lg:h-[520px] md:h-[520px] h-[480px]">

            {/* <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>price: {item.price}</div>
            <div> <img src={item.images[0]} /></div> */}
{/* Image */}
    <a href="#" className='flex justify-center items-start'>
        <img className="md:p-8 rounded-t-lg xl:h-[300px] lg:h-[300px] md:h-[300px] h-[250px] object-cover" src={item.images[0]} alt="product image" />
    </a>

{/* div below xontrol title- star icon -button */}
    <div className="px-5 pb-10  md:space-y-2 ">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">{item.title}</h5>
        </a>
        {/* div below wrap start and 5.0 */}
        <div className="flex items-center justify-center mt-2.5 mb-5">

            {/* start stars */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>

             {/* end  stars */}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>

        
        </div>
            {/* end div wrap start and 5.0 */}

        <div className="flex  flex-col items-center justify-evenly space-y-5">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${item.price}</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={ ()=>cartHandler(item)}>Add to cart</button>
        </div>
    </div>
</div>
        )
      )}
    </div>
  )
}

export default Product
