import React from "react";
import BackToTop from "react-back-to-top-button";
import styles from "./BackToTopButton.module.css";

const style = {
  fontSize: "1.25rem",
  backgroundColor: "rgb(234, 88, 79)",
  color: "#ffffff",
};

// Fix appearance for mobile devices
const BackToTopButton = ({ showOnScrollUp = false, ...rest }) => {
  return (
    <div className={styles.root}>
      <BackToTop style={style} showOnScrollUp={showOnScrollUp} {...rest} />
    </div>
  );
};

export default BackToTopButton;
