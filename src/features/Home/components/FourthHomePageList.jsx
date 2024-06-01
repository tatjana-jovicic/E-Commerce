import "../home.styles/FourthHomePage.css";
import Button from "../../../components/Button/Button";
import { Headphone } from "../../../assets/index";

const FourthHomePageList = () => {
  const packages = [
    {
      image: <Headphone />,
      title: "Simple",
      description: "Security Device with Monthly Service",
      price: "$19",
    },
    {
      image: <Headphone />,
      title: "Standard",
      description: "Security Device with Monthly Service",
      price: "$29",
    },
    {
      image: <Headphone />,
      title: "Best Offer",
      description: "Security Device with Monthly Service",
      price: "$39",
    },
  ];

  return (
    <div className="fourth_home_page_list_con">
      {packages.map((item) => (
        <div className="fourth_home_page_list" key={item.title}>
          {item.image}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h1>{item.price}</h1>
          <Button buttonText="SHOP NOW" />
        </div>
      ))}
    </div>
  );
};
export default FourthHomePageList;
