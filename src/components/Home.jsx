import React from 'react'
import Backgroundd from '../assets/Backgroundd'

function Home() {
  return (
    <div id='home'> 
      <div className="headingHome">
        {Array.from("...My Portfolio!").map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
        ))}
      </div>

     {/* <img src="https://wp.dreamitsolution.net/bioza/wp-content/uploads/2023/11/person.gif" alt="Can't display" style={{width:"65vw", opacity:"0.5"}}/> */}
      <Backgroundd />
    </div>
  )
}

export default Home