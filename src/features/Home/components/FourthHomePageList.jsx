import "../home.styles/FourthHomePage.css";
import Button from "../../../components/Button/Button";

const FourthHomePageList = () => {
  const packages = [
    {
      image: "https://pngimg.com/d/headphones_PNG7623.png",
      title: "Simple",
      description: "Security Device with Monthly Service",
      price: "$19",
    },
    {
      image: "https://pngimg.com/d/headphones_PNG7623.png",
      title: "Standard",
      description: "Security Device with Monthly Service",
      price: "$29",
    },
    {
      image: "https://pngimg.com/d/headphones_PNG7623.png",
      title: "Best Offer",
      description: "Security Device with Monthly Service",
      price: "$39",
    },
  ];

  return (
    <div className="fourth_home_page_list_con">
      {packages.map((item) => (
        <div className="fourth_home_page_list" key={item.title}>
          <img
            className="fourth_home_page_con_images"
            src={item.image}
            alt="packet"
          />
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
