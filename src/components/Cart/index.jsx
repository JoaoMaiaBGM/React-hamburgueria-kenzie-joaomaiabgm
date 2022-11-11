import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

import "./style.css";

const Cart = ({ currentSale, handleRemove, removeAll }) => {
  return (
    <>
      <div className="checkout">
        <ul className="container-cart">
          <h3 className="cartTitle">Carrinho de compras</h3>
          {currentSale.length === 0 ? (
            <div className="containerEmptyCart">
              <h2 className="emptyCart">
                Sua sacola está vazia
                <p className="emptyCartParagraph">Adicione itens</p>
              </h2>
            </div>
          ) : (
            currentSale.map((item, index) => (
              <CartProduct
                product={item}
                key={index}
                handleRemove={handleRemove}
                index={index}
              />
            ))
          )}
        </ul>
        <div className="containerTotal">
          <CartTotal currentSale={currentSale} removeAll={removeAll} />
        </div>
      </div>
    </>
  );
};

export default Cart;
