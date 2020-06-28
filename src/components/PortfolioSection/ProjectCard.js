import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ projectContent, className }) => {
  const {
    projectName,
    projectSummary,
    externalLink,
    thumbnail,
  } = projectContent;

  return (
    <div className={className}>
      <div className={styles.projectCardImgContainer}>
        <img
          className={styles.projectCardImg}
          src={`assets/images/${thumbnail}`}
          alt="messenger-app"
        ></img>
      </div>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <h3>{projectName}</h3>
        <p>{projectSummary}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
