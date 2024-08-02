import "./item.styles.css/Item.css";
import Button from "../../../components/Button/Button";
import { useOrderStore } from "../../../stores/order/order.store";
import TextRating from "./TextRating";
import useNotificationStore from "../../../stores/notification/notification.store";

const Item = ({ item }) => {
  const { addItemToCart } = useOrderStore();
  const { setNotification } = useNotificationStore();

  const handleAddedItem = (item) => {
    const newItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
      description: item.description,
    };
    addItemToCart(newItem);
    setNotification(true, "Item added!", "success");
  };

  return (
    <div className="item">
      <div className="item_img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item_description">
        <div className="item_title">
          <h3>{item.name}</h3> <p>${item.price}</p>
        </div>
        <p className="description">{item.description}</p>
        <TextRating rating={item.rating} />
        <Button
          handleButtononClick={() => handleAddedItem(item)}
          buttonText="Add to Cart"
        />
      </div>
    </div>
  );
};

export default Item;
