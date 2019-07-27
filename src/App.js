import React, { useState, useEffect } from 'react';
import ProjectTitle from './ProjectTitle';
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
  };

  useEffect(filterProjects, [tags]);
  const toggleTag = e => {
    setTags(tags.map(t => ({ ...t, active: t.name === e.target.name ? !t.active : false })));
  };

  const findCover = project => {
    if (project.images)
      return images.find(i => {
        const regex = new RegExp(`/${project.images}\\d+\\.`);
        return regex.test(i);
      });
    return null;
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
      <section>
        <header>
          <h1>App Prototyping Barcelona</h1>
          <h3>Focused on functionality, not just looks. Like having your own technical co-founder</h3>
        </header>
      </section>
      <section>
        <Tags tags={tags} toggleTag={toggleTag} />
      </section>
      <section>
        <ProjectTitle project={projects.filter(p => p.active)[0]} cover={findCover(projects.filter(p => p.active)[0])} />
      </section>
      <section>
        <ProjectDetails project={projects.filter(p => p.active)[0]} images={findImages(projects.filter(p => p.active)[0])} />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default App;
