import React from 'react';
import './style.css';
import Tilt from '../assets/Tilt';

function ExperienceCard({ company, role, duration, description }) {
  return (
    <Tilt>
      <div className="expcard">
        <h3 className="exphead">{company}</h3>
        <h5 className="expsubhead">Role: {role}</h5>
        <h5 className="expsubhead">Duration: {duration}</h5>
        <p className="exptext">{description}</p>
      </div>
    </Tilt>
  );
}

export default function Experience() {
  return (
    <div className="exp">
      <ExperienceCard
        company="Ikione Pvt Ltd"
        role="Machine Learning Intern"
        duration="3 months"
        description="Built ML models in the finance sector of the company."
      />
      <ExperienceCard
        company="Vicuna Kouture Pvt Ltd"
        role="Backend Developer Intern"
        duration="2 months"
        description="Enhanced MERN stack skills."
      />
    </div>
  );
}