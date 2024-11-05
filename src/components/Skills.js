// src/components/Skills.js
import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>HTML & CSS</li>
        <li>REST APIs</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
};

export default Skills;
