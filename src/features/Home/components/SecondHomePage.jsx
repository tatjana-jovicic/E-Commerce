import "../home.styles/SecondHomePage.css";
import SecondHomePageList from "./SecondHomePageList";

const SecondHomePage = () => {
  return (
    <div className="second_home_page_div">
      <div className="second_home_page_con">
        <div className="second_home_page_con_left">
          <h1>Beautiful presentations made easy.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor uncididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercition.
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
