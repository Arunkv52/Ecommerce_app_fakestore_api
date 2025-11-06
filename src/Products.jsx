import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CounterContext } from "./components/context/CountProvider";
import { FetchContext } from "./components/context/ProductProvider";
import { useParams } from "react-router";




const Products = () => {
  // For count
  const { count, setCount } = useContext(CounterContext);
  // For product
  const { data } = useContext(FetchContext);


  // Dynamic url
  const { id } = useParams();

  // we use and replace the map to find particular product details fetch
  const product = data.find(item => item.id === parseInt(id))

  if(!product) return <div>Product not here...</div>


  return (
    <>
      <Navbar />
      <div className="px-50 py-20">
        
          <div className="md:flex justify-center items-center gap-3">
            <div className="w-1/2">
              <img src={product.image} alt="" />
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">{product.title}</h1>
              <p className="text-[20px] py-3 font-semibold"> $ {product.price}</p>
              <h2 className="text-base">{product.description}</h2>
              <h3 className="py-5">Category : {product.category}</h3>
              <div>
                <h5>Rate this product : {product.rating.rate}</h5>
                <h6>Sales count this product : {product.rating.count}</h6>
              </div>
              {/* Button add for count calculation */}
              <div className="btn py-5 flex justify-start items-center gap-5">
                <button
                  className="bg-red-400 p-1 cursor-pointer"
                  onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
                >
                  <FaMinus />
                </button>
                <p>{count}</p>
                <button
                  className="bg-red-400 p-1 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              {/* Add to cart button */}
              <button className="bg-red-300 hover:bg-red-500 max-w-full px-10 py-3 cursor-pointer" onClick={()=>{
                addToCart(product)
                
              }}>
                Add to Cart
              </button>
            </div>
          </div>
      
      </div>
      <Footer />
    </>
  );
};

export default Products;
