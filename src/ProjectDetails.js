import React from 'react';
import './ProjectDetails.scss';

export default ({ project, images, changeProject }) => (
  <div className="ProjectDetails">
    <div className="ProjectDetails-title">
      {!!images && !!images.length && <div className="ProjectDetails-titleBg" style={{ backgroundImage: `url(${images[0]})` }} />}
      <div className="ProjectDetails-titleContainer">
        <a href="#!">
          <i className="fas fa-chevron-left" onClick={() => changeProject(-1)} title="Previous project" />
        </a>
        <h2>
          {project.link ? (
            <a href={project.link.src} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            <span>{project.title}</span>
          )}
        </h2>
        <a href="#!">
          <i className="fas fa-chevron-right" onClick={() => changeProject(+1)} title="Next project" />
        </a>
      </div>
    </div>
    <div className="ProjectDetails-descAndLlinks">
      <div className="ProjectDetails-description">{project.description}</div>
      <div className="ProjectDetails-links">
        <ul>
          {project.links.map(l => (
            <li key={l.src}>
              <a href={l.src} target="_blank" rel="noopener noreferrer">
                {l.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="ProjectDetails-buttons">
      {!!project.link && (
        <a className="ProjectDetails-mainLink" href={project.link.src} target="_blank" rel="noopener noreferrer">
          {project.link.title}
        </a>
      )}
      {!!project.youtube && (
        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" title="Youtube example" />
        </a>
      )}
      {!!project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" title="GitHub repo" />
        </a>
      )}
      {!!project.npm && (
        <a href={project.npm} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-npm" title="NPM Package" />
        </a>
      )}
    </div>
    {!!images && !!images.length && (
      <div className="ProjectDetails-images">
        {images
          .slice(1)
          .concat(images[0])
          .map(i => (
            <span key={i} style={{ backgroundImage: `url(${i})` }} alt={`${project.title} screenshot`} />
          ))}
      </div>
    )}
  </div>
);
