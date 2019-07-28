import React, { memo } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImages from './ProjectImages';
import './ProjectDetails.scss';

const ProjectDetails = ({ project, projects, images, changeProject, selected, transition, i, getValidIndex }) => {
  const existsLeft = selected > 0;
  const existsRight = selected < projects - 1;

  const position = () => {
    if (selected === i) {
      if (transition > 0) return 'left transitioning';
      if (transition < 0) return 'right transitioning';
      return 'center';
    }

    if (existsLeft && selected === getValidIndex(i + 1)) return transition < 0 ? 'center transitioning' : 'left';
    if (existsRight && selected === getValidIndex(i - 1)) return transition > 0 ? 'center transitioning' : 'right';
  };

  return (
    !!position() && (
      <div className={`ProjectDetails ${position()}`}>
        <ProjectTitle {...{ images, existsLeft, existsRight, project, changeProject }} />
        <ProjectDescription project={project} />
        <ProjectImages images={images} title={project.title} />
      </div>
    )
  );
};

export default memo(ProjectDetails);
