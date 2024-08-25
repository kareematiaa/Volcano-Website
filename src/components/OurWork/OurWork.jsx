import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurWork.css"; //
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";

import work1 from "../../Images/work-1.jpg";
import work2 from "../../Images/work-2.jpg";
import work3 from "../../Images/work-3.jpg";

const images = [
  { src: work1 },
  { src: work2 },
  { src: work3 },
  // ...
];
export default function OurWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const renderImage = (image, index) => {
    const isActive = index === activeIndex;
    const zoomClass = isActive ? "active-image" : "inactive-image";

    return (
      <div
        key={index}
        onClick={() => handleImageClick(index)}
        className={zoomClass}
      >
        <img src={image.src} alt={`Image ${index + 1}`} />
      </div>
    );
  };

  //   const settings = {
  //     centerMode: true, // Centers the current slide
  //     centerPadding: "0", // No padding around the centered slide
  //     slidesToShow: 3, // Number of slides to show
  //     focusOnSelect: true, // Allows the user to focus on a slide by clicking it
  //     speed: 500,
  //     infinite: true,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     arrows: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1, // Show 1 slide on small screens
  //         },
  //       },
  //     ],
  //   };
  return (
    <>
      <div className="bodybgg">
        <div className="row pe-5 mx-5">
          <div className="col-md-8 mt-5">
            {" "}
            <div className="carous">
              <Carousel
                showStatus={false}
                infiniteLoop
                autoPlay
                stopOnHover
                selectedItem={activeIndex}
                onChange={setActiveIndex}
              >
                {images.map(renderImage)}
              </Carousel>
              {/* <Slider {...settings}>
          <div className="carousel-item">
            <img src={work1} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={work2} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={work3} alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={work1} alt="Slide 4" />
          </div>
        </Slider> */}
            </div>
          </div>
          <div className="col-md-4 work">
            <div className="text-center">
              <h1>Our Work</h1>
              <div className="linee"></div>
              <div className="linee2"></div>
              <div className="linee3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
