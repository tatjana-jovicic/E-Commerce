import "../home.styles/FourthHomePage.css";
import FourthHomePageList from "./FourthHomePageList";

const FourthHomePage = () => {
  return (
    <div className="fourth_home_page_div">
      <div className="fourth_home_page_con">
        <div className="fourth_home_page_con_left">
          <h2>Our Packages</h2>
        </div>
        <div className="fourth_home_page_con_right">
          <FourthHomePageList />
        </div>
      </div>
    </div>
  );
};
export default FourthHomePage;
