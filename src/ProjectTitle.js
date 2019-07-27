import React from 'react';
import './ProjectTitle.scss';

export default ({ project, cover }) => (
  <div key={project.title} className="ProjectTitle">
    <div className="ProjectTitle-bg" style={{ backgroundImage: `url(${cover})` }} />
    <div className="ProjectTitle-title">
      <h2>{project.title}</h2>
    </div>
  </div>
);
