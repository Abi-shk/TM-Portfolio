// src/components/Contact.js
import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
    </section>
  );
};

export default Contact;
