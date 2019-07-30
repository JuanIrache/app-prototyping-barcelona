import React, { useEffect, useContext } from 'react';
import ReactSwipe from 'react-swipe';
import GallerySlide from './GallerySlide';
import ProjectContext from '../contexts/ProjectContext';
import '../style/GalleryOverlay.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const GalleryOverlay = ({ gallery, index, setGallery }) => {
  const { visible, title, selected } = gallery;
  const { projects } = useContext(ProjectContext);

  const closeGallery = () => {
    setGallery({ ...gallery, visible: false });
  };

  const findImages = index => {
    return images.filter(i => {
      const regex = new RegExp(`/${projects[index].id}\\d+\\.`);
      return regex.test(i);
    });
  };

  let reactSwipeEl;

  useEffect(() => {
    const fixed = document.querySelector('.GalleryOverlay');
    fixed.addEventListener('touchmove', e => e.preventDefault(), false);
  }, []);

  const projectImages = findImages(index);

  const goLeft = e => {
    e.stopPropagation();
    reactSwipeEl.prev();
  };

  const goRight = e => {
    e.stopPropagation();
    reactSwipeEl.next();
  };

  const style = {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative',
      height: '100%'
    },
    wrapper: {
      overflow: 'hidden',
      position: 'relative',
      height: '100%'
    },
    child: {
      float: 'left',
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform',
      height: '100%'
    }
  };

  return (
    <div className={`GalleryOverlay${visible ? ' visible' : ''}`} onClick={closeGallery}>
      <ReactSwipe ref={el => (reactSwipeEl = el)} style={style} swipeOptions={{ startSlide: selected, continuous: false }}>
        {projectImages
          .slice(1)
          .concat(projectImages[0])
          .map((img, i) => (
            <div key={img}>
              <GallerySlide img={img} images={projectImages.length} i={i} goRight={goRight} goLeft={goLeft} title={title} />
            </div>
          ))}
      </ReactSwipe>
    </div>
  );
};

export default GalleryOverlay;
