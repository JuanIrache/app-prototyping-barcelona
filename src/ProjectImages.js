import React from 'react';
import './ProjectImages.scss';

const ProjectImages = ({ images, title }) =>
  !!images && !!images.length ? (
    <div className="ProjectImages">
      {images
        .slice(1)
        .concat(images[0])
        .map(i => (
          <span key={i} style={{ backgroundImage: `url(${i})` }} alt={`${title} screenshot`} />
        ))}
    </div>
  ) : (
    <div className="ProjectImages">
      <span />
    </div>
  );

export default ProjectImages;
