import React, { useState, createContext, useContext, useEffect } from 'react';
import TagContext from './TagContext';
import initialProjects from '../other/projects.json';

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialProjects);

  const { tag } = useContext(TagContext);

  useEffect(() => {
    console.log('project context tag', tag);

    if (tag.length) setProjects(initialProjects.filter(p => p.tags.includes(tag)).sort(() => Math.random() - 0.5));
    else setProjects(initialProjects);
  }, [tag]);

  return <ProjectContext.Provider value={{ projects, setProjects }}>{children}</ProjectContext.Provider>;
};

export default ProjectContext;
