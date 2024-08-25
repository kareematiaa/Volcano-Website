import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OurWork2.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import work1 from "../../Images/work-1.jpg";
import work2 from "../../Images/work-2.jpg";
import work3 from "../../Images/work-3.jpg";

const images = [
  { src: work1, title: "Title 1" },
  { src: work2, title: "Title 2" },
  { src: work3, title: "Title 3" },
];

export default function OurWork() {
  const settings = {
    centerMode: true,
    centerPadding: "110px",
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
    <div className="bodybgg">
      <div className="container">
        <div className="text-center">
          <h1>Our Work</h1>
          <div className="linee"></div>
        </div>
        <div className="sliderr">
          <Slider {...settings}>
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
  );
}
