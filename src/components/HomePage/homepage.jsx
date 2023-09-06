import Header from "../Header";
import ProductList from "../ProductList";
import Cart from "../Cart";
import Footer from "../Footer";

import "./style.css";

const HomePage = () => {
  return (
    <body className="body">
      <Header />
      <main className="container">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </body>
  );
};

export default HomePage;
