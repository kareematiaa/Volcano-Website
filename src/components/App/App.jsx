import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import OurClients from "../OurClients/OurClients";
import OurServices from "../OurService/OurServices";
import Statistics from "../Statistics/Statistics";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import { Element } from "react-scroll";

import "./App.css";
import Carousel from "../Carousel/Carousel";
import Carousel2 from "../Carousel2/Carousel2";
import Carousel3 from "../Carousel3/Carousel3";
import OurWork from "../OurWork/OurWork";
import OurWork2 from "../OurWork2/OurWork2";
import Outdoor from "../Outdoor/Outdoor";
import Another from "../Another/Another";

function App() {
  return (
    <>
      <Home />
      <Element name="whoWeAre">
        <WhoWeAre />
      </Element>
      <Element name="ourServices">
        <OurServices />
      </Element>
      <Element name="outdoor">
        <Outdoor />
      </Element>
      <Statistics />
      <OurClients />
      <Element name="Another">
        <Another />
      </Element>
      <Element name="contactUs">
        <ContactUs />
      </Element>
    </>
  );
}

export default App;

// <>

//  <Home/>
//  <WhoWeAre/>
//  <OurServices/>
//  <OurClients/>
//  <Statistics/>
//  <ContactUs/>
// </>
