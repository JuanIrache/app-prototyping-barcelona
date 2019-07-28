import React, { Fragment } from 'react';
import './ProjectDescription.scss';

const ProjectDescription = ({ project }) => (
  <Fragment>
    <div className="ProjectDescription-upper">
      <div className="description">{project.description}</div>
      <div className="links">
        {!!project.links.length && (
          <ul>
            <li>
              <strong>See more</strong>
            </li>
            {project.links.map(l => (
              <li key={l.src}>
                <a href={l.src} target="_blank" rel="noopener noreferrer">
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    <div className="ProjectDescription-lower">
      <div className="tags">
        <strong>Made with:</strong> {project.tags.join(', ')}
      </div>
      <div className="buttons">
        {!!project.link && (
          <a className="mainLink" title="Main project link" href={project.link.src} target="_blank" rel="noopener noreferrer">
            <span className="longTitle">{project.link.title}</span>
            <span className="shortTitle" style={{ display: 'none' }}>
              <i className="fas fa-external-link-square-alt" />
            </span>
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
    </div>
  </Fragment>
);

export default ProjectDescription;
