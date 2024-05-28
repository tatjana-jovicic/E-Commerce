import "../home.styles/FirstHomePage.css";
import MainHomePage from "../components/MainHomePage";
import {
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
      <MainHomePage />
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
