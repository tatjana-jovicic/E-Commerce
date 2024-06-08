import "./Cart.css";
import CartIcon from "../../assets/cart-icon.webp";
import { useOrderStore } from "../../stores/order/order.store";

const Cart = ({ handleOnClick }) => {
  const { orders } = useOrderStore();

  return (
    <div className="cart_icon">
      <span>{orders.length}</span>
      <img onClick={handleOnClick} src={CartIcon} alt="cart icon" />
    </div>
  );
};
export default Cart;
