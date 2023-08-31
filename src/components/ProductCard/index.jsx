import { useContext } from "react";

import { CartContext } from "../../providers/cartContext";

import "./style.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <li className="containerItem">
      <div className="itemImage">
        <img src={product.img} alt="Imagem do produto" />
      </div>
      <div className="itemInfo">
        <h2 className="itemInfoTitle">{product.name}</h2>
        <p className="itemInfoCategory">{product.category}</p>
        <p className="itemInfoPrice">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="itemInfoBtn"
          type="button"
          onClick={() => addToCart(product)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
