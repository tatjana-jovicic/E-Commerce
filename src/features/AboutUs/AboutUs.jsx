import "./AboutUs.css";
import {
  AboutPicture_1,
  AboutPicture_2,
  AboutPicture_3,
} from "../../assets/index";

const AboutUs = () => {
  return (
    <div className="about_page_div">
      <div className="about_page_con_1">
        <div className="about_page_con_1_left">
          <h1>About Us</h1>
          <p>
            We are committed to providing a flawless and enjoyable experience,
            ensuring that every pair of headphones we offer meets the highest
            standards of quality and comfort.
          </p>
        </div>
        <div className="about_page_con_1_right">
          <AboutPicture_1 />
        </div>
      </div>
      <div className="about_page_con_2">
        <div className="about_page_con_2_left">
          <AboutPicture_2 />
        </div>
        <div className="about_page_con_2_right">
          <h1>
            Our Mission: Enhancing Your Listening Experience with Exceptional
            Headphones
          </h1>
          <p>
            We believe in not just expanding our range, but enhancing your
            listening experience. Our goal is to provide you with top-quality
            headphones that elevate your everyday life, ensuring a perfect blend
            of style, comfort, and sound.
          </p>
        </div>
      </div>
      <div className="about_page_con_3">
        <div className="about_page_con_3_left">
          <h1>Our Story</h1>
          <p>
            Our Story: Established in 2023, we began with a simple mission - to
            offer high-quality headphones that combine exceptional sound with
            outstanding comfort. Over the years, we've grown from a small
            startup into a leading name in the industry, constantly innovating
            and refining our products.
          </p>
          <p>
            Our journey has been marked by a commitment to excellence, driven by
            our passion for delivering the ultimate audio experience. As we
            continue to grow, our dedication remains unwavering: to provide you
            with headphones that enhance every moment of your life.
          </p>
        </div>
        <div className="about_page_con_3_right">
          <AboutPicture_3 />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
