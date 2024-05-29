import { HeadphonesBlack } from "../../../assets/index";
import Button from "../../../components/Button/Button";
import "../home.styles/FirstHomePage.css";

const MainHomePage = () => {
  return (
    <div className="first_home_page_con">
      <div className="first_home_page_con_left">
        <h1>Enjoy Shopping. The Best.</h1>
        <hr />
        <p>
          Welcome to my headphone store! This website has the best selection of
          premium headphones, so find your headphones!
        </p>
        <Button buttonText="ORDER NOW" />
      </div>
      <div className="first_home_page_con_right">
        <HeadphonesBlack />
      </div>
    </div>
  );
};
export default MainHomePage;
