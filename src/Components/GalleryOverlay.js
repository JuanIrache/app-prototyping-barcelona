import React, { useEffect } from 'react';
import ReactSwipe from 'react-swipe';
import GallerySlide from './GallerySlide';
import '../style/GalleryOverlay.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const GalleryOverlay = ({ visible, index, title, setGallery, projects }) => {
  const closeGallery = () => {
    setGallery({ visible: false, index, title });
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

  return (
    <div className={`GalleryOverlay${visible ? ' visible' : ''}`} onClick={closeGallery}>
      <ReactSwipe className="caroussel" ref={el => (reactSwipeEl = el)}>
        {projectImages.map((img, i) => (
          <div key={img}>
            <GallerySlide img={img} images={projectImages.length} i={i} goRight={goRight} goLeft={goLeft} title={title} />
          </div>
        ))}
      </ReactSwipe>
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default GalleryOverlay;
