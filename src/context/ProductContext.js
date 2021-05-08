import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [productContext, setProductContext] = useState([]);
  return (
    <ProductContext.Provider value={[productContext, setProductContext]}>{props.children}</ProductContext.Provider>
  );
};
