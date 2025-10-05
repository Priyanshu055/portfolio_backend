import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
