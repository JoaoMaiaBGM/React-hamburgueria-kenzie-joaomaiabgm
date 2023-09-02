import { createContext, useEffect, useState } from "react";

import Api from "../services/api";

export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await Api.get("/products");
        setProductList(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ productList, setProductList, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
