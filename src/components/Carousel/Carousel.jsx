import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import work1 from "../../Images/work-1.jpg";
import work2 from "../../Images/work-2.jpg";
import work3 from "../../Images/work-3.jpg";

export default function Carousel() {
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    // dots: false,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "0",
    // arrows: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="bg-dark carousell">
        <div className="row">
          <div className="col-md-6 coll">
            <div className="pb-4">
              <h2 className="text-center textt">TRADITIONAL OUTDOOR ADS</h2>
            </div>
            <div className="d-flex justify-content-center ">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade w-75"
              >
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img src={work1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={work2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={work3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev text-dark"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon "
                    aria-hidden="true"
                  />
                  <span className="visually-hidden ">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 coll">
            <div className="pb-4">
              <h2 className="text-center textt">DIGITAL OUTDOOR ADS</h2>
            </div>
            <div className="d-flex justify-content-center ">
              <div
                id="carouselExampleFadee"
                className="carousel slide carousel-fade w-75"
              >
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img src={work1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={work2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={work3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev text-dark"
                  type="button"
                  data-bs-target="#carouselExampleFadee"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFadee"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon "
                    aria-hidden="true"
                  />
                  <span className="visually-hidden ">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="carousel-container bg-dark">
        <Slider {...settings}>
          <div className="carousel-slide">
            <img src={clients} alt="Lugar" />
            <div className="carousel-caption">
              <h3>GATES LUGAR</h3>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={clients} alt="Space" />
            <div className="carousel-caption">
              <h3>SPACE</h3>
              <p>Home to thriving success stories West of Cairo</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={clients} alt="Prive" />
            <div className="carousel-caption">
              <h3>GATES PRIVE</h3>
            </div>
          </div>
        </Slider>
      </div> */}
    </>
  );
}
