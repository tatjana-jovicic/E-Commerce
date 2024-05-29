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
            HubSpots company and culture are a lot like our product. Theyre
            crofield, not cobbied, for a deligthful experioence.
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
          <h1>Our Mission: Helping Milions of Organizations Grow Better</h1>
          <p>
            We believe not just in growing bigger, but in griwing better. And
            growing better meons aliging the success of your own buessnes with
            the success of your customers. Win-wint
          </p>
        </div>
      </div>
      <div className="about_page_con_3">
        <div className="about_page_con_3_left">
          <h1>Our Story</h1>
          <p>
            In 2004, We believe not just in growing bigger, but in griwing
            better. And growing better meons aliging the success of your own
            buessnes with the success of your customers. Win-wint growing better
            meons aliging the success of your own buessnes with. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Praesentium fugit
            itaque in, voluptate incidunt atque exercitationem rerum.
          </p>
          <p>
            Dolorem dolorum non eius possimus, obcaecati, itaque iste ratione
            ipsam quasi alias nisi! Buessnes with the success of your customers.
            Win-wint growing better meons aliging the success of your own
            buessnes with. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Praesentium fugit itaque in, voluptate incidunt atque
            exercitationem rerum. Dolorem dolorum non eius possimus, obcaecati,
            itaque iste ratione ipsam quasi alias nisi!
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
