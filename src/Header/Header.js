import "./header.css";
import { TfiMenuAlt } from "react-icons/tfi";
const Header = () => {
  let flag = true;
  let clicksvg = () => {
    const items = document.querySelector("#items");
    if (flag) {
      items.style.display = "block";
      flag = false;
    } else {
      items.style.display = "none";
      flag = true;
    }
  };
  return (
    <>
      <header>
        <span id="Openicon" onClick={clicksvg}>
          <TfiMenuAlt />
        </span>
        <nav id="items">
          <div>
            <a href="#">home</a>
          </div>
          <div>
            <a href="#">about</a>
          </div>
          <div>
            <a href="#">contact</a>
          </div>
          <div>
            <a href="#">gallery</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
