import React, { useContext, useEffect } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import VideoOverlay from './Components/VideoOverlay';
import GalleryOverlay from './Components/GalleryOverlay';
import SlideContext from './contexts/SlideContext';
// import setListeners from './other/listeners';

import './App.scss';

const App = () => {
  const { setSlide } = useContext(SlideContext);
  // useEffect(() => setListeners(), []);
  return (
    <div className="App">
      <GalleryOverlay />
      <VideoOverlay />
      <Header />
      <Tags />
      <Projects setSlide={setSlide} />
      <About />
    </div>
  );
};

export default App;
