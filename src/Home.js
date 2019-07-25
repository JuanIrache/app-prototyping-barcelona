import React, { useState } from 'react';
import initialProjects from './projects.json';
import './Home.scss';

const Home = () => {
  const [projects, setProjects] = useState(initialProjects.map(p => ({ ...p, active: true })));
  const [tags, setTags] = useState(
    initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []).map(t => ({ name: t, active: false }))
  );
  const filterProjects = () => {
    if (tags.filter(t => t.active).length) setProjects(initialProjects.map(p => ({ ...p, active: true })));
    else setProjects(initialProjects.map(p => ({ ...p, active: true })));
  };
  const toggleTag = e => {
    setTags(tags.map(t => ({ ...t, active: t.name === e.target.name ? !t.active : t.active })));
  };
  return (
    <div>
      <div>
        {tags.map(t => (
          <a href="#!" key={t.name} name={t.name} className={`Home-tag${t.active ? ' active' : ''}`} onClick={toggleTag}>
            {t.name}
          </a>
        ))}
      </div>
      <div>
        {projects.map(t => (
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
