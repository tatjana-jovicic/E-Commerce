import pageLogo from "./page-logo.png";
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
import iconEditUser from "./edit-user-icon.png";
import iconHeapdhone from "./headphone-icon.png";
import iconHeapdhoneMicrophon from "./icon-headphone-microphon.png";
import headphone from "./headphone.png";
import client1 from "./client_1.webp";
import client2 from "./client_2.webp";
import client3 from "./client_3.jpg";
import closeIcon from "./closeIcon.webp";
import increment from "./increment.png";
import decrement from "./decrement.jpg";
import bin from "./bin.png";
import padlock from "./padlock.png";
import location from "./location.png";
import phone from "./phone.png";

// ---------------------------------------------------------PageLogo
const PageLogoImg = () => {
  return <img className="page_logo_img" src={pageLogo} alt="page logo" />;
};

// ---------------------------------------------------------HomePage
const HeadphonesBlack = () => {
  return (
    <img
      className="first_home_page_right_img"
      src={HeadphonesBlackImg}
      alt="headphones black img"
    />
  );
};

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

const HeadphonesWhite = () => {
  return (
    <img
      className="third_home_page_con_right_img"
      src={HeadphonesWhiteImg}
      alt="headphones white img"
    />
  );
};

const IconEditUser = () => {
  return (
    <img
      className="second_home_page_con_icon"
      src={iconEditUser}
      alt="icon edit user"
    />
  );
};

const IconHeapdhone = () => {
  return (
    <img
      className="second_home_page_con_icon"
      src={iconHeapdhone}
      alt="icon headphone"
    />
  );
};

const IconHeapdhoneMicrophon = () => {
  return (
    <img
      className="second_home_page_con_icon"
      src={iconHeapdhoneMicrophon}
      alt="icon headphone with microphon"
    />
  );
};

const Headphone = () => {
  return (
    <img
      className="fourth_home_page_con_images"
      src={headphone}
      alt="headphone pic"
    />
  );
};

const Client1 = () => {
  return (
    <img
      className="sixth_home_page_con_icon"
      src={client1}
      alt="portrait of client"
    />
  );
};

const Client2 = () => {
  return (
    <img
      className="sixth_home_page_con_icon"
      src={client2}
      alt="portrait of client"
    />
  );
};

const Client3 = () => {
  return (
    <img
      className="sixth_home_page_con_icon"
      src={client3}
      alt="portrait of client"
    />
  );
};

// ---------------------------------------------------------OfferPage
const Increment = ({ handleToClick }) => {
  return (
    <img
      className="increment"
      onClick={handleToClick}
      src={increment}
      alt="increment logo"
    />
  );
};

const Decrement = ({ handleToClick }) => {
  return (
    <img
      className="decrement"
      onClick={handleToClick}
      src={decrement}
      alt="decrement logo"
    />
  );
};

const Bin = ({ handleToClick }) => {
  return (
    <img className="bin" onClick={handleToClick} src={bin} alt="bin icon" />
  );
};

const CloseIcon = ({ handleToClick }) => {
  return (
    <img
      className="close_icon"
      onClick={handleToClick}
      src={closeIcon}
      alt="close icon"
    />
  );
};

const Padlock = () => {
  return (
    <img className="checkout_con_right_key_img" src={padlock} alt="key icon" />
  );
};

// ---------------------------------------------------------AboutPage
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

// ---------------------------------------------------------ContactPage
const Location = () => {
  return (
    <img
      className="contact_page_left_logo"
      src={location}
      alt="location icon"
    />
  );
};

const Phone = () => {
  return (
    <img className="contact_page_left_logo" src={phone} alt="phone icon" />
  );
};

export {
  PageLogoImg,
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
  IconEditUser,
  IconHeapdhone,
  IconHeapdhoneMicrophon,
  Client1,
  Client2,
  Client3,
  Headphone,
  Increment,
  Decrement,
  CloseIcon,
  Bin,
  Padlock,
  Location,
  Phone,
};
