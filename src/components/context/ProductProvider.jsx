import React, { createContext, useEffect, useState } from 'react'

// For storing values
export const FetchContext = createContext()

const ProductProvider = ({children}) => {

  // For storing api data
  const [data,setData] = useState([])
  const [visible,setVisible] = useState(5)

  // Api fetch using async

  const dataFetch = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const dataItems = await res.json();
      setData(dataItems)
     } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(()=>{
    dataFetch()
  },[])


  return (
    <>
      <FetchContext.Provider value={{data,setData,visible,setVisible}}>
        {children}
      </FetchContext.Provider>
    </>
  )
}

export default ProductProvider