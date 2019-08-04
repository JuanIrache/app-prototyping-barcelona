import React, { useEffect, useState, useContext } from 'react';
import SlideContext from '../contexts/SlideContext';
import ProjectContext from '../contexts/ProjectContext';
import '../style/AccordionElt.scss';

const findImage = (regex, images) => images.filter(img => regex.test(img))[0];

const AccordionElt = ({ project, headerImgs, i }) => {
  const { setSlide } = useContext(SlideContext);
  const { setInitial } = useContext(ProjectContext);

  const regex = new RegExp(`/${project.id}\\d+\\.`);

  const [image, setImage] = useState({ src: findImage(regex, headerImgs), loaded: false });

  const select = () => {
    setSlide(i);
    setInitial(i);
  };

  useEffect(() => {
    const imgLoaded = () => setImage({ ...image, loaded: true });
    const img = new Image();
    img.onload = imgLoaded;
    img.src = image.src;
    if (img.naturalWidth !== 0) imgLoaded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`AccordionElt${image.loaded ? ' visible' : ''}`} style={{ backgroundImage: `url(${image.src})` }} onClick={select}>
      <div className="wrapper">
        <a href="#projects">
          <h2>
            <span>{project.title}</span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default AccordionElt;
