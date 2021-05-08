import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categoryContext, setCategoryContext] = useState([]);
  return (
    <CategoryContext.Provider value={[categoryContext, setCategoryContext]}>{props.children}</CategoryContext.Provider>
  );
};
