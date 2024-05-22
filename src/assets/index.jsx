import JblImg from "./jbl-logo.png";
import ShureImg from "./shure-logo.png";
import SonyImg from "./sony-logo.svg";
import SamsungImg from "./samsung-logo.png";
import BoseImg from "./bose-logo.png";
import SennheiserImg from "./sennheiser-logo.png";
import HeadphonesBlackImg from "./headphones-black.png";

const Jbl = () => {
  return <img className="footer_logo" src={JblImg} alt="jbl logo" />;
};

const Shure = () => {
  return <img className="footer_logo" src={ShureImg} alt="shure logo" />;
};

const Sony = () => {
  return <img className="footer_logo" src={SonyImg} alt="sony logo" />;
};

const Samsung = () => {
  return <img className="footer_logo" src={SamsungImg} alt="samsung logo" />;
};

const Bose = () => {
  return <img className="footer_logo" src={BoseImg} alt="bose logo" />;
};

const Sennheiser = () => {
  return (
    <img className="footer_logo" src={SennheiserImg} alt="sennheiser logo" />
  );
};

const HeadphonesBlack = () => {
  return (
    <img
      className="home_div_right"
      src={HeadphonesBlackImg}
      alt="headphones logo"
    />
  );
};

export { Jbl, Shure, Sony, Samsung, Bose, Sennheiser, HeadphonesBlack };
