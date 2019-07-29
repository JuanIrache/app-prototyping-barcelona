import React from 'react';
import ReactSwipe from 'react-swipe';
import Project from './Project';
import '../style/Projects.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const Projects = ({ projects }) => {
  const findImages = index => {
    return images.filter(i => {
      const regex = new RegExp(`/${projects[index].id}\\d+\\.`);
      return regex.test(i);
    });
  };

  const goToAnchor = () => {
    //Source: https://stackoverflow.com/a/13736194/3362074
    const url = window.location.href; //Save down the URL without hash.
    window.location.href = '#projects'; //Go to the target element.
    window.history.replaceState(null, null, url);
  };

  let reactSwipeEl;

  return (
    <section className="Projects" id="projects">
      <ReactSwipe className="caroussel" ref={el => (reactSwipeEl = el)} swipeOptions={{ callback: goToAnchor, continuous: false }}>
        {projects.map((p, i) => (
          <div className="test" key={p.id}>
            <Project
              project={p}
              i={i}
              projects={projects.length}
              images={findImages(i)}
              goRight={() => reactSwipeEl.next()}
              goLeft={() => reactSwipeEl.prev()}
            />
          </div>
        ))}
      </ReactSwipe>
    </section>
  );
};

export default Projects;
