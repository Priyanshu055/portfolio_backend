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
        <div className="profile-container">
          <img src="/profile.jpg" alt="My Picture" className="profile-pic" />
          {/* <div className="hover-quote">Curious mind. Clean code </div> */}
        </div>
        <div className="key-facts">
          <h3>Key Facts</h3>
          <ul>
            <li>🎓 Third-year B.Tech Student (GLBITM)</li>
            <li>💻 MERN Stack (proficient)</li>
            <li>🧩 Problem Solver(1450+ rating leetcode)</li>
            <li>🚀 Project-Based Learner</li>
            <li>🔧 Git & Debugging(beginner) </li>
            <li>🤖 Currently upskilling in ML algorithm</li>
          </ul>
        </div>
        <div className="about-text-card">
          <p>Hello folks its me Priyanshu Mishra a 3rd-year B.Tech student(GLBITM) with a deep passion for software development and problem-solving. My core technical expertise lies within the MERN Stack, where I am proficient in designing robust backend APIs with Node.js/Express.js, managing data with MongoDB, and crafting dynamic, user-friendly interfaces using React.</p>
          <p>I believe the best way to learn is by doing. I am consistently building and deploying real-world applications—not just academic exercises—to solidify my understanding of the development lifecycle, from initial design to deployment and optimization.</p>
        </div>
        <div className="timeline">
          <h3>My Learning Journey</h3>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Started Coding</h4>
              <p>Started upskilling core concept of basic programming and development during the 2nd semester of my college.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Built First Project</h4>
              <p>In my initial days, I started building simple responsive web pages like e-commerce and blog layouts to strengthen my fundamentals. These early projects helped me understand frontend design, layout structures, and responsive behavior, laying the foundation for my journey into full-stack development .</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Internship Experience</h4>
              <p>I am working upon myself and trying to grab an opportunity.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>Upcoming Goals</h4>
              <p> Aiming to work on advanced and real-time projects to strengthen my development experience and apply my learning to real-world scenarios.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
