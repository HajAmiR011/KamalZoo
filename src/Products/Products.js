import Product from "./Product/Product";
import "./products.css";
const Products = () => {
  return (
    <>
      <div className="title">
        <h2>future animals</h2>
      </div>
      <div className="wrapper">
        <Product />
      </div>
    </>
  );
};

export default Products;
