import { useContext } from "react";

import { CartContext } from "../../providers/cartContext";

import "./style.css";

const CartTotal = () => {
  const { calculateTotal, removeAllProducts } = useContext(CartContext);

  return (
    <>
      <div className="containerTotalInfo">
        <h3>Total</h3>
        <span>{calculateTotal()}</span>
      </div>
      <div className="containerTotalAction">
        <button type="button" onClick={() => removeAllProducts()}>
          Remover todos
        </button>
      </div>
    </>
  );
};

export default CartTotal;
