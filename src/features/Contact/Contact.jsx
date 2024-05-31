import "./contact.styles/Contact.css";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
  return (
    <div className="contact_page_div">
      <div className="contact_page_con">
        <div className="contact_page_con_left">
          <h1>Get in touch</h1>
          <p>
            Use our contact for all informations requests or contact us directly
            using contact information below.
          </p>
          <p>Feel free to get in touch with us via email or phone</p>
          <hr />
          <ContactInfo />
        </div>
        <div className="contact_page_con_right">
          <h2>Get started with a free quotation</h2>
          <form className="form">
            <label>Name</label>
            <input type="text" placeholder="Enter your Name" />
            <label>Email</label>
            <input type="text" placeholder="Enter a valid email address" />
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
            <div className="checkbox_div">
              <input type="checkbox" />
              <label>
                I accept the <a href="#">Terms of Service</a>
              </label>
            </div>
            <input type="submit" value="Submit your request"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
