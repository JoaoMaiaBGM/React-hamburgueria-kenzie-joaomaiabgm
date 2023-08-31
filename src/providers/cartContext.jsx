import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (addingProduct) => {
    if (!cartList.some((product) => product.id === addingProduct.id)) {
      setCartList([...cartList, addingProduct]);
    } else {
      alert("Produto já adicionado ao carrinho.");
    }
  };

  const removeFromCart = (removingProductId) => {
    const newCartList = cartList.filter(
      (product) => product.id !== removingProductId
    );
    setCartList(newCartList);
  };

  const removeAllProducts = () => {
    setCartList([]);
  };

  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeFromCart, removeAllProducts, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
