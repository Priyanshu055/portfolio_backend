import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I’m Priyanshu — Developer | Problem Solver ";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="typing-intro">{typedText}<span className="cursor">|</span></div>
      <div className="about-content">
        <div className="left-side">
          <div className="profile-container">
            <img src="C:\Users\PRIYANSHU\OneDrive\Desktop\my-portfolio\fronted\public\portfolio_img.jpg" alt="My Picture" className="profile-pic" />
            <div className="hover-quote">Curious mind. Clean code </div>
          </div>
          <div className="key-facts">
            <h3>Key Facts</h3>
            <ul>
              <li>🎓 Third-year B.Tech Student</li>
              <li>💻 MERN Stack Expert</li>
              <li>🚀 Project-Based Learner</li>
              <li>🔧 Git & Debugging </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="about-text-card">
            <p>I am a driven third-year B.Tech student with a deep passion for software development and problem-solving. My core technical expertise lies within the MERN Stack, where I am proficient in designing robust backend APIs with Node.js/Express.js, managing data with MongoDB, and crafting dynamic, user-friendly interfaces using React.</p>
            <p>I believe the best way to learn is by doing. I am consistently building and deploying real-world applications—not just academic exercises—to solidify my understanding of the development lifecycle, from initial design to deployment and optimization. This project-based approach has sharpened my skills in version control (Git), debugging, and writing clean, maintainable code.</p>
          </div>
          <div className="timeline">
            <h3>My Learning Journey</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Started Coding</h4>
                <p>Dove into programming basics and web development.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Built First Project</h4>
                <p>Created my initial full-stack application using MERN.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Internship Experience</h4>
                <p>I am working upon myself and trying to get an opportunity.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Upcoming Goals</h4>
                <p>Aiming for advanced projects and continuous learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
