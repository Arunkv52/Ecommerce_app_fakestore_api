import React, { createContext, useState } from 'react'

// For storing values
export const CounterContext = createContext()

const CountProvider = ({children}) => {
  // Count values
  const [count, setCount] = useState(0)
  return (
    <>
      <CounterContext.Provider value={{count,setCount}}>
        {children}
      </CounterContext.Provider>
    </>
  )
}

export default CountProvider
