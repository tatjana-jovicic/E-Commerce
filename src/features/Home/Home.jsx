import "./Home.css";
import Button from "../../components/Button/Button";
import HeadphonesBlack from "../../assets/headphones-black.png";
import HomeFooter from "./components/HomeFooter";

const Home = () => {
  return (
    <>
      <div className="nesto">
        <div className="home_div">
          <div className="home_div_left">
            <div className="home_title">
              <h1>Fresh Beautiful.</h1>
              <h1>Innovative.</h1>
            </div>
            <hr />
            <p>
              There are many variations of passangers of Lorem Ipsum available,
              but the majority have suffered alteration in some from, by
              injected humor
            </p>
            <Button buttonText="ORDER NOW" />
          </div>
          <div className="home_div_right">
            <img src={HeadphonesBlack} alt="headphones black" />
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
};
export default Home;
