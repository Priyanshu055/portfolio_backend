import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <a href="https://portfolio-backend-gn1xhpmjs-priyanshu-05s-projects-5027ab72.vercel.app/api/resume" download="resume.pdf">
        <button>Download Resume</button>
      </a>
    </section>
  );
};

export default Resume;
