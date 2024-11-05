// src/components/About.js
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
      <h2>About Me</h2>
      <p>
        Hello! I am a MERN stack developer with a passion for building dynamic and responsive web applications.
      </p>
      <p>
        I specialize in using the following technologies:
      </p>
      <ul>
        <li><strong>M</strong>ongoDB: Proficient in designing and managing databases.</li>
        <li><strong>E</strong>xpress.js: Experienced in building robust server-side applications.</li>
        <li><strong>R</strong>eact.js: Skilled in creating interactive user interfaces and single-page applications.</li>
        <li><strong>N</strong>ode.js: Strong understanding of server-side JavaScript for building scalable applications.</li>
      </ul>
      <p>
        I enjoy collaborating with teams and leveraging the latest technologies to create efficient and effective solutions.
      </p>
      <p>
        When I’m not coding, I love exploring new frameworks, contributing to open-source projects, and learning about emerging technologies.
      </p>
    </section>
  );
};

export default About;
