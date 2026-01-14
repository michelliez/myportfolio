import React from 'react';

function ProjectCard({ title, description }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default function AcademicExtracurricularsPage() {
  const academicProjects = [
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

  const extracurricularProjects = [
    {
      title: 'Project Title 1',
      description: 'Brief description of your extracurricular activity.'
    },
    {
      title: 'Project Title 2',
      description: 'Brief description of your extracurricular activity.'
    },
    {
      title: 'Project Title 3',
      description: 'Brief description of your extracurricular activity.'
    }
  ];

  return (
    <div className="page">
      <section className="section">
        <h2 className="section-title">Academic Work</h2>
        <div className="grid">
          {academicProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Extracurricular Activities</h2>
        <div className="grid">
          {extracurricularProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}