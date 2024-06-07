import { useOrderStore } from "../../../stores/order/order.store";
import "./item.styles.css/ItemsInCart.css";
import Bin from "../../../assets/bin.png";
const ItemsInCart = () => {
  const { orders } = useOrderStore();

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
            <div className="nesto">
              <div className="quantity">
                <span className="decrement">-</span>
                <span>1</span>
                <span className="increment">+</span>
              </div>
              <h3 className="price">${item.price}</h3>
              <img className="bin" src={Bin} alt="Bin Icon" />
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};
export default ItemsInCart;
