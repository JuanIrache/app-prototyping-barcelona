import React, { createContext, useState, useContext, useEffect } from 'react';
import ProjectContext from './ProjectContext';
import SlideContext from './SlideContext';

const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const { projects } = useContext(ProjectContext);
  const { slide } = useContext(SlideContext);
  const project = projects[slide];

  const [video, setVideo] = useState({ title: project.title, src: project.youtube, visible: false });

  useEffect(() => {
    setVideo({ title: project.title, src: project.youtube, visible: false });
  }, [project]);

  return <VideoContext.Provider value={{ video, setVideo }}>{children}</VideoContext.Provider>;
};

export default VideoContext;
