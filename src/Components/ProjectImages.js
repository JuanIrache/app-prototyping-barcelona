import React from 'react';
import '../style/ProjectImages.scss';

const ProjectImages = ({ images, title, i, softSetGallery }) => {
  const preLoad = images && images.length && i < 2;
  if (preLoad) {
    const img = new Image();
    img.onload = () => {
      document.querySelectorAll(`#image-${i}`).forEach(e => e.classList.add('visible'));
    };
    img.src = images[i];
  }

  const handleSetGallery = idx => {
    softSetGallery({ visible: true, selected: idx });
  };

  return !!images && !!images.length ? (
    <div className="ProjectImages">
      {images
        .slice(1)
        .concat(images[0])
        .map((img, idx) => (
          <span
            href="#!"
            className={`image${!preLoad ? ' visible' : ''}`}
            id={`image-${i}`}
            key={img}
            alt={`${title} screenshot`}
            style={preLoad ? { backgroundImage: `url(${img})` } : {}}
            data-background={i > 1 ? `url(${img})` : ''}
            onClick={() => handleSetGallery(idx)}
          />
        ))}
    </div>
  ) : (
    <div className="ProjectImages">
      <span />
    </div>
  );
};

export default ProjectImages;
