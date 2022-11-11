import "./style.css";

const CartTotal = ({ currentSale, removeAll }) => {
  const total = currentSale.map((product) => product.price);

  return (
    <>
      <div className="containerTotalInfo">
        <h3>Total</h3>
        <span>
          {total
            .reduce((acc, cur) => cur + acc, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </div>
      <div className="containerTotalAction">
        <button type="button" onClick={() => removeAll()}>
          Remover todos
        </button>
      </div>
    </>
  );
};

export default CartTotal;
