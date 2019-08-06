import React, { useContext, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TagContext from '../contexts/TagContext';
import ProjectContext from '../contexts/ProjectContext';
import '../style/Tags.scss';

const Projects = () => {
  const { tag, tags, setTag } = useContext(TagContext);
  const { setInitial } = useContext(ProjectContext);
  const [showTitle, setShowTitle] = useState(false);

  const handleShowTitle = visible => {
    if (visible) setShowTitle(true);
  };

  const handleSetTag = e => {
    let newTag = '';
    if (e && e.target && e.target.name !== tag) newTag = e.target.name;
    if (newTag !== tag) {
      setInitial(0);
      setTag(newTag);
    }
  };

  return (
    <VisibilitySensor onChange={handleShowTitle}>
      <div className="Tags">
        <p className={`separator${showTitle ? ' show' : ''}`}>
          Filter by tag or{' '}
          <a href="#accordion" onClick={() => handleSetTag('')}>
            see all projects
          </a>
        </p>
        <div className="container">
          {tags.map(t => (
            <VisibilitySensor key={t} offset={{ bottom: 100 }}>
              {({ isVisible }) => (
                <h4
                  className={`tag${t === tag ? ' active' : ''}${
                    isVisible || showTitle ? ' show' : ''
                  }`}
                >
                  <a href="#accordion" name={t} onClick={handleSetTag}>
                    {t}
                  </a>
                </h4>
              )}
            </VisibilitySensor>
          ))}
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default Projects;
