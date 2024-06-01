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
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure.",
    },
    {
      image: <IconHeapdhone />,
      title: "EASY TO USE",
      description:
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure.",
    },
    {
      image: <IconHeapdhoneMicrophon />,
      title: "TRENDY DESIGN",
      description:
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure.",
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
