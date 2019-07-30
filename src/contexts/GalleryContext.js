import React, { createContext, useState } from 'react';

const GalleryContext = createContext();

export const GalleryContextProvider = ({ children }) => {
  const [gallery, setGallery] = useState({ visible: false, title: '', selected: 0 });
  const [galleryIndex, setGalleryIndex] = useState(0);
  return <GalleryContext.Provider value={{ gallery, setGallery, galleryIndex, setGalleryIndex }}>{children}</GalleryContext.Provider>;
};

export default GalleryContext;
