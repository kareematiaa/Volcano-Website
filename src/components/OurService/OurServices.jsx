import React from "react";
import styles from "./OurServices.module.css";
import service1 from "../../Images/service1.jpg";
import service2 from "../../Images/service2.jpg";
import service3 from "../../Images/service3.jpg";

export default function OurServices() {
  return (
    <>
      {/* <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <h2>What services we provide</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
        </div>
        <div className={styles.servicesMain}>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
          <button className={styles.viewAllBtn}>View all services</button>
        </div>
        <div className={styles.servicesCards}>
          <div className={styles.serviceCard}>
            <img
              src={service1}
              alt="Brand Awareness"
              className={styles.serviceImage}
            />
            <h3>Brand Awareness</h3>
            <p>
              This can include creating catchy slogans, designing visually
              appealing graphics, and positioning the brand in a way that aligns
              with its target audience's preferences.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <img
              src={service2}
              alt="Lead Generation"
              className={styles.serviceImage}
            />
            <h3>Lead Generation</h3>
            <p>
              This helps businesses build a database of leads for follow-up and
              conversion.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <img
              src={service3}
              alt="Product Promotion"
              className={styles.serviceImage}
            />
            <h3>Product Promotion</h3>
            <p>
              This can involve special offers, discounts, or showcasing
              testimonials and reviews.
            </p>
          </div>
        </div>
      </div> */}

      <div className={`${styles.servicesContainer} pt-4`}>
        <div className={`container ${styles.servicesHeader}`}>
          <div className="row">
            <h1 className="font-weight-bold text-center">
              What services we provide ?
            </h1>
            <div className="col-6 mt-3 text-center">
              <div>
                <div className={styles.descriptionBox}>
                  <p>
                    At Volcano, we take pride in offering a comprehensive range
                    of outdoor advertising services designed to deliver
                    exceptional results. Our process begins with our skilled
                    engineers creating precise and secure banner designs. These
                    drawings are then brought to life using high-quality metal
                    products, meticulously crafted at our state-of-the-art
                    factories.
                  </p>
                </div>
                <div className={styles.descriptionBox}>
                  <p>
                    We use specialized UV materials for printing, ensuring that
                    your artwork’s colors remain vibrant and true, even under
                    the intense Egyptian sun. Our banners are built to withstand
                    the elements and maintain their visual impact.
                  </p>
                </div>

                <div className={styles.descriptionBox}>
                  <p>
                    With Volcano, you can be confident that your outdoor
                    advertising will not only stand out but also stand the test
                    of time
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 mt-3 pics">
              <div className={`${styles.descriptionBox}`}>
                <p>
                  Our commitment to excellence extends to the installation
                  process. We guarantee fast and efficient banner placement in
                  prime locations with high traffic, maximizing your visibility.
                  Additionally, our 24/7 support service ensures that your
                  advertisement remains prominent in any weather conditions,
                  with prompt resolution of any issues that may arise.
                </p>
              </div>
              <div className="row ps-5 pt-4">
                <div className={`col-6`}>
                  <div className={`${styles.fisrtCardBody}`}></div>
                </div>

                <div className="col-6 pics">
                  <div className={`${styles.thirdCardBody} `}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
