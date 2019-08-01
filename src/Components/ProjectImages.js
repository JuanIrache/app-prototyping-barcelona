import React, { useContext, useState, useEffect } from 'react';
import GalleryContext from '../contexts/GalleryContext';
import '../style/ProjectImages.scss';

const ProjectImages = ({ project, galleryImgs, title }) => {
  const { setGallery, gallery } = useContext(GalleryContext);
  const [images, setImages] = useState([]);

  const handleSetGallery = idx => {
    setGallery({ ...gallery, selected: 1 });
    setImmediate(() => {
      setGallery({ ...gallery, selected: idx, title, visible: true });
    });
  };

  useEffect(() => {
    const regex = new RegExp(`/${project.id}\\d+\\.`);
    setImages(
      galleryImgs
        .filter(img => regex.test(img))
        .map((src, idx) => {
          const img = new Image();
          const show = () => document.querySelector(`.image-${project.id}-${idx}`).classList.add('visible');
          img.onload = show;
          setImmediate(() => {
            img.src = src;
          });
          // if (img.naturalWidth !== 0) show();
          return { src, loaded: false };
        })
    );
  }, []);

  console.log('rendering', project.id);

  // useEffect(,[images]);

  return (
    <div className="ProjectImages">
      {images.length &&
        images
          .slice(1)
          .concat(images[0])
          .map((img, idx) => (
            <span
              href="#!"
              className={`image image-${project.id}-${idx}`}
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
