import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CounterContext } from "./components/context/CountProvider";
import { FetchContext } from "./components/context/ProductProvider";
import { useParams } from "react-router";
import { CartContext } from "./components/context/CartProvider";

const Products = () => {
  const { counts, increaseCount, decreaseCount } = useContext(CounterContext);
  const { data } = useContext(FetchContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = data.find((item) => item.id === parseInt(id));
  if (!product) return <div>Product not here...</div>;

  // get this product's count value
  const count = counts[id] || 1;

  return (
    <>
      <Navbar />
      <div className="px-50 py-20">
        <div className="md:flex justify-center items-center gap-3">
          <div className="w-1/2">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="w-1/2">
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="text-[20px] py-3 font-semibold">$ {product.price}</p>
            <h2 className="text-base">{product.description}</h2>
            <h3 className="py-5">Category : {product.category}</h3>
            <div>
              <h5>Rate this product : {product.rating.rate}</h5>
              <h6>Sales count : {product.rating.count}</h6>
            </div>

            {/* count buttons */}
            <div className="py-5 flex items-center gap-5">
              <button
                className="bg-red-400 p-1 cursor-pointer"
                onClick={() => decreaseCount(product.id)}
              >
                <FaMinus />
              </button>
              <p>{count}</p>
              <button
                className="bg-red-400 p-1 cursor-pointer"
                onClick={() => increaseCount(product.id)}
              >
                <FaPlus />
              </button>
            </div>

            {/* Add to cart */}
            <button
              className="bg-red-300 hover:bg-red-500 max-w-full px-10 py-3 cursor-pointer"
              onClick={() => addToCart(product, count)}
            >
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
