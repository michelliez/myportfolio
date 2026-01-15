import React from 'react';

export default function SkillsPage() {
  const skills = ['Data Analysis', 'Cryo-EM', 'Java', 'Skill 4', 'Skill 5', 'Skill 6'];

  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}