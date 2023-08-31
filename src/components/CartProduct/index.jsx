import { useContext } from "react";

import { CartContext } from "../../providers/cartContext";

import "./style.css";

const CartProduct = ({ product }) => {
  const { removeFromCart } = useContext(CartContext);

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
        <button className="cartBtn" onClick={() => removeFromCart(product.id)}>
          remover
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
