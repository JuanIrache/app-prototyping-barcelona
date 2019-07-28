import React, { useState } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import initialProjects from './other/projects.json';
import './App.scss';

const initialTags = initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []);

const App = () => {
  const [tag, setTag] = useState('');
  const [projects, setProjects] = useState(initialProjects);

  const toggleTag = e => {
    const newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)));
  };

  return (
    <div className="App">
      <Header />
      <Tags tags={initialTags} tag={tag} toggleTag={toggleTag} />
      <Projects projects={projects} />
      <About />
    </div>
  );
};

export default App;
