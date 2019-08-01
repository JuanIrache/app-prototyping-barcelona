import React, { useEffect, useContext, memo } from 'react';
import ReactSwipe from 'react-swipe';
import GallerySlide from './GallerySlide';
import GalleryContext from '../contexts/GalleryContext';
import '../style/GalleryOverlay.scss';

const GalleryOverlay = () => {
  const { gallery, setGallery } = useContext(GalleryContext);
  const { visible, title, selected, images } = gallery;

  const closeGallery = () => {
    setGallery({ ...gallery, visible: false });
  };

  let reactSwipeEl;

  const goLeft = e => {
    e.stopPropagation();
    reactSwipeEl.prev();
  };

  const goRight = e => {
    e.stopPropagation();
    reactSwipeEl.next();
  };

  const preventMove = e => e.preventDefault();

  return (
    <div className={`GalleryOverlay${visible ? ' visible' : ''}`} onClick={closeGallery} onTouchMove={preventMove}>
      <ReactSwipe ref={el => (reactSwipeEl = el)} swipeOptions={{ startSlide: selected || 0, continuous: false }}>
        {images
          .slice(1)
          .concat(images[0])
          .map((img, i) => (
            <div key={img} className="eachSlide">
              <GallerySlide img={img} images={images.length} i={i} goRight={goRight} goLeft={goLeft} title={title} />
            </div>
          ))}
      </ReactSwipe>
    </div>
  );
};

export default memo(GalleryOverlay);
