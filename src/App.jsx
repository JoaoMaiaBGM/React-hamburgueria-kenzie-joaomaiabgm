import { useState } from "react";

import { ProductProvider } from "./providers/productContext";
import { CartProvider } from "./providers/cartContext";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <div className="App-header">
            <Header
              product={product}
              setProduct={setProduct}
              filteredProducts={filteredProducts}
            />
          </div>
          <div className="container">
            <ProductList />
            <Cart />
          </div>
          <Footer />
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
