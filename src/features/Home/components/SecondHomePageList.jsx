import "../home.styles/SecondHomePage.css";

const SecondHomePageList = () => {
  const aboutHeadphones = [
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/users-14/128/Users_Edit_Man-512.png",
      title: "FREE UPDATES",
      description:
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure/.",
    },
    {
      image: "https://pngimg.com/d/headphones_PNG7623.png",
      title: "EASY TO USE",
      description:
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure/.",
    },
    {
      image: "https://cdn-icons-png.freepik.com/512/81/81663.png",
      title: "TRENDY DESIGN",
      description:
        "It users a dictionary over 200 Latin the words. combinied with a hanful of model sentence with structure/.",
    },
  ];

  return (
    <div className="second_home_page_list">
      {aboutHeadphones.map((item) => (
        <div key={item.title}>
          <img
            className="second_home_page_con_icon"
            src={item.image}
            alt="logo"
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
export default SecondHomePageList;
