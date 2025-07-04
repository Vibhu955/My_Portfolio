import logo from '/logo.png';
import { useState } from 'react';
import './style.css';

function Navbar(props) {
  const [showUpArrow, setShowUpArrow] = useState(false);

  const sections = ['home', 'about', 'resume', 'projects', 'contact'];

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setShowUpArrow(id === 'contact'); // Show up arrow when scrolling to contact section
    }
  };

  // Get index of the most visible section
  const getCurrentSectionIndex = () => {
    let maxVisibleHeight = 0;
    let currentIndex = 0;

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentIndex = i;
        }
      }
    }

    return currentIndex;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" id="naving">
        <div className="container-fluid">
          <div className="navbar-brand" href="#" style={{ marginLeft: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src={logo} alt="logo" style={{ width: "2rem", height: "2rem" }} />
            Portfolio
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            
            <ul className="navbar-nav nav-underline mx-5 end" style={{
              backgroundColor: "black",
              padding: "0.5rem",
              borderRadius: "5%",
              fontFamily: 'Roboto, sans-serif',

            }}>
              {sections.map((sec) => (
                <li className="nav-item mx-1" key={sec}>
                  <a className="nav-link" onClick={() => scrollToSection(sec)}>
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* <button
        className="navBtn lightBtn" onClick={() => {
          props.setLight(!props.light)
          // console.log(props.light);

        } 
          }
      ><i className="fa-solid fa-lightbulb"></i></button>
 */}

      <button
        className="navBtn arrowBtn"
        onClick={() => {
          const currentIndex = getCurrentSectionIndex();
          // console.xlog("Current section index:", currentIndex);
          if (showUpArrow) {
            scrollToSection("naving"); // Scroll to top
            setShowUpArrow(false);
          } else {
            const nextIndex = Math.min(currentIndex + 1, sections.length - 1);
            scrollToSection(sections[nextIndex]);
          }
        }}
      >
        {showUpArrow ? <span>&#x2191;</span> : <span>&#x2193;</span>}
      </button>
    </>
  );
}

export default Navbar;
