import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./style.css"

function Navbar(props) {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark" id='naving' >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#" >Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-underline mx-5 end" >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" onClick={() => {
                  props.setShow(true)
                  scrollToSection("home")
                }}>Home</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  scrollToSection("about")
                }}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  scrollToSection("resume")
                }}>Resume</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  scrollToSection("project")
                }}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  scrollToSection("contact")
                }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {props.show ? 
      <button className="navBtn btn btn-primary" onClick={() => {
          props.setShow(false);
          scrollToSection("naving");
        }}> <span style={{ fontSize: "25px" }}>&#x2191;</span></button> 
        : ""}
    </>
  )
}

export default Navbar