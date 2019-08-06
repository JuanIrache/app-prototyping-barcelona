import React, { useContext, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TagContext from '../contexts/TagContext';
import ProjectContext from '../contexts/ProjectContext';
import SlideContext from '../contexts/SlideContext';
import '../style/Tags.scss';

const Projects = () => {
  const { tag, tags, assignTag } = useContext(TagContext);
  const { setInitial } = useContext(ProjectContext);
  const { setSlide } = useContext(SlideContext);
  const [showTitle, setShowTitle] = useState(false);

  const handleShowTitle = visible => {
    if (visible) setShowTitle(true);
  };

  const handleAssignTag = tag => {
    setInitial(0);
    setSlide(0);
    assignTag(tag);
  };

  return (
    <VisibilitySensor onChange={handleShowTitle}>
      <div className="Tags">
        <p className={`separator${showTitle ? ' show' : ''}`}>
          Filter by tag or{' '}
          <a href="#accordion" onClick={() => handleAssignTag('')}>
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
                  <a href="#accordion" name={t} onClick={handleAssignTag}>
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
