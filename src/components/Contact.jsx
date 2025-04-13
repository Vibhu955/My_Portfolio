// import React from 'react';
// import { motion } from 'framer-motion';

// function Contact() {
//   return (
//     <div className="contact-section" id="contact">
//       {/* Title */}
//       <motion.div
//         className="contact-heading"
//         initial={{ y: -100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2>Contact Me</h2>
//       </motion.div>
//       <motion.div
//         style={{ marginBottom: "2rem" }}
//         className="timeline-divider"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: 50, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       ></motion.div>

//       {/* Contact Info  */}
//       <div className="contact-info">
//         <motion.div
//           className="contact-details"
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <p><strong>Name:</strong> Vibhuti Joshi</p>
//           <div className="mail">
//             <p><strong>Email:</strong></p>
//             <a href="mailto:vibhu.us24@gmail.com" target="_blank" rel="noopener noreferrer">
//               vibhu.us24@gmail.com
//             </a>
//           </div>
//           <div className="mail">
//             <p><strong>Official Email:</strong></p>
//             <a href="mailto:vibhuti.2022@vitstudent.ac.in" target="_blank" rel="noopener noreferrer">
//               vibhuti.2022@vitstudent.ac.in
//             </a>
//           </div>
//         </motion.div>

//         <motion.div
//           className="contact-icons"
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <a href="https://www.instagram.com/vibhu955/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram fa-xl" title='Instagram'></i>
//           </a>
//           <a href="https://wa.me/918800000000" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-whatsapp fa-xl" title='WhatsApp'></i>
//           </a>
//           <a href="https://www.linkedin.com/in/vibhu955/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-linkedin fa-xl" title='LinkedIn'></i>
//           </a>
//           <a href="https://github.com/vibhu955" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-github fa-xl" title='Github'></i>
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useEffect, useRef, useState } from 'react';
import { motion, px } from 'framer-motion';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min'; // You can change to NET, FOG, etc.

function Contact() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          Controls: false,
          Height: 50.0,
          Width: 50.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000, // customize wave color
          shininess: 50,
          waveHeight: 40,
          waveSpeed: 0.5,
          zoom: 1.2
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="contact-section" id="contact">
      <div className="contact-section" id="contact">
        {/* Title */}
        <motion.div
          className="contact-heading"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Contact Me</h2>
        </motion.div>
        <motion.div
          style={{ marginBottom: "2rem" }}
          className="timeline-divider"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 50, opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Contact Info  */}
        <div className="contact-info">
          <motion.div
            className="contact-details"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <div><strong>Name:</strong> Vibhuti Joshi</div>
            <div className="mail">
              <p><strong>Email:</strong></p>
              <a href="mailto:vibhu.us24@gmail.com" target="_blank" rel="noopener noreferrer">
                vibhu.us24@gmail.com</a>
            </div>
            <div className="mail">
              <p><strong>Official Email:</strong></p>
              <a href="mailto:vibhuti.2022@vitstudent.ac.in" target="_blank" rel="noopener noreferrer">
                vibhuti.2022@vitstudent.ac.in</a>
            </div>
          </motion.div>

          <motion.div
            className="contact-icons"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a href="https://www.instagram.com/vibhu955/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-xl" title='Instagram'></i>
            </a>
            <a href="https://wa.me/918800000000" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp fa-xl" title='WhatsApp'></i>
            </a>
            <a href="https://www.linkedin.com/in/vibhu955/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-xl" title='LinkedIn'></i>
            </a>
            <a href="https://github.com/vibhu955" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-xl" title='Github'></i>
            </a>
          </motion.div>
        </div>
      </div>


    </div>
  );
}

export default Contact;
