import React from "react";
import styles from "./Card.module.css";

const Card = ({ displayImg, title, description, externalLink, demoLink }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={`assets/images/${displayImg}`}
          alt="messenger-app"
        ></img>
      </div>
      <div className={styles.cardDescription}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.summary}>{description}</p>
      </div>
      <div className={styles.externalLinkContainer}>
        {demoLink && (
          <a
            className={styles.externalLinkBtn}
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fas fa-eye ${styles.btnIcon}`}></i>
          </a>
        )}
        {externalLink && (
          <a
            className={styles.externalLinkBtn}
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`fab fa-github ${styles.btnIcon}`}></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
