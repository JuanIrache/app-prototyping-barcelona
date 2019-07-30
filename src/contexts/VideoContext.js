import React, { createContext, useState } from 'react';

const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [video, setVideo] = useState({ visible: false, src: '', title: '' });
  return <VideoContext.Provider value={{ video, setVideo }}>{children}</VideoContext.Provider>;
};

export default VideoContext;
