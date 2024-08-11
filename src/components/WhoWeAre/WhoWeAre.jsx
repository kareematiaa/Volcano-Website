import React from "react";
import styles from "./WhoWeAre.module.css";
import animation from "../../Images/Animation.gif"

export default function WhoWeAre() {
  return (
    <>
      <div>
        <div className={styles.bg}>
          <div className={`${styles.whoContainer} container`}>
            <div className={`${styles.backgroundText}`}>Who we are ?</div>
            <div className="row">
              <div className="col-6">
                <div className={styles.descriptionBox}>
                  <p>
                    At Volcano, we specialize in delivering high-impact
                    advertising through our extensive network of strategically
                    positioned big boards. Our locations are carefully chosen to
                    ensure maximum exposure in the most coveted areas across
                    Egypt. Whether you're aiming to capture attention in the
                    bustling heart of Cairo or along the picturesque North
                    Coast, our premium advertising solutions are crafted to meet
                    your needs.
                  </p>
                </div>
                <div className={styles.mainContent}>
                  <div className={styles.SdescriptionBox}>
                    <p>
                      With our headquarters in Cairo and a strong presence along
                      the stunning North Coast, we offer unparalleled
                      advertising solutions designed to elevate your brand’s
                      visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-3">
              <h1 className="text-center">Welcome to Volcano  <i className={`fa-regular fa-hand ${styles.hand}`}></i></h1> 
              <div className={styles.anim}>
                <img className="w-75" src={animation} alt=""/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
