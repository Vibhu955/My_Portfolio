import React, { useRef, useEffect } from 'react'

function Tilt({children}) {
    const tiltRef = useRef(null);
  
    // Function to handle tilt effect
    const handleTilt = (e) => {
      const { current } = tiltRef;
      const rect = current.getBoundingClientRect();
    
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
    
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
    
      const tiltX = ((y - centerY) / centerY) * 8; // max 8 deg
      const tiltY = ((x - centerX) / centerX) * -8;
    
      current.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    // Function to reset the tilt effect when mouse leaves
    const resetTilt = () => {
      const { current } = tiltRef;
      current.style.transform = "perspective(300px) rotateX(0deg) rotateY(0deg)";
    };
  
    // Attach the mouse event listeners on component mount
    useEffect(() => {
      const { current } = tiltRef;
      current.addEventListener("mousemove", handleTilt);
      current.addEventListener("mouseleave", resetTilt);
  
      // Cleanup event listeners on unmount
      return () => {
        current.removeEventListener("mousemove", handleTilt);
        current.removeEventListener("mouseleave", resetTilt);
      };
    }, []);

  return (
    <div className="tilt-parent">
      <div ref={tiltRef} >
        {children}
      </div>
    </div>
  )
}

export default Tilt;