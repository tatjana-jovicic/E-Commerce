import "../home.styles/ThirdHomePage.css";
import Button from "../../../components/Button/Button";
import { HeadphonesWhite } from "../../../assets/index";
import { useNavigate } from "react-router-dom";

const ThirdHomePage = () => {
  const router = useNavigate();

  const handleClickButton = () => {
    router("/offer");
  };

  return (
    <div className="third_home_page_div">
      <div className="third_home_page_div_con">
        <div className="third_home_page_con_left">
          <div className="third_con_title">
            <h1>Discover Unmatched Sound Quality and Style.</h1>
            <p>
              Never be without the product you need! Enjoy perfect sound with
              the option to return the product at any time.
            </p>
            <Button
              handleButtononClick={handleClickButton}
              buttonText="ORDER NOW"
            />
          </div>
        </div>
        <div className="third_home_page_con_right">
          <HeadphonesWhite />
        </div>
      </div>
    </div>
  );
};
export default ThirdHomePage;
