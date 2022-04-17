import React from "react";

import styles from "./Button.module.css";

const Button2 = (props) => {
  return (
    <button type="button" className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button2;
