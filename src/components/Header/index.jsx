import { useState } from "react";
import logo from "../../assets/logo-kenzie-burguer.png";
import "./styles.css";

const Header = ({ setProduct, filteredProducts }) => {
  const [search, setSearch] = useState("");

  function filterProduct(productToFilter) {
    const filtered = filteredProducts?.filter((element) => {
      return (
        element.name.toLowerCase().includes(productToFilter.toLowerCase()) ||
        element.category.toLowerCase().includes(productToFilter.toLowerCase())
      );
    });
    return setProduct(filtered);
  }

  function handleFilter() {
    filterProduct(search);
    setSearch("");
  }

  return (
    <>
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
    </>
  );
};

export default Header;
