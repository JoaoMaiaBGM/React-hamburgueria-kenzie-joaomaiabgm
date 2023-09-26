import { useContext, useState } from "react";

import { CartContext } from "../../providers/cartContext";

import ModalCart from "../ModalCart";

import "./style.css";

const CartProduct = ({ product }) => {
  const { removeFromCart, addToCart, reduceQuantity } = useContext(CartContext);
  const [productQuantity, setProductQuantity] = useState(product.quantity);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleIncreaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
    addToCart({ ...product, quantity: productQuantity + 1 });
  };

  const handleDecreaseQuantity = () => {
    if (productQuantity < 2) {
      setIsModalVisible(true);
    } else {
      setProductQuantity(productQuantity - 1);
      reduceQuantity({ ...product, quantity: productQuantity - 1 });
    }
  };

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
            onClick={() => handleDecreaseQuantity()}
          >
            -
          </button>
          <span className="countItem">{product.quantity}</span>
          <button
            className="countButton"
            type="button"
            onClick={() => handleIncreaseQuantity()}
          >
            +
          </button>
        </div>
      </div>
      {isModalVisible && (
        <ModalCart
          onChoose={(removeProduct) => {
            if (removeProduct) {
              removeFromCart(product.id);
            }
            setIsModalVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default CartProduct;
