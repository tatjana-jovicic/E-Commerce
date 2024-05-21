import "./home.styles.css";
import JBL from "../../../assets/jbl-logo.png";
import Shure from "../../../assets/shure-logo.png";
import Sony from "../../../assets/sony-logo.svg";
import Samsung from "../../../assets/samsung-logo.png";
import Bose from "../../../assets/bose-logo.png";
import Sennheiser from "../../../assets/sennheiser-logo.png";

const HomeFooter = () => {
  return (
    <div className="footer_div">
      <img src={Shure} alt="shure logo" />
      <img src={JBL} alt="JBL logo" />
      <img src={Sony} alt="sony log" />
      <img src={Bose} alt="bose logo" />
      <img src={Sennheiser} alt="sennheiser logo" />
      <img src={Samsung} alt="samsung logo" />
    </div>
  );
};
export default HomeFooter;
