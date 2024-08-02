import "./item.styles.css/Checkout.css";
import Button from "../../../components/Button/Button";
import { Padlock } from "../../../assets/index";

const Checkout = () => {
  return (
    <>
      <div className="checkout_page">
        <div className="checkout_page_con">
          <div className="checkout_page_con_left">
            <h4>Delivery Address</h4>
            <div className="checkout_con_left_name">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <p>
              <a href="#">+Add Your Company Name</a>
            </p>
            <div className="checkout_con_left_address">
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="Apt/Suite/Floor(Optional)" />
            </div>
            <div className="checkout_con_left_city">
              <input type="text" placeholder="City" />
              <input type="text" list="cities" placeholder="City" />
              <datalist id="cities">
                <option value="New York" />
                <option value="Los Angeles" />
                <option value="Chicago" />
                <option value="Houston" />
              </datalist>
              <input type="text" placeholder="Zip Code" />
            </div>
            <div className="checkout_con_left_checkbox">
              <input type="checkbox" /> <p>Use as billing address</p>
            </div>
          </div>
          <div className="checkout_page_con_right">
            <h4>Contact Info</h4>
            <div className="checkout_con_right_info">
              <input type="text" placeholder="Email for Order Tracking" />
              <input type="text" placeholder="Phone for Delivery Contact" />
            </div>
            <div className="checkout_con_right_key">
              <Padlock />
              <p>
                Your privacy is important to us. View our privacy policu here.
                We'll only contact you if there's an issue with your order.
                <br></br>
                <strong>
                  We'll alse look for coupons associated with your email and
                  phone number
                </strong>
              </p>
            </div>
            <div className="checkout_con_right_checkbox">
              <input type="checkbox" />
              <p>Get text alerts for your order on your mobile</p>
            </div>
          </div>
          <div className="checkout_page_con_button">
            <Button buttonText="Proceed to Savings & Payments" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
