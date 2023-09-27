import { GrClose } from "react-icons/gr";

import "./style.css";

const ModalSearch = ({ onClose }) => {
  return (
    <div className="modalSearch">
      <div className="modalSearch-container">
        <p className="modalSearch-content">Produto não encontrado!</p>
        <GrClose
          className="modalSearch-onClose"
          onClick={() => onClose(true)}
        />
      </div>
    </div>
  );
};

export default ModalSearch;
