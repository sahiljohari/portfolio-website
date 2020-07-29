import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ projectContent, className }) => {
  const {
    projectName,
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
      <div className={styles.projectCardDescription}>
        <h4>{projectName}</h4>
        <a className={styles.buttonGithub} href={externalLink} target="_blank" rel="noopener noreferrer">
          <i className={`fab fa-github ${styles.githubIcon}`}></i>View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
