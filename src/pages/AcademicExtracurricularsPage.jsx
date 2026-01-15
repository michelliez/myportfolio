import React from 'react';

function ProjectCard({ title, description, link }) {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </a>
    );
  }
  
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
      title: 'Time-Resolved Cryo-EM',
      description: 'Conducted cryo-EM data analysis on yeast ribosomes, including image processing, 2D classification, 3D refinement, 3D classification, model building, and map fitting.'
    },
    {
      title: 'Inconsistencies in rRNA',
      description: 'Analyzed O. cuniculus rRNA (28S, 18S, 5S, 5.8S) for nucleotide inconsistencies across PDB entries and published corrected sequence to the PDB. Click here for the full resesarch paper!',
      link: 'https://pubmed.ncbi.nlm.nih.gov/40050069/'
    }
  ];

  const extracurricularProjects = [
    {
      title: 'Egleston Scholar',
      description: 'Top 1% of Columbia Engineering.'
    },
    {
      title: 'JADE',
      description: 'Visited NYC tech & VC firms and developed a personal website using React/JavaScript.'
    },
    {
      title: 'Columbia Quant Group Member',
      description: 'Official Member (One of 14) of the Members Program.'
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