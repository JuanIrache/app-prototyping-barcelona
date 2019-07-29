import React from 'react';
import '../style/Tags.scss';

const Projects = ({ tags, tag, toggleTag }) => (
  <div className="Tags">
    <div className="container">
      {tags.map(t => (
        <div key={t} className="tag">
          <a href="#projects" name={t} className={t === tag ? 'active' : ''} onClick={toggleTag}>
            {t}
          </a>
        </div>
      ))}
    </div>
    <p className="separator">
      Filter by tag or{' '}
      <a href="#projects" onClick={() => toggleTag('')}>
        see all projects
      </a>
    </p>
  </div>
);

export default Projects;
