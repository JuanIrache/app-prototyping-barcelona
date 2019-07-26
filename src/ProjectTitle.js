import React from 'react';
import './ProjectTitle.scss';

export default ({ project }) => (
  <div key={project.title} className="ProjectTitle">
    <h3>{project.title}</h3>
  </div>
);
