import React, { memo } from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectDescription from './ProjectDescription';
import ProjectImages from './ProjectImages';
import '../style/Project.scss';

const Project = props => {
  const { project, setVideo, images, i, projects } = props;
  const existsLeft = i > 0;
  const existsRight = i + 1 < projects;
  return (
    <div className="Project" id={`Project-${i}`}>
      <ProjectTitle {...props} existsLeft={existsLeft} existsRight={existsRight} />
      <ProjectDescription project={project} setVideo={setVideo} />
      <ProjectImages images={images} title={project.title} i={i} />
    </div>
  );
};

export default memo(Project);
