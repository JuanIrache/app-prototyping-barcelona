import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import About from './About';
import initialProjects from './projects.json';
import './App.scss';

const App = () => {
  const [projects, setProjects] = useState(initialProjects.map(p => ({ ...p, active: true })));
  const [tags, setTags] = useState(
    initialProjects
      .reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), [])
      .sort()
      .map(t => ({ name: t, active: false }))
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
  return (
    <div className="App">
      <section>
        <header>
          <h1>App Prototyping Barcelona</h1>
          <h3>Focused on functionality. Not just looks. Like having your own technical co-founder</h3>
        </header>
      </section>
      <section>
        <Projects projects={projects} tags={tags} toggleTag={toggleTag} />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default App;
