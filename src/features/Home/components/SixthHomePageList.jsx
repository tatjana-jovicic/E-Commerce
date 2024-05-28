import "../home.styles/SixthHomePage.css";

const SixthHomePageList = () => {
  const clients = [
    {
      image:
        "https://i0.wp.com/www.commercialphotographynorthwestblog.co.uk/wp-content/uploads/2020/10/MDH_8729webqualitysquare.jpg?resize=560%2C560&ssl=1",
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "JOHN SMITH",
    },
    {
      image:
        "https://oscailt.com/wp-content/uploads/2024/04/abi-beri-profile-lg-sq-500x500.jpg",
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "STEVEN HILL",
    },
    {
      image:
        "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716854400&semt=ais_user",
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "DAVID JACKSON",
    },
  ];

  return (
    <div className="sixth_home_page_list ">
      {clients.map((client) => (
        <div key={client.name}>
          <img
            className="sixth_home_page_con_icon"
            src={client.image}
            alt="picture of client"
          />
          <p>{client.decription}</p>
          <h2>{client.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default SixthHomePageList;
