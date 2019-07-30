import React, { useState, createContext } from 'react';
import initialProjects from '../other/projects.json';

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialProjects);
  return <ProjectContext.Provider value={{ projects, setProjects }}>{children}</ProjectContext.Provider>;
};

export default ProjectContext;
