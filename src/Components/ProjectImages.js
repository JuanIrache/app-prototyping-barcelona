import React from 'react';
import '../style/ProjectImages.scss';

const ProjectImages = ({ images, title, i }) =>
  !!images && !!images.length ? (
    <div className="ProjectImages">
      {images
        .slice(1)
        .concat(images[0])
        .map(img => (
          <span
            className="image"
            key={img}
            alt={`${title} screenshot`}
            style={i < 2 ? { backgroundImage: `url(${img})` } : {}}
            data-background={i > 1 ? `url(${img})` : ''}
          />
        ))}
    </div>
  ) : (
    <div className="ProjectImages">
      <span />
    </div>
  );

export default ProjectImages;
