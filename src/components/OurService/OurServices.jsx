import React from "react";
import "./OurServices.css";
import service1 from "../../Images/service1.jpg";
import service2 from "../../Images/service2.jpg";
import service3 from "../../Images/service3.jpg";

export default function OurServices() {
  return (
    <>
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </header>
      <div className="services-section">
        <div className="cont">
          <div className="row">
            <div className="col-md-3 services-text">
              <div className="">
                <h2>Our Services</h2>
                <div className="line"></div>
                <p>
                  At Volcano, we take pride in offering a comprehensive range of
                  outdoor advertising services designed to deliver exceptional
                  results.
                </p>
              </div>
            </div>
            <div className="col-md-9 services-list mt-4 ps-4 text-center">
              <div className="row itemm">
                <div className="col-md-4 pt-2">
                  <div className="service-item">
                    <div className="">
                      <span class="material-symbols-outlined service-icon bla">
                        engineering
                      </span>
                      <h4 className="service-header pb-3">Steel Production</h4>
                      <p className="service-content pe-4">
                        These drawings are then brought to life using
                        high-quality metal products, meticulously crafted at our
                        state-of-the-art factories.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 pt-2">
                  <div className="service-item ms-4">
                    <div className="">
                      <span class="material-symbols-outlined service-icon bla">
                        draw
                      </span>
                      <h4 className="service-header">
                        Steel Fabrication Drawing
                      </h4>
                      <p className="service-content pe-4">
                        Our process begins with our skilled engineers creating
                        precise and secure banner designs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="service-item ">
                    <div className="pt-1">
                      <span class="material-symbols-outlined service-icon bla">
                        brush
                      </span>
                      <h4 className="service-header">
                        Billboard Poster Printing
                      </h4>
                      <p className="service-content">
                        We use specialized UV materials for printing, ensuring
                        that your artwork’s colors remain vibrant and true, even
                        under the intense Egyptian sun. Our banners are built to
                        withstand the elements and maintain their visual impact.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="service-item pt-3">
                    <div className="">
                      <span className="material-symbols-outlined service-icon bla">
                        acute
                      </span>
                      <h4 className="service-header">Fast Installation</h4>
                      <p className="service-content pe-4">
                        Our commitment to excellence extends to the installation
                        process. We guarantee fast and efficient banner
                        placement in prime locations with high traffic,
                        maximizing your visibility
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="service-item ps-4">
                    <div className="pt-3">
                      <span class="material-symbols-outlined service-icon bla">
                        chat_info
                      </span>
                      <h4 className="service-header">24/7 Service Support</h4>
                      <p className="service-content">
                        Additionally, our round-the-clock support service
                        ensures that your advertisement remains prominent in any
                        weather conditions, with prompt resolution of any issues
                        that may arise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center pb-2 mt-5 ps-5 ms-4">
                <p className="fw-semibold semi">
                  With Volcano, you can be confident that your outdoor
                  advertising will not only stand out but also stand the test of
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
