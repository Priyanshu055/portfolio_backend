import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/portfolio_img.jpg" alt="My Picture" className="profile-pic" />
        <div className="about-text">
          <p>I am a driven third-year B.Tech student with a deep passion for software development and problem-solving. My core technical expertise lies within the MERN Stack, where I am proficient in designing robust backend APIs with Node.js/Express.js, managing data with MongoDB, and crafting dynamic, user-friendly interfaces using React.</p>

          <p>I believe the best way to learn is by doing. I am consistently building and deploying real-world applications—not just academic exercises—to solidify my understanding of the development lifecycle, from initial design to deployment and optimization. This project-based approach has sharpened my skills in version control (Git), debugging, and writing clean, maintainable code.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
