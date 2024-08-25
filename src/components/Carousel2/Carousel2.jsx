import React from "react";
import "./Carousel2.css";
import work1 from "../../Images/work-1.jpg";
import work2 from "../../Images/work-2.jpg";
import work3 from "../../Images/work-3.jpg";

export default function Carousel() {
  return (
    <>
      <div className="bodyBg">
        <div className=" d-flex justify-content-center pt-5">
          <div className="bg-dark carousell  rounded mt-3 pb-3 w-75">
            <div className="row">
              <div className="col-md-6 coll">
                <div>
                  <h1 className="text-white ps-5 ms-5 pt-4">
                    TRADITIONAL <br /> OUTDOOR <br /> ADS
                  </h1>
                </div>
                <div>
                  <h1 className="text-white Digital ps-5 ms-5">
                    Digital <br /> OUTDOOR <br /> ADS
                  </h1>
                </div>
              </div>
              <div className="col-md-6 coll">
                <div className="d-flex justify-content-center ">
                  <div
                    id="carouselExampleFadee"
                    className="carousel slide carousel-fade fadee"
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
                <div className="d-flex justify-content-center mt-5">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade fadee"
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
