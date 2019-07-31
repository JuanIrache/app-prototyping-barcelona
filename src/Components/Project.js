import React, { memo } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImages from './ProjectImages';
import '../style/Project.scss';

const Project = props => {
  const { project } = props;
  return (
    <div className="Project">
      <ProjectTitle {...props} />
      <ProjectDescription project={project} />
      <ProjectImages {...props} />
    </div>
  );
};

export default memo(Project);
