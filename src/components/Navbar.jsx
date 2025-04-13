import React from 'react'
import { useEffect } from 'react'
import "./style.css"

function Navbar(props) {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 250 ) {
        props.cSetShow(true);
        props.setShow(false);
      }
      else if (window.scrollY > 300) {
        props.setShow(true);
        props.cSetShow(false);
      } else {
        props.setShow(false);
        props.cSetShow(false);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [props]);

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
                  props.cSetShow(false)
                  scrollToSection("home")
                }}>Home</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  props.cSetShow(false)

                  scrollToSection("about")
                }}>About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  props.cSetShow(false)

                  scrollToSection("resume")
                }}>Resume</a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  props.cSetShow(false)

                  scrollToSection("project")
                }}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => {
                  props.setShow(true)
                  props.cSetShow(false)
                  scrollToSection("contact")
                }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {(props.cShow) ?
        <button className="navBtn" onClick={() => {
          window.scrollTo({
            top: 250,
            behavior: 'smooth'
          })
          props.cSetShow(false);
        }}>
          < span>&#x2193;</span></button >
        : ""}

      {props.show ?
        <button className="navBtn" onClick={() => {
          props.setShow(false);
          scrollToSection("naving");
        }}> <span>&#x2191;</span></button>
        : ""
      }

    </>
  )
}

export default Navbar;