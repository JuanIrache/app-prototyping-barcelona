import React, { createContext, useState, useContext, useEffect } from 'react';
import ProjectContext from './ProjectContext';

const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const { project } = useContext(ProjectContext);

  const [video, setVideo] = useState({ title: project.title, src: project.youtube, visible: false });

  useEffect(() => {
    setVideo({ title: project.title, src: project.youtube, visible: false });
  }, [project]);

  return <VideoContext.Provider value={{ video, setVideo }}>{children}</VideoContext.Provider>;
};

export default VideoContext;
