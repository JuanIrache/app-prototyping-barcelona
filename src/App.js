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
  const [transition, setTransition] = useState(0);

  const toggleTag = e => {
    const newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)));
    setSelected(0);
  };

  const changeProject = up => {
    setTransition(up);
    setTimeout(() => {
      let newIndex = selected + 1 * up;
      setTransition(0);
      setSelected(getValidIndex(newIndex));
    }, 500);
  };

  const getValidIndex = num => {
    num = num % projects.length;
    if (num < 0) return num + projects.length;
    return num;
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
      <About />
    </div>
  );
};

export default App;
