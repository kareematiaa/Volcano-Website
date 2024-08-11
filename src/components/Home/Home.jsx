import React from "react";
import "./Home.css";
import home from "../../Images/home.png";
import logo from "../../Images/logo.png";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <>
      <div className="home">
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container">
            <img className="navbar-brand navv" src={logo} alt="Logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-lg-0 pt-3">
                <li className="nav-item pe-3">
                  <ScrollLink
                    to="whoWeAre"
                    smooth={true}
                    duration={650}
                    className="nav-link text-light cursor"
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li className="nav-item pe-3 cursor">
                  <ScrollLink
                    to="ourServices"
                    smooth={true}
                    duration={650}
                    className="nav-link text-light"
                  >
                    Services
                  </ScrollLink>
                </li>
                <li className="nav-item pe-3 cursor">
                  <ScrollLink
                    to="ourClients"
                    smooth={true}
                    duration={650}
                    className="nav-link text-light"
                  >
                    Our Work
                  </ScrollLink>
                </li>
                <li className="nav-item pe-3 cursor">
                  <ScrollLink
                    to="contactUs"
                    smooth={true}
                    duration={650}
                    className="nav-link text-light"
                  >
                    Contact Us
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="homeCenter">
          <img className="w-50" src={home} alt="" />
        </div>
        <h1 className="text-center">STAND OUT FROM THE CROWD</h1>

        <div className="container pt-5 letters">
          <h2>VOLCANO</h2>
          <h2>OUTDOOR</h2>
          <h2>ADVERTISING</h2>
        </div>
      </div>
    </>
  );
}
