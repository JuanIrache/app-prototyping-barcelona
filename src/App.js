import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProjectDetails from './ProjectDetails';
import Tags from './Tags';
import About from './About';
import initialProjects from './projects.json';
import './App.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`./media/`, false, /\.(png|jpe?g|svg)$/);
const images = importAll(ctxt);

const App = () => {
  const [projects, setProjects] = useState(initialProjects.map(p => ({ ...p, active: true })));
  const [tags, setTags] = useState(
    initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []).map(t => ({ name: t, active: false }))
  );
  const [selected, setSelected] = useState(0);

  const filterProjects = () => {
    const activeTags = tags.filter(t => t.active).map(t => t.name);
    if (!activeTags.length) setProjects(initialProjects.map(p => ({ ...p, active: true })));
    else
      setProjects(
        initialProjects.map(p => ({
          ...p,
          active: p.tags.some(t => activeTags.includes(t))
        }))
      );
    setSelected(0);
  };

  useEffect(filterProjects, [tags]);

  const toggleTag = e => {
    setTags(tags.map(t => ({ ...t, active: t.name === e.target.name ? !t.active : false })));
  };

  const changeProject = up => {
    let newIndex = (selected + 1 * up) % projects.length;
    if (newIndex < 0) newIndex += projects.length;
    setSelected(newIndex);
  };

  const findImages = project => {
    if (project.images)
      return images.filter(i => {
        const regex = new RegExp(`/${project.images}\\d+\\.`);
        return regex.test(i);
      });
    return null;
  };

  return (
    <div className="App">
      <Header />
      <Tags tags={tags} toggleTag={toggleTag} />
      <ProjectDetails
        project={projects.filter(p => p.active)[selected]}
        images={findImages(projects.filter(p => p.active)[selected])}
        changeProject={changeProject}
      />
      <About />
    </div>
  );
};

export default App;
