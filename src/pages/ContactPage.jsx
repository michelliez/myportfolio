import React from 'react';

export default function ContactPage() {
  const contactLinks = [
    { label: 'Email', href: 'mailto:myz2110@columbia.edu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michelle-zhou-252119348/' }
  ];

  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          Please feel free to reach out through these channels!
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
    </div>
  );
}