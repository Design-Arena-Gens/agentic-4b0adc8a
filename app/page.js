'use client';

import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="container">
      <div
        className="glow-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="grid-background" />

      <div className={`content ${isVisible ? 'fade-in' : ''}`}>
        <div className="profile-section">
          <div className="avatar-container">
            <div className="avatar-ring" />
            <div className="avatar-ring-2" />
            <div className="avatar">
              <div className="avatar-inner">AI</div>
            </div>
          </div>

          <h1 className="glitch-text" data-text="YOUR NAME">
            YOUR NAME
          </h1>

          <div className="subtitle">
            <span className="typing-text">Developer • Designer • Creator</span>
          </div>
        </div>

        <div className="about-section">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn red"></span>
                <span className="btn yellow"></span>
                <span className="btn green"></span>
              </div>
              <span className="terminal-title">about.exe</span>
            </div>
            <div className="terminal-content">
              <p className="terminal-line">
                <span className="prompt">$</span> cat about_me.txt
              </p>
              <p className="terminal-output">
                Initializing profile...
              </p>
              <p className="terminal-output delay-1">
                <span className="cyan">›</span> Passionate about creating innovative solutions
              </p>
              <p className="terminal-output delay-2">
                <span className="cyan">›</span> Building the future, one line of code at a time
              </p>
              <p className="terminal-output delay-3">
                <span className="cyan">›</span> Exploring the intersection of design and technology
              </p>
              <p className="terminal-output delay-4">
                <span className="green">✓</span> Profile loaded successfully
              </p>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>Development</h3>
            <p>Building scalable applications with modern tech stacks</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🎨</div>
            <h3>Design</h3>
            <p>Creating intuitive and beautiful user experiences</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Pushing boundaries and exploring new possibilities</p>
          </div>
        </div>

        <div className="contact-section">
          <div className="hologram-card">
            <h2>Connect</h2>
            <div className="contact-links">
              <a href="#" className="neon-link">
                <span className="icon">📧</span> Email
              </a>
              <a href="#" className="neon-link">
                <span className="icon">💼</span> LinkedIn
              </a>
              <a href="#" className="neon-link">
                <span className="icon">🐙</span> GitHub
              </a>
              <a href="#" className="neon-link">
                <span className="icon">🐦</span> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </main>
  );
}
