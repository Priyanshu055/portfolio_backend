import React from 'react';
import './Resume.css';

const Resume = () => {
  const downloadResume = () => {
    window.open('http://localhost:5000/api/resume', '_blank');
  };

  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <button onClick={downloadResume}>Download Resume</button>
    </section>
  );
};

export default Resume;
