import { ProductProvider } from "./providers/productContext";
import { CartProvider } from "./providers/cartContext";

import HomePage from "./components/HomePage/homepage";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <HomePage />
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
