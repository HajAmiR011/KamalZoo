import "./product.css";
const Product = () => {
  return (
    <div className="product">
      <img src={require("../../images/animal1-image.jpg")} alt="animal-1" />
      <img src={require("../../images/animal2-image.jpg")} alt="animal-2" />
      <img src={require("../../images/animal3-image.jpg")} alt="animal-3" />
      <img src={require("../../images/animal4-image.jpg")} alt="animal-4" />
    </div>
  );
};

export default Product;
