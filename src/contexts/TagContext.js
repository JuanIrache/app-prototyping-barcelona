import React, { createContext, useState } from 'react';
import initialProjects from '../other/projects.json';
const tags = initialProjects.reduce(
  (acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))),
  []
);

const TagContext = createContext();

export const TagContextProvider = ({ children }) => {
  const [tag, setTag] = useState('');
  return <TagContext.Provider value={{ tags, tag, setTag }}>{children}</TagContext.Provider>;
};

export default TagContext;
