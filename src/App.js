import React, { useState } from 'react';
import Header from './Header';
import ProjectDetails from './ProjectDetails';
import Tags from './Tags';
import About from './About';
import initialProjects from './projects.json';
import './App.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`./media/`, false, /\.(png|jpe?g|svg)$/);
const images = importAll(ctxt);
const initialTags = initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []);

const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [tag, setTag] = useState('');
  const [selected, setSelected] = useState(0);

  const toggleTag = e => {
    const newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)));
    setSelected(0);
  };

  const changeProject = up => {
    let newIndex = (selected + 1 * up) % projects.length;
    if (newIndex < 0) newIndex += projects.length;
    setSelected(newIndex);
  };

  const findImages = index => {
    if (projects[index].images)
      return images.filter(i => {
        const regex = new RegExp(`/${projects[index].images}\\d+\\.`);
        return regex.test(i);
      });
    return null;
  };

  return (
    <div className="App">
      <Header />
      <Tags tags={initialTags} tag={tag} toggleTag={toggleTag} />
      <section id="projects">
        <ProjectDetails project={projects[selected]} images={findImages(selected)} changeProject={changeProject} />
      </section>
      <About />
    </div>
  );
};

export default App;
