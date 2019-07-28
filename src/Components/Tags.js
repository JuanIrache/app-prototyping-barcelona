import React from 'react';
import '../style/Tags.scss';

const Projects = ({ tags, tag, toggleTag }) => (
  <div className="Tags">
    <div className="Tags-container">
      {tags.map(t => (
        <div key={t} className="Tags-tag">
          <a href="#projects" name={t} className={t === tag ? 'active' : ''} onClick={toggleTag}>
            {t}
          </a>{' '}
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
