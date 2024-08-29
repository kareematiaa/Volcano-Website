import React from "react";
import styles from "./OurClients.module.css";
import etsalat from "../../Images/etsalat.png";
import amer from "../../Images/amer.png";
import ahly from "../../Images/ahly.png";
import adib from "../../Images/adib.png";
import azhar from "../../Images/azhar.png";
import ora from "../../Images/ora.png";
import view from "../../Images/view.png";
import gates from "../../Images/gates.png";
import ezaby from "../../Images/ezaby.png";
import jdar from "../../Images/jdar.png";
import lmd from "../../Images/lmd.png";
import mashrek from "../../Images/mashrek.png";
import naia from "../../Images/naia.png";
import palmAlex from "../../Images/palmAlex.png";
import palmDev from "../../Images/palmDev.png";
import saudi from "../../Images/saudi.png";
import seaView from "../../Images/SeaView.png";
import smouha from "../../Images/smouha.png";

export default function OurClients() {
  return (
    <>
      <div className={`${styles.clients} `}>
        <div className={`text-center text-white container-fluid`}>
          <div>
            <h1 className={styles.amzaing}>Our Clients</h1>
            <h6 className={`${styles.years}`}>STAND OUT FROM THE CROWD</h6>
          </div>
          <div className="row pt-5">
            <div className="col-md-2 pb-2">
              <img className="w-50" src={etsalat} alt="" />
            </div>
            <div className="col-md-2">
              <img className="w-50" src={amer} alt="" />
            </div>
            <div className={`col-md-2`}>
              <img className="w-50" src={ahly} alt="" />
            </div>
            <div className="col-md-2">
              <img className="w-50" src={azhar} alt="" />
            </div>
            <div className={`col-md-2 `}>
              <img className="w-50" src={ora} alt="" />
            </div>
            <div className={`col-md-2 pb-3`}>
              <img className="w-50" src={naia} alt="" />
            </div>
            <div className={`col-md-2 ${styles.contentCenter}`}>
              <img className="w-75" src={adib} alt="" />
            </div>
            <div className={`col-md-2 ${styles.contentCenter}`}>
              <img className="w-50" src={ezaby} alt="" />
            </div>
            <div className={`col-md-2 ${styles.contentCenter}`}>
              <img className="w-75" src={gates} alt="" />
            </div>
            <div className={`col-md-2 ${styles.contentCenter}`}>
              <img className="w-50" src={lmd} alt="" />
            </div>
            <div className={`col-md-2 pt-2 ${styles.contentCenter}`}>
              <img className="w-50" src={saudi} alt="" />
            </div>
            <div className={`col-md-2 pt-3 ${styles.contentCenter}`}>
              <img className="w-50" src={mashrek} alt="" />
            </div>
            <div className={`col-md-2 pt-2`}>
              <img className="w-50" src={view} alt="" />
            </div>
            <div className={`col-md-2 pt-3`}>
              <img className="w-50" src={palmAlex} alt="" />
            </div>
            <div className={`col-md-2 pt-4`}>
              <img className="w-50" src={smouha} alt="" />
            </div>
            <div className={`col-md-2 pt-4`}>
              <img className="w-50" src={jdar} alt="" />
            </div>
            <div className={`col-md-2 pt-4  `}>
              <img className="w-50" src={palmDev} alt="" />
            </div>
            <div className={`col-md-2 pt-4 mt-2`}>
              <img className="w-50" src={seaView} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
