// src/components/Projects.js
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1: Task Manager</h3>
          <p>A full-stack task management application using the MERN stack.</p>
          <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li>
          <h3>Project 2: E-Commerce Store</h3>
          <p>An e-commerce website built with React and Node.js, featuring user authentication and product management.</p>
          <a href="https://github.com/yourusername/e-commerce" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li>
          <h3>Project 3: Personal Blog</h3>
          <p>A blogging platform that allows users to create and manage posts with MongoDB as the database.</p>
          <a href="https://github.com/yourusername/personal-blog" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
