import { useNavigate } from "react-router-dom";
import { HeadphonesBlack } from "../../../assets/index";
import Button from "../../../components/Button/Button";
import "../home.styles/FirstHomePage.css";

const MainHomePage = () => {
  const router = useNavigate();

  const handleClickButton = () => {
    router("/offer");
  };

  return (
    <div className="first_home_page_con">
      <div className="first_home_page_con_left">
        <h1>Enjoy the best shopping.</h1>
        <hr />
        <p>
          Welcome to my headphone store! Here is the best selection of premium
          headphones, so find your headphones!
        </p>
        <Button
          handleButtononClick={handleClickButton}
          buttonText="ORDER NOW"
        />
      </div>
      <div className="first_home_page_con_right">
        <HeadphonesBlack />
      </div>
    </div>
  );
};
export default MainHomePage;
