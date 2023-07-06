import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};

const OverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCloseModal = {props.onCloseModal} />,
        document.getElementById("backdrop-wrapper")
      )}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("modal-wrapper")
      )}
    </Fragment>
  );
};

export default Modal;
