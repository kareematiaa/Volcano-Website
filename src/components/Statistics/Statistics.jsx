import React, { useState } from "react";
import styles from "./Statistics.module.css";

export default function Statistics() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className={`${styles.bgcolors} pt-1 text-white`}>
        <div className=" container">
          <div className={`${styles.services} position-relative mb-5`}></div>
          <div className=" pt-2">
            <div className="row ">
              <div className=" col-3 ">
                <div
                  className={`text-center ${styles.hoverMe}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={`${styles.myicon} `}>365</span>
                </div>
                <h5
                  className={`text-center pt-5 pb-3 ${styles.vibratingDiv} ${
                    isHovered ? "vibrating" : ""
                  }`}
                >
                  Happy Clients
                </h5>
              </div>
              <div className=" col-3 ">
                <div
                  className={`text-center ${styles.hoverMe}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={`${styles.myicon} `}>112</span>
                </div>
                <h5
                  className={`text-center pt-5 pb-3 ${styles.vibratingDiv} ${
                    isHovered ? "vibrating" : ""
                  }`}
                >
                  Years Experiance
                </h5>
              </div>
              <div className=" col-3 ">
                <div
                  className={`text-center ${styles.hoverMe}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={`${styles.myicon} `}>123</span>
                </div>
                <h5
                  className={`text-center pt-5 pb-3 ${styles.vibratingDiv} ${
                    isHovered ? "vibrating" : ""
                  }`}
                >
                  Projects Done
                </h5>
              </div>
              <div className=" col-3 ">
                <div
                  className={`text-center ${styles.hoverMe}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className={`${styles.myicon} `}>365</span>
                </div>
                <h5
                  className={`text-center pt-5 pb-3 ${styles.vibratingDiv} ${
                    isHovered ? "vibrating" : ""
                  }`}
                >
                  Happy Clients
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
