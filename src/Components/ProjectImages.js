import React, { useContext, useState, useEffect } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import '../style/ProjectImages.scss';

const ProjectImages = ({ project, galleryImgs }) => {
  const { setGallery, gallery } = useContext(GalleryContext);
  const regex = new RegExp(`/${project.id}\\d+\\.`);
  const [images, setImages] = useState(galleryImgs.filter(img => regex.test(img)).map(src => ({ src, loaded: false })));

  const handleSetGallery = idx => {
    setGallery({ ...gallery, selected: idx, visible: true });
  };

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.onload = () => setImages(images.map(image => (img.naturalWidth !== 0 ? { ...image, loaded: true } : image)));
      img.src = image.src;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ProjectImages">
      {!!images.length &&
        images
          .slice(1)
          .concat(images[0])
          .map((img, idx) => (
            <span
              href="#!"
              className={`image${img.loaded ? ' visible' : ''}`}
              key={img.src}
              alt={`${project.title} screenshot`}
              style={{ backgroundImage: `url(${img.src})` }}
              onClick={() => handleSetGallery(idx)}
            />
          ))}
    </div>
  );
};

export default ProjectImages;
