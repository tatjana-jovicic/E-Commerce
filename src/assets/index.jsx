import JblImg from "./jbl-logo.png";
import CompanyNameImg from "./companyName-logo.png";
import CRImg from "./cr-logo.png";
import WiredImg from "./wired-logo.png";
import EngadgetImg from "./engadget-logo.png";
import TCImg from "./tc-logo.png";
import HeadphonesBlackImg from "./headphones-black.png";
import HeadphonesWhiteImg from "./headphoneswhite.webp";
import aboutPicture1 from "./aboutPicture1.jpg";
import aboutPicture2 from "./aboutPicture2.jpg";
import aboutPicture3 from "./aboutPicture3.png";
// import location from "./location.png";
// import phone from "./phone.png";

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

const AboutPicture_1 = () => {
  return (
    <img
      className="about_page_pic_con_1"
      src={aboutPicture1}
      alt="picture of us"
    />
  );
};

const AboutPicture_2 = () => {
  return (
    <img
      className="about_page_pic_con_2"
      src={aboutPicture2}
      alt="jbl picture"
    />
  );
};

const AboutPicture_3 = () => {
  return (
    <img
      className="about_page_pic_con_3"
      src={aboutPicture3}
      alt="jbl picture"
    />
  );
};

// const Location = () => {
//   return (
//     <img
//       className="contact_page_left_logo"
//       src={location}
//       alt="location icon"
//     />
//   );
// };

// const Phone = () => {
//   return (
//     <img className="contact_page_left_logo" src={phone} alt="phone icon" />
//   );
// };

export {
  Jbl,
  CompanyName,
  CR,
  Wired,
  Engadget,
  TC,
  HeadphonesBlack,
  HeadphonesWhite,
  AboutPicture_1,
  AboutPicture_2,
  AboutPicture_3,
};
