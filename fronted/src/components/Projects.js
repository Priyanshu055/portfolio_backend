import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Project 2', description: 'Description of project 2', link: '#' },
    { title: 'My Portfolio', description: 'A personal portfolio website showcasing my skills and projects, built with React.', link: 'https://github.com/Priyanshu055' },
    { title: 'InternMatch - Internship Recommendation System', description: ['Developed an AI-powered internship recommendation system to match students with suitable opportunities', 'Implemented machine learning algorithms for skill-based matching and preference analysis', 'Built responsive web interface using React.js and Node.js for seamless user experience', 'Integrated user authentication and profile management features', 'Deployed on cloud platform with real-time data processing capabilities'], link: 'https://github.com/Priyanshu055/InternMatch' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
