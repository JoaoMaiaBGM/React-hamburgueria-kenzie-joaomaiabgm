import { ProductProvider } from "./providers/productContext";
import { CartProvider } from "./providers/cartContext";
import RoutesMain from "./routes";

import HomePage from "./components/HomePage/homepage";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <RoutesMain>
          <HomePage />
        </RoutesMain>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
