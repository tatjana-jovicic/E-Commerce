import "../contact.styles/Contact.css";

const ContactInfo = () => {
  const contacts = [
    {
      logo: "https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png",
      title: "Our Office Location",
      description_1: "The Interior Design Studio Company",
      description_2: "The Coutyand, Al Quoz 1, Colorado, USA",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/15/15407.png",
      title: "Phone (Landline)",
      description_1: "+912 3 567 8987",
    },
  ];
  return (
    <div className="contact_page_left_list_con">
      {contacts.map((contact) => (
        <div className="contact_page_left_list" key={contact.title}>
          <img
            className="contact_page_left_logo"
            src={contact.logo}
            alt="contact logo"
          />
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
