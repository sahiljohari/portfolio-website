import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ projectContent, className }) => {
  const {
    projectName,
    projectSummary,
    externalLink,
    demoLink,
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
        <h4 className={styles.projectTitle}>{projectName}</h4>
        <p className={styles.projectSummary}>{projectSummary}</p>
      </div>
      {demoLink && (
        <a
          className={styles.buttonGithub}
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fas fa-eye ${styles.githubIcon}`}></i>
        </a>
      )}
      {externalLink && (
        <a
          className={styles.buttonGithub}
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`fab fa-github ${styles.githubIcon}`}></i>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
