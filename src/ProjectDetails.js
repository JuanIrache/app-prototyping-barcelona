import React, { memo } from 'react';
import './ProjectDetails.scss';

const ProjectDetails = ({ project, projects, images, changeProject, selected, transition, i, getValidIndex }) => {
  const position = () => {
    if (selected === i) {
      if (transition > 0) return 'left transitioning';
      if (transition < 0) return 'right transitioning';
      return 'center';
    }

    if (selected === getValidIndex(i + 1)) return transition < 0 ? 'center transitioning' : 'left';
    if (selected === getValidIndex(i - 1)) return transition > 0 ? 'center transitioning' : 'right';
  };

  return (
    !!position() && (
      <div className={`ProjectDetails ${position()}`}>
        <div className="ProjectDetails-title">
          {!!images && !!images.length && <div className="ProjectDetails-titleBg" style={{ backgroundImage: `url(${images[0]})` }} />}
          <div className="ProjectDetails-titleContainer">
            {projects > 1 ? (
              <a href="#!">
                <i className="fas fa-chevron-left" onClick={() => changeProject(-1)} title="Previous project" />
              </a>
            ) : (
              <span />
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
            {projects > 1 ? (
              <a href="#!">
                <i className="fas fa-chevron-right" onClick={() => changeProject(+1)} title="Next project" />
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className="ProjectDetails-upper">
          <div className="ProjectDetails-description">{project.description}</div>
          <div className="ProjectDetails-links">
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
        <div className="ProjectDetails-lower">
          <div className="ProjectDetails-tags">
            <strong>Made with:</strong> {project.tags.join(', ')}
          </div>
          <div className="ProjectDetails-buttons">
            {!!project.link && (
              <a
                className="ProjectDetails-mainLink"
                title="Main project link"
                href={project.link.src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ProjectDetails-longTitle">{project.link.title}</span>
                <span className="ProjectDetails-shortTitle" style={{ display: 'none' }}>
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
        {!!images && !!images.length ? (
          <div className="ProjectDetails-images">
            {images
              .slice(1)
              .concat(images[0])
              .map(i => (
                <span key={i} style={{ backgroundImage: `url(${i})` }} alt={`${project.title} screenshot`} />
              ))}
          </div>
        ) : (
          <div className="ProjectDetails-images">
            <span />
          </div>
        )}
      </div>
    )
  );
};

export default memo(ProjectDetails);
