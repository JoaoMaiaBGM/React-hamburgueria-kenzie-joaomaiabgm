import { useState, useContext } from "react";

import { ProductContext } from "../../providers/productContext";

import "./style.css";

const Input = () => {
  const { setProductList, filteredProducts } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  function filterProduct(productToFilter) {
    const filtered = filteredProducts?.filter((element) => {
      return (
        element.name.toLowerCase().includes(productToFilter.toLowerCase()) ||
        element.category.toLowerCase().includes(productToFilter.toLowerCase())
      );
    });
    return setProductList(filtered);
  }

  function handleFilter() {
    filterProduct(search);
    setSearch("");
  }

  return (
    <div className="headerAction">
      <input
        className="headerInput"
        type="text"
        placeholder="Digitar pesquisa"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button className="headerBtn" type="button" onClick={handleFilter}>
        Pesquisar
      </button>
    </div>
  );
};

export default Input;
