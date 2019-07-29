import React, { useEffect, Fragment } from 'react';
import '../style/GalleryOverlay.scss';

const importAll = r => r.keys().map(r);
const ctxt = require.context(`../media/`, false, /\.(png|jpe?g|svg)$/i);
const images = importAll(ctxt);

const GalleryOverlay = ({ visible, src, title, setGallery }) => {
  const closeGallery = () => {
    setGallery({ visible: false, src, title });
  };

  useEffect(() => {
    const fixed = document.querySelector('.GalleryOverlay');
    fixed.addEventListener('touchmove', e => e.preventDefault(), false);
  }, []);

  return (
    <div className={`GalleryOverlay${visible ? ' visible' : ''}`} onClick={closeGallery}>
      <div className="slider">
        {true ? (
          <a href="#projects">
            <i className="fas fa-chevron-left" onClick={null} title="Previous project" />
          </a>
        ) : (
          <i className="fas fa-chevron-left hidden" />
        )}
        <img src={images[0]} alt={title + ' image'} onClick={e => e.stopPropagation()} />
        {true ? (
          <a href="#projects">
            <i className="fas fa-chevron-right" onClick={null} title="Next project" />
          </a>
        ) : (
          <i className="fas fa-chevron-right hidden" />
        )}
      </div>
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default GalleryOverlay;
