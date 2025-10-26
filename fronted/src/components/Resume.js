import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <a href="http://localhost:5000/api/resume" download="resume.pdf">
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default Resume;
