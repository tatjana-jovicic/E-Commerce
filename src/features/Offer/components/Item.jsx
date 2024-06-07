import "./item.styles.css/Item.css";
import Button from "../../../components/Button/Button";

const Item = ({ item }) => {
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
        <Button buttonText="Add to Cart" />
      </div>
    </div>
  );
};
export default Item;
