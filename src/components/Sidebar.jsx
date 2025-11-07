import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CounterContext } from "./context/CountProvider";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "./context/CartProvider";

const Sidebar = ({ open, setOpen }) => {
  // Cart get
  const { cart, removeFromCart } = useContext(CartContext);

  // Count get (per-product count)
  const { counts, increaseCount, decreaseCount } = useContext(CounterContext);

  // Total calculation (based on quantity * price)
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (counts[item.id] || 1),
    0
  );

  return (
    <>
      {open && (
        <div>
          <div className="bg-red-500 text-white w-1/4 fixed top-0 right-0 h-dvh px-5 py-5 overflow-y-scroll">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-b-white pb-4">
              <h1 className="flex items-center gap-2">
                <FaShoppingCart /> Cart
              </h1>
              <IoMdClose
                className="text-2xl cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>

            {/* Product details */}
            {cart.length === 0 ? (
              <div className="py-5">
                <p>Product is empty</p>
              </div>
            ) : (
              cart.map((item) => {
                const count = counts[item.id] || 1; // default 1 if not yet incremented

                return (
                  <div
                    key={item.id}
                    className="md:flex justify-start items-start gap-5 py-5 border-b border-white/40"
                  >
                    <div className="bg-white p-2 rounded">
                      <img src={item.image} alt={item.title} className="w-24" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-sm py-1">$ {item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 py-2">
                        <button
                          className="bg-white text-black px-2 rounded cursor-pointer"
                          onClick={() => decreaseCount(item.id)}
                        >
                          <FaMinus />
                        </button>
                        <p>{count}</p>
                        <button
                          className="bg-white text-black px-2 rounded cursor-pointer"
                          onClick={() => increaseCount(item.id)}
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <button
                        className="text-sm underline cursor-pointer mt-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                );
              })
            )}

            {/* Total Price */}
            <div className="absolute bottom-5 left-0 w-full px-5">
              <h1 className="py-3 text-lg font-semibold">
                Total Price : $ {totalPrice.toFixed(2)}
              </h1>
              <button className="bg-white text-black w-full p-2 rounded cursor-pointer hover:bg-gray-200">
                Quick View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
