import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import './App.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`./media/`, false, /\.(png|jpe?g|svg)$/);
const images = importAll(ctxt);

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState(0);
  const [transition, setTransition] = useState(0);

  const changeProject = up => {
    setTransition(up);
    setTimeout(() => {
      let newIndex = selected + 1 * up;
      setTransition(0);
      setSelected(getValidIndex(newIndex));
    }, 500);
  };

  const getValidIndex = num => {
    let newNum = num % projects.length;
    if (num < 0) return newNum + projects.length;
    return newNum;
  };

  const findImages = index => {
    return images.filter(i => {
      const regex = new RegExp(`/${projects[index].id}\\d+\\.`);
      return regex.test(i);
    });
  };

  return (
    <section id="App-projects">
      {projects.map((p, i) => (
        <ProjectDetails
          key={p.id}
          i={i}
          project={p}
          projects={projects.length}
          images={findImages(getValidIndex(i))}
          changeProject={changeProject}
          selected={selected}
          transition={transition}
          getValidIndex={getValidIndex}
        />
      ))}
    </section>
  );
};

export default Projects;
