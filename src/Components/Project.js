import React, { memo, useContext } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImages from './ProjectImages';
import SlideContext from '../contexts/SlideContext';
import '../style/Project.scss';

const Project = props => {
  const { project, i } = props;

  const { slide } = useContext(SlideContext);

  const load = Math.abs(slide - i) < 2;

  return load ? (
    <div className="Project">
      <ProjectTitle {...props} />
      <ProjectDescription project={project} />
      <ProjectImages {...props} />
    </div>
  ) : (
    <div className="Project" />
  );
};

export default memo(Project);
