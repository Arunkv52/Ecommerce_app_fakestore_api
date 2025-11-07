import React, { createContext, useEffect, useState } from "react";

// export for storing the data
export const CartContext = createContext();

const CartProvider = ({ children }) => {
// Step 1️⃣ - Initialize 'cart' state from localStorage
const [cart, setCart] = useState(() => {
  // Try to get saved data from localStorage
  const savedCart = localStorage.getItem("cart");

  // If there’s something stored, convert it back from text → array
  if (savedCart) {
    return JSON.parse(savedCart);
  } else {
    // Otherwise, start with an empty cart
    return [];
  }
});


// Step 2️⃣ - Whenever 'cart' changes, save it to localStorage again
useEffect(() => {
  // Convert the array to a text format (JSON string)
  const cartString = JSON.stringify(cart);

  // Save it in localStorage with the key name 'cart'
  localStorage.setItem("cart", cartString);
}, [cart]);
 

  const addToCart = (product) => {
    setCart((prev) => {
      const cartValue = prev.find((item) => item.id === product.id);

      if (cartValue) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // 🗑️ Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, addToCart, removeFromCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
