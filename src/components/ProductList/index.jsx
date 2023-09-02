import { useContext } from "react";

import { ProductContext } from "../../providers/productContext";

import ProductCard from "../ProductCard";

import "./style.css";

const ProductList = () => {
  const { productList } = useContext(ProductContext);

  return (
    <ul className="container-products">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </ul>
  );
};

export default ProductList;
