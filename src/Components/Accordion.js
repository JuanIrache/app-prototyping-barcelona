import React, { useContext } from 'react';
import AccordionElt from './AccordionElt';
import ProjectContext from '../contexts/ProjectContext';
import '../style/Accordion.scss';

const importAll = r => r.keys().map(r);
let ctxt = require.context(`../media/headers/`, false, /\.(png|jpe?g|svg)$/i);
const headerImgs = importAll(ctxt);

const Accordion = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="Accordion" id="accordion">
      {projects.map((project, i) => (
        <AccordionElt key={project.id} project={project} headerImgs={headerImgs} i={i} />
      ))}
    </div>
  );
};

export default Accordion;
