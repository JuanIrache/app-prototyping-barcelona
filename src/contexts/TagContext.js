import React, { createContext, useState, useContext } from 'react';
import AccordionContext from './AccordionContext';
import initialProjects from '../other/projects.json';
const tags = initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []);

const TagContext = createContext();

export const TagContextProvider = ({ children }) => {
  const { setAccordion } = useContext(AccordionContext);

  const [tag, setTag] = useState('');
  const assignTag = e => {
    let newTag = '';
    if (e && e.target && e.target.name !== tag) newTag = e.target.name;
    setTag(newTag);
    setAccordion(true);
  };
  return <TagContext.Provider value={{ tags, tag, assignTag }}>{children}</TagContext.Provider>;
};

export default TagContext;
