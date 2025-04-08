import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
// import {
//   BrowserRouter as Router, Switch, Route,
// } from "react-router-dom";
function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      {/* <Router> */}
      <Navbar show={show} setShow={setShow} />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  )
}

export default App
