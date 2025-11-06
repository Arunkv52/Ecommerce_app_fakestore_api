import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FetchContext } from "./context/ProductProvider";
import { CounterContext } from "./context/CountProvider";
import { FaMinus, FaPlus } from "react-icons/fa";

const Sidebar = ({ open, setOpen }) => {
  const { data } = useContext(FetchContext);

  const { count, setCount } = useContext(CounterContext);

  //   specific data store

  const productFilter = data.find((item) => item.id === 1);

  return (
    <>
      {open && (
        <div className="bg-red-500 text-white w-1/4 fixed top-0 right-0 h-dvh px-5 py-5 overflow-y-scroll">
          <div className="flex justify-between items-center gap-0 border-b-1 border-b-white pb-4">
            <div className="">
              <h1 className="flex justify-start items-center gap-2">
                <FaShoppingCart /> Cart
              </h1>
            </div>
            <div className="cursor-pointer">
              <IoMdClose
                className="text-2xl"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
          </div>

          {/* Products details */}
          <div className="md:flex justify-between items-start gap-5 py-5">
            <div className="bg-white">
              <img src={productFilter.image} alt="" className="w-20" />
            </div>
            <div>
              <h3 className="text-sm">{productFilter.title}</h3>
              <p className="text-sm py-1">$ {productFilter.price}</p>
              {/* Button add for count calculation */}
              <div className="btn py-1 flex justify-start items-center gap-5">
                <button
                  className="bg-red-400 cursor-pointer"
                  onClick={() => setCount((prev) => (prev <= 0 ? 0 : prev - 1))}
                >
                  <FaMinus />
                </button>
                <p>{count}</p>
                <button
                  className="bg-red-400 cursor-pointer"
                  onClick={() => setCount(count + 1)}
                >
                  <FaPlus />
                </button>
              </div>
              <button className="text-sm underline cursor-pointer">Remove Item</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
