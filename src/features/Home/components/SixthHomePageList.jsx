import "../home.styles/SixthHomePage.css";
import { Client1, Client2, Client3 } from "../../../assets/index";

const SixthHomePageList = () => {
  const clients = [
    {
      image: <Client1 />,
      description:
        "The quality of these headphones is outstanding. They offer exceptional sound clarity and comfort, making them perfect for long listening sessions. Highly recommended!",
      name: "JOHN SMITH",
    },
    {
      image: <Client2 />,
      description:
        "I was impressed with the noise cancellation feature. It blocks out distractions and allows me to focus on my music. The build quality is also excellent. Worth every penny!",
      name: "STEVEN HILL",
    },
    {
      image: <Client3 />,
      description:
        "These headphones exceeded my expectations. The sound quality is superb, and they are very comfortable to wear. I appreciate the sleek design and easy connectivity.",
      name: "DAVID JACKSON",
    },
  ];

  return (
    <div className="sixth_home_page_list ">
      {clients.map((client) => (
        <div key={client.name}>
          {client.image}
          <p>{client.description}</p>
          <h2>{client.name}</h2>
        </div>
      ))}
    </div>
  );
};
export default SixthHomePageList;
