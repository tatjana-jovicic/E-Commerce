import "./Home.css";
import Button from "../../components/Button/Button";
import {
  HeadphonesBlack,
  Sennheiser,
  Bose,
  Samsung,
  Sony,
  Shure,
  Jbl,
} from "../../assets/index";

const Home = () => {
  return (
    <div className="home_div">
      <div className="div">
        <div className="div_left">
          <div className="div_title">
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
        <div className="div_right">
          <HeadphonesBlack />
        </div>
      </div>
      <footer className="footer_div">
        <Jbl />
        <Shure />
        <Sony />
        <Samsung />
        <Bose />
        <Sennheiser />
      </footer>
    </div>
  );
};
export default Home;
