import React, { useContext, useEffect } from 'react';
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
// import setListeners from './other/listeners';

import './App.scss';

const App = () => {
  const { tag, setTag } = useContext(TagContext);
  const { setProjects } = useContext(ProjectContext);
  const { setVideo } = useContext(VideoContext);
  const { setGalleryIndex } = useContext(GalleryContext);

  // useEffect(() => setListeners(), []);

  return (
    <div className="App">
      <GalleryOverlay />
      <VideoOverlay />
      <Header />
      <Tags />
      <Projects />
      <About />
    </div>
  );
};

export default App;
