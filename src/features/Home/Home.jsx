import "./Home.css";
import Button from "../../components/Button/Button";
import HeadphonesBlack from "../../assets/headphones-black.png";
import HomeFooter from "./components/HomeFooter";

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
          <img src={HeadphonesBlack} alt="headphones black" />
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};
export default Home;
