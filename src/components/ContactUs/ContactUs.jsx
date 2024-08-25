import React from "react";
// import styles from "./ContactUs.module.css";
import "./ContactUs.css";
import world from "../../Images/world.png";

export default function ContactUs() {
  return (
    <>
      <div className="contact-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 ps-5">
              <h3>Get in Touch with Volcano Agency</h3>
              <div className="line"></div>
              <p className="">
                <span className="strongg">
                  Looking to elevate your brand’s visibility in Egypt’s most
                  sought-after locations?
                </span>
                <br /> - At Volcano Agency, we’re dedicated to providing premium
                advertising solutions that make an impact.
              </p>
              <p className="">
                - For tailored strategies and effective outdoor advertising
                placements that capture attention and drive results, reach out
                to us. Our team is here to understand your needs and deliver the
                best solutions for your brand’s success.
              </p>
            </div>
            <div className="col-md-7">
              <div className="row d-flex justify-content-center pt-2 ps-5 ms-5">
                <div className="col-md-4 ">
                  <h6>
                    LOCATION
                    <i class="fa-solid fa-location-dot ps-2"></i>
                  </h6>
                  <p>
                    EGYPT , GIZA
                    <br />9 Gziret El Arab <br /> Al Mohandseen
                  </p>
                  <p className="location-map">
                    Location map
                    <a
                      href="https://maps.app.goo.gl/4dd45WdSvEwc18HE9?g_st=ic"
                      target="_blank"
                    >
                      <i class="fa-solid fa-square-arrow-up-right ps-2"></i>
                    </a>
                  </p>
                </div>
                <div className="col-md-4">
                  <h6>
                    EMAIL <i class="fa-solid fa-envelope ps-2"></i>
                  </h6>
                  <p>info@volcano-ads.com</p>
                  <h6>
                    TELEPHONE <i class="fa-solid fa-phone ms-3"></i>
                  </h6>
                  <p>tel (eg) +201033331050</p>
                </div>
              </div>
              <div className="social-icons text-center ps-5 pt-3">
                <a
                  href="https://www.facebook.com/volcanoadv1?mibextid=LQQJ4d"
                  target="blank"
                  className="me-5"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/volcanoadv1?igsh=OXdpOTZqejJicnFu"
                  target="blank"
                  className="me-5"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/volcano-outdoor-advertising-northcoast/"
                  target="blank"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <p className=" text-center pt-4">
            With Volcano, you can be confident that your outdoor advertising
            will not only stand out but also stand the test of time.
          </p>
        </div>
      </div>
      {/* ////////
      <div className="contact-page">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-8">
              <h2 className="mb-5">Get in Touch with Volcano Agency</h2>
              <div className="row texts ms-4">
                <div className="col-md-4 pe-1">
                  <p className="lead text-start">
                    For tailored strategies and effective outdoor advertising
                    placements that capture attention and drive results, reach
                    out to us. Our team is here to understand your needs and
                    deliver the best solutions for your brand’s success.
                  </p>
                </div>
                <div className="col-md-4 ps-3">
                  <p className="lead text-start">
                    Looking to elevate your brand’s visibility in Egypt’s most
                    sought-after locations? At Volcano Agency, we’re dedicated
                    to providing premium advertising solutions that make an
                    impact.
                  </p>
                </div>
              </div>
              <p className="contact-text my-4 pb-3 ms-5 ps-5">
                Contact us today and let Volcano Agency bring your advertising
                vision to life.
              </p>
            </div>
            <div className="col-md-4">
              <img className="pic" src={world} alt="" />
            </div>
          </div>

          <div className="row contact-info">
            <div className="col-md-3">
              <h5>
                VOLCANO LOCATION <i class="fa-solid fa-location-dot ps-2"></i>
              </h5>
              <p>
                EGYPT , GIZA
                <br />9 Gziret El Arab, Al Mohandseen
              </p>
              <p className="location-map">
                Location map
                <a
                  href="https://maps.app.goo.gl/4dd45WdSvEwc18HE9?g_st=ic"
                  target="_blank"
                >
                  <i class="fa-solid fa-square-arrow-up-right ps-2"></i>
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h5>
                EMAIL <i class="fa-solid fa-envelope ps-2"></i>
              </h5>
              <p>info@volcano-ads.com</p>
            </div>
            <div className="col-md-3">
              <h5>
                TELEPHONE <i class="fa-solid fa-phone ms-3"></i>
              </h5>
              <p>tel (eg) +201033331050</p>
            </div>
          </div>
          <p className="confidence-text">
            With Volcano, you can be confident that your outdoor advertising
            will not only stand out but also stand the test of time.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/volcanoadv1?mibextid=LQQJ4d"
              target="blank"
              className="me-5"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/volcanoadv1?igsh=OXdpOTZqejJicnFu"
              target="blank"
              className="me-5"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/volcano-outdoor-advertising-northcoast/"
              target="blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
