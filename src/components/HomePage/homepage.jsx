import Header from "../Header";
import Input from "../Input";
import ProductList from "../ProductList";
import Cart from "../Cart";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import "./style.css";

const HomePage = () => {
  return (
    <div className="body">
      <Header>
        <Input />
      </Header>
      <main className="container">
        <Sidebar />
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
