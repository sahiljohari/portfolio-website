import React from "react";
import styles from "./ArrowButton.module.css";
import cx from "classnames";

const ArrowButton = () => {
  return (
    <div className={styles.centerCon}>
      <div className={styles.round}>
        <div id={styles.cta}>
          <span
            className={cx(styles.arrow, styles.primera, styles.next)}
          ></span>
          <span
            className={cx(styles.arrow, styles.segunda, styles.next)}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ArrowButton;
