import { useContext, useState } from "react";

import { ProductContext } from "../../providers/productContext";

import logo from "../../assets/logo-kenzie-burguer.png";

import "./styles.css";

const Header = () => {
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
    <div className="headerContainer">
      <div className="headerLogo">
        <img src={logo} alt="Logo Kenzie Burguer" />
      </div>
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
    </div>
  );
};

export default Header;
