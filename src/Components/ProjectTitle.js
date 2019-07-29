import React from 'react';
import '../style/ProjectTitle.scss';

const ProjectTitle = ({ images, existsLeft, existsRight, project, goLeft, goRight, i }) => (
  <div className="ProjectTitle">
    {// Preload header of first 2 slides, lazy load the res
      !!images && !!images.length && (
      <div className="titleBg" style={i < 2 ? { backgroundImage: `url(${images[0]})` } : {}} data-background={i > 1 ? `url(${images[0]})` : ''} />
    )}
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
