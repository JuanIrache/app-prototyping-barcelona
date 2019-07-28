import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProjectDetails from './ProjectDetails';
import Tags from './Tags';
import About from './About';
import initialProjects from './projects.json';
import './App.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`./media/`, false, /\.(png|jpe?g|svg)$/);
const images = importAll(ctxt);
const initialTags = initialProjects.reduce((acc, cur) => acc.concat(cur.tags.filter(t => !acc.includes(t))), []);

const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [tag, setTag] = useState('');
  const [selected, setSelected] = useState(0);
  const [transition, setTransition] = useState(0);

  const toggleTag = e => {
    const newTag = e.target.name !== tag ? e.target.name : '';
    setTag(newTag);
    if (!newTag) setProjects(initialProjects);
    else setProjects(initialProjects.filter(p => p.tags.includes(newTag)));
    setSelected(0);
  };

  useEffect(() => {
    return () => {
      setTransition(0);
    };
  }, [selected]);

  const changeProject = up => {
    setTransition(up);
    setTimeout(() => {
      let newIndex = selected + 1 * up;
      setSelected(getValidIndex(newIndex));
    }, 500);
  };

  const getValidIndex = num => {
    num = num % projects.length;
    if (num < 0) return num + projects.length;
    return num;
  };

  const findImages = index => {
    console.log(index);

    if (projects[index].images)
      return images.filter(i => {
        const regex = new RegExp(`/${projects[index].images}\\d+\\.`);
        return regex.test(i);
      });
    return null;
  };

  return (
    <div className="App">
      <Header />
      <Tags tags={initialTags} tag={tag} toggleTag={toggleTag} />
      <section id="App-projects">
        <div
          className={`App-projs App-leftProj${transition < 0 ? ' becomeCenter' : ''}`}
          // id={`App-${projects[getValidIndex(selected - 1)].title}`}
        >
          <ProjectDetails
            project={projects[getValidIndex(selected - 1)]}
            images={findImages(getValidIndex(selected - 1))}
            changeProject={changeProject}
          />
        </div>
        <div
          className={`App-projs App-rightProj${transition > 0 ? ' becomeCenter' : ''}`}
          // id={`App-${projects[getValidIndex(selected + 1)].title}`}
        >
          <ProjectDetails
            project={projects[getValidIndex(selected + 1)]}
            images={findImages(getValidIndex(selected + 1))}
            changeProject={changeProject}
          />
        </div>
        <div
          className={`App-projs App-proj${transition > 0 ? ' becomeLeft' : ''}${transition < 0 ? ' becomeRight' : ''}`}
          // id={`App-${projects[selected].title}`}
        >
          <ProjectDetails project={projects[selected]} images={findImages(selected)} changeProject={changeProject} />
        </div>
      </section>
      <About />
    </div>
  );
};

export default App;
