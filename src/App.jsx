import { ProductProvider } from "./providers/productContext";
import { CartProvider } from "./providers/cartContext";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <div className="App-header">
            <Header />
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
