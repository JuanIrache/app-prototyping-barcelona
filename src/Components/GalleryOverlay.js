import React, { useEffect, useContext } from 'react';
import ReactSwipe from 'react-swipe';
import GallerySlide from './GallerySlide';
import ProjectContext from '../contexts/ProjectContext';
import GalleryContext from '../contexts/GalleryContext';
import '../style/GalleryOverlay.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const GalleryOverlay = () => {
  const { gallery, setGallery, galleryIndex } = useContext(GalleryContext);
  const { projects } = useContext(ProjectContext);
  const { visible, title, selected } = gallery;

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

  const projectImages = findImages(galleryIndex);

  const goLeft = e => {
    e.stopPropagation();
    reactSwipeEl.prev();
  };

  const goRight = e => {
    e.stopPropagation();
    reactSwipeEl.next();
  };

  return (
    <div className={`GalleryOverlay${visible ? ' visible' : ''}`} onClick={closeGallery}>
      <ReactSwipe ref={el => (reactSwipeEl = el)} swipeOptions={{ startSlide: selected, continuous: false }}>
        {projectImages
          .slice(1)
          .concat(projectImages[0])
          .map((img, i) => (
            <div key={img} className="eachSlide">
              <GallerySlide img={img} images={projectImages.length} i={i} goRight={goRight} goLeft={goLeft} title={title} />
            </div>
          ))}
      </ReactSwipe>
    </div>
  );
};

export default GalleryOverlay;
