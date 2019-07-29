import React, { memo } from 'react';
import ReactSwipe from 'react-swipe';
import Project from './Project';

import '../style/Projects.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const Projects = ({ projects, setVideo }) => {
  const findImages = index => {
    return images.filter(i => {
      const regex = new RegExp(`/${projects[index].id}\\d+\\.`);
      return regex.test(i);
    });
  };

  let reactSwipeEl;

  const onChangeSlide = i => {
    //Source: https://stackoverflow.com/a/13736194/3362074
    const url = window.location.href; //Save down the URL without hash.
    window.location.href = '#projects'; //Go to the target element.
    window.history.replaceState(null, null, url);
    /////
    // Preload video
    const project = projects[i];
    setVideo({ title: project.title, src: project.youtube, visible: false });
    // Load images
    const checkAndLoad = proj => {
      const loadImg = img => {
        if (img) {
          if (img.dataset.background) {
            img.setAttribute('style', `background-image:${img.dataset.background}`);
            delete img.dataset.background;
          }
        }
      };
      loadImg(proj.querySelector('.titleBg'));
      proj.querySelectorAll('.ProjectImages .image').forEach(loadImg);
    };
    checkAndLoad(document.querySelector(`.Projects #Project-${i}`));
    if (i + 1 < projects.length) checkAndLoad(document.querySelector(`.Projects #Project-${i + 1}`));
    if (i > 0) checkAndLoad(document.querySelector(`.Projects #Project-${i - 1}`));
  };

  //Preload first video
  setVideo({ title: projects[0].title, src: projects[0].youtube, visible: false });

  return (
    <section className="Projects" id="projects">
      <ReactSwipe className="caroussel" ref={el => (reactSwipeEl = el)} swipeOptions={{ callback: onChangeSlide, continuous: false }}>
        {projects.map((p, i) => (
          <div key={p.id}>
            <Project
              project={p}
              i={i}
              projects={projects.length}
              images={findImages(i)}
              goRight={() => reactSwipeEl.next()}
              goLeft={() => reactSwipeEl.prev()}
              setVideo={setVideo}
            />
          </div>
        ))}
      </ReactSwipe>
    </section>
  );
};

export default memo(Projects);
