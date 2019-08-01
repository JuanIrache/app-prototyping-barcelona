import React, { useContext, useState, useEffect } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import '../style/ProjectImages.scss';

const ProjectImages = ({ project, galleryImgs, title }) => {
  const { setGallery, gallery } = useContext(GalleryContext);
  const regex = new RegExp(`/${project.id}\\d+\\.`);
  const [images, setImages] = useState(
    galleryImgs
      .filter(img => regex.test(img))
      .map(src => {
        const img = new Image();
        img.src = src;
        return { src, img, loaded: img.naturalWidth !== 0 };
      })
  );

  const handleSetGallery = idx => {
    // setGallery({ ...gallery, selected: 1 });
    // setImmediate(() => {
    setGallery({ ...gallery, selected: idx, visible: true });
    // });
  };

  useEffect(() => {
    const newImages = [];
    let changes = false;
    images.forEach(image => {
      if (image.loaded) newImages.push(image);
      else if (image.img.naturalWidth !== 0) {
        changes = true;
        newImages.push({ src: image.src, loaded: true });
      } else newImages.push(image);
    });
    if (changes) setImages(newImages);
  }, [images]);

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
              alt={`${title} screenshot`}
              style={{ backgroundImage: `url(${img.src})` }}
              onClick={() => handleSetGallery(idx)}
            />
          ))}
    </div>
  );
};

export default ProjectImages;
