import React from 'react'
import Backgroundd from '../assets/Backgroundd'

function Home(props) {
  return (
    <div id='home'>
      <div className={`headingHome ${props.light ? "" : "headlight"}`}>
        {Array.from("...Welcome!").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      {/* {console.log(props.light)} */}
      <Backgroundd light={props.light} />
    </div>
  )
}

export default Home