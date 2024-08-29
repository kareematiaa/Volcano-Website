import React from "react";
import "./Outdoor.css";
import Slider from "react-slick";

import out1 from "../../Images/out1.png";
import out2 from "../../Images/out2.png";
import out3 from "../../Images/out3.png";
import out4 from "../../Images/out4.png";
import out5 from "../../Images/out5.png";
import out6 from "../../Images/out6.png";

export default function Outdoor() {
  const images = [
    { src: out1, title: "Billboard" },
    { src: out2, title: "Stand" },
    { src: out3, title: "Unipol" },
    { src: out4, title: "Double-Decker" },
    { src: out5, title: "RoofTop" },
    { src: out6, title: "Bridge" },
  ];
  const images2 = [
    { src: out1, title: "Billboard" },
    { src: out2, title: "Stand" },
    { src: out3, title: "Bridge" },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 1,
    focusOnSelect: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="all">
        <div className="blurred-layer"></div>
        <div className="">
          <div>
            <div className="container">
              <h1 className="title1 text-center mt-5">
                TRADITIONAL OUTDOOR ADS
              </h1>
              <h6 className={`yearsO tex  text-center`}>
                STAND OUT FROM THE CROWD
              </h6>
            </div>
            <div className="d-flex justify-content-center">
              <div className="sliderr">
                <Slider {...settings} className="">
                  {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                      <img src={image.src} alt={`Slide ${index + 1}`} />
                      <div className="title-layer">{image.title}</div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="Tline"></div>
          <div>
            <div className="pt-5 container">
              <h1 className="title1 text-center">DIGITAL OUTDOOR ADS</h1>
              <h6 className={`yearsO tex  text-center`}>
                STAND OUT FROM THE CROWD
              </h6>
            </div>
          </div>
          <div className="d-flex justify-content-center pb-5">
            <div className="sliderr">
              <Slider {...settings} className="">
                {images2.map((image2, index) => (
                  <div className="carousel-item" key={index}>
                    <img src={image2.src} alt={`Slide ${index + 1}`} />
                    <div className="title-layer">{image2.title}</div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* <div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className="hover">
                  <img src={out1} alt="" className="downOuter w-100 rounded " />
                  <div class="change3">
                    <h5>Project Tiltle</h5>
                    <span>Category</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hover">
                  <img src={out1} alt="" className="downOuter w-100 rounded " />
                  <div class="change3">
                    <h5>Project Tiltle</h5>
                    <span>Category</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hover">
                  <img src={out1} alt="" className="downOuter w-100 rounded " />
                  <div class="change3">
                    <h5>Project Tiltle</h5>
                    <span>Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
