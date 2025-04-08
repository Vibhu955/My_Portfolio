// import React, { useEffect, useRef } from "react";
// import "./style.css"; // Assuming you want to apply custom styles here
// import { motion } from "framer-motion";

// const cardDetails = {
//   title: ['Portfolio', 'Health Check Up', 'File Sharing System'],
//   text: ['Explore my work—ranging from ML-powered apps to full-stack web platforms and smart IoT integrations.',
//     'A smart ML-based platform that monitors patient vitals in real-time and sends data to the Hospital Management & Maintainance.',
//     'A secure, high-performance system with support for concurrent uploads, metadata caching, and scalable cloud/local storage.'],
//   tech: ['React-Vite, HTML5, CSS, ThreeFiber', 'React, Express, MongoDB, Node.js, Python, TensorFlow ', 'PostgreSQL, Node.js, Express, React, GOlang, Redis, S3'],
//   link: ['https://github.com/Vibhu955/My_Portfolio', 'https://github.com/Vibhu955/HealthCheck_', 'https://github.com/Vibhu955/file_sharing_system']
// }

// function ProjectCards({ index }) {

//   return (

//     <div key={index} className="card" style={{ width: "18rem" }}>
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{cardDetails.title[index]}</h5>
//         <p className="card-text">{cardDetails.text[index]}</p>
//         <p className="card-text"><small className="text-muted"><strong>Tech Stack: {cardDetails.tech[index]}</strong></small></p>
//         <a href={cardDetails.link[index]} className="btn btn-primary">View More <i class="fa-brands fa-github"></i></a>
//       </div>
//     </div>
//   );
// };

// function Projects() {
//   return (
//     <div style={{
//       backgroundColor: "#0f0b0b",
//       color: "rgba(245, 241, 241, 0.926)",
//       width: "100vw",
//       minHeight: "100vh",
//       padding: "3rem 0",
//       textAlign: "center"
//     }}>
//       {/* Title Section */}
//       <motion.div
//         style={{ marginTop: "7rem" }}
//         initial={{ y: 250, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 2 }}
//       >
//         <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>My Projects</h2>
//       </motion.div>
//       {/* Divider Section */}
//       <motion.div
//         style={{ marginBottom: "2rem" }}
//         className="timeline-divider"
//         initial={{ width: 0, opacity: 0 }}
//         animate={{ width: 50, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       ></motion.div>

//       {/* Project Cards Section */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
//         {cardDetails.title.map((_, index) => (
//           <ProjectCards index={index} />
//         ))}
//       </div>

//     </div>
//   )
// }

// export default Projects;

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
    <div className="custom-card">
      <div className="card-content">
        <h3>{cardDetails.title[index]}</h3>
        <p>{cardDetails.text[index]}</p>
        <p className="tech"><strong>Tech Stack:</strong> {cardDetails.tech[index]}</p>
        <a href={cardDetails.link[index]} target="_blank" rel="noopener noreferrer" className="github-btn">
        <i class="fa-brands fa-github"></i> View on GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-section">
      <motion.div
        className="projects-heading"
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h2>My Projects</h2>
      </motion.div>

      <motion.div
        className="timeline-divider"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 50, opacity: 1 }}
        transition={{ duration: 1.5 }}
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
