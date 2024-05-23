import "../home.styles/FirstHomePage.css";
import Button from "../../../components/Button/Button";
import {
  HeadphonesBlack,
  CompanyName,
  CR,
  Wired,
  Engadget,
  TC,
  Jbl,
} from "../../../assets/index";

const FirstHomePage = () => {
  return (
    <div className="first_home_page_div">
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
      <footer className="first_home_page_footer">
        <Jbl />
        <CompanyName />
        <CR />
        <Wired />
        <Engadget />
        <TC />
      </footer>
    </div>
  );
};
export default FirstHomePage;
