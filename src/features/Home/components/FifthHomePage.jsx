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
              <h1>Discover Your Ideal Sound Companion</h1>
              <p>
                Our headphones deliver exceptional audio quality, whether you're
                a casual listener or an audiophile. Explore our top features to
                find the perfect match for your needs. From superior sound
                clarity to comfortable design, we have something for everyone.
              </p>
            </div>
            <div className="fifth_home_page_con_right_list">
              <ul>
                <li>Crystal-clear audio for an immersive experience</li>
                <li>Comfortable fit for extended listening sessions</li>
                <li>Advanced noise-cancellation technology</li>
                <li>Durable build quality for long-lasting use</li>
                <li>Stylish design that complements your lifestyle</li>
                <li>Easy Bluetooth connectivity for seamless use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FifthHomePage;
