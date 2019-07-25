import React, { useState, useEffect } from 'react';
import initialProjects from './projects.json';
import './Home.scss';

const Home = () => {
  const [projects, setProjects] = useState(initialProjects.map(p => ({ ...p, active: true })));
  const [tags, setTags] = useState(
    initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []).map(t => ({ name: t, active: false }))
  );
  const filterProjects = () => {
    const activeTags = tags.filter(t => t.active).map(t => t.name);
    if (!activeTags.length) setProjects(initialProjects.map(p => ({ ...p, active: true })));
    else
      setProjects(
        initialProjects.map(p => ({
          ...p,
          active: p.tags.some(t => activeTags.includes(t))
        }))
      );
  };
  useEffect(filterProjects, [tags]);
  const toggleTag = e => {
    setTags(tags.map(t => ({ ...t, active: t.name === e.target.name ? !t.active : t.active })));
  };

  return (
    <div className="Home">
      <div>
        {tags.map(t => (
          <a href="#!" key={t.name} name={t.name} className={`Home-tag${t.active ? ' active' : ''}`} onClick={toggleTag}>
            {t.name}
          </a>
        ))}
      </div>
      <div>
        {projects
          .filter(p => p.active)
          .map(t => (
            <div key={t.title} className="Home-project">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
