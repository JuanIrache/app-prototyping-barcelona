import React, { createContext, useState, useEffect, useContext } from 'react';
import TagContext from './TagContext';

const SlideContext = createContext();

export const SlideContextProvider = ({ children }) => {
  const { tag } = useContext(TagContext);

  const [slide, setSlide] = useState(0);

  useEffect(() => setSlide(0), [tag]);

  return <SlideContext.Provider value={{ slide, setSlide }}>{children}</SlideContext.Provider>;
};

export default SlideContext;
