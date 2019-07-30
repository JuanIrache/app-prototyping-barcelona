import React, { createContext, useState } from 'react';

const GalleryContext = createContext();

export const GalleryContextProvider = ({ children }) => {
  const [gallery, setGallery] = useState({ visible: false, title: '', selected: 0, index: 1 });
  const setIndex = i => setGallery({ ...gallery, index: i });
  return <GalleryContext.Provider value={{ gallery, setGallery, setIndex }}>{children}</GalleryContext.Provider>;
};

export default GalleryContext;
