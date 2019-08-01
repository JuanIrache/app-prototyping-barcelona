import React, { useEffect } from 'react';
import '../style/ProjectTitle.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const findImage = project => {
  return images.filter(img => {
    const regex = new RegExp(`/${project.id}\\d+\\.`);
    return regex.test(img);
  })[0];
};

const ProjectTitle = ({ preLoad, existsLeft, existsRight, project, goLeft, goRight, i }) => {
  const image = findImage(project);

  useEffect(() => {
    if (preLoad) {
      const img = new Image();
      img.onload = () => document.querySelector(`#ProjectTitle-${project.id}`).classList.add('visible');
      img.src = image;
      if (img.naturalWidth === 0) document.querySelector(`#ProjectTitle-${project.id}`).classList.add('visible');
    }
  }, []);

  return (
    <div className="ProjectTitle">
      <div
        id={`ProjectTitle-${project.id}`}
        className="titleBg"
        style={preLoad ? { backgroundImage: `url(${image})` } : {}}
        data-background={!preLoad ? `url(${image})` : ''}
      />
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

//Aqui move to useEffect of project in inner component?
// Load images
// const checkAndLoad = proj => {
//   const loadImg = img => {
//     if (img) {
//       if (img.dataset.background) {
//         img.setAttribute('style', `background-image:${img.dataset.background}`);
//         delete img.dataset.background;
//       }
//     }
//   };
//   loadImg(proj.querySelector('.titleBg'));
//   proj.querySelectorAll('.ProjectImages .image').forEach(loadImg);
// };
// checkAndLoad(document.querySelector(`.Projects #Project-${i}`));
// if (i + 1 < projects.length) checkAndLoad(document.querySelector(`.Projects #Project-${i + 1}`));
