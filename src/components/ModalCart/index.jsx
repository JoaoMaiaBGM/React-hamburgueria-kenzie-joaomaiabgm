import "./style.css";

const ModalCart = ({ onChoose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className="modal-title">Deseja remover o produto do carrinho?</h3>
        <div className="modal-buttons-container">
          <button
            className="modal-buttons --no"
            onClick={() => onChoose(false)}
          >
            Não
          </button>
          <button
            className="modal-buttons --yes"
            onClick={() => onChoose(true)}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
