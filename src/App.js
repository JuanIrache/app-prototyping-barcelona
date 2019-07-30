import React, { useState, useContext } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import VideoOverlay from './Components/VideoOverlay';
import GalleryOverlay from './Components/GalleryOverlay';
import TagContext from './contexts/TagContext';
import ProjectContext from './contexts/ProjectContext';
import { VideoContextProvider } from './contexts/VideoContext';
import initialProjects from './other/projects.json';

import './App.scss';

const App = () => {
  const [gallery, setGallery] = useState({ visible: false, title: '', selected: 0 });
  const [galleryIndex, setGalleryIndex] = useState(0);

  const { tag, setTag } = useContext(TagContext);
  const { setProjects } = useContext(ProjectContext);

  const toggleTag = e => {
    let newTag = '';
    if (e && e.target) newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)).sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <GalleryOverlay gallery={gallery} index={galleryIndex} setGallery={setGallery} />
      <VideoContextProvider>
        <VideoOverlay />
        <Header />
        <Tags toggleTag={toggleTag} />
        <Projects setGalleryIndex={setGalleryIndex} setGallery={setGallery} />
      </VideoContextProvider>
      <About />
    </div>
  );
};

export default App;
