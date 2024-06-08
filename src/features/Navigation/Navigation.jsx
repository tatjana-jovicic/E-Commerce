import { Link } from "react-router-dom";
import "./Navigation.css";
import PageLogo from "../../components/PageLogo/PageLogo";
import Cart from "../../components/Cart/Cart";
import ItemsInCart from "../Offer/components/ItemsInCart";
import { useState } from "react";
import { useOrderStore } from "../../stores/order/order.store";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { orders } = useOrderStore();

  const handleOnClick = () => {
    if (orders.length > 0) {
      setOpen(!open);
    } else {
      alert(`Cart is empty!`);
    }
  };

  return (
    <nav className="nav">
      <PageLogo />
      <div className="nav_links">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/offer" }}>Offer</Link>
        <Link to={{ pathname: "/how_order" }}>How to order?</Link>
        <Link to={{ pathname: "/about_us" }}>About Us</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
      <Cart handleOnClick={handleOnClick} />
      {open && <ItemsInCart />}
    </nav>
  );
};
export default Navigation;
