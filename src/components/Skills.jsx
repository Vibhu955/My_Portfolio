import React, { useEffect, useState } from 'react';
// import Bubbles from '../assets/Bubbles.jsx';

const skillDetails = {
  sname: ["JavaScript", "Python", "C++", "CSS", "Ai / ML", "OracleSQL", "HTML5", "GOlang"],
  colors: [
    ['#66ff66', '#33cc33'], // JavaScript
    ['#66ffff', '#3399cc'], // Python
    ['#cc66ff', '#9933cc'], // C++
    ['#ff6666', '#cc3333'], // CSS
    ['#ffff66', '#ffcc33'], // Java
    ['#66ffe0', '#33cccc'], // OracleSQL
    ['#ff99cc', '#cc6699'], // HTML5
    ['#66ffb3', '#33cc99'], // GOlang
  ],
  Scale: [65, 70, 85, 80, 60, 70, 75, 55],
};

function SubSkill({ skill, scale, cStart, cEnd }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= scale) {
          clearInterval(interval);
          return scale;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [scale]);

  return (
    <div style={{ width: '100%' }}>
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{skill}</div>
      <div style={{
        width: '100%',
        height: '1.3vh',
        borderRadius: '2rem',//5px
        backgroundColor: '#222',
        position: 'relative',
        boxShadow: '0 0 8px #111',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: `linear-gradient(to right, ${cStart}, ${cEnd})`,
          borderRadius: '2rem',//5px
          transition: 'width 0.1s ease-in-ease-out',
          position: 'relative',
        }}>
          <div style={{
            width: '1.5vh',
            height: '1.8vh',
            borderRadius: '50%',
            backgroundColor: cStart,
            position: 'absolute',
            top: '-0.15rem',
            right: 0,
            boxShadow: `0 0 1.5rem ${cStart}, 0 0 1rem ${cEnd}`,
          }} />
        </div>
      </div>
      <div style={{
        marginTop: '0.5rem',
        color: cEnd,
        fontWeight: 'bold',
        fontFamily: 'monospace',
      }}>{progress}%</div>
    </div>
  );
}

function Skills() {
  return (
    < >
      {/* position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', */}

      {/* <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex:"-10"}}><Bubbles/> </div> */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '4rem',      // wider space between columns
          rowGap: '2rem',         // space between rows 
          padding: '2rem',
          maxWidth: '50rem',
          margin: '0 auto',
        }}>
        {skillDetails.sname.map((skill, index) => (
          <SubSkill
            key={index}
            skill={skill}
            scale={skillDetails.Scale[index]}
            cStart={skillDetails.colors[index][0]}
            cEnd={skillDetails.colors[index][1]}
          />
        ))}
      </div>
    </>
  );
}

export default Skills;
