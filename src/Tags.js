import React from 'react';
import './Tags.scss';

const Projects = ({ tags, toggleTag }) => (
  <div className="Tags">
    {tags.map(t => (
      <div key={t.name} className="Tags-tag">
        <a href="#!" name={t.name} className={t.active ? 'active' : ''} onClick={toggleTag}>
          {t.name}
        </a>{' '}
      </div>
    ))}
  </div>
);

export default Projects;
