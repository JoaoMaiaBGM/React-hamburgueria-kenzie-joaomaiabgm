import "./style.css";

const Product = ({ item, handleClick }) => {
  return (
    <>
      <div className="containerItem">
        <div className="itemImage">
          <img src={item.img} alt="Imagem do produto" />
        </div>
        <div className="itemInfo">
          <h2 className="itemInfoTitle">{item.name}</h2>
          <p className="itemInfoCategory">{item.category}</p>
          <p className="itemInfoPrice">
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            className="itemInfoBtn"
            type="button"
            onClick={() => handleClick(item)}
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
