import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Resume() {
  return (
    <div
      id="resume"
      style={{
        backgroundColor: "#0f0b0b",
        color: "rgba(245, 241, 241, 0.926)",
        width: "100vw",
        minHeight: "100vh",
        padding: "3rem 0",
        textAlign: "center",
      }}
    >
      {/* Title Section */}
      <motion.div
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>My Resume</h2>

        {/* <div className="timeline-divider"></div> */}
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
        <div className="resumeDetails">Education</div>
        <div className="resumeDetails">Skills</div>
        <div className="resumeDetails">Experience</div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3 }}
      >
        <VerticalTimeline layout={"2-columns"}>
          {/* B-Tech */}
          <VerticalTimelineElement
            style={{  borderBottom: "3px solid #0d6efd !important" }}
            className="vertical-timeline-element--btech"
            contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px"}}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
            date="2022 - 2026"
            iconStyle={{ background: "#0d6efd", color: "#fff" , alignContent:"center"}}
            icon={<i className="fas fa-graduation-cap"></i>}
          >
            <h3>B-Tech</h3>
            <h4>Vellore Institute of Technology</h4>
            <p>Computer Science Engineering (Core)</p>
            <p><strong>CGPA:</strong> 9.02</p>
          </VerticalTimelineElement>

          {/* 12th (HSC) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--hsc"
            contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
            date="2021 - 2022"
            iconStyle={{ background: "#ff5733", color: "#fff", alignContent:"center" }}
            icon={<i className="fas fa-book"></i>}
          >
            <h3>12th (HSC)</h3>
            <h4>Laxmanrao Apte Junior College</h4>
            <p>Computer Science</p>
            <p><strong>Percentage:</strong> 81%</p>
          </VerticalTimelineElement>

          {/* 10th (ICSE) */}
          <VerticalTimelineElement
            className="vertical-timeline-element--icse"
            contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", color: "#fff", borderRadius: "10px" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
            date="2019 - 2020"
            iconStyle={{ background: "#28a745", color: "#fff", alignContent:"center" }}
            icon={<i className="fas fa-school"></i>}
          >
            <h3>10th (ICSE)</h3>
            <h4>Hutchings High School & Junior College</h4>
            <p> ,..,</p>

            <p><strong>Percentage:</strong> 97.33%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}

export default Resume;
