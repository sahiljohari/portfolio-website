import React from "react";

const ProjectCard = ({ projectContent, className }) => {
  const { projectName, projectSummary, externalLink } = projectContent;

  return (
    <div className={className}>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <h3>{projectName}</h3>
        <p>{projectSummary}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
