import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import OurClients from "../OurClients/OurClients";
import OurServices from "../OurService/OurServices";
import Statistics from "../Statistics/Statistics";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import { Element } from "react-scroll";

import "./App.css";

function App() {
  return (
    <>
      <Element name="home">
        <Home />
      </Element>
      <Element name="whoWeAre">
        <WhoWeAre />
      </Element>
      <Element name="ourServices">
        <OurServices />
      </Element>
      <Element name="ourClients">
        <OurClients />
      </Element>
      <Element name="statistics">
        <Statistics />
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
