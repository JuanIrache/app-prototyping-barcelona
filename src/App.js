import React, { useContext } from 'react';
import Header from './Components/Header';
import Tags from './Components/Tags';
import Projects from './Components/Projects';
import About from './Components/About';
import VideoOverlay from './Components/VideoOverlay';
import Accordion from './Components/Accordion';
import GalleryOverlay from './Components/GalleryOverlay';
import SlideContext from './contexts/SlideContext';
import AccordionContext from './contexts/AccordionContext';
import ProjectContext from './contexts/ProjectContext';
// import setListeners from './other/listeners';

import './App.scss';

const App = () => {
  const { slide, setSlide } = useContext(SlideContext);
  const { accordion } = useContext(AccordionContext);
  const { projects } = useContext(ProjectContext);
  // useEffect(() => setListeners(), []);
  console.log('render app');

  return (
    <div className="App">
      <GalleryOverlay />
      <VideoOverlay />
      <Header />
      <Tags />
      {accordion && projects.length > 1 ? <Accordion /> : <Projects setSlide={setSlide} />}
      <About />
    </div>
  );
};

export default App;
