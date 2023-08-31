import { useContext } from "react";

import { CartContext } from "../../providers/cartContext";

import "./style.css";

const CartTotal = () => {
  const { total, removeAllProducts } = useContext(CartContext);

  return (
    <>
      <div className="containerTotalInfo">
        <h3>Total</h3>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
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
