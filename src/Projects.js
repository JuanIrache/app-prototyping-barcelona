import React from 'react';

const Projects = ({ projects }) => (
  <div>
    {projects
      .filter(p => p.active)
      .map(t => (
        <div key={t.title} className="Home-project">
          <h3>{t.title}</h3>
          <p>{t.description}</p>
        </div>
      ))}
  </div>
);

export default Projects;
