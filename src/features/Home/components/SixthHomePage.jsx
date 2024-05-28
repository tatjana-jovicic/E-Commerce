import "../home.styles/SixthHomePage.css";
import SixthHomePageList from "./SixthHomePageList";

const SixthHomePage = () => {
  return (
    <div className="sixth_home_page_con">
      <div className="sixt_home_page_con_left">
        <h1>What Our Clients Say</h1>
      </div>
      <div className="sixt_home_page_con_right">
        <SixthHomePageList />
      </div>
    </div>
  );
};
export default SixthHomePage;
