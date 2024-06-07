import "./Offer.css";
import Item from "./components/Item";
import { items } from "../../data/itemsdata";

const Offer = () => {
  return (
    <>
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
export default Offer;
