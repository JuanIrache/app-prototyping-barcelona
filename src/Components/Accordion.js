import React, { useContext } from 'react';
import AccordionElt from './AccordionElt';
import ProjectContext from '../contexts/ProjectContext';
import '../style/Accordion.scss';

const importAll = r => r.keys().map(r);
let ctxt = require.context(`../media/accordion/`, false, /\.(png|jpe?g|svg)$/i);
const accordionImgs = importAll(ctxt);

const Accordion = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="Accordion" id="accordion">
      {projects.map((project, i) => (
        <AccordionElt key={project.id} project={project} accordionImgs={accordionImgs} i={i} />
      ))}
    </div>
  );
};

export default Accordion;
