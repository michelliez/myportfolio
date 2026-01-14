import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academic', 'creative', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <Hero />
      <About />
      <Academic />
      <Creative />
      <Skills />
      <Contact />
    </div>
  );
}

function Navigation({ activeSection, scrollToSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academic', label: 'Academic' },
    { id: 'creative', label: 'Creative' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="nav">
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <h1 className="hero-title">Your Name</h1>
      <p className="hero-subtitle">Your tagline or professional title</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-text">
        Write a brief introduction about yourself here. Share your background, 
        interests, and what drives you professionally and personally.
      </p>
      <p className="section-text">
        Add more paragraphs to tell your story and give visitors a sense of who you are.
      </p>
    </section>
  );
}

function Academic() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'Brief description of your academic project, research, or publication.'
    },
    {
      title: 'Project Title 2',
      description: 'Brief description of your academic project, research, or publication.'
    },
    {
      title: 'Project Title 3',
      description: 'Brief description of your academic project, research, or publication.'
    }
  ];

  return (
    <section id="academic" className="section">
      <h2 className="section-title">Academic Work</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function Creative() {
  const projects = [
    {
      title: 'Creative Project 1',
      description: 'Description of your creative work, portfolio pieces, or artistic projects.'
    },
    {
      title: 'Creative Project 2',
      description: 'Description of your creative work, portfolio pieces, or artistic projects.'
    },
    {
      title: 'Creative Project 3',
      description: 'Description of your creative work, portfolio pieces, or artistic projects.'
    }
  ];

  return (
    <section id="creative" className="section">
      <h2 className="section-title">Creative Work</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

function Skills() {
  const skills = ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks = [
    { label: 'Email', href: 'mailto:your.email@example.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'Twitter', href: 'https://twitter.com/yourhandle' }
  ];

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-text">
        I'd love to hear from you. Reach out through any of the following channels:
      </p>
      <div className="contact-links">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="contact-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}