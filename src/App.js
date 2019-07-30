import React, { useContext } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import VideoOverlay from './Components/VideoOverlay';
import GalleryOverlay from './Components/GalleryOverlay';
import TagContext from './contexts/TagContext';
import ProjectContext from './contexts/ProjectContext';
import VideoContext from './contexts/VideoContext';
import GalleryContext from './contexts/GalleryContext';
import initialProjects from './other/projects.json';

import './App.scss';

const App = () => {
  const { tag, setTag } = useContext(TagContext);
  const { setProjects } = useContext(ProjectContext);
  const { setVideo } = useContext(VideoContext);
  const { setIndex } = useContext(GalleryContext);

  const toggleTag = e => {
    let newTag = '';
    if (e && e.target) newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)).sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <GalleryOverlay />
      <VideoOverlay />
      <Header />
      <Tags toggleTag={toggleTag} />
      <Projects setVideo={setVideo} />
      <About />
    </div>
  );
};

export default App;
