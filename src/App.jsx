import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import Offer from "./features/Offer/Offer";
import HowToOrder from "./features/HowToOrder/HowToOrder";
import AboutUs from "./features/AboutUs/AboutUs";
import Contact from "./features/Contact/Contact";
import Checkout from "./features/Offer/components/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/how_order" element={<HowToOrder />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
