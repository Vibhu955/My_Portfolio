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
  const [light, setLight] = useState(true);

  return (
    < div className='relative min-h-screen'>
      {/* <Router> */}
      <Navbar light={light} setLight={setLight} />
      <Home light={light} />
      <About light={light} />
      <Resume light={light} />
      <Projects light={light} />
      <Contact light={light} />
    </div>
  )
}

export default App
