import React, { memo, useContext } from 'react';
import ReactSwipe from 'react-swipe';
import Project from './Project';
import ProjectContext from '../contexts/ProjectContext';
import '../style/Projects.scss';

const Projects = ({ setSlide }) => {
  const { projects } = useContext(ProjectContext);

  const onChangeSlide = i => {
    //Source: https://stackoverflow.com/a/13736194/3362074
    const url = window.location.href; //Save down the URL without hash.
    window.location.href = '#projects'; //Go to the target element.
    window.history.replaceState(null, null, url);
    /////
    setSlide(i);
  };

  let reactSwipeEl;

  return (
    <section className="Projects" id="projects">
      <ReactSwipe ref={el => (reactSwipeEl = el)} swipeOptions={{ callback: onChangeSlide, continuous: false }}>
        {projects.map((p, i, arr) => (
          <div key={p.id}>
            <Project
              project={p}
              preLoad={i < 2}
              existsLeft={i > 0}
              existsRight={i + 1 < arr.length}
              goRight={() => reactSwipeEl.next()}
              goLeft={() => reactSwipeEl.prev()}
            />
          </div>
        ))}
      </ReactSwipe>
    </section>
  );
};

export default memo(Projects);
