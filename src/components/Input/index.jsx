import { useState, useContext } from "react";

import { ProductContext } from "../../providers/productContext";

import ModalSearch from "../ModalSearch";

import "./style.css";

const Input = () => {
  const { setProductList, filteredProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  function filterProduct(productToFilter) {
    const filtered = filteredProducts?.filter((element) => {
      return (
        element.name.toLowerCase().includes(productToFilter.toLowerCase()) ||
        element.category.toLowerCase().includes(productToFilter.toLowerCase())
      );
    });

    if (filtered.length <= 0) {
      setIsModalVisible(true);
    }
    return setProductList(filtered);
  }

  function handleFilter() {
    filterProduct(search);
    setSearch("");
  }

  return (
    <div className="headerAction">
      <input
        id="headerInput"
        className="headerInput"
        type="text"
        placeholder="Digitar pesquisa"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button className="headerBtn" type="button" onClick={handleFilter}>
        Pesquisar
      </button>
      {isModalVisible && (
        <ModalSearch
          onClose={(product) => {
            if (product) {
              handleFilter();
            }
            setIsModalVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default Input;
