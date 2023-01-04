import "./footer.scss";
import logo from "../../logo.PNG";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-image">
          <img src={logo} />
        </div>
        <div className="container-info">
          <div className="info-name">Copyright &copy; Najada Voci</div>
          <div className="info-email">Email address: najada.voci@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
