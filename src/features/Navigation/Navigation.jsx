import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to={{ pathname: "/" }}>Home</Link>
      <Link to={{ pathname: "/offer" }}>Offer</Link>
      <Link to={{ pathname: "/how_order" }}>How to order?</Link>
      <Link to={{ pathname: "/about_us" }}>About Us</Link>
      <Link to={{ pathname: "/contact" }}>Contact</Link>
    </nav>
  );
};
export default Navigation;
