import React from 'react'
import logo from '../../Images/logo.png'
import './navbar.css'

export default function Navbar() {
  return (
  <>
 
 
  {/* <nav className="navbar bg-transparent navbar-expand-lg navbarr">
    <div className="container-fluid bg-transparent">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
     
      </div>
    </div>
  </nav> */}

<nav class="navbar navbar-expand-lg bg-transparent ">
      <div class="container">
        <img  className=" navbar-brand navv" src={logo} alt="" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pt-3">
        
            <li class="nav-item pe-3">
              <a class="nav-link text-light" href="#">About Us</a>
            </li>
            <li class="nav-item pe-3">
              <a class="nav-link text-light" href="#">Services</a>
            </li>
            <li class="nav-item pe-3">
              <a class="nav-link text-light" href="#">Our Work</a>
            </li>
            <li class="nav-item pe-3">
              <a class="nav-link text-light" href="#">Contact Us</a>
            </li>


          </ul>

        </div>
      </div>
    </nav>
</>

 
  )
}
