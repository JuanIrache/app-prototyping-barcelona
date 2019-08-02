import React, { useEffect, useState } from 'react';
import '../style/ProjectTitle.scss';

const findImage = (regex, images) => images.filter(img => regex.test(img))[0];

const ProjectTitle = ({ existsLeft, existsRight, project, goLeft, goRight, headerImgs }) => {
  const regex = new RegExp(`/${project.id}\\d+\\.`);
  const [image, setImage] = useState({ src: findImage(regex, headerImgs), loaded: false });

  useEffect(() => {
    const imgLoaded = () => setImage({ ...image, loaded: true });
    const img = new Image();
    img.onload = imgLoaded;
    img.src = image.src;
    if (img.naturalWidth !== 0) imgLoaded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ProjectTitle">
      <div className={`titleBg${image.loaded ? ' visible' : ''}`} style={{ backgroundImage: `url(${image.src})` }} />
      <div className="titleContainer">
        {existsLeft ? (
          <a className="chevronContainer" href="#projects" onClick={goLeft}>
            <i className="fas fa-chevron-left" title="Previous project" />
          </a>
        ) : (
          <span className="chevronContainer hidden" />
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
          <a className="chevronContainer" href="#projects" onClick={goRight}>
            <i className="fas fa-chevron-right" title="Next project" />
          </a>
        ) : (
          <span className="chevronContainer hidden" />
        )}
      </div>
    </div>
  );
};

export default ProjectTitle;
