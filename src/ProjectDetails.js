import React, { memo } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImages from './ProjectImages';
import './ProjectDetails.scss';

const ProjectDetails = ({ project, projects, images, i, goLeft, goRight }) => {
  const existsLeft = i > 0;
  const existsRight = i + 1 < projects;
  return (
    <div className="ProjectDetails">
      <ProjectTitle {...{ images, existsLeft, existsRight, project, goLeft, goRight }} />
      <ProjectDescription project={project} />
      <ProjectImages images={images} title={project.title} />
    </div>
  );
};

export default memo(ProjectDetails);
