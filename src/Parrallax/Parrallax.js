import "./parrallax.css";
import Slogan from "./Slogan/Slogan";
const Parrallax = () => {
  return (
    <div className="parrallax">
      <img src={require("../images/bk2-image.jpg")} alt="background-image" />
      <Slogan />
    </div>
  );
};

export default Parrallax;
