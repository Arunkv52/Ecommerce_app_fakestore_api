import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Products from "./Products";
import Cart from "./Cart";
import Home from "./Home";
import ProductProvider from "./components/context/ProductProvider";
import CountProvider from "./components/context/CountProvider";
import CartProvider from "./components/context/CartProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <CountProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </CountProvider>
      </ProductProvider>
    </>
  );
};

export default App;
