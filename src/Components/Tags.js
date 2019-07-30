import React, { useContext } from 'react';
import TagContext from '../contexts/TagContext';
import '../style/Tags.scss';

const Projects = ({ toggleTag }) => {
  const { tag, tags } = useContext(TagContext);
  return (
    <div className="Tags">
      <div className="container">
        {tags.map(t => (
          <h4 key={t} className="tag">
            <a href="#projects" name={t} className={t === tag ? 'active' : ''} onClick={toggleTag}>
              {t}
            </a>
          </h4>
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
};

export default Projects;
