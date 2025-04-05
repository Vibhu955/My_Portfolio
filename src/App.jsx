import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
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
      <Blog />
      <Contact />

    </>
  )
}

export default App
