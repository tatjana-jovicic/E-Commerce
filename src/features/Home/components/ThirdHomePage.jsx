import "../home.styles/ThirdHomePage.css";
import Button from "../../../components/Button/Button";
import { HeadphonesWhite } from "../../../assets/index";

const ThirdHomePage = () => {
  return (
    <div className="third_home_page_div">
      <div className="third_home_page_div_con">
        <div className="third_home_page_con_left">
          <div className="third_con_title">
            <h1>SHOWCASE APPS, INNOVATIVETECH OR BUSINESSES.</h1>
            <p>
              Never be without the product you need! Sign up today to save money
              and time. Cancel anytime.
            </p>
            <Button buttonText="ORDER NOW" />
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
