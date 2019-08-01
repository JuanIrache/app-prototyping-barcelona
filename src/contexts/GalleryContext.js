import React, { createContext, useState, useContext, useEffect } from 'react';
import ProjectContext from './ProjectContext';
import SlideContext from './SlideContext';
const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const GalleryContext = createContext();

const findImages = project => {
  return images.filter(img => {
    const regex = new RegExp(`/${project.id}\\d+\\.`);
    return regex.test(img);
  });
};

export const GalleryContextProvider = ({ children }) => {
  const { projects } = useContext(ProjectContext);
  const { slide } = useContext(SlideContext);
  const project = projects[slide];

  const [gallery, setGallery] = useState({ visible: false, title: '', selected: 0, images: findImages(project) });

  useEffect(() => {
    setGallery({ ...gallery, images: findImages(project) });
  }, [project]);

  return <GalleryContext.Provider value={{ gallery, setGallery }}>{children}</GalleryContext.Provider>;
};

export default GalleryContext;
