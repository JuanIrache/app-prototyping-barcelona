import React from 'react';
import '../style/GallerySlide.scss';

const GallerySlide = ({ img, images, i, goLeft, goRight, title }) => {
  return (
    <div className="GallerySlide">
      {i > 0 ? (
        <a href="#!">
          <i className="fas fa-chevron-left" onClick={goLeft} title="Previous project" />
        </a>
      ) : (
        <i className="fas fa-chevron-left hidden" />
      )}

      <img src={img} alt={title + ' image'} onClick={e => e.stopPropagation()} />
      {i + 1 < images ? (
        <a href="#!">
          <i className="fas fa-chevron-right" onClick={goRight} title="Next project" />
        </a>
      ) : (
        <i className="fas fa-chevron-right hidden" />
      )}
    </div>
  );
};

export default GallerySlide;
