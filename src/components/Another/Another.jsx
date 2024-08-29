import React from "react";
import "./Another.css";
import work1 from "../../Images/work-1.jpg";
import work2 from "../../Images/work-2.jpg";
import work3 from "../../Images/work-3.jpg";
export default function Another() {
  const images = [
    {
      src: work1,
      title:
        "Our Digital assets are strategically placed in London's most iconic locations",
    },
    {
      src: work2,
      title:
        "Our exclusive partnership with TfL enables us to connect you with London audiences across Tube, Tram and Overground.",
    },
    {
      src: work3,
      title:
        "Our Digital assets are strategically placed in London's most iconic locations",
    },
    {
      src: work3,
      title:
        "Our exclusive partnership with TfL enables us to connect you with London audiences across Tube, Tram and Overground.",
    },
    {
      src: work2,
      title:
        "We offer affordable Tram advertising solutions that provide you with the opportunity to connect with local audiences.",
    },
    {
      src: work1,
      title:
        "We offer affordable Tram advertising solutions that provide you with the opportunity to connect with local audiences.",
    },
  ];
  return (
    <>
      <div className="container-fluid bgb">
        <div className="Tlinee"></div>
        <div className="text-center workdev">
          <h1 className="work">OUR WORK</h1>
          <h6 className={`years`}>STAND OUT FROM THE CROWD</h6>
        </div>
        <div className="grid-container">
          {images.map((image, index) => (
            <div className="grid-item" key={index}>
              <img src={image.src} alt={`work ${index + 1}`} />
              <div className="overlay">
                <div className="text">{image.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
