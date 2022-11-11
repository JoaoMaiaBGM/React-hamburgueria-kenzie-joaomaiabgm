import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProduct(response);
        setFilteredProducts(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleClick(product) {
    setCurrentSale([...currentSale, product]);
  }

  function handleRemove(indexToRemove) {
    setCurrentSale((previousProduct) =>
      previousProduct.filter((products, index) => index !== indexToRemove)
    );
  }

  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header
          product={product}
          setProduct={setProduct}
          filteredProducts={filteredProducts}
        />
      </div>
      <div className="container">
        <div className="container-products">
          <ProductList product={product} handleClick={handleClick} />
        </div>
        <Cart
          currentSale={currentSale}
          handleRemove={handleRemove}
          removeAll={removeAll}
        />
      </div>
    </div>
  );
}

export default App;
