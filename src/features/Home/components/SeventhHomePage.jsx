import "../home.styles/SeventhHomePage.css";
import "../home.styles/FirstHomePage.css";
import Button from "../../../components/Button/Button";
import { HeadphonesBlack } from "../../../assets";

const SeventhHomePage = () => {
  return (
    <div className="div">
      <div className="first_home_page_con">
        <div className="first_home_page_con_left">
          <div className="first_con_title">
            <h1>Enjoy Shopping.</h1>
            <h1>The Best.</h1>
          </div>
          <hr />
          <p>
            Welcome to my headphone store! This website has the best selection
            of premium headphones, so find your headphones!
          </p>
          <Button buttonText="ORDER NOW" />
        </div>
        <div className="first_home_page_con_right">
          <HeadphonesBlack />
        </div>
      </div>
    </div>
  );
};
export default SeventhHomePage;
