import Product from "../Product";

const ProductList = ({ product, handleClick }) => {
  return product.map((item, productId) => (
    <Product item={item} key={productId} handleClick={handleClick}></Product>
  ));
};

export default ProductList;
