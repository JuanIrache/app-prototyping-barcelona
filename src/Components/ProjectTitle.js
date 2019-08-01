import React, { useEffect } from 'react';
import '../style/ProjectTitle.scss';

const findImage = (regex, images) => images.filter(img => regex.test(img))[0];

const ProjectTitle = ({ existsLeft, existsRight, project, goLeft, goRight, headerImgs }) => {
  const regex = new RegExp(`/${project.id}\\d+\\.`);
  const image = findImage(regex, headerImgs);

  useEffect(() => {
    const img = new Image();
    const show = () => document.querySelector(`#ProjectTitle-${project.id}`).classList.add('visible');
    img.onload = show;
    img.src = image;
    if (img.naturalWidth !== 0) show();
  }, []);

  return (
    <div className="ProjectTitle">
      <div id={`ProjectTitle-${project.id}`} className="titleBg" style={{ backgroundImage: `url(${image})` }} />
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
};

export default ProjectTitle;
