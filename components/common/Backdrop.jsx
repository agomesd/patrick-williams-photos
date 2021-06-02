import React from "react";

import styles from "../../styles/Backdrop.module.css";

const Backdrop = ({ handleClose }) => {
  return <div className={styles.backdrop} onClick={handleClose}></div>;
};

export default Backdrop;
