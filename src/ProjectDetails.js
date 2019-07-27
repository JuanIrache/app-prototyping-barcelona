import React from 'react';
import './ProjectDetails.scss';

export default ({ project, images }) => (
  <div key={project.title} className="ProjectDetails">
    <div className="ProjectDetails-info">
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
      {!!project.youtube && (
        <a href={project.youtube} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" title="Youtube example" />
        </a>
      )}
    </div>
    <div className="ProjectDetails-images">
      {images
        .slice(1)
        .concat(images[0])
        .map(i => (
          <img key={i} src={i} />
        ))}
    </div>
  </div>
);
