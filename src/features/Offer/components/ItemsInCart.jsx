import { useOrderStore } from "../../../stores/order/order.store";
import "./item.styles.css/ItemsInCart.css";
import Bin from "../../../assets/bin.png";
import Button from "../../../components/Button/Button";

const ItemsInCart = () => {
  const {
    orders,
    removeItemFromCart,
    incrementNumberOfItems,
    decrementNumberOfItems,
  } = useOrderStore();

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
                <span
                  className="decrement"
                  onClick={() => decrementNumberOfItems(item.id)}
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  className="increment"
                  onClick={() => incrementNumberOfItems(item.id)}
                >
                  +
                </span>
              </div>
              <h3 className="price">${itemTotalPrice(item)}</h3>
              <img
                className="bin"
                onClick={() => removeItemFromCart(item.id)}
                src={Bin}
                alt="Bin Icon"
              />
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
          <h3>$34554</h3>
        </div>
        <hr />
        <div className="total">
          <h4>Total</h4>
          <h3>${total.toFixed(2)}</h3>
        </div>
        <div className="buttons">
          <Button buttonText="Proceed to checkout" />
          <Button buttonText="Continue shopping" />
        </div>
      </div>
    </div>
  );
};
export default ItemsInCart;
