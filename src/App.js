import React, { useState } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import VideoOverlay from './Components/VideoOverlay';
import initialProjects from './other/projects.json';

import './App.scss';

const initialTags = initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []);

const App = () => {
  const [tag, setTag] = useState('');
  const [projects, setProjects] = useState(initialProjects);
  const [video, setVideo] = useState({ visible: false, src: '', title: '' });

  const toggleTag = e => {
    const newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)).sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <VideoOverlay {...video} setVideo={setVideo} />
      <Header />
      <Tags tags={initialTags} tag={tag} toggleTag={toggleTag} />
      <Projects projects={projects} setVideo={setVideo} />
      <About />
    </div>
  );
};

export default App;
