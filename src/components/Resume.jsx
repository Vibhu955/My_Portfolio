import "./style.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

function Resume() {
  const [tab, setTab] = useState('education');
  const [renderCount, setRenderCount] = useState(0);
  
  const handleTabClick = (newTab) => {
    setTab(newTab);
    setRenderCount(prev => prev + 1);
  };

  const details = () => {
    switch (tab) {
      case 'education':
        return <Education key={`education-${renderCount}`} />;
      case 'skills':
        return <Skills key={`skills-${renderCount}`} />;
      case 'experience':
        return <Experience key={`experience-${renderCount}`} />;
      default:
        return null;
    }
  };

  return (
    <div
      id="resume"
      style={{
        backgroundColor: "#0f0b0b",
        color: "rgba(245, 241, 241, 0.926)",
        width: "100vw",
        minHeight: "auto",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >

      {/* Title Section */}
      <motion.div
        className="headings"
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h2 >My Resume</h2>
      </motion.div>

      <motion.div
        style={{ marginBottom: "2rem" }}
        className="timeline-divider"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 50, opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      {/* Navigation Section */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3 }}
        className="resume-navigation"
      >
        <div className="resumeDetails-btn tab-btn" onClick={() => handleTabClick('education')}> Education</div>
        <div className="resumeDetails-btn tab-btn" onClick={() => handleTabClick('skills')}>Skills</div>
        <div className="resumeDetails-btn tab-btn" onClick={() => handleTabClick('experience')}>Experience</div>
      </motion.div>

      {/* Details Section */}
      <motion.div
        style={{ marginTop: "2rem" }}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3 }}
      >
        {details()}
      </motion.div>
    </div>
  );
}

export default Resume;
