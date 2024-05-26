import JblImg from "./jbl-logo.png";
import CompanyNameImg from "./companyName-logo.png";
import CRImg from "./cr-logo.png";
import WiredImg from "./wired-logo.png";
import EngadgetImg from "./engadget-logo.png";
import TCImg from "./tc-logo.png";
import HeadphonesBlackImg from "./headphones-black.png";
import HeadphonesWhiteImg from "./headphoneswhite.webp";

const Jbl = () => {
  return (
    <img className="first_home_page_footer_logo" src={JblImg} alt="jbl logo" />
  );
};

const CompanyName = () => {
  return (
    <img
      className="first_home_page_footer_logo"
      src={CompanyNameImg}
      alt="CN logo"
    />
  );
};

const CR = () => {
  return (
    <img className="first_home_page_footer_logo" src={CRImg} alt="CR logo" />
  );
};

const Wired = () => {
  return (
    <img
      className="first_home_page_footer_logo"
      src={WiredImg}
      alt="wired logo"
    />
  );
};

const Engadget = () => {
  return (
    <img
      className="first_home_page_footer_logo"
      src={EngadgetImg}
      alt="engadget logo"
    />
  );
};

const TC = () => {
  return (
    <img className="first_home_page_footer_logo" src={TCImg} alt="TC logo" />
  );
};

const HeadphonesBlack = () => {
  return (
    <img
      className="first_home_page_right_img"
      src={HeadphonesBlackImg}
      alt="headphones black img"
    />
  );
};

const HeadphonesWhite = () => {
  return (
    <img
      className="third_home_page_con_right_img"
      src={HeadphonesWhiteImg}
      alt="headphones white img"
    />
  );
};

export {
  Jbl,
  CompanyName,
  CR,
  Wired,
  Engadget,
  TC,
  HeadphonesBlack,
  HeadphonesWhite,
};
