import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const path = 'public/Vibhuti_Joshi_Resume_New.pdf';

  const onDownload = () => {
    const file = document.createElement('a');
    file.href = path;
    file.setAttribute('download', 'Vibhuti_Joshi_Resume.pdf');
    document.body.appendChild(file);
    file.click();
    document.body.removeChild(file);
  };

  return (
    <div
      id="about"
      className="about-container"
    >
      {/* Biography Section */}
      <motion.div
        className="bio-content"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h5 className="bio-title">BIOGRAPHY</h5>
        <div className="bio-divider"></div>
      </motion.div>

      <div className="bio-wrapper">
        {/* Profile Image */}
        <motion.div
          className="bio-image"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="gudhibw.jpg" alt="Vibhuti Joshi" />
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="bio-text"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h5 className="bio-subtitle">About Me</h5>
          <p ><strong>True success </strong>is driven by the combination of relentless effort and strategic thinking.</p>
          <h3 className="bio-name">Vibhuti Joshi</h3>
          <p className="bio-description">
            I'm motivated and detail-oriented professional with a solid technical background and a desire to create efficient, user-friendly solutions. 
            I am passionate about innovation, utilizing my technical expertise and creativity to solve real-world problems.
            I thrive in collaborative settings, enjoy learning new tools and frameworks, and consistently deliver high-quality outcomes under tight timelines. 
            <strong> Eager to contribute to innovative projects with a significant impact.</strong>
          </p>
        </motion.div>
      </div>

      {/* Download Button */}
      <motion.div
        className="bio-button-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href={`${import.meta.env.BASE_URL}Vibhuti_Joshi_Resume_New.pdf`}
          download="Vibhuti_Joshi_Resume.pdf"
        >
          <button className="tab-btn">
            <i className="fas fa-download"></i> Download CV
          </button>
        </a>
      </motion.div>
      {/* <motion.div
        className="bio-button-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <button className="tab-btn" onClick={onDownload}>
          <i className="fas fa-download"></i> Download CV
        </button>
      </motion.div> */}
    </div>
  );
}

export default About;
