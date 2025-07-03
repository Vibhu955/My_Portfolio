import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
          color: 0x000,
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
          className="headings"
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
            <a href="https://www.instagram.com/vibhuti_love7/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-xl" title='Instagram'></i>
            </a>
            <a href="https://wa.me/9552704155" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp fa-xl" title='WhatsApp'></i>
            </a>
            <a href="https://www.linkedin.com/in/vibhuti-joshi-805a1a274/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-xl" title='LinkedIn'></i>
            </a>
            <a href="https://github.com/Vibhu955/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-xl" title='Github'></i>
            </a>
            <a href="https://leetcode.com/u/VIBHUTI007/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code fa-lg" title='LeetCode'></i>
            </a>
          </motion.div>
        </div>
      </div>


    </div>
  );
}

export default Contact;
