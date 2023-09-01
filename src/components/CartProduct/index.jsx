import { useContext, useState } from "react";

import { CartContext } from "../../providers/cartContext";

import "./style.css";

const CartProduct = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const add = count + 1;
  const reduce = count - 1;

  return (
    <div className="container-cartItem">
      <div className="cartImage">
        <img src={product.img} alt={`imagem do produto ${product.name}`} />
      </div>
      <div className="cartInfo">
        <h3 className="cartName">{product.name}</h3>
        <p className="cartCategory">{product.category}</p>
      </div>
      <div className="containerBtn">
        <button
          className="removeBtn"
          type="button"
          onClick={() => removeFromCart(product.id)}
        >
          remover
        </button>
        <div className="cartCountItem">
          <button
            className="countButton"
            type="button"
            onClick={() => {
              if (count === 1) {
                removeFromCart(product.id);
              } else {
                setCount(reduce);
              }
            }}
          >
            -
          </button>
          <span className="countItem">{count}</span>
          <button
            className="countButton"
            type="button"
            onClick={() => setCount(add)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
