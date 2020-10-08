import React from "react";
import styles from "./toolbar.module.css";

const toolbarToggleButton = props => (
  <button className={`ham ${styles.ham}`} onClick={props.click} onKeyPress={props.click} aria-label="Toggle Drawable Menu">
    <div className={`ham_line ${styles.ham_line}`} />
    <div className={`ham_line ${styles.ham_line}`} />
    <div className={`ham_line ${styles.ham_line}`} />
  </button>
);

export default toolbarToggleButton;