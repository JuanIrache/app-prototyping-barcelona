import React, { createContext, useState } from 'react';

const SlideContext = createContext();

export const SlideContextProvider = ({ children }) => {
  const [slide, setSlide] = useState(0);
  return <SlideContext.Provider value={{ slide, setSlide }}>{children}</SlideContext.Provider>;
};

export default SlideContext;
