import React, { useState } from "react";
import Logo from "../assets/Logo.webp";
import { Link } from "react-router";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { CounterContext } from "./context/CountProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false); //false is set to default


  const {count,setCount} = useContext(CounterContext)

  return (
    <>
      <nav>
        <div className="flex justify-between items-center gap-0 px-10 bg-black py-5 text-white">
          <div className="left-menu">
            <Link to={"/products"}>
              <p>Products</p>
            </Link>
          </div>
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <p>Cart </p>
          </div>
        </div>
      </nav>
     <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
