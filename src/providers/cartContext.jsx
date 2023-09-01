import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (addingProduct) => {
    const updatedCartList = [...cartList];
    const productIndex = updatedCartList.findIndex(
      (product) => product.id === addingProduct.id
    );

    if (productIndex === -1) {
      updatedCartList.push({ ...addingProduct, quantity: 1 });
    } else {
      updatedCartList[productIndex].quantity += 1;
    }

    setCartList(updatedCartList);
  };

  const reduceQuantity = (productToReduceQuantity) => {
    const updatedCartList = [...cartList];
    const productToFind = updatedCartList.find(
      (product) => product.id === productToReduceQuantity.id
    );

    if (productToFind.quantity > 0) {
      productToFind.quantity -= 1;
    }

    setCartList(updatedCartList);
  };

  const removeFromCart = (removingProductId) => {
    const updatedCartList = cartList.filter(
      (product) => product.id !== removingProductId
    );
    setCartList(updatedCartList);
  };

  const removeAllProducts = () => {
    setCartList([]);
  };

  const calculateTotal = () => {
    const totalPrice = cartList.reduce((prevValue, product) => {
      return prevValue + product.price * product.quantity;
    }, 0);
    return totalPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        reduceQuantity,
        removeFromCart,
        removeAllProducts,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
