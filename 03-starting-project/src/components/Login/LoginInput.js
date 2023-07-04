import React, { useRef, useImperativeHandle } from "react";
import classes from "./LoginInput.module.css";

const LoginInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, ()=> {
    return {
        focus: activate
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.inputState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.inputState.value}
        onChange={props.emailChangeHandler}
        onBlur={props.validateEmailHandler}
      />
    </div>
  );
});

export default LoginInput;
