import "../home.styles/SecondHomePage.css";
import {
  IconEditUser,
  IconHeapdhone,
  IconHeapdhoneMicrophon,
} from "../../../assets/index";

const SecondHomePageList = () => {
  const headphones = [
    {
      image: <IconEditUser />,
      title: "FREE UPDATES",
      description:
        "Stay ahead with the latest features and enhancements. Our headphones come with free firmware updates to ensure you always have the best performance and new functionalities.",
    },
    {
      image: <IconHeapdhone />,
      title: "EASY TO USE",
      description:
        "Designed with user convenience in mind. Our intuitive controls and quick setup make using your headphones easy, so you can enjoy the sound without any hassle.",
    },
    {
      image: <IconHeapdhoneMicrophon />,
      title: "TRENDY DESIGN",
      description:
        "Stylishly crafted to match your modern lifestyle. Our headphones boast a sleek, contemporary design that complements any outfit and stands out with its bold aesthetic.",
    },
  ];

  return (
    <div className="second_home_page_list">
      {headphones.map((headphone) => (
        <div key={headphone.title}>
          {headphone.image}
          <h2>{headphone.title}</h2>
          <p>{headphone.description}</p>
        </div>
      ))}
    </div>
  );
};
export default SecondHomePageList;
