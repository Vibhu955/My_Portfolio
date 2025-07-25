import React from "react";
import "./style.css";
import { motion } from "framer-motion";

const cardDetails = {
  title: ['Portfolio', 'Health Check Up', 'File Sharing System'],
  text: [
    'Explore my work—ranging from ML-powered apps to full-stack web platforms and smart IoT integrations.',
    'A smart ML-based platform that monitors patient vitals in real-time and sends data to the Hospital Management & Maintenance.',
    'A secure, high-performance system with support for concurrent uploads, metadata caching, and scalable cloud/local storage.'
  ],
  tech: [
    'React-Vite, HTML5, CSS, ThreeFiber',
    'React, Express, MongoDB, Node.js, Python, TensorFlow',
    'PostgreSQL, Node.js, Express, React, GoLang, Redis, S3'
  ],
  link: [
    'https://github.com/Vibhu955/My_Portfolio',
    'https://github.com/Vibhu955/HealthCheck_',
    'https://github.com/Vibhu955/file_sharing_system'
  ]
};

function ProjectCards({ index }) {
  return (
    <div className="projcard">
      <div className="card-content">
        <h3>{cardDetails.title[index]}</h3>
        <p>{cardDetails.text[index]}</p>
        <p className="tech"><strong>Tech Stack:</strong> {cardDetails.tech[index]}</p>
        <a href={cardDetails.link[index]} target="_blank" rel="noopener noreferrer" className="github-btn">
        <i className="fa-brands fa-github"></i> View on GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-section" id="projects">
      <motion.div
        className="headings"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      > 
        <h2>My Projects</h2>
      </motion.div>

      <motion.div
        className="timeline-divider"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 50, opacity: 1 }}
        transition={{ duration: 1.5}}
      ></motion.div>

      <div className="card-container">
        {cardDetails.title.map((_, index) => (
          <ProjectCards key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
