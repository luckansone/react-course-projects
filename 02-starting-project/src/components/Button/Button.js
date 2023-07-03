import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClickButton ? props.onClickButton : function(){return false;}}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
