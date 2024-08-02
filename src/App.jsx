import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import Offer from "./features/Offer/Offer";
import AboutUs from "./features/AboutUs/AboutUs";
import Contact from "./features/Contact/Contact";
import Checkout from "./features/Offer/components/Checkout";
import Notification from "./components/Notification/Notification";
import useNotificationStore from "./stores/notification/notification.store";

const App = () => {
  const isOpen = useNotificationStore((state) => state.isOpen);

  return (
    <>
      <BrowserRouter>
        {isOpen && <Notification />}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
