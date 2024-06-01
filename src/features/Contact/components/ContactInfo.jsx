import "../contact.styles/Contact.css";
import { Location, Phone } from "../../../assets/index";

const ContactInfo = () => {
  const contacts = [
    {
      logo: <Location />,
      title: "Our Office Location",
      description_1: "The Interior Design Studio Company",
      description_2: "The Coutyand, Al Quoz 1, Colorado, USA",
    },
    {
      logo: <Phone />,
      title: "Phone (Landline)",
      description_1: "+912 3 567 8987",
    },
  ];
  return (
    <div className="contact_page_left_list_con">
      {contacts.map((contact) => (
        <div className="contact_page_left_list" key={contact.title}>
          {contact.logo}
          <div className="contact_page_left_list_text">
            <h3>{contact.title}</h3>
            <p>{contact.description_1}</p>
            <p>{contact.description_2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ContactInfo;
