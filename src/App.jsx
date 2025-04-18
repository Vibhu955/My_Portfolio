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
  const [cShow,cSetShow]= useState(true)

  return (
    < div className='relative'>
      {/* <Router> */}
      <Navbar show={show} setShow={setShow} cShow={cShow} cSetShow={cSetShow} />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
