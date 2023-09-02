import { useContext } from "react";

import { CartContext } from "../../providers/cartContext";

import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import "./style.css";

const Cart = () => {
  const { cartList } = useContext(CartContext);

  return (
    <>
      <div className="checkout">
        <h3 className="cartTitle">Carrinho de compras</h3>
        <ul className="container-cart">
          {cartList.length === 0 ? (
            <div className="containerEmptyCart">
              <h2 className="emptyCart">
                Sua sacola está vazia
                <p className="emptyCartParagraph">Adicione itens</p>
              </h2>
            </div>
          ) : (
            cartList.map((product) => {
              return <CartProduct product={product} key={product.id} />;
            })
          )}
        </ul>
        <div className="containerTotal">
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default Cart;
