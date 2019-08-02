import React, { useContext, useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import TagContext from '../contexts/TagContext';
import '../style/Tags.scss';

const Projects = () => {
  const { tag, tags, assignTag } = useContext(TagContext);
  const [showTitle, setShowTitle] = useState(false);

  const handleShowTitle = visible => {
    if (visible) setShowTitle(true);
  };

  return (
    <VisibilitySensor onChange={handleShowTitle} offset={{ bottom: -100 }}>
      <div className="Tags">
        <p className={`separator${showTitle ? ' show' : ''}`}>
          Filter by tag or{' '}
          <a href="#projects" onClick={() => assignTag('')}>
            see all projects
          </a>
        </p>
        <div className="container">
          {tags.map(t => (
            <VisibilitySensor key={t} partialVisibility={true} offset={{ bottom: 50 }}>
              {({ isVisible }) => (
                <h4 className={`tag${t === tag ? ' active' : ''}${isVisible || showTitle ? ' show' : ''}`}>
                  <a href="#projects" name={t} onClick={assignTag}>
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
