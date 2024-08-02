import { useOrderStore } from "../../../stores/order/order.store";
import "./item.styles.css/ItemsInCart.css";
import { Increment, Decrement, CloseIcon, Bin } from "../../../assets/index";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import useNotificationStore from "../../../stores/notification/notification.store";

const ItemsInCart = ({ onClose }) => {
  const router = useNavigate();
  const {
    orders,
    removeItemFromCart,
    incrementNumberOfItems,
    decrementNumberOfItems,
  } = useOrderStore();
  const { setNotification } = useNotificationStore();

  const handleClickCheckout = () => {
    router("/checkout");
    onClose();
  };

  const RemoveItemFromCart = (id) => {
    removeItemFromCart(id);
    setNotification(true, "Item deleted!", "success");
  };

  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemTotalPrice = (item) => {
    const totalItemPrice = item.price * item.quantity;
    return totalItemPrice.toFixed(2);
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      <CloseIcon handleToClick={onClose} />
      <hr />
      <div className="list_items">
        {orders.map((item) => (
          <div key={item.id} className="item_in_cart">
            <div className="con_img">
              <img className="img" src={item.image} alt={item.name} />
            </div>
            <div className="con_name">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <div className="con_right_item_in_cart">
              <div className="quantity">
                <Decrement
                  handleToClick={() => decrementNumberOfItems(item.id)}
                />
                <span>{item.quantity}</span>
                <Increment
                  handleToClick={() => incrementNumberOfItems(item.id)}
                />
              </div>
              <h3 className="price">${itemTotalPrice(item)}</h3>
              <Bin handleToClick={() => RemoveItemFromCart(item.id)} />
            </div>
          </div>
        ))}
      </div>
      <div className="cart_bottom">
        <hr />
        <div className="promocode">
          <input type="text" placeholder="Promocode" />
          <Button buttonText="Apply" />
        </div>
        <p>20% off discount</p>
        <hr />
        <div className="subototal">
          <h4>Subtotal</h4>
          <h3>$0</h3>
        </div>
        <hr />
        <div className="total">
          <h4>Total</h4>
          <h3>${total.toFixed(2)}</h3>
        </div>
        <div className="buttons">
          <Button
            handleButtononClick={handleClickCheckout}
            buttonText="Proceed to checkout"
          />
          <Button buttonText="Continue shopping" />
        </div>
      </div>
    </div>
  );
};
export default ItemsInCart;
