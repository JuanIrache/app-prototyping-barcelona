import React, { useContext } from 'react';
import AccordionElt from './AccordionElt';
import ProjectContext from '../contexts/ProjectContext';
import SlideContext from '../contexts/SlideContext';
import '../style/Accordion.scss';

const importAll = r => r.keys().map(r);
let ctxt = require.context(
  `../media/accordion/`,
  false,
  /\.(gif|png|jpe?g|svg)$/i
);
const accordionImgs = importAll(ctxt);

const Accordion = () => {
  const { projects } = useContext(ProjectContext);
  const { slide } = useContext(SlideContext);
  return (
    <div className="Accordion" id="accordion">
      {projects.map(
        (project, i) =>
          slide !== i && (
            <AccordionElt
              key={project.id}
              project={project}
              accordionImgs={accordionImgs}
              i={i}
            />
          )
      )}
    </div>
  );
};

export default Accordion;
