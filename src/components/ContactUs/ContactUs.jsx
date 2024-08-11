import React from "react";
// import styles from "./ContactUs.module.css";
import "./ContactUs.css";
import world from "../../Images/world.png";

export default function ContactUs() {
  return (
    <>
      {/* <div className={styles.body}>
        <div className={`${styles.contact} row ps-5 pt-5`}>
          <h1 className={styles.contactUs}>Contact Us</h1>
          <div className="col-2">
            <h4>
              LOCATION <i class="fa-solid fa-location-dot h5 ps-2"></i>
            </h4>
            <p className="text-white">Zmalek, Cairo</p>
            <p className="text-white">egypt</p>
          </div>
          <div className="col-2 text-white">
            <h4>
              EMAIL <i class="fa-solid fa-envelope h5 ps-2"></i>
            </h4>
            <p className="text-white">Heloo@gmail.com</p>
          </div>
          <div className="col-2 text-white">
            <h4>
              TELEPHONE <i class="fa-solid fa-phone h5 ms-2"></i>
            </h4>
            <p className="text-white">+20105487968</p>
            <p className="text-white">+20105487968</p>
          </div>
          <h3 className={`${styles.contact} my-5`}>
            <span>
              <i class="fa-brands fa-facebook-f pe-4"></i>
            </span>
            <span>
              <i class="fa-brands fa-instagram ms-5 me-5 pe-3"></i>
            </span>{" "}
            <span>
              <i class="fa-brands fa-x-twitter me-5 pe-5"></i>
            </span>
          </h3>
        </div>
      </div> */}

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
      </div>
    </>
  );
}
