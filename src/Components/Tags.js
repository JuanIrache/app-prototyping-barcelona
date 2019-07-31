import React, { useContext } from 'react';
import TagContext from '../contexts/TagContext';
import GalleryContext from '../contexts/GalleryContext';
import '../style/Tags.scss';

const Projects = ({ toggleTag }) => {
  const { tag, tags, assignTag } = useContext(TagContext);
  // const { setGallery, setGalleryIndex } = useContext(GalleryContext);

  // const handleToggleTag = e => {
  //   setGallery({ visible: false, title: '', selected: 0 });
  //   setGalleryIndex(0);
  //   toggleTag(e);
  // };
  return (
    <div className="Tags">
      <div className="container">
        {tags.map(t => (
          <h4 key={t} className={`tag${t === tag ? ' active' : ''}`}>
            <a href="#projects" name={t} onClick={assignTag}>
              {t}
            </a>
          </h4>
        ))}
      </div>
      <p className="separator">
        Filter by tag or{' '}
        <a href="#projects" onClick={() => assignTag('')}>
          see all projects
        </a>
      </p>
    </div>
  );
};

export default Projects;
