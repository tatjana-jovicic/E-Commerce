import "../home.styles/SecondHomePage.css";
import SecondHomePageList from "./SecondHomePageList";

const SecondHomePage = () => {
  return (
    <div className="second_home_page_div">
      <div className="second_home_page_con">
        <div className="second_home_page_con_left">
          <h1>Elevate Your Listening Experience Effortlessly.</h1>
          <p>
            Discover how simple it is to enhance your audio journey. Our
            headphones are designed to deliver superior sound quality with ease,
            so you can enjoy every note and beat effortlessly.
          </p>
        </div>
        <div className="second_home_page_con_right">
          <SecondHomePageList />
        </div>
      </div>
    </div>
  );
};
export default SecondHomePage;
