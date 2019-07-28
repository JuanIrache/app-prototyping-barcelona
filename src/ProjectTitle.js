import React from 'react';
import './ProjectTitle.scss';

const ProjectTitle = ({ images, existsLeft, existsRight, project, goLeft, goRight }) => (
  <div className="ProjectTitle">
    {!!images && !!images.length && <div className="titleBg" style={{ backgroundImage: `url(${images[0]})` }} />}
    <div className="titleContainer">
      {existsLeft ? (
        <a href="#projects">
          <i className="fas fa-chevron-left" onClick={goLeft} title="Previous project" />
        </a>
      ) : (
        <i className="fas fa-chevron-left hidden" />
      )}
      <h2>
        {project.link ? (
          <a href={project.link.src} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        ) : (
          <span>{project.title}</span>
        )}
      </h2>
      {existsRight ? (
        <a href="#projects">
          <i className="fas fa-chevron-right" onClick={goRight} title="Next project" />
        </a>
      ) : (
        <i className="fas fa-chevron-right hidden" />
      )}
    </div>
  </div>
);

export default ProjectTitle;
