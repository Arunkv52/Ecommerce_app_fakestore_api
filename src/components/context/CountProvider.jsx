import React, { createContext, useState } from "react";

export const CounterContext = createContext();

const CountProvider = ({ children }) => {
  // store count per product using object: { [id]: count }
  const [counts, setCounts] = useState({});

  // increase count for a specific product
  const increaseCount = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // decrease count for a specific product
  const decreaseCount = (id) => {
    setCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0), // never go below 0
    }));
  };

  return (
    <CounterContext.Provider value={{ counts, increaseCount, decreaseCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CountProvider;
