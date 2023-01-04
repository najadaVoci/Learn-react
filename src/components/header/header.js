import "./header.scss";
import logo from "../../logo.PNG";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="container-image">
          <img src={logo} />
        </div>
        <div className="container-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
