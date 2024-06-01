import "../home.styles/SixthHomePage.css";
import { Client1, Client2, Client3 } from "../../../assets/index";

const SixthHomePageList = () => {
  const clients = [
    {
      image: <Client1 />,
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "JOHN SMITH",
    },
    {
      image: <Client2 />,
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "STEVEN HILL",
    },
    {
      image: <Client3 />,
      decription:
        "All the Lorem Ipsum henerators on the chunks as necessary, making this the first true generator on the Internet. It uses a directionary of over.",
      name: "DAVID JACKSON",
    },
  ];

  return (
    <div className="sixth_home_page_list ">
      {clients.map((client) => (
        <div key={client.name}>
          {client.image}
          <p>{client.decription}</p>
          <h2>{client.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default SixthHomePageList;
