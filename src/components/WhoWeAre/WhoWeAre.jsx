import React from "react";
import who from "../../Images/who.png";
import who2 from "../../Images/who2.png";
import "./WhoWeAre.css";
export default function WhoWeAre() {
  return (
    <>
      <div>
        <div className="">
          <div className="hero-section">
            <div className="text-content py-3">
              <span className="subheading">Who We Are ?</span>
              <h1 className="main-heading">
                Egypt's premier outdoor <br /> advertising agency.
              </h1>
              <p className="description">
                - With our headquarters in Cairo and a strong presence along the
                stunning North Coast, we offer unparalleled advertising
                solutions designed to elevate your brand’s visibility.
              </p>
              <div className="additional-text">
                <p className="text1">
                  - At Volcano, we specialize in delivering high-impact
                  advertising through our extensive network of strategically
                  positioned big boards.
                </p>
                <p className="text2">
                  - Our locations are carefully chosen to ensure maximum
                  exposure in the most coveted areas across Egypt. Whether
                  you're aiming to capture attention in the bustling heart of
                  Cairo or along the picturesque North Coast, our premium
                </p>
              </div>
            </div>
            <div className="image-content">
              <div className="image-wrapper">
                <img src={who} alt="Image 1" className="main-image" />
                <img src={who2} alt="Image 2" className="secondary-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
