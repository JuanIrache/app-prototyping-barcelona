import React from 'react';
import '../style/ProjectImages.scss';

const ProjectImages = ({ images, title, i }) => {
  const preLoad = images && images.length && i < 2;
  if (preLoad) {
    const img = new Image();
    img.onload = () => {
      document.querySelectorAll(`#image-${i}`).forEach(e => e.classList.add('visible'));
    }
    img.src = images[i];
  }

  return !!images && !!images.length ? (
    <div className="ProjectImages">
      {images
        .slice(1)
        .concat(images[0])
        .map(img => (
          <span
            className={`image${!preLoad ? ' visible':''}`}
            id={`image-${i}`}
            key={img}
            alt={`${title} screenshot`}
            style={preLoad ? { backgroundImage: `url(${img})` } : {}}
            data-background={i>1 ? `url(${img})` : ''}
          />
        ))}
    </div>
  ) : (
    <div className="ProjectImages">
      <span />
    </div>
  )};

export default ProjectImages;
