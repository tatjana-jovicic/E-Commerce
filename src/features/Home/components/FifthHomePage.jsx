import "../home.styles/FifthHomePage.css";
import Button from "../../../components/Button/Button";

const FifthHomePage = () => {
  return (
    <div>
      <div className="fifth_home_page_div">
        <div className="fifth_home_page_con">
          <div className="fifth_home_page_con_left">
            <h1>Product Information</h1>
            <div className="fifth_home_page_con_left_inp">
              <input type="text" placeholder="Enter Your Email Here" />
              <Button buttonText="Get Product Information" />
            </div>
          </div>
          <div className="fifth_home_page_con_right">
            <div className="fifth_home_page_con_right_title">
              <h1>Feature your best sellers.</h1>
              <p>
                Tehere are many vaariations of passages of Lorem ipsum avalible
                but the majority have suffered you are going to use passage of
                Lorem ipsu you need to be sure there isnt anything embarrassing
                hidden in the middle of text. All the Lorem ipsum generators.
              </p>
            </div>
            <div className="fifth_home_page_con_right_list">
              <ul>
                <li>It uses a didtionary of over Latin words as necessary</li>
                <li>Combined with handful of model sentence structure lorem</li>
                <li>Lorem Ipsum which looks reasonable a handful</li>
                <li>It uses a directionary of over Latin words as necessary</li>
                <li>Combined with handful of model sentence structure lorem</li>
                <li>Lorem Ipsum which looks reasonable a handful</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthHomePage;
