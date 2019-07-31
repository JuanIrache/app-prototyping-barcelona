import React, { useState, createContext, useContext, useEffect } from 'react';
import TagContext from './TagContext';
import initialProjects from '../other/projects.json';

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [project, setProject] = useState(initialProjects[0]);

  const { tag } = useContext(TagContext);

  useEffect(() => {
    if (tag.length) setProjects(initialProjects.filter(p => p.tags.includes(tag)).sort(() => Math.random() - 0.5));
    else setProjects(initialProjects);
  }, [tag]);

  useEffect(() => {
    setProject(projects[0]);
  }, [projects]);

  return <ProjectContext.Provider value={{ projects, project, setProjects, setProject }}>{children}</ProjectContext.Provider>;
};

export default ProjectContext;
